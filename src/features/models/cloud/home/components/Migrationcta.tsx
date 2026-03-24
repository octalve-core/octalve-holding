"use client";

import Link from "next/link";

const LINKS = {
  migration: "#",
  contact: "#",
};

const BRAND = {
  blue: "#0064E0",
};

export default function MigrationCta() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: BRAND.blue }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-[-90px] h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute left-10 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-white/15" />
        <div className="absolute right-12 top-12 h-24 w-24 rounded-3xl border border-white/10 bg-white/5" />
        <div className="absolute right-24 bottom-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute left-1/2 top-16 h-20 w-20 rounded-full bg-white/5 blur-2xl" />

        <div className="absolute bottom-10 right-10 hidden grid-cols-6 gap-2 md:grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full ${
                index > 29 ? "bg-white/50" : "bg-white/85"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="relative z-10 max-w-[620px] lg:justify-self-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
              Migration support
            </span>

            <h2 className="mt-6 max-w-[600px] text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Migrating from another hosting provider?
            </h2>

            <p className="mt-5 max-w-[600px] text-base leading-8 text-white/80 sm:text-lg">
              Move your website, domain setup, email flow, and core
              infrastructure with less stress. Octalve Cloud helps you migrate
              cleanly, reduce downtime, and get everything aligned for your next
              stage of growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={LINKS.migration}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100 active:scale-[0.98] sm:px-7 sm:text-base"
              >
                Start migration
              </Link>

              <Link
                href={LINKS.contact}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 active:scale-[0.98] sm:px-7 sm:text-base"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[560px] items-center justify-center">
            <div className="relative h-[320px] w-full sm:h-[360px]">
              <div className="absolute inset-x-10 bottom-0 h-[130px] rounded-full bg-white/10 blur-3xl" />

              <div className="absolute left-1/2 top-6 h-[210px] w-[210px] -translate-x-1/2 rounded-[32px] border border-white/15 bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-md" />

              <div className="absolute left-[10%] top-[32%] h-[110px] w-[110px] rounded-[26px] border border-white/10 bg-white/10" />
              <div className="absolute right-[10%] top-[28%] h-[120px] w-[120px] rounded-[28px] border border-white/10 bg-white/10" />
              <div className="absolute left-[23%] bottom-[8%] h-[120px] w-[120px] rounded-[28px] border border-white/10 bg-white/10" />
              <div className="absolute right-[20%] bottom-[12%] h-[105px] w-[105px] rounded-[24px] border border-white/10 bg-white/10" />

              <div className="absolute left-1/2 top-[130px] h-[2px] w-[62%] -translate-x-1/2 bg-white/20" />
              <div className="absolute left-1/2 top-[130px] h-[62%] w-[2px] -translate-x-1/2 bg-white/20" />

              <div className="absolute left-[28%] top-[43%] h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)]" />
              <div className="absolute right-[28%] top-[40%] h-3 w-3 rounded-full bg-white/80 shadow-[0_0_0_6px_rgba(255,255,255,0.08)]" />
              <div className="absolute left-[36%] bottom-[23%] h-3 w-3 rounded-full bg-white/80 shadow-[0_0_0_6px_rgba(255,255,255,0.08)]" />
              <div className="absolute right-[34%] bottom-[28%] h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)]" />

              <div className="absolute left-1/2 top-[104px] flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-white text-[#0064E0] shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path
                    d="M8 7h8M8 12h8M8 17h5M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute left-[11%] top-[47%] flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-[#0B1F63] shadow-[0_14px_34px_rgba(0,0,0,0.15)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M7 12h10M12 7l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute right-[11%] top-[43%] flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-[#0B1F63] shadow-[0_14px_34px_rgba(0,0,0,0.15)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M6 12h12M12 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute left-[26%] bottom-[10%] flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-[#0B1F63] shadow-[0_14px_34px_rgba(0,0,0,0.15)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M12 4v16M5 11l7-7 7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute right-[23%] bottom-[15%] flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-[#0B1F63] shadow-[0_14px_34px_rgba(0,0,0,0.15)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M6 8h12M6 12h8M6 16h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
