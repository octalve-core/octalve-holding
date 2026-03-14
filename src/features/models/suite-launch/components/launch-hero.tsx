import Image from "next/image";
import Link from "next/link";
import { LAUNCH_COLORS, launchAssets } from "../launch-data";

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

export default function LaunchHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-4xl font-medium tracking-[-0.04em] text-slate-900 sm:text-5xl">
              <span className="text-slate-900">Idea.</span>{" "}
              <span style={{ color: LAUNCH_COLORS.primary }}>Launch</span>{" "}
              <span className="text-slate-900">Faster</span>
            </h1>

            <h2 className="mt-5 text-lg font-medium leading-relaxed text-slate-700">
              From “Side Project” to “Market Leader.”
            </h2>

            <p className="mt-1 text-lg leading-8 text-slate-700">
              Stop piecing together freelancers and struggling with DIY tools.
              We provide the complete identity, professional sales-driven
              website, and content engine you need to go live with authority.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/start-project"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-black/10"
              >
                Free 30-Min Strategy Call
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
                  <ArrowRight />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-7 py-4 text-sm font-medium text-slate-900 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-200"
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
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#FFF1C7] via-white to-[#FFF6D9] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
              <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#E61525]/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#E61525]/35 blur-3xl" />

              <div className="relative">
                <div className="relative translate-x-2 rounded-2xl bg-white shadow-[0_30px_70px_rgba(0,0,0,0.18)] ring-1 ring-black/5 md:translate-x-10 md:translate-y-2">
                  <div className="flex items-center gap-2 px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <div className="ml-3 h-2 w-40 rounded bg-slate-100" />
                  </div>

                  <div className="relative h-64 w-full overflow-hidden rounded-b-2xl sm:h-72 lg:h-80">
                    <Image
                      src={launchAssets.launchHeroImage}
                      alt="Launch Suite screenshot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-6 left-6">
                  <div className="flex items-end gap-3">
                    <span
                      className="h-12 w-2 rounded"
                      style={{ backgroundColor: LAUNCH_COLORS.primary }}
                    />
                    <div className="leading-none text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                      <div className="text-2xl font-medium">Octalve</div>
                      <div className="text-3xl font-medium">Launch</div>
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
