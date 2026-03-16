export default function Overview() {
  const items = [
    {
      title: "Fast deployment",
      text: "Get your website online quickly with a hosting experience designed to reduce setup friction.",
    },
    {
      title: "Stable performance",
      text: "Give your visitors a smoother experience with hosting built for reliability and confidence.",
    },
    {
      title: "Room to scale",
      text: "Start with what fits now and expand your hosting path as your traffic and business needs grow.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Hosting that supports growth from day one
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Your website needs more than space online. It needs a dependable
            foundation that supports trust, speed, and future expansion.
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
