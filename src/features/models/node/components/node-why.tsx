const reasons = [
  {
    title: "Flexible workspace access",
    description:
      "Choose the setup that fits your rhythm, from day access to long-term membership and dedicated desk plans.",
  },
  {
    title: "More than a physical office",
    description:
      "Use virtual office, meeting rooms, and shared business infrastructure without carrying full traditional office costs.",
  },
  {
    title: "Community and collaboration",
    description:
      "Work around founders, creators, and professionals in an environment that supports networking and idea exchange.",
  },
  {
    title: "Startup-friendly environment",
    description:
      "Give early-stage businesses and small teams a more practical base for work, meetings, events, and visibility.",
  },
];

export default function NodeWhy() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            Why Node
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Why people choose Octalve Node.
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
