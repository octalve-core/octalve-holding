export default function PortfolioHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600">
            Our Portfolio
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
            Selected work that shows how we build for growth.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            This is the demo version of the Portfolio page. We will refine the
            layout, visuals, cards, and interactions next to match the Octalve
            standard properly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio-showcase"
              className="inline-flex items-center justify-center rounded-full bg-[#0064E0] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="/start-a-project"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
