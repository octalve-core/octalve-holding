export default function Overview() {
  const items = [
    {
      title: "Built for WordPress",
      text: "Use hosting shaped around the needs of WordPress websites, from simple blogs to business platforms.",
    },
    {
      title: "Easier management",
      text: "Give teams and founders a simpler path to managing content-driven websites without extra complexity.",
    },
    {
      title: "Growth-friendly setup",
      text: "Start with a light setup and scale into stronger WordPress hosting as traffic and content needs increase.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            A cleaner hosting path for WordPress websites
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            WordPress remains one of the easiest ways to launch online. This
            page positions WordPress hosting as a practical, scalable option for
            founders, teams, and growing brands.
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
