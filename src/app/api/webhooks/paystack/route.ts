import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "paystack-webhook",
    configured: false,
  });
}

export async function POST(request: Request) {
  const rawBody = await request.text();

  console.log("Paystack webhook received:", rawBody.slice(0, 200));

  return NextResponse.json(
    {
      received: true,
      provider: "paystack",
      configured: false,
    },
    { status: 200 },
  );
}
