"use client";

type TractionItem = {
  value: string;
  label: string;
  note: string;
};

const traction: TractionItem[] = [
  {
    value: "12+",
    label: "Core Lab Services",
    note: "Brand identity, logo design, websites, UI/UX, landing pages, e-commerce, product design, mobile apps, and custom software execution.",
  },
  {
    value: "4",
    label: "Execution Tracks",
    note: "Brand, web, app, and digital product execution structured to help businesses present better, launch faster, and grow more clearly.",
  },
  {
    value: "3",
    label: "Business Impact Layers",
    note: "We help businesses improve brand perception, user experience, and digital execution so design does not stop at visuals alone.",
  },
  {
    value: "2",
    label: "Integrated Disciplines",
    note: "Design and development working together so the final output is not only beautiful, but usable, scalable, and growth-oriented.",
  },
  {
    value: "1",
    label: "Aligned Execution Partner",
    note: "One team helping you move from scattered ideas to a clearer brand, stronger product experience, and more conversion-ready digital presence.",
  },
];

export default function LabOverview() {
  return (
    <section className="bg-[#FCF8F8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[30px] border border-[#F0D9DC] bg-white px-5 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-10 lg:rounded-[36px] lg:px-12 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#E61525]">
                Overview
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-[#0F172A] sm:text-4xl lg:text-5xl">
                Design and digital execution built to help ambitious brands look
                sharper, communicate better, and grow with confidence.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-[1.03rem]">
              <p>
                Octalve Lab helps businesses turn raw ideas into clearer brand
                systems, stronger digital experiences, and more credible market
                presence. From identity design and websites to product
                interfaces and custom digital builds, we focus on work that
                improves both presentation and performance.
              </p>

              <p>
                The goal is not only to make things look good, but to help
                businesses communicate more clearly, build trust faster, improve
                user journeys, and create digital experiences that are more
                usable, conversion-ready, and scalable.
              </p>
            </div>
          </div>
          {/* 
          <div className="mt-10 border-t border-[#F1E3E5] pt-8 lg:mt-12 lg:pt-10">
            <div className="grid grid-cols-1 divide-y divide-[#F1E3E5] sm:grid-cols-2 sm:divide-y-0 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(-n+2)]:border-b xl:grid-cols-5 xl:divide-y-0 xl:[&>*]:border-b-0 xl:[&>*]:border-r xl:[&>*:last-child]:border-r-0">
              {traction.map((item) => (
                <div key={item.label} className="px-4 py-6 sm:px-5 lg:px-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500 sm:text-xs">
                    {item.label}
                  </p>

                  <div className="mt-4 text-5xl font-medium leading-none tracking-[-0.06em] text-[#991B1B] sm:text-6xl">
                    {item.value}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.note}
                  </p>
                </div>
              ))}
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
