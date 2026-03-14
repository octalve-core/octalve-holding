import Link from "next/link";

export default function PricingHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-700">
            Octalve Suite Pricing
          </div>

          <h1 className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-900 sm:text-5xl">
            Plans that make choosing easy.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Choose one suite or bundle multiple suites for a better setup cost.
            The calculator below updates instantly so clients can understand
            value without confusion.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-900"
            >
              Talk to Us
            </Link>

            <Link
              href="/start-project"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
