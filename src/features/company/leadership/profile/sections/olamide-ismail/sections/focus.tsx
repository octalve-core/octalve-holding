export function OlamideFocus() {
  const items = [
    "Company vision and strategic direction",
    "Business development and partnerships",
    "Product architecture and model expansion",
    "Brand positioning and market growth",
  ];

  return (
    <section className="px-5 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-[1320px] rounded-[28px] bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-10">
        <h2 className="text-2xl font-medium tracking-[-0.03em] text-slate-950">
          Core Focus
        </h2>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl bg-slate-50 px-5 py-4 text-base leading-7 text-slate-700"
            >
              <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#2563EB] text-white">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
