"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const LINKS = {
  primary: "#",
  secondary: "#",
  transfer: "#",
};

const DOMAIN_PRICING = [
  {
    tld: ".com.ng",
    price: "₦5,500/yr",
    label: "Popular in Nigeria",
    description:
      "A strong fit for local businesses building trust and visibility.",
    buttonText: "Check .com.ng",
  },
  {
    tld: ".com",
    price: "₦19,500/yr",
    label: "Global standard",
    description:
      "Best for brands that want broader reach and stronger credibility.",
    buttonText: "Check .com",
  },
  {
    tld: ".org.ng",
    price: "₦8,500/yr",
    label: "Impact and community",
    description:
      "Ideal for NGOs, initiatives, and mission-driven organizations.",
    buttonText: "Check .org.ng",
  },
];

type SearchState =
  | { status: "idle"; message: string }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export default function Hero() {
  const [domainQuery, setDomainQuery] = useState("");
  const [searchState, setSearchState] = useState<SearchState>({
    status: "idle",
    message: "Search your ideal name and check availability instantly.",
  });

  const normalizedQuery = useMemo(() => {
    return domainQuery
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\s+/g, "");
  }, [domainQuery]);

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!normalizedQuery) {
      setSearchState({
        status: "error",
        message: "Enter a domain name to continue.",
      });
      return;
    }

    try {
      setSearchState({
        status: "loading",
        message: "Checking domain availability...",
      });

      const response = await fetch("/api/domain-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain: normalizedQuery }),
      });

      const data = (await response.json()) as {
        ok: boolean;
        available?: boolean;
        domain?: string;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(
          data.message || "Unable to check this domain right now.",
        );
      }

      setSearchState({
        status: data.available ? "success" : "error",
        message: data.available
          ? `${data.domain} is available.`
          : `${data.domain} is not available right now.`,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while checking the domain.";
      setSearchState({
        status: "error",
        message,
      });
    }
  }

  return (
    <section className="bg-white">
      <div className="relative overflow-hidden bg-[#031B72] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(0,100,224,0.30),transparent_38%)]" />
          <div className="absolute -left-24 top-0 h-[440px] w-[440px] rounded-full bg-[#0A2BA8]/70 blur-3xl" />
          <div className="absolute right-[-120px] top-[-60px] h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:54px_54px]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 pb-28 pt-20 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8 lg:pb-40 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
              Domain search
            </span>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-medium leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl xl:text-[5.25rem]">
              Find the right domain
              <br className="hidden sm:block" />
              for your next big move
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Search available names, secure the right identity for your brand,
              and move into hosting, email, and growth-ready infrastructure with
              Octalve Cloud.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <form
              onSubmit={handleSearch}
              className="rounded-[26px] border border-white/10 bg-white/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur"
            >
              <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex min-w-0 flex-1 items-center rounded-[20px] bg-white px-4 py-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mr-3 h-5 w-5 flex-shrink-0 text-slate-400"
                    aria-hidden="true"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M20 20l-3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>

                  <input
                    type="text"
                    value={domainQuery}
                    onChange={(event) => setDomainQuery(event.target.value)}
                    placeholder="Find your new domain name"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    inputMode="url"
                    className="w-full bg-transparent text-base font-medium text-slate-900 outline-none placeholder:text-slate-400 sm:text-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-[20px] bg-[#0064E0] px-7 text-base font-medium text-white transition hover:bg-[#0056C3] active:scale-[0.98] sm:px-8"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="mt-4 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <p
                className={`text-sm sm:text-base ${
                  searchState.status === "success"
                    ? "text-emerald-200"
                    : searchState.status === "error"
                      ? "text-rose-200"
                      : "text-white/70"
                }`}
              >
                {searchState.message}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
                <Link
                  href={LINKS.transfer}
                  className="text-sm font-medium text-white/80 transition hover:text-white"
                >
                  Transfer a domain
                </Link>
                <Link
                  href={LINKS.secondary}
                  className="text-sm font-medium text-white/80 transition hover:text-white"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-[-72px] max-w-[1320px] px-5 pb-16 sm:mt-[-84px] sm:px-6 sm:pb-20 lg:mt-[-96px] lg:px-8 lg:pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {DOMAIN_PRICING.map((item) => (
            <article
              key={item.tld}
              className="rounded-[28px] border border-slate-200 bg-white p-6 text-slate-900 shadow-[0_22px_60px_rgba(15,23,42,0.10)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#0064E0]">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-4xl font-medium tracking-[-0.04em] text-slate-950">
                    {item.tld}
                  </h3>
                </div>

                <span className="rounded-full bg-[#EAF2FF] px-3 py-1 text-xs font-medium text-[#0064E0]">
                  From
                </span>
              </div>

              <p className="mt-4 max-w-[32ch] text-base leading-7 text-slate-600">
                {item.description}
              </p>

              <div className="mt-8">
                <p className="text-3xl font-medium tracking-[-0.04em] text-slate-950">
                  {item.price}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Start your growth with the right domain extension for your
                  brand and audience.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setDomainQuery(`mybrand${item.tld}`)}
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#0064E0] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#0056C3] active:scale-[0.98]"
              >
                {item.buttonText}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
