export default function Overview() {
  const items = [
    {
      title: "Branded inboxes",
      text: "Create professional email addresses that match your domain and make your business look more credible.",
    },
    {
      title: "Team communication",
      text: "Set up email accounts for staff, departments, and business functions as your operations grow.",
    },
    {
      title: "Secure foundation",
      text: "Keep business communication tied to a structured cloud setup you can expand later.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Give your business communication a stronger identity
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A branded email address builds trust, improves perception, and helps
            your business communicate more professionally from the start.
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
