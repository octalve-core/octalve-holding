export default function Overview() {
  const items = [
    {
      title: "Guided transition",
      text: "Move websites, domains, email, or hosting assets through a clearer migration flow built for confidence.",
    },
    {
      title: "Less downtime pressure",
      text: "Reduce disruption by presenting migration as a structured process rather than a stressful technical jump.",
    },
    {
      title: "Continuity for growth",
      text: "Shift into a stronger cloud setup while keeping your business momentum and digital operations moving.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Migration should feel structured, not overwhelming
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Many businesses delay migration because it feels risky or too
            technical. This page positions migration as a practical step into a
            better cloud setup.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
