export default function Overview() {
  const items = [
    {
      title: "Search availability",
      text: "Quickly check if your preferred business, personal, or campaign domain is available.",
    },
    {
      title: "Protect your identity",
      text: "Secure the name that matches your brand before someone else takes it.",
    },
    {
      title: "Manage with confidence",
      text: "Keep your domain journey connected to one cloud account and future dashboard flow.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Start with the name your audience will remember
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A strong domain is the foundation of your online presence. It helps
            people find you, trust you, and remember your brand.
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
