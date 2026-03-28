"use client";

type WhyStat = {
  value: string;
  label: string;
  note: string;
};

const stats: WhyStat[] = [
  {
    value: "12",
    label: "Core Lab services",
    note: "From brand identity and logo design to websites, apps, UI/UX, e-commerce, landing pages, and custom software builds.",
  },
  {
    value: "4",
    label: "Delivery tracks",
    note: "Brand, web, app, and product execution structured to solve presentation, usability, and growth problems across one business.",
  },
  {
    value: "2",
    label: "Execution layers",
    note: "Design and development working together so your business does not end with pretty visuals that fail in real use.",
  },
  {
    value: "1",
    label: "Aligned execution partner",
    note: "One team helping you move from scattered ideas to a cleaner brand, stronger user journey, and more conversion-ready output.",
  },
];

export default function WhyLab() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1420px] rounded-[34px] bg-[#cb0314] px-5 py-10 sm:px-8 sm:py-14 lg:rounded-[40px] lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
            Why businesses choose Octalve Lab
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/78 sm:text-base sm:leading-8 lg:text-lg">
            We help brands solve weak presentation, confusing user journeys, and
            disconnected digital execution with sharper design, stronger
            structure, and build-ready delivery.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1260px] rounded-[24px] bg-[#F6ECEC] px-4 py-4 sm:px-6 sm:py-6 lg:mt-12 lg:rounded-[28px] lg:px-8 lg:py-8">
          <div className="grid grid-cols-1 divide-y divide-[#DCCACA] sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`px-4 py-6 sm:px-5 lg:px-7 ${
                  index < 2 ? "xl:min-h-[240px]" : "xl:min-h-[240px]"
                }`}
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
