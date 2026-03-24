export default function Benefit() {
  const benefits = [
    {
      title: "Hassle-free domain transfer",
      description:
        "Move your existing domain to Octalve Cloud with a simpler process, clearer steps, and less friction from start to finish.",
      accent: "bg-emerald-400",
      icon: <TransferIcon />,
    },
    {
      title: "Faster DNS switching",
      description:
        "Update your DNS with confidence and keep your website and email moving smoothly during the transition.",
      accent: "bg-rose-300",
      icon: <SpeedIcon />,
    },
    {
      title: "Secure, reliable infrastructure",
      description:
        "Run on infrastructure built for stability, protection, and long-term business growth without unnecessary complexity.",
      accent: "bg-amber-300",
      icon: <ShieldInfraIcon />,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Already have a registered domain?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Bring it over to Octalve Cloud and keep your business moving with a
            cleaner transfer experience, faster setup, and dependable support.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="text-center">
              <div className="relative mx-auto flex h-[160px] w-[220px] items-center justify-center">
                <div className="absolute left-1/2 top-1/2 h-[96px] w-[140px] -translate-x-1/2 -translate-y-1/2 bg-slate-100" />

                <div className="absolute left-1/2 top-[28px] h-[104px] w-[84px] -translate-x-1/2 rounded-[2px] border border-slate-700 bg-white shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
                  <div className="px-4 pt-5">{benefit.icon}</div>
                  <div className="mx-auto mt-4 h-[2px] w-10 bg-slate-300" />
                  <div className="mx-auto mt-3 h-[2px] w-8 bg-slate-200" />
                </div>

                <div
                  className={`absolute bottom-[18px] left-[150px] flex h-14 w-14 items-center justify-center rounded-full ${benefit.accent} text-slate-950 shadow-sm`}
                >
                  {benefit.title === "Hassle-free domain transfer" ? (
                    <PaperPlaneIcon />
                  ) : benefit.title === "Faster DNS switching" ? (
                    <SwitchBadgeIcon />
                  ) : (
                    <LockBadgeIcon />
                  )}
                </div>
              </div>

              <h3 className="mx-auto mt-6 max-w-[280px] text-3xl font-medium leading-[1.12] tracking-[-0.03em] text-slate-950">
                {benefit.title}
              </h3>

              <p className="mx-auto mt-5 max-w-[360px] text-base leading-8 text-slate-600 sm:text-lg">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransferIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9 text-slate-900">
      <path
        d="M7 8h10M13 4l4 4-4 4M17 16H7M11 12l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9 text-slate-900">
      <path
        d="M13 3L6 14h5l-1 7 8-12h-5l0-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldInfraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9 text-slate-900">
      <path
        d="M12 3l6 2.4v4.9c0 4-2.6 6.8-6 8.2-3.4-1.4-6-4.2-6-8.2V5.4L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.8l1.5 1.5 2.8-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaperPlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M20 4L10 14M20 4l-6 16-4-6-6-4 16-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SwitchBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M8 7h7m0 0-2.5-2.5M15 7l-2.5 2.5M16 17H9m0 0 2.5-2.5M9 17l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M8 11V8a4 4 0 1 1 8 0v3M7 11h10v8H7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="15" r="1.1" fill="currentColor" />
    </svg>
  );
}
