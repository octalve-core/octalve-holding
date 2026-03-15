import crypto from "node:crypto";
import { Resend } from "resend";

import { prisma } from "@/lib/prisma";

function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function createOtpCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function createMagicToken() {
  return crypto.randomBytes(32).toString("hex");
}

function getAppUrl() {
  return process.env.APP_URL?.replace(/\/$/, "") || "http://localhost:3000";
}

function getExpiryDate() {
  return new Date(Date.now() + 15 * 60 * 1000);
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function createDownloadAccessChallenge(args: {
  grantId: string;
  email: string;
}) {
  const otpCode = createOtpCode();
  const magicToken = createMagicToken();
  const expiresAt = getExpiryDate();

  await prisma.downloadAccessChallenge.create({
    data: {
      grantId: args.grantId,
      email: args.email.toLowerCase(),
      otpCodeHash: sha256(otpCode),
      magicTokenHash: sha256(magicToken),
      expiresAt,
    },
  });

  return {
    otpCode,
    magicToken,
    expiresAt,
  };
}

export async function sendPendingGrantEmails(orderId: string) {
  const resend = getResendClient();
  const from = process.env.RESEND_FROM_EMAIL;
  const appUrl = getAppUrl();

  if (!resend || !from) {
    console.warn(
      "Grant email sending skipped: RESEND_API_KEY or RESEND_FROM_EMAIL is missing.",
    );
    return { sent: 0, skipped: true };
  }

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      items: {
        include: {
          downloadGrant: true,
        },
      },
    },
  });

  if (!order) {
    throw new Error("Order not found for email delivery.");
  }

  let sent = 0;

  for (const item of order.items) {
    if (item.deliveryStatus !== "PENDING" || !item.downloadGrant) {
      continue;
    }

    const challenge = await createDownloadAccessChallenge({
      grantId: item.downloadGrant.id,
      email: order.email,
    });

    const verifyUrl = `${appUrl}/vault/downloads/verify?grant=${encodeURIComponent(
      item.downloadGrant.id,
    )}&token=${encodeURIComponent(challenge.magicToken)}`;

    await resend.emails.send({
      from,
      to: order.email,
      subject: `${item.productTitle} is ready for download`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2 style="margin-bottom:8px;">Your download is ready</h2>
          <p><strong>Product:</strong> ${item.productTitle}</p>
          <p>Use either of the two secure options below:</p>

          <p>
            <a href="${verifyUrl}" style="display:inline-block;background:#0A84FF;color:#fff;text-decoration:none;padding:12px 18px;border-radius:999px;">
              Verify with magic link
            </a>
          </p>

          <p><strong>OTP code:</strong> ${challenge.otpCode}</p>
          <p>This code expires at ${challenge.expiresAt.toUTCString()}.</p>

          <p>
            Open this page to complete verification:
            <br />
            <a href="${verifyUrl}">${verifyUrl}</a>
          </p>

          <p style="color:#475569;font-size:14px;">
            This access is tied to ${order.email}. After verification, you’ll see your secured download page.
          </p>
        </div>
      `,
    });

    await prisma.orderItem.update({
      where: { id: item.id },
      data: {
        deliveryStatus: "EMAILED",
      },
    });

    sent += 1;
  }

  return { sent, skipped: false };
}

export async function verifyMagicLink(args: {
  grantId: string;
  token: string;
}) {
  const tokenHash = sha256(args.token);

  const challenge = await prisma.downloadAccessChallenge.findFirst({
    where: {
      grantId: args.grantId,
      magicTokenHash: tokenHash,
      usedAt: null,
      expiresAt: {
        gt: new Date(),
      },
    },
    include: {
      grant: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!challenge) {
    return null;
  }

  await prisma.downloadAccessChallenge.update({
    where: { id: challenge.id },
    data: {
      usedAt: new Date(),
    },
  });

  return challenge.grant;
}

export async function verifyOtpCode(args: {
  grantId: string;
  email: string;
  otp: string;
}) {
  const otpHash = sha256(args.otp);

  const challenge = await prisma.downloadAccessChallenge.findFirst({
    where: {
      grantId: args.grantId,
      email: args.email.toLowerCase(),
      otpCodeHash: otpHash,
      usedAt: null,
      expiresAt: {
        gt: new Date(),
      },
    },
    include: {
      grant: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!challenge) {
    return null;
  }

  await prisma.downloadAccessChallenge.update({
    where: { id: challenge.id },
    data: {
      usedAt: new Date(),
    },
  });

  return challenge.grant;
}
