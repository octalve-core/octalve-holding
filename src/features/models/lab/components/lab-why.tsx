const reasons = [
  {
    title: "Prototype before scale",
    description:
      "Reduce risk by testing concepts early before making heavy product or market commitments.",
  },
  {
    title: "Validate ideas faster",
    description:
      "Use structured experimentation to learn what works, what does not, and what needs refinement.",
  },
  {
    title: "Improve product direction",
    description:
      "Turn vague product ideas into clearer flows, features, and user-facing value.",
  },
  {
    title: "Support innovation work",
    description:
      "Create a practical environment for internal experimentation, concept development, and smarter iteration.",
  },
];

export default function LabWhy() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            Why Lab
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Why teams use Octalve Lab.
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
