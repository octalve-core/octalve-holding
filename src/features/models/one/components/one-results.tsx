const results = [
  "Faster daily operations",
  "Better workflow visibility",
  "Improved lead management",
  "More organized customer records",
  "Simpler invoicing and tracking",
  "Stronger business decision support",
];

export default function OneResults() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-slate-950 px-6 py-10 text-white sm:px-8 md:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-400">
            Results
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            Better business flow with smarter operating tools.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
