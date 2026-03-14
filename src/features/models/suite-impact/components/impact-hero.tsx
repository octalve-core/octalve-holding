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
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-4xl font-medium tracking-[-0.04em] text-slate-900 sm:text-5xl">
              <span className="text-slate-900">Donors trust</span>{" "}
              <span style={{ color: IMPACT_COLORS.primary }}>Impact</span>{" "}
              <span className="text-slate-900">&amp; Clarity.</span>
            </h1>

            <h2 className="mt-5 text-lg font-medium leading-relaxed text-slate-700">
              Impact Suite combines donor trust, clarity, and digital structure
              in one place.
            </h2>

            <p className="mt-1 text-lg leading-8 text-slate-700">
              Stop piecing together freelancers and struggling with scattered
              tools. We provide the brand identity, donation-ready website, and
              credibility systems you need to present your organisation with
              confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/start-project"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white shadow-sm transition hover:bg-slate-900"
              >
                Free 30-Min Strategy Call
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
                  <ArrowRight />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-7 py-4 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
              >
                Get Started
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-700">
              <span className="font-medium text-slate-900">Excellent</span>

              <div
                className="flex items-center gap-1"
                aria-label="5 out of 5 rating"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="grid h-6 w-6 place-items-center bg-emerald-500 text-white"
                  >
                    ★
                  </span>
                ))}
              </div>

              <span className="mx-1 text-slate-300">|</span>

              <span className="inline-flex items-center gap-2 font-medium text-slate-900">
                <span className="text-emerald-500">★</span>
                Trustpilot
              </span>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#DFF9E4] via-white to-[#BFF0C8] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
              <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#29BE3E]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#29BE3E]/25 blur-3xl" />

              <div className="relative">
                <div className="relative translate-x-2 rounded-2xl bg-white shadow-[0_30px_70px_rgba(0,0,0,0.18)] ring-1 ring-black/5 md:translate-x-10 md:translate-y-2">
                  <div className="flex items-center gap-2 px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <div className="ml-3 h-2 w-40 rounded bg-slate-100" />
                  </div>

                  <div className="rounded-b-2xl bg-[#F6FFF8] p-4 sm:p-5">
                    <div className="relative mx-auto aspect-[16/10] w-full max-w-[620px] overflow-hidden rounded-xl bg-white ring-1 ring-[#29BE3E]/10">
                      <Image
                        src={impactAssets.impactHeroImage}
                        alt="Impact Suite screenshot"
                        fill
                        className="object-contain object-center p-2"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-6 left-6">
                  <div className="flex items-end gap-3">
                    <span
                      className="h-12 w-2 rounded"
                      style={{ backgroundColor: IMPACT_COLORS.primary }}
                    />
                    <div className="leading-none text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                      <div className="text-2xl font-medium">Octalve</div>
                      <div className="text-3xl font-medium">Impact</div>
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
