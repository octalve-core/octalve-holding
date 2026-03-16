export default function StartProjectQuickResponse() {
  const items = [
    {
      title: "Clearer briefs",
      text: "You help us understand what you need before the first real conversation starts.",
    },
    {
      title: "Faster response",
      text: "A better brief means less back-and-forth and quicker project direction.",
    },
    {
      title: "Better fit",
      text: "We can tell earlier what service path, scope, and support level best fits your project.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-[#F8FAFC] p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              What happens after you submit
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This helps set expectations and gives visitors confidence that
              their project request is entering a structured process.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
