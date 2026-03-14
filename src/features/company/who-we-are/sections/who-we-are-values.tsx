const cilecsValues = [
  {
    letter: "C",
    title: "Clarity in Execution",
  },
  {
    letter: "I",
    title: "Integrity & Trust",
  },
  {
    letter: "L",
    title: "Client-Centricity",
  },
  {
    letter: "E",
    title: "Excellence in Delivery",
  },
  {
    letter: "C",
    title: "Collaboration & Empowerment",
  },
  {
    letter: "S",
    title: "Sustainability & Responsibility",
  },
];

function VisionIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L4 7.5V12C4 16.5 7.1 20.6 12 22C16.9 20.6 20 16.5 20 12V7.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15.5" r="1" fill="currentColor" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3V7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5.64 5.64L8.46 8.46"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3 12H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 10V12L13.5 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ValuesIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 11C10.6569 11 12 9.65685 12 8C12 6.34315 10.6569 5 9 5C7.34315 5 6 6.34315 6 8C6 9.65685 7.34315 11 9 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17 11C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5C15.3431 5 14 6.34315 14 8C14 9.65685 15.3431 11 17 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3.5 18.5C4.3 15.9 6.4 14.5 9 14.5C11.6 14.5 13.7 15.9 14.5 18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12.5 18.5C13.1 16.7 14.7 15.5 17 15.5C19.3 15.5 20.9 16.7 21.5 18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhoWeAreValues() {
  return (
    <section className="bg-[#F5F7F8] px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[3.9rem]">
            Our goal is to build digital systems that make African businesses
            and institutions grow with confidence.
          </h2>

          <p className="mx-auto mt-6 max-w-[860px] text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            To become Africa’s leading provider of smart SaaS tools and digital
            infrastructure that empower creators, businesses, and governments to
            thrive through AI, automation, clarity, and scalable innovation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_0.98fr_1.08fr] lg:items-end">
          <article className="rounded-[32px] bg-[#22C55E] p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-9 lg:min-h-[320px]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
              <VisionIcon />
            </div>

            <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em]">
              Our Vision
            </h3>

            <p className="mt-5 max-w-[320px] text-base leading-8 text-white/90">
              Empower a smarter Africa through digital clarity and innovation.
            </p>
          </article>

          <article className="rounded-[32px] bg-[#2563EB] p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-9 lg:min-h-[420px]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
              <MissionIcon />
            </div>

            <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em]">
              Our Mission
            </h3>

            <p className="mt-5 max-w-[360px] text-base leading-8 text-white/90">
              Igniting business growth through expert consulting and innovative
              solutions.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[32px] bg-[#000A16] p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-9 lg:min-h-[520px]">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_52%),radial-gradient(circle_at_bottom_center,rgba(34,197,94,0.10),transparent_38%)]" />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white">
                <ValuesIcon />
              </div>

              <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em]">
                Our Values
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/72">
                We call them the CILECS Values — a compass for our culture,
                innovation, and decision-making.
              </p>

              <ul className="mt-7 space-y-4">
                {cilecsValues.map((value) => (
                  <li
                    key={`${value.letter}-${value.title}`}
                    className="flex gap-4"
                  >
                    <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                      {value.letter}
                    </span>
                    <div className="text-sm leading-7 text-white/90">
                      {value.title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
