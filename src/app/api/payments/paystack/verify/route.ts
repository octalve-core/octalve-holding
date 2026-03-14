import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { error: "Paystack secret key is not configured." },
        { status: 500 },
      );
    }

    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference")?.trim();

    if (!reference) {
      return NextResponse.json(
        { error: "Payment reference is required." },
        { status: 400 },
      );
    }

    const attempt = await prisma.paymentAttempt.findUnique({
      where: { providerReference: reference },
      include: { order: true },
    });

    if (!attempt || attempt.provider !== "PAYSTACK") {
      return NextResponse.json(
        { error: "Payment attempt not found." },
        { status: 404 },
      );
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

    await prisma.paymentAttempt.update({
      where: { id: attempt.id },
      data: {
        providerTxId: data?.id ? String(data.id) : null,
        status: data?.status || "unknown",
        rawVerify: verifyJson,
      },
    });

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
      return NextResponse.json({
        verified: false,
        status: data?.status || "pending",
        reference,
      });
    }

    await prisma.order.update({
      where: { id: attempt.orderId },
      data: {
        status: "PAID",
        paidAt: data?.paid_at ? new Date(data.paid_at) : new Date(),
      },
    });

    return NextResponse.json({
      verified: true,
      status: "success",
      reference,
      orderId: attempt.orderId,
    });
  } catch (error) {
    console.error("Paystack verify error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Paystack verification failed.",
      },
      { status: 500 },
    );
  }
}
