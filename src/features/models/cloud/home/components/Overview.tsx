export default function Overview() {
  const items = [
    {
      title: "Domain registration",
      text: "Find and secure the right domain name for your business, brand, or new product idea.",
    },
    {
      title: "Reliable web hosting",
      text: "Run landing pages, business websites, and web apps on stable hosting built for growth.",
    },
    {
      title: "Infrastructure support",
      text: "Get branded email, SSL, servers, WordPress hosting, and migration options in one cloud model.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Built to simplify your online growth
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Octalve Cloud helps you move from idea to live digital presence with
            the key tools businesses need to launch and scale online.
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
