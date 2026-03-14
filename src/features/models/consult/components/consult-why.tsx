const reasons = [
  {
    title: "Clearer positioning",
    description:
      "Define what you do, who it is for, and how to communicate it with confidence.",
  },
  {
    title: "Stronger business structure",
    description:
      "Organize offers, workflows, and internal systems so operations stop feeling scattered.",
  },
  {
    title: "Execution-focused strategy",
    description:
      "Move beyond ideas into practical plans that teams can actually implement.",
  },
  {
    title: "Better growth direction",
    description:
      "Make smarter decisions on branding, service design, delivery, and expansion.",
  },
];

export default function ConsultWhy() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            Why Consult
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Why businesses choose Octalve Consult.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-medium text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
