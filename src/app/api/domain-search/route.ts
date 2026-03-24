import { NextResponse } from "next/server";

const DOMAIN_API = {
  providerName: "replace-me",
  endpoint: "https://your-provider-endpoint-here",
  method: "POST" as "GET" | "POST",
  apiKey: process.env.DOMAIN_API_KEY ?? "",
  apiSecret: process.env.DOMAIN_API_SECRET ?? "",
  username: process.env.DOMAIN_API_USERNAME ?? "",
};

function normalizeDomain(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\s+/g, "");
}

async function checkDomainWithProvider(domain: string) {
  /**
   * Replace everything inside this function with your provider’s exact request.
   * Keep the credentials here on the server, not in the client component.
   */

  // Example placeholder response until you wire your API:
  return {
    ok: true,
    available: domain !== "taken.com",
    domain,
  };

  /**
   * Example pattern once your provider is ready:
   *
   * const response = await fetch(DOMAIN_API.endpoint, {
   *   method: DOMAIN_API.method,
   *   headers: {
   *     "Content-Type": "application/json",
   *     Authorization: `Bearer ${DOMAIN_API.apiKey}`,
   *   },
   *   body: JSON.stringify({ domain }),
   *   cache: "no-store",
   * });
   *
   * const raw = await response.json();
   *
   * return {
   *   ok: response.ok,
   *   available: Boolean(raw.available),
   *   domain,
   *   message: raw.message,
   * };
   */
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { domain?: string };
    const domain = normalizeDomain(body.domain ?? "");

    if (!domain) {
      return NextResponse.json(
        { ok: false, message: "Domain is required." },
        { status: 400 },
      );
    }

    const result = await checkDomainWithProvider(domain);

    return NextResponse.json(result, {
      status: result.ok ? 200 : 502,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to process the domain search right now." },
      { status: 500 },
    );
  }
}
