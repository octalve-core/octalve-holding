export default function Overview() {
  const items = [
    {
      title: "More control",
      text: "Run workloads with a stronger infrastructure layer that gives growing teams more flexibility and confidence.",
    },
    {
      title: "Performance headroom",
      text: "Support heavier traffic, larger applications, and more demanding digital operations as your needs expand.",
    },
    {
      title: "Future-ready scaling",
      text: "Start with what matches your current stage and move into stronger server capacity over time.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Infrastructure built for growing technical demands
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            When your website or product needs more than basic hosting, server
            infrastructure gives you the room, performance, and flexibility to
            grow with confidence.
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
