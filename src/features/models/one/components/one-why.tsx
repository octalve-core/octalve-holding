const reasons = [
  {
    title: "Business tools in one ecosystem",
    description:
      "Bring invoicing, CRM, projects, forms, bookings, and support into a more connected operating system.",
  },
  {
    title: "Built for SME realities",
    description:
      "Support growing businesses with tools that are practical, understandable, and easier to adopt.",
  },
  {
    title: "Operational efficiency",
    description:
      "Reduce manual friction through workflow automation, better visibility, and structured business processes.",
  },
  {
    title: "AI-enabled support",
    description:
      "Use modern AI-assisted tools to improve response time, lead handling, and customer-facing operations.",
  },
];

export default function OneWhy() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            Why One
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Why businesses choose Octalve One.
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
