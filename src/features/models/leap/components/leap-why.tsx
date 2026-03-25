"use client";

type WhyStat = {
  value: string;
  label: string;
  note: string;
};

const stats: WhyStat[] = [
  {
    value: "10+",
    label: "Founder support areas",
    note: "From startup guidance and idea validation to registration, licensing, compliance support, business planning, pitch support, and monetization direction.",
  },
  {
    value: "4",
    label: "Core Leap pillars",
    note: "Startup support, registration, licensing, and founder enablement brought together to help businesses start with more structure and less confusion.",
  },
  {
    value: "3",
    label: "Business readiness layers",
    note: "We help founders become legally set up, operationally clearer, and better prepared for growth, funding conversations, and early market execution.",
  },
  {
    value: "1",
    label: "Execution partner",
    note: "One team helping you move from idea-stage uncertainty to a more credible, compliant, and growth-ready business foundation.",
  },
];

export default function WhyLeap() {
  return (
    <section className="bg-[#F7FBF8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1420px] rounded-[34px] bg-[#1D7F2D] px-5 py-10 sm:px-8 sm:py-14 lg:rounded-[40px] lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
            Why businesses choose Octalve Leap
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/78 sm:text-base sm:leading-8 lg:text-lg">
            We help founders solve startup confusion, weak business structure,
            registration delays, and growth-readiness gaps with clearer support,
            practical guidance, and execution-focused business setup.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1260px] rounded-[24px] bg-[#F2FBF4] px-4 py-4 sm:px-6 sm:py-6 lg:mt-12 lg:rounded-[28px] lg:px-8 lg:py-8">
          <div className="grid grid-cols-1 divide-y divide-[#CEEAD4] sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="px-4 py-6 sm:px-5 lg:min-h-[240px] lg:px-7"
              >
                <div className="text-center xl:text-left">
                  <div className="text-5xl font-semibold leading-none tracking-[-0.06em] text-[#0F172A] sm:text-6xl">
                    {item.value}
                  </div>

                  <h3 className="mt-4 text-xl font-medium leading-tight text-[#111827] sm:text-2xl">
                    {item.label}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#4B5563] sm:text-base sm:leading-8">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
