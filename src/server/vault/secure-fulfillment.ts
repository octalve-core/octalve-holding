import crypto from "node:crypto";

import { prisma } from "@/lib/prisma";

function createGrantToken() {
  return crypto.randomBytes(32).toString("hex");
}

function getGrantExpiryDate() {
  const now = Date.now();
  const days = 30;
  return new Date(now + days * 24 * 60 * 60 * 1000);
}

export async function finalizeSuccessfulPayment(args: {
  paymentAttemptId: string;
  providerTxId?: string | null;
  paidAt?: Date;
  rawVerify?: unknown;
}) {
  return prisma.$transaction(async (tx) => {
    const attempt = await tx.paymentAttempt.findUnique({
      where: { id: args.paymentAttemptId },
      include: {
        order: {
          include: {
            items: {
              include: {
                downloadGrant: true,
              },
            },
          },
        },
      },
    });

    if (!attempt) {
      throw new Error("Payment attempt not found.");
    }

    const paidAt = args.paidAt ?? attempt.order.paidAt ?? new Date();

    await tx.paymentAttempt.update({
      where: { id: attempt.id },
      data: {
        providerTxId: args.providerTxId ?? attempt.providerTxId ?? null,
        status: "success",
        rawVerify: (args.rawVerify as any) ?? attempt.rawVerify ?? undefined,
      },
    });

    const grants = [];

    for (const item of attempt.order.items) {
      const grant = await tx.downloadGrant.upsert({
        where: { orderItemId: item.id },
        update: {},
        create: {
          orderItemId: item.id,
          email: attempt.order.email,
          token: createGrantToken(),
          expiresAt: getGrantExpiryDate(),
        },
      });

      grants.push({
        id: grant.id,
        token: grant.token,
        email: grant.email,
        expiresAt: grant.expiresAt,
        orderItemId: item.id,
        productId: item.productId,
        productTitle: item.productTitle,
      });
    }

    await tx.order.update({
      where: { id: attempt.orderId },
      data: {
        status: "FULFILLED",
        paidAt,
        fulfilledAt: attempt.order.fulfilledAt ?? new Date(),
      },
    });

    return {
      orderId: attempt.orderId,
      email: attempt.order.email,
      reference: attempt.providerReference,
      grants,
    };
  });
}
