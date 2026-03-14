const reasons = [
  {
    title: "Accelerate execution",
    description:
      "Move faster with clearer growth priorities, stronger coordination, and practical execution systems.",
  },
  {
    title: "Improve market traction",
    description:
      "Strengthen how your business reaches, converts, and retains the right customers.",
  },
  {
    title: "Scale with structure",
    description:
      "Support expansion with better rollout planning, delivery clarity, and repeatable growth processes.",
  },
  {
    title: "Connect strategy to results",
    description:
      "Bridge the gap between good ideas and measurable business outcomes.",
  },
];

export default function LeapWhy() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            Why Leap
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Why growth-focused teams choose Octalve Leap.
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
