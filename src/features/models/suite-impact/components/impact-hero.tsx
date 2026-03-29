import Image from "next/image";
import Link from "next/link";
import { impactAssets, IMPACT_COLORS } from "../impact-data";

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ImpactHero() {
  return (
    <section className="bg-[#F6F6F4]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-10">
          <div className="max-w-2xl">
            <h1 className="text-[2.65rem] font-medium leading-[0.98] tracking-[-0.06em] text-[#0F172A] sm:text-5xl lg:text-[3.0rem]">
              <span className="text-[#0F172A]">Donors trust</span>{" "}
              <span style={{ color: IMPACT_COLORS.primary }}>Impact</span>{" "}
              <span className="text-[#0F172A]">&amp; Clarity.</span>
            </h1>

            <h2 className="mt-6 text-[1.3rem] font-medium leading-[1.35] text-[#334155] sm:text-[1.5rem]">
              Impact Suite combines donor trust, clarity, and digital structure
              in one place.
            </h2>

            <p className="mt-4 max-w-xl text-[1.02rem] leading-8 text-[#475569] sm:text-[1.12rem] sm:leading-9">
              Many mission-driven organisations are doing meaningful work, but
              weak presentation, outdated websites, and unclear digital systems
              can reduce donor confidence. We help you build a clearer brand, a
              donation-ready website, and a more credible online presence that
              supports trust, partnerships, and long-term growth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/start-project"
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-black px-7 text-sm font-medium text-white transition hover:bg-[#111827] focus:outline-none focus:ring-4 focus:ring-black/10"
              >
                Free 30-Min Strategy Call
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
                  <ArrowRight />
                </span>
              </Link>

              <Link
                href="/suite/pricing"
                className="inline-flex min-h-[58px] items-center justify-center rounded-full px-7 text-sm font-medium text-white transition hover:brightness-95 focus:outline-none focus:ring-4"
                style={{
                  backgroundColor: IMPACT_COLORS.primary,
                  boxShadow: "0 10px 30px rgba(41,190,62,0.16)",
                }}
              >
                Start Now
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-[#475569]">
              <span className="font-medium text-[#0F172A]">Excellent</span>

              <div
                className="flex items-center gap-1"
                aria-label="5 out of 5 rating"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="grid h-7 w-7 place-items-center bg-[#22C55E] text-[0.85rem] text-white"
                  >
                    ★
                  </span>
                ))}
              </div>

              <span className="mx-1 text-slate-300">|</span>

              <span className="inline-flex items-center gap-2 font-medium text-[#0F172A]">
                <span className="text-[#22C55E]">★</span>
                Trustpilot
              </span>
            </div>
          </div>

          <div className="w-full lg:justify-self-stretch">
            <div className="mx-auto w-full max-w-[740px] rounded-[34px] bg-[linear-gradient(135deg,#DFF9E4_0%,#F4FFF6_38%,#CFF4D7_100%)] p-3.5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] ring-1 ring-black/5 sm:rounded-[38px] sm:p-4 lg:ml-auto lg:max-w-[760px] lg:p-5">
              <div className="overflow-hidden rounded-[28px] bg-white/85 ring-1 ring-black/6 backdrop-blur-sm sm:rounded-[30px]">
                <div className="flex items-center gap-2 border-b border-black/5 bg-[#F3F4F6] px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#F87171]" />
                  <span className="h-3 w-3 rounded-full bg-[#FBBF24]" />
                  <span className="h-3 w-3 rounded-full bg-[#4ADE80]" />
                  <div className="ml-3 h-2.5 w-24 rounded-full bg-slate-200 sm:w-40" />
                </div>

                <div className="relative aspect-[16/10] w-full bg-[#F7FFF8]">
                  <div className="absolute inset-0 p-2 sm:p-3 lg:p-4">
                    <div className="relative h-full w-full">
                      <Image
                        src={impactAssets.impactHeroImage}
                        alt="Impact Suite hero preview"
                        fill
                        className="object-contain object-center"
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 760px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </section>
  );
}
