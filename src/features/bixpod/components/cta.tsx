import Link from "next/link";

export default function BixpodCTA() {
  const items = [
    {
      title: "Product spotlight",
      text: "Use Bixpod to highlight a featured product, tool, offer, or digital initiative in a cleaner way.",
    },
    {
      title: "Flexible expansion",
      text: "Start with a simple structure now and evolve it later into something richer without changing the page route.",
    },
    {
      title: "Brand clarity",
      text: "Present a focused experience instead of mixing every message into one crowded page.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Why Bixpod can matter in the Octalve ecosystem
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This page is simple for now, but it gives you a clean foundation
              for a future product, campaign, media experience, or digital
              offer.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6"
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

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/start-project"
              className="inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
            >
              Build with Octalve
            </Link>

            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:border-slate-400"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
