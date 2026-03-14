import { NextResponse } from "next/server";
import crypto from "node:crypto";

import {
  getServerVaultProductById,
  type ServerVaultCatalogItem,
} from "@/server/vault/catalog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeProductIds(productIds: unknown): string[] {
  if (!Array.isArray(productIds)) return [];
  return [
    ...new Set(
      productIds.filter((item): item is string => typeof item === "string"),
    ),
  ];
}

function getCatalogProductsOrThrow(
  productIds: string[],
): ServerVaultCatalogItem[] {
  const products = productIds.map((id) => getServerVaultProductById(id));

  if (products.some((item) => !item)) {
    throw new Error("One or more selected products are invalid.");
  }

  return products as ServerVaultCatalogItem[];
}

function calculateSubtotal(products: ServerVaultCatalogItem[]) {
  return products.reduce((sum, product) => sum + product.price, 0);
}

function createReference() {
  const random = crypto.randomBytes(6).toString("hex");
  return `vault-paystack-${Date.now()}-${random}`;
}

function getAppUrl() {
  return process.env.APP_URL?.replace(/\/$/, "") || "http://localhost:3000";
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "paystack-initialize",
  });
}

export async function POST(request: Request) {
  try {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { error: "Paystack secret key is not configured." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const productIds = normalizeProductIds(body.productIds);

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid payment email is required." },
        { status: 400 },
      );
    }

    if (productIds.length === 0) {
      return NextResponse.json(
        { error: "No products selected for checkout." },
        { status: 400 },
      );
    }

    const products = getCatalogProductsOrThrow(productIds);
    const subtotalAmount = calculateSubtotal(products);
    const reference = createReference();

    const callbackUrl =
      process.env.PAYSTACK_SUCCESS_URL ||
      `${getAppUrl()}/vault/success/paystack`;

    const { prisma } = await import("@/lib/prisma");

    const order = await prisma.order.create({
      data: {
        reference,
        email,
        currency: "NGN",
        subtotalAmount,
        status: "PENDING",
        provider: "PAYSTACK",
        items: {
          create: products.map((product) => ({
            productId: product.id,
            productSlug: product.slug,
            productTitle: product.title,
            unitAmount: product.price,
            currency: product.currency,
          })),
        },
      },
    });

    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: subtotalAmount * 100,
          currency: "NGN",
          reference,
          callback_url: callbackUrl,
          metadata: {
            orderId: order.id,
            orderReference: reference,
            email,
            productIds,
            source: "octalve-vault",
          },
        }),
      },
    );

    const paystackJson = await paystackResponse.json();

    if (
      !paystackResponse.ok ||
      !paystackJson?.status ||
      !paystackJson?.data?.authorization_url
    ) {
      await prisma.order.update({
        where: { id: order.id },
        data: { status: "FAILED" },
      });

      return NextResponse.json(
        {
          error:
            paystackJson?.message || "Unable to initialize Paystack payment.",
        },
        { status: 500 },
      );
    }

    await prisma.paymentAttempt.create({
      data: {
        orderId: order.id,
        provider: "PAYSTACK",
        providerReference: reference,
        amount: subtotalAmount,
        currency: "NGN",
        status: "initialized",
        authorizationUrl: paystackJson.data.authorization_url,
        accessCode: paystackJson.data.access_code ?? null,
        rawInitialize: paystackJson,
      },
    });

    await prisma.order.update({
      where: { id: order.id },
      data: { status: "INITIALIZED" },
    });

    return NextResponse.json({
      authorizationUrl: paystackJson.data.authorization_url,
      reference,
      orderId: order.id,
    });
  } catch (error) {
    console.error("Paystack initialize error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Paystack initialization failed.",
      },
      { status: 500 },
    );
  }
}
