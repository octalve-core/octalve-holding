import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Holding-only retirement of legacy Vault routes.
 * Legacy implementation stays in Git. New purchases are always disabled here.
 * Old customer fulfillment can be temporarily enabled only after an explicit
 * review by setting OCTALVE_LEGACY_VAULT_FULFILLMENT=enabled on the server.
 * Existing signed provider webhooks are intentionally not intercepted here;
 * reconcile outstanding orders and remove provider webhook registrations
 * before disabling them at the provider.
 */
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const existingCustomerFulfillment =
    process.env.OCTALVE_LEGACY_VAULT_FULFILLMENT === "enabled";

  if (path === "/vault" || path.startsWith("/vault/")) {
    if (
      existingCustomerFulfillment &&
      path.startsWith("/vault/downloads/")
    ) {
      return NextResponse.next();
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      return Response.json(
        { error: "This Vault service has moved to https://vault.octalve.com." },
        { status: 410, headers: { "Cache-Control": "no-store" } },
      );
    }
    return NextResponse.redirect(new URL("/models/vault", request.url), 307);
  }

  if (path.startsWith("/api/payments/")) {
    // Never re-enable creation of new orders on the Holding deployment.
    if (path.endsWith("/initialize")) {
      return Response.json(
        { error: "Vault checkout has moved to https://vault.octalve.com." },
        { status: 410, headers: { "Cache-Control": "no-store" } },
      );
    }
    // Optional temporary allowance to reconcile already-initialized attempts.
    if (existingCustomerFulfillment && path.endsWith("/verify")) {
      return NextResponse.next();
    }
  }

  if (path.startsWith("/api/vault/") && existingCustomerFulfillment) {
    return NextResponse.next();
  }

  return Response.json(
    { error: "The legacy Vault service is no longer available on Holding." },
    { status: 410, headers: { "Cache-Control": "no-store" } },
  );
}

export const config = {
  matcher: ["/vault/:path*", "/api/vault/:path*", "/api/payments/:path*"],
};
