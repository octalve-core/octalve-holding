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

function isValidFlutterwaveWebhook(
  rawBody: string,
  request: Request,
  secretHash: string,
) {
  const currentSignature = request.headers.get("flutterwave-signature");

  if (currentSignature) {
    const expectedSignature = crypto
      .createHmac("sha256", secretHash)
      .update(rawBody)
      .digest("base64");

    return safeCompare(currentSignature, expectedSignature);
  }

  const legacySignature = request.headers.get("verif-hash");

  if (legacySignature) {
    return safeCompare(legacySignature, secretHash);
  }

  return false;
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "flutterwave-webhook",
    configured: true,
  });
}

export async function POST(request: Request) {
  const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;
  const webhookSecret = process.env.FLUTTERWAVE_WEBHOOK_SECRET_HASH;

  if (!secretKey || !webhookSecret) {
    return NextResponse.json(
      { error: "Flutterwave webhook configuration is incomplete." },
      { status: 500 },
    );
  }

  const rawBody = await request.text();
  const signatureValid = isValidFlutterwaveWebhook(
    rawBody,
    request,
    webhookSecret,
  );

  let payload: any = null;

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const txRef =
    typeof payload?.data?.tx_ref === "string"
      ? payload.data.tx_ref
      : typeof payload?.tx_ref === "string"
        ? payload.tx_ref
        : null;

  const attempt = txRef
    ? await prisma.paymentAttempt.findUnique({
        where: { providerReference: txRef },
        include: { order: true },
      })
    : null;

  await prisma.webhookEvent.create({
    data: {
      orderId: attempt?.orderId ?? undefined,
      provider: "FLUTTERWAVE",
      eventType:
        typeof payload?.event === "string"
          ? payload.event
          : typeof payload?.event_type === "string"
            ? payload.event_type
            : null,
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

  if (!txRef || !attempt) {
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const verifyResponse = await fetch(
    `https://api.flutterwave.com/v3/transactions/verify_by_reference?tx_ref=${encodeURIComponent(txRef)}`,
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
    verifyJson?.status === "success" &&
    data?.status === "successful" &&
    data?.tx_ref === txRef &&
    data?.currency === attempt.currency &&
    Number(data?.amount) === attempt.amount &&
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
    paidAt: data?.created_at ? new Date(data.created_at) : new Date(),
    rawVerify: verifyJson,
  });

  const result = await finalizeSuccessfulPayment({
    paymentAttemptId: attempt.id,
    providerTxId: data?.id ? String(data.id) : null,
    paidAt: data?.created_at ? new Date(data.created_at) : new Date(),
    rawVerify: verifyJson,
  });

  await sendPendingGrantEmails(result.orderId);

  await prisma.webhookEvent.updateMany({
    where: {
      provider: "FLUTTERWAVE",
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
