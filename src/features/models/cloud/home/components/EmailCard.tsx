"use client";

import Link from "next/link";

const LINKS = {
  email: "#",
};

const BRAND = {
  blue: "#0064E0",
  blueSoft: "#EAF2FF",
  blueDeep: "#0B1F63",
  slate900: "#0F172A",
  slate700: "#334155",
  slate500: "#64748B",
  slate200: "#E2E8F0",
  surface: "#FFFFFF",
  bg: "#F8FAFC",
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M5 10.5L8.2 13.7L15 6.9"
        stroke={BRAND.blue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CardProps = {
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  variant?: "business" | "marketing";
};

function EmailCard({
  tag,
  title,
  description,
  bullets,
  cta,
  href,
  variant = "business",
}: CardProps) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-8">
      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
        {tag}
      </span>

      <div className="relative z-10">
        <h3 className="mt-6 max-w-[560px] text-3xl font-medium leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
          {title}
        </h3>

        <p className="mt-4 max-w-[640px] text-base font-medium leading-7 text-slate-500 sm:text-lg">
          {description}
        </p>

        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 text-base font-medium leading-7 text-slate-700 sm:text-[1.05rem]"
            >
              <CheckIcon />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#0064E0] transition hover:opacity-80 sm:text-base"
        >
          {cta}
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M4 10H16M16 10L11.5 5.5M16 10L11.5 14.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="relative mt-10 h-[250px] overflow-hidden rounded-[24px] bg-slate-50 sm:h-[290px]">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#DCEBFF] via-[#EEF5FF] to-transparent" />

        <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-[#0064E0]/10 blur-3xl" />
        <div className="absolute -bottom-10 right-8 h-44 w-44 rounded-full bg-[#4C8FFF]/15 blur-3xl" />

        {variant === "business" ? (
          <>
            <div className="absolute bottom-0 left-0 h-[145px] w-[145px] rounded-tr-[26px] bg-gradient-to-tr from-[#C9DEFF] to-[#F2F7FF]" />

            <div className="absolute bottom-0 left-6 right-6 grid h-[180px] grid-cols-[170px_1fr] overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm">
              <div className="border-r border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0064E0]" />
                  Octalve Mail
                </div>

                <div className="mt-4 rounded-xl bg-[#0064E0] px-3 py-2 text-center text-sm font-medium text-white">
                  New message
                </div>

                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <div>Inbox</div>
                  <div>Starred</div>
                  <div>Drafts</div>
                  <div>Sent</div>
                </div>
              </div>

              <div className="relative p-4">
                <div className="absolute left-6 top-[-24px] rounded-2xl border border-[#A8C8FF] bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm sm:text-base">
                  you@yourbrand.com
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["All mail", "Unread", "Read", "Has attachment"].map(
                    (item, index) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                          index === 0
                            ? "bg-slate-950 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-5 space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-3 rounded-full bg-slate-100"
                      style={{ width: `${92 - i * 8}%` }}
                    />
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 flex gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6AA7FF] to-[#2D46F5] text-white shadow-md">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 17s5-2.7 5-7.2V5.7L10 4 5 5.7v4.1C5 14.3 10 17 10 17Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6AA7FF] to-[#2D46F5] text-white shadow-md">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M16 10A6 6 0 1 1 14.2 5.8M16 4v6h-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="absolute bottom-0 left-0 h-[155px] w-[165px] rounded-tr-[26px] bg-gradient-to-tr from-[#C9DEFF] to-[#F2F7FF]" />

            <div className="absolute bottom-0 left-8 h-[165px] w-[170px] rotate-[-3deg] rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-medium text-slate-500">
                Welcome campaign
              </div>
              <div className="mt-8 rounded-xl bg-slate-100 p-3 text-xs text-slate-500">
                Create a simple welcome email for our audience.
              </div>
              <div className="mt-10 text-xs font-medium text-slate-400">
                Octalve Reach
              </div>
            </div>

            <div className="absolute bottom-0 right-8 h-[210px] w-[250px] rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:w-[270px]">
              <div className="mx-auto w-fit rounded-2xl border border-[#9DBDFF] bg-[#F4F8FF] px-4 py-2 text-lg font-medium text-slate-800 sm:text-xl">
                Welcome email
              </div>

              <div className="mt-5 h-[145px] rounded-[22px] bg-gradient-to-br from-[#9FD4FF] via-[#8CC4F9] to-[#4E89F7]" />

              <div className="absolute left-[-20px] top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D8E6FF] bg-white shadow-sm">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path
                    d="M10 3v3M10 14v3M3 10h3M14 10h3M5.5 5.5l2.1 2.1M12.4 12.4l2.1 2.1M14.5 5.5l-2.1 2.1M7.6 12.4l-2.1 2.1"
                    stroke={BRAND.slate900}
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default function EmailShowcase() {
  return (
    <section style={{ backgroundColor: BRAND.bg }}>
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#DDE7FF] px-4 py-1.5 text-sm font-medium text-slate-700">
            Smarter email
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Email your audience with confidence
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <EmailCard
            tag="Business"
            title="Build trust with a professional business email"
            description="Polish your brand, protect your inbox, and grow your business with tools that keep you in the driver’s seat."
            bullets={[
              "Build trust with a branded business email",
              "Seamless email access across all apps and devices",
              "Private, protected, and always online",
            ]}
            cta="Set up business email"
            href={LINKS.email}
            variant="business"
          />

          <EmailCard
            tag="Marketing"
            title="Grow your business with smarter email campaigns"
            description="Plan campaigns, automate sequences, and keep your communication consistent with a cleaner workflow."
            bullets={[
              "Design and write emails faster",
              "Your logo and brand colors, applied cleanly",
              "No coding required",
            ]}
            cta="Start with Octalve email tools"
            href={LINKS.email}
            variant="marketing"
          />
        </div>
      </div>
    </section>
  );
}
