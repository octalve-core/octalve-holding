export default function ConsultOverview() {
  return (
    <section className="px-4 py-16 sm:px-6 bg-[#2A006D]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              Overview
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#ffffff] sm:text-4xl">
              Clarity for founders, teams, and growing businesses.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#ffffff]">
            <p>
              Octalve Consult is designed for businesses that need clearer
              structure, better decision-making, stronger positioning, and more
              practical execution support.
            </p>
            <p>
              We help turn scattered ideas into systems, services, and plans
              that are easier to understand, sell, and scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
