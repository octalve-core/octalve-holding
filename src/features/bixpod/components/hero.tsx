import Link from "next/link";

export default function BixpodHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-[#0064E0]">
            Bixpod
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
            A focused digital space for ideas, products, and smarter brand
            visibility.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Bixpod can serve as a product spotlight, innovation space, featured
            platform, or experimental digital layer inside the Octalve
            ecosystem. For now, this is a simple demo page structure that can be
            expanded later.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/start-project"
              className="inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
            >
              Start with Bixpod
            </Link>

            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:border-slate-400"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
