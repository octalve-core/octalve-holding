export default function Overview() {
  const items = [
    {
      title: "SSL protection",
      text: "Help encrypt website traffic and create a more trusted browsing experience for visitors.",
    },
    {
      title: "Brand trust",
      text: "Show customers that your website is safer to use, especially when forms and sensitive actions are involved.",
    },
    {
      title: "Growth-ready security",
      text: "Start with essential protection and expand your security posture as your business grows online.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Security that supports trust from the first click
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Website security is not just a technical detail. It affects trust,
            perception, and how confidently users interact with your business
            online.
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
