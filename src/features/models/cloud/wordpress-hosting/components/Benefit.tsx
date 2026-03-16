export default function Benefit() {
  const benefits = [
    "Gives WordPress users a more direct product path",
    "Separates general hosting from WordPress-specific hosting clearly",
    "Connects smoothly to future dashboard and checkout logic",
    "Easy to improve later without changing the route structure",
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Why this WordPress page works
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This page helps users who already prefer WordPress move faster by
              showing a clearer and more focused hosting path for that
              ecosystem.
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
