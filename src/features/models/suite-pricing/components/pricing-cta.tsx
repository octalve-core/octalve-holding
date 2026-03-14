import Link from "next/link";

export default function PricingCta() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="rounded-[32px] bg-white p-8 ring-1 ring-black/5 shadow-[0_15px_60px_rgba(0,0,0,0.04)] md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.04em] text-slate-900 sm:text-4xl">
                Need a custom scope instead?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                If your organisation or business needs a mixed package, custom
                features, or a broader rollout, we can structure a tailored
                quote for you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-900"
              >
                Request Custom Quote
              </Link>

              <Link
                href="/start-project"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-slate-900"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
