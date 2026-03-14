import Link from "next/link";

export default function LaunchCta() {
  return (
    <section className="bg-[#FFF0F1]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <h2 className="text-4xl font-medium tracking-[-0.04em] text-slate-900 sm:text-5xl">
              What If Today Was The Day?
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
              Your dream business is waiting, let’s get it off the ground.
            </p>

            <div className="mt-8">
              <Link
                href="/suite/pricing"
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-medium text-white shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-black/10"
              >
                Plans & Pricing
              </Link>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-[36px] bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-10">
              <div className="pointer-events-none absolute -left-16 -top-20 h-52 w-52 rounded-full bg-[#E61525]/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 -bottom-24 h-56 w-56 rounded-full bg-slate-100 blur-3xl" />

              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-50 ring-1 ring-black/5">
                    🚀
                  </div>

                  <div>
                    <div className="text-xl font-medium text-slate-900">
                      Launch
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                      Launching this month? Don’t look unserious online. Get
                      your brand and website done right.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-medium text-slate-900">
                        One Time
                      </span>
                      <span className="text-base font-medium text-slate-700">
                        Payment
                      </span>
                    </div>
                    <div className="mt-1 text-sm font-medium text-slate-700">
                      + Freebies
                    </div>
                  </div>

                  <Link
                    href="/suite/pricing"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-200"
                    aria-label="View pricing"
                  >
                    ›
                  </Link>
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
