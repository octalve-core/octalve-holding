export default function Benefit() {
  const benefits = [
    "Clear hosting offer for different customer stages",
    "Easy handoff to future dashboard and purchase flow",
    "Simple structure for redesign and product expansion",
    "Better positioning for businesses that need dependable hosting",
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Why this hosting page works
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This page introduces hosting in a way that feels approachable for
              new users while still leaving room for a more advanced cloud
              experience later.
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
