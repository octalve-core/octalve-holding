export default function LabOverview() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              Overview
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
              A focused space for product thinking, rapid testing, and
              innovation.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Octalve Lab exists for new ideas that need structure before they
              become full products, services, or systems.
            </p>
            <p>
              It supports experimentation, prototyping, concept validation,
              feature direction, and practical innovation work across the
              Octalve ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
