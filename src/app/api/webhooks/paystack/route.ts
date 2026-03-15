import crypto from "node:crypto";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { finalizeSuccessfulPayment } from "@/server/vault/secure-fulfillment";
import { sendPendingGrantEmails } from "@/server/vault/download-delivery";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeCompare(a: string, b: string) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);

  if (aBuf.length !== bBuf.length) return false;

  return crypto.timingSafeEqual(aBuf, bBuf);
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "paystack-webhook",
    configured: true,
  });
}

export async function POST(request: Request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Paystack secret key is not configured." },
      { status: 500 },
    );
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-paystack-signature") ?? "";

  const expectedSignature = crypto
    .createHmac("sha512", secretKey)
    .update(rawBody)
    .digest("hex");

  const signatureValid = safeCompare(signature, expectedSignature);

  let payload: any = null;

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const reference =
    typeof payload?.data?.reference === "string"
      ? payload.data.reference
      : null;

  const attempt = reference
    ? await prisma.paymentAttempt.findUnique({
        where: { providerReference: reference },
        include: { order: true },
      })
    : null;

  await prisma.webhookEvent.create({
    data: {
      orderId: attempt?.orderId ?? undefined,
      provider: "PAYSTACK",
      eventType: typeof payload?.event === "string" ? payload.event : null,
      signatureValid,
      payload: payload as any,
    },
  });

  if (!signatureValid) {
    return NextResponse.json(
      { error: "Invalid webhook signature." },
      { status: 401 },
    );
  }

  if (payload?.event !== "charge.success" || !reference || !attempt) {
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const verifyResponse = await fetch(
    `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    },
  );

  const verifyJson = await verifyResponse.json();
  const data = verifyJson?.data;

  const paid =
    verifyResponse.ok &&
    verifyJson?.status === true &&
    data?.status === "success" &&
    data?.reference === reference &&
    data?.currency === attempt.currency &&
    Number(data?.amount) === attempt.amount * 100 &&
    (!data?.customer?.email ||
      String(data.customer.email).toLowerCase() ===
        attempt.order.email.toLowerCase());

  if (!paid) {
    return NextResponse.json(
      { received: true, verified: false },
      { status: 200 },
    );
  }

  await finalizeSuccessfulPayment({
    paymentAttemptId: attempt.id,
    providerTxId: data?.id ? String(data.id) : null,
    paidAt: data?.paid_at ? new Date(data.paid_at) : new Date(),
    rawVerify: verifyJson,
  });

  const result = await finalizeSuccessfulPayment({
    paymentAttemptId: attempt.id,
    providerTxId: data?.id ? String(data.id) : null,
    paidAt: data?.paid_at ? new Date(data.paid_at) : new Date(),
    rawVerify: verifyJson,
  });

  await sendPendingGrantEmails(result.orderId);

  await prisma.webhookEvent.updateMany({
    where: {
      provider: "PAYSTACK",
      orderId: attempt.orderId,
      processedAt: null,
    },
    data: {
      processedAt: new Date(),
    },
  });

  return NextResponse.json(
    { received: true, fulfilled: true },
    { status: 200 },
  );
}
