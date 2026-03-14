const products = [
  "Octalve Invoice",
  "Octalve CRM",
  "Octalve Leads",
  "Octalve HR",
  "Octalve Projects",
  "Octalve Bookings",
  "Octalve Inventory",
  "Octalve Support Desk",
  "Octalve Forms",
  "Octalve AI Reception",
  "Octalve Analytics Dashboard",
];

export default function OneOverview() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              Overview
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
              A connected business software layer for growing teams.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Octalve One is focused on business solutions for SMEs, startups,
                agencies, service businesses, product-based businesses, and
                operational teams that need better systems.
              </p>
              <p>
                It covers invoicing, CRM, lead management, bookings, HR, support
                tools, analytics, workflow automation, and AI-enabled
                operational support.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              Products inside One
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {products.map((product) => (
                <span
                  key={product}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
