import Link from "next/link";

export default function TrendsHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-[#0064E0]">
            Trends
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
            Ideas, observations, and digital trends shaping how modern brands
            grow.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore short insights on branding, strategy, websites, digital
            systems, products, and the shifts influencing how businesses build
            and position themselves today.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#trends-list"
              className="inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
            >
              Explore trends
            </a>

            <Link
              href="/start-project"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:border-slate-400"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
