export default function Benefit() {
  const benefits = [
    "Builds trust through branded communication",
    "Supports team growth with structured inbox setup",
    "Connects smoothly to future dashboard logic",
    "Easy to refine later without changing the route system",
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Why this email page works
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Business email is a small detail that creates a big difference in
              perception. This page makes that value easier to understand and
              act on.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 text-sm font-medium leading-6 text-slate-700"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
