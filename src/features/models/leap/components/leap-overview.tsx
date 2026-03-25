"use client";

type TractionItem = {
  value: string;
  label: string;
  note: string;
};

const traction: TractionItem[] = [
  {
    value: "10+",
    label: "Founder Support Areas",
    note: "Startup guidance, validation, registration, licensing, compliance, planning, pitch support, funding readiness, lead generation, and monetization support.",
  },
  {
    value: "7",
    label: "Structured Packages",
    note: "Clear Leap packages designed for founders and businesses at different stages of setup, compliance, and launch readiness.",
  },
  {
    value: "4",
    label: "Core Leap Pillars",
    note: "Startup support, registration, licensing, and founder enablement brought together in one practical support system.",
  },
  {
    value: "3",
    label: "Business Readiness Layers",
    note: "We help businesses become clearer in direction, stronger in structure, and better prepared for growth and market execution.",
  },
  {
    value: "1",
    label: "Aligned Execution Partner",
    note: "One team helping founders move from idea-stage confusion to a more credible, compliant, and growth-ready business.",
  },
];

export default function LeapOverview() {
  return (
    <section className="bg-[#F7FBF8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[30px] border border-[#DCEBDD] bg-white px-5 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-10 lg:rounded-[36px] lg:px-12 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#29BE3E]">
                Overview
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-[#0F172A] sm:text-4xl lg:text-5xl">
                Startup support built to move founders from idea-stage confusion
                to credible, growth-ready execution.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-[1.03rem]">
              <p>
                Octalve Leap helps founders and growing businesses start with
                more clarity, stronger structure, and better readiness for real
                business growth. We support the critical steps that often slow
                businesses down, from idea validation and registration to
                licensing, compliance, and founder enablement.
              </p>

              <p>
                The goal is not only to help you register a business, but to
                help you build one that looks more credible, operates with more
                confidence, and is better prepared for customers, partners,
                funding conversations, and expansion.
              </p>
            </div>
          </div>

          {/* <div className="mt-10 border-t border-[#E5ECE6] pt-8 lg:mt-12 lg:pt-10">
            <div className="grid grid-cols-1 divide-y divide-[#E5ECE6] sm:grid-cols-2 sm:divide-y-0 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(-n+2)]:border-b xl:grid-cols-5 xl:divide-y-0 xl:[&>*]:border-b-0 xl:[&>*]:border-r xl:[&>*:last-child]:border-r-0">
              {traction.map((item) => (
                <div key={item.label} className="px-4 py-6 sm:px-5 lg:px-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500 sm:text-xs">
                    {item.label}
                  </p>

                  <div className="mt-4 text-5xl font-medium leading-none tracking-[-0.06em] text-[#14532D] sm:text-6xl">
                    {item.value}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
