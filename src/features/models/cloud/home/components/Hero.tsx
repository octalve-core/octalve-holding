"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cloudConsoleLinks } from "../../cloud-console-links";

const BRAND = {
  red: "#E61525",
  blue: "#0064E0",
  green: "#29BE3E",
  orange: "#FC7E24",
};

/**
 * Change only this line to your real logo path.
 * Example:
 * "/assets/cloud-logo.svg"
 * "/assets/logo/cloud-logo.png"
 * "/images/cloud-logo.webp"
 */
const CLOUD_LOGO_SRC = "/assets/cloud-logo.svg";

const links = cloudConsoleLinks as Record<string, string | undefined>;

const QUICK_LINKS = [
  {
    label: "Web Hosting",
    href: links.webHosting ?? "/cloud/web-hosting",
  },
  {
    label: "Email",
    href: links.email ?? "/cloud/email",
  },
  {
    label: "SSL / Security",
    href: links.sslSecurity ?? "/cloud/ssl-security",
  },
  {
    label: "Server",
    href: links.server ?? "/cloud/server",
  },
  {
    label: "WordPress Hosting",
    href: links.wordpressHosting ?? "/cloud/wordpress-hosting",
  },
];

export default function HeroCloud() {
  const [domainQuery, setDomainQuery] = useState("");
  const [logoError, setLogoError] = useState(false);

  const normalizeDomain = (value: string) =>
    value
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/.*$/, "")
      .replace(/\s+/g, "");

  const handleDomainSearch = () => {
    const cleanDomain = normalizeDomain(domainQuery);
    if (!cleanDomain) return;

    const target = links.domainSearch ?? "/cloud/domain-registration";
    const separator = target.includes("?") ? "&" : "?";

    window.location.assign(
      `${target}${separator}domain=${encodeURIComponent(cleanDomain)}`,
    );
  };

  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[92vh] lg:px-8 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute animate-blob-slow"
          style={{
            width: "520px",
            height: "520px",
            top: "-120px",
            left: "-160px",
            background: `radial-gradient(circle, ${BRAND.red}28 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute animate-blob-slow"
          style={{
            width: "600px",
            height: "600px",
            top: "-180px",
            right: "-180px",
            background: `radial-gradient(circle, ${BRAND.blue}22 0%, transparent 70%)`,
            borderRadius: "50%",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute animate-blob-slow"
          style={{
            width: "480px",
            height: "480px",
            bottom: "-100px",
            left: "-100px",
            background: `radial-gradient(circle, ${BRAND.green}1e 0%, transparent 70%)`,
            borderRadius: "50%",
            animationDelay: "4s",
          }}
        />
        <div
          className="absolute animate-blob-slow"
          style={{
            width: "540px",
            height: "540px",
            bottom: "-140px",
            right: "-140px",
            background: `radial-gradient(circle, ${BRAND.orange}24 0%, transparent 70%)`,
            borderRadius: "50%",
            animationDelay: "6s",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "760px",
            height: "760px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.94) 10%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <div className="mb-5 sm:mb-6">
          {!logoError ? (
            <Image
              src={CLOUD_LOGO_SRC}
              alt="Octalve Cloud Logo"
              width={80}
              height={80}
              priority
              className="h-10 w-auto sm:h-12 lg:h-14"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div
              className="flex items-center justify-center gap-1.5"
              aria-hidden="true"
            >
              <span
                className="h-4 w-4 rounded-full sm:h-5 sm:w-5"
                style={{ background: BRAND.red }}
              />
              <span
                className="h-4 w-4 rounded-full sm:h-5 sm:w-5"
                style={{ background: BRAND.blue }}
              />
              <span
                className="h-4 w-4 rounded-full sm:h-5 sm:w-5"
                style={{ background: BRAND.green }}
              />
              <span
                className="h-4 w-4 rounded-full sm:h-5 sm:w-5"
                style={{ background: BRAND.orange }}
              />
            </div>
          )}
        </div>

        <div className="w-full max-w-[1100px]">
          <h1
            className="mx-auto font-medium tracking-[-0.04em] text-slate-950"
            style={{
              fontSize: "clamp(2rem, 4.4vw, 4.4rem)",
              lineHeight: 0.93,
            }}
          >
            <span className="hidden lg:block">
              Grow your ideas and business online
            </span>
            <span className="hidden lg:block whitespace-nowrap">
              - faster, smarter, for less.
            </span>

            <span className="block lg:hidden">
              Grow your ideas and business online — faster, smarter, for less.
            </span>
          </h1>
        </div>

        <p className="mt-4 max-w-2xl text-base text-slate-500 sm:text-lg lg:mt-5 lg:text-xl">
          Register domains. host. and Launch faster. Own your corner of the
          internet.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href={links.domainSearch ?? "/cloud/domain-registration"}
            className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 active:scale-95 sm:px-7"
            style={{ background: BRAND.blue }}
          >
            Start Now
          </Link>

          <Link
            href={links.contact ?? "#"}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-blue-100 bg-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-slate-50 active:scale-95 sm:px-7"
            style={{ color: BRAND.blue }}
          >
            Contact sales
          </Link>
        </div>

        <div className="mt-8 w-full max-w-4xl sm:mt-10">
          <div className="search-ring relative rounded-2xl p-[2px] sm:rounded-[28px]">
            <div className="relative rounded-2xl bg-white p-3 shadow-lg ring-1 ring-black/6 sm:rounded-[28px] sm:p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-white px-2 sm:px-1">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-500">
                    www
                  </div>

                  <input
                    type="text"
                    value={domainQuery}
                    onChange={(e) => setDomainQuery(e.target.value)}
                    placeholder="Search your perfect domain name e.g. octalve.com"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    inputMode="url"
                    className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleDomainSearch();
                      }
                    }}
                  />
                </div>

                <button
                  type="button"
                  aria-label="Search domain"
                  className="inline-flex h-11 w-full flex-shrink-0 items-center justify-center rounded-full px-5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-95 sm:h-12 sm:w-auto sm:px-6 sm:text-base"
                  style={{ background: BRAND.blue }}
                  onClick={handleDomainSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <p className="mt-2 text-center text-xs text-slate-400 sm:text-sm">
            Search across{" "}
            <span className="underline decoration-dotted underline-offset-2">
              500+ domain extensions
            </span>
            .
          </p>
        </div>

        <div className="mt-5 grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98]"
              style={{ background: BRAND.blue }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-7 flex w-full max-w-3xl flex-col items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 text-center shadow-sm ring-1 ring-slate-200 sm:flex-row sm:justify-between sm:rounded-full sm:px-5">
          <p className="text-sm text-slate-700">
            <strong className="font-semibold text-slate-900">
              30-day money-back guarantee
            </strong>{" "}
            and free WHOIS privacy on all registrations
          </p>

          <Link
            href={links.domainSearch ?? "/cloud/domain-registration"}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white shadow-sm transition hover:opacity-80"
            style={{ background: BRAND.blue }}
            aria-label="Get started"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob-float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(18px, -22px) scale(1.04);
          }
          66% {
            transform: translate(-14px, 16px) scale(0.97);
          }
        }

        .animate-blob-slow {
          animation: blob-float 18s ease-in-out infinite;
        }

        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes spin-border {
          to {
            --angle: 360deg;
          }
        }

        .search-ring::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          padding: 2px;
          background: conic-gradient(
            from var(--angle),
            ${BRAND.red},
            ${BRAND.orange},
            ${BRAND.green},
            ${BRAND.blue},
            ${BRAND.red}
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: spin-border 6s linear infinite;
          opacity: 0.55;
        }

        @media (min-width: 640px) {
          .search-ring::before {
            border-radius: 28px;
          }
        }
      `}</style>
    </section>
  );
}
