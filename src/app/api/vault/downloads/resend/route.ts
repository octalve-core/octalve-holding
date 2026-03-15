import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { createDownloadAccessChallenge } from "@/server/vault/download-delivery";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getAppUrl() {
  return process.env.APP_URL?.replace(/\/$/, "") || "http://localhost:3000";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const grantId = String(formData.get("grantId") ?? "");

  const grant = await prisma.downloadGrant.findUnique({
    where: { id: grantId },
    include: {
      orderItem: true,
    },
  });

  if (!grant) {
    return NextResponse.redirect(
      new URL("/vault/downloads/verify?error=missing-grant", request.url),
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !from) {
    return NextResponse.redirect(
      new URL(
        `/vault/downloads/verify?grant=${encodeURIComponent(grantId)}&error=email-not-configured`,
        request.url,
      ),
    );
  }

  const challenge = await createDownloadAccessChallenge({
    grantId: grant.id,
    email: grant.email,
  });

  const verifyUrl = `${getAppUrl()}/vault/downloads/verify?grant=${encodeURIComponent(
    grant.id,
  )}&token=${encodeURIComponent(challenge.magicToken)}`;

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from,
    to: grant.email,
    subject: `${grant.orderItem.productTitle} verification code`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2>Your verification details</h2>
        <p><strong>Product:</strong> ${grant.orderItem.productTitle}</p>
        <p><strong>OTP code:</strong> ${challenge.otpCode}</p>
        <p>
          Or verify with this magic link:
          <br />
          <a href="${verifyUrl}">${verifyUrl}</a>
        </p>
      </div>
    `,
  });

  return NextResponse.redirect(
    new URL(
      `/vault/downloads/verify?grant=${encodeURIComponent(grantId)}&resent=1`,
      request.url,
    ),
  );
}
