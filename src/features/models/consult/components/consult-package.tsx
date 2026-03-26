"use client";

import { useMemo, useState } from "react";

const BRAND = {
  blue: "#0064E0",
  red: "#E61525",
  green: "#29BE3E",
  orange: "#FC7E24",
  text: "#334155",
  ink: "#0F172A",
  border: "#E6EAF2",
  soft: "#F8FAFC",
};

type Audience = "Individuals" | "Businesses";

type PackageCard = {
  title: string;
  audience: Audience;
  eyebrow: string;
  summary: string;
  problem: string;
  solution: string;
  accent: string;
  iconUrl: string;
  artStyle: "rings" | "grid" | "signal" | "flow";
};

const PACKAGES: PackageCard[] = [
  {
    audience: "Individuals",
    eyebrow: "For professionals, founders, and students",
    title: "Personal Brand Strategy",
    summary: "Build a personal brand people trust and remember.",
    problem:
      "You have value, but people do not quickly understand what you do or why they should take you seriously.",
    solution:
      "We help you clarify your message, positioning, and brand direction so your profile, presence, and communication feel stronger and more credible.",
    accent: BRAND.blue,
    iconUrl:
      "https://api.iconify.design/solar/user-id-linear.svg?color=%230064E0",
    artStyle: "rings",
  },
  {
    audience: "Individuals",
    eyebrow: "For first-time founders and side hustlers",
    title: "Startup Launch Roadmap",
    summary: "Get a practical roadmap to launch your business with clarity.",
    problem:
      "You want to start something meaningful, but the process feels confusing and you are unsure what to do first.",
    solution:
      "We help you define the idea, audience, next steps, and launch direction so you can move forward with more confidence and less guesswork.",
    accent: BRAND.orange,
    iconUrl:
      "https://api.iconify.design/solar/rocket-2-linear.svg?color=%23FC7E24",
    artStyle: "flow",
  },
  {
    audience: "Businesses",
    eyebrow: "For service businesses and growing teams",
    title: "Offer & Sales Blueprint",
    summary:
      "Turn your idea or service into an offer people can understand and buy.",
    problem:
      "Your service may be good, but customers still feel confused about what you offer, how it works, or why they should say yes.",
    solution:
      "We help you shape the offer, pricing direction, and sales flow so your business becomes easier to explain, present, and sell.",
    accent: BRAND.red,
    iconUrl:
      "https://api.iconify.design/solar/chart-square-linear.svg?color=%23E61525",
    artStyle: "grid",
  },
  {
    audience: "Businesses",
    eyebrow: "For businesses that feel scattered",
    title: "Business Structure Setup",
    summary:
      "Create a more organized business with clear systems and workflow.",
    problem:
      "Operations feel messy, too much depends on you, and the business lacks a simple structure that can support growth.",
    solution:
      "We help you organize roles, workflow, and process direction so the business runs with more order, clarity, and consistency.",
    accent: BRAND.green,
    iconUrl:
      "https://api.iconify.design/solar/widget-4-linear.svg?color=%2329BE3E",
    artStyle: "signal",
  },
];

function ArtPanel({
  accent,
  iconUrl,
  artStyle,
}: {
  accent: string;
  iconUrl: string;
  artStyle: PackageCard["artStyle"];
}) {
  const tint = `${accent}12`;
  const strongTint = `${accent}22`;

  return (
    <div
      className="relative h-[220px] overflow-hidden rounded-b-[28px] border-t sm:h-[240px]"
      style={{
        borderColor: BRAND.border,
        background:
          artStyle === "rings"
            ? `radial-gradient(circle at center, ${strongTint} 0%, ${strongTint} 18%, transparent 18%, transparent 34%, ${tint} 34%, ${tint} 35%, transparent 35%, transparent 51%, ${tint} 51%, ${tint} 52%, transparent 52%), linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`
            : artStyle === "grid"
              ? `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`
              : artStyle === "signal"
                ? `linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%)`
                : `linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`,
        backgroundSize:
          artStyle === "grid" ? "86px 86px, 86px 86px, auto" : undefined,
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute left-6 top-6 h-16 w-16 rounded-full blur-2xl"
          style={{ backgroundColor: `${accent}18` }}
        />
        <div
          className="absolute bottom-6 right-6 h-16 w-16 rounded-full blur-2xl"
          style={{ backgroundColor: `${accent}14` }}
        />
      </div>

      {artStyle === "flow" ? (
        <div className="absolute inset-0">
          <svg viewBox="0 0 600 260" className="h-full w-full">
            <path
              d="M40 170 C 120 40, 240 230, 360 120 S 520 100, 560 56"
              fill="none"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="10 10"
              opacity="0.75"
            />
            <path
              d="M515 46 L560 56 L532 84"
              fill="none"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.75"
            />
          </svg>
        </div>
      ) : null}

      {artStyle === "signal" ? (
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-3 px-8 opacity-70">
          {Array.from({ length: 11 }).map((_, index) => (
            <span
              key={index}
              className="rounded-full"
              style={{
                width: 4,
                height: index % 2 === 0 ? 18 : 30,
                backgroundColor: index === 5 ? accent : "rgba(15,23,42,0.16)",
              }}
            />
          ))}
        </div>
      ) : null}

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative flex h-28 w-28 items-center justify-center rounded-full shadow-sm transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-32"
          style={{ backgroundColor: accent }}
        >
          <img
            src={iconUrl}
            alt="Package illustration"
            className="h-14 w-14 brightness-0 invert sm:h-16 sm:w-16"
          />
        </div>
      </div>
    </div>
  );
}

function PackageCardView({
  item,
  index,
  audience,
}: {
  item: PackageCard;
  index: number;
  audience: Audience;
}) {
  const animationName =
    audience === "Individuals"
      ? index % 2 === 0
        ? "slideUpFade"
        : "slideRightFade"
      : index % 2 === 0
        ? "slideLeftFade"
        : "slideUpFade";

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(15,23,42,0.10)]"
      style={{
        borderColor: BRAND.border,
        boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
        animation: `${animationName} 0.7s ease both`,
        animationDelay: `${index * 120}ms`,
      }}
    >
      <div className="flex flex-1 flex-col p-6 sm:p-7 md:p-8">
        <div
          className="inline-flex w-fit rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
          style={{
            backgroundColor: `${item.accent}12`,
            color: item.accent,
          }}
        >
          {item.eyebrow}
        </div>

        <h3
          className="mt-4 text-2xl font-medium tracking-tight sm:text-[1.75rem]"
          style={{ color: BRAND.ink }}
        >
          {item.title}
        </h3>

        <p
          className="mt-3 text-base font-medium leading-7"
          style={{ color: BRAND.ink }}
        >
          {item.summary}
        </p>

        <div className="mt-6 flex-1 space-y-5">
          <div>
            <h6 className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              The problem
            </h6>
            <p
              className="mt-2 text-sm leading-7 sm:text-[15px]"
              style={{ color: BRAND.text }}
            >
              {item.problem}
            </p>
          </div>

          <div>
            <h6 className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              How this helps
            </h6>
            <p
              className="mt-2 text-sm leading-7 sm:text-[15px]"
              style={{ color: BRAND.text }}
            >
              {item.solution}
            </p>
          </div>
        </div>
      </div>

      <ArtPanel
        accent={item.accent}
        iconUrl={item.iconUrl}
        artStyle={item.artStyle}
      />
    </article>
  );
}

export default function ConsultPackagesRefined() {
  const [activeAudience, setActiveAudience] = useState<Audience>("Individuals");

  const visiblePackages = useMemo(
    () => PACKAGES.filter((item) => item.audience === activeAudience),
    [activeAudience],
  );

  const activeAccent =
    activeAudience === "Individuals" ? BRAND.blue : BRAND.red;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <div className="grid w-full max-w-[560px] grid-cols-2 rounded-[22px] border border-slate-200 bg-slate-50 p-2 shadow-sm sm:p-2.5">
              {(["Individuals", "Businesses"] as Audience[]).map((audience) => {
                const isActive = activeAudience === audience;
                const accent =
                  audience === "Individuals" ? BRAND.blue : BRAND.red;

                return (
                  <button
                    key={audience}
                    type="button"
                    onClick={() => setActiveAudience(audience)}
                    className="rounded-[16px] px-5 py-4 text-sm font-medium transition-all duration-300 sm:px-8 sm:py-5 sm:text-base"
                    style={{
                      backgroundColor: isActive ? accent : "transparent",
                      color: isActive ? "#FFFFFF" : BRAND.ink,
                      boxShadow: isActive
                        ? "0 12px 28px rgba(15,23,42,0.10)"
                        : "none",
                      transform: isActive
                        ? "translateY(-1px)"
                        : "translateY(0)",
                    }}
                  >
                    {audience}
                  </button>
                );
              })}
            </div>
          </div>

          <h2 className="mt-7 text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Consulting packages built around real business problems
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: BRAND.text }}
          >
            Octalve Consult is structured to help individuals and businesses
            solve confusion, improve direction, and move with more clarity,
            structure, and confidence.
          </p>
        </div>

        <div
          className="mt-10 rounded-[28px] border px-5 py-6 sm:mt-12 sm:px-6 sm:py-7 lg:px-8"
          style={{
            borderColor: `${activeAccent}18`,
            background: `linear-gradient(180deg, ${activeAccent}05 0%, #FFFFFF 36%)`,
          }}
        >
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div
                className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
                style={{
                  backgroundColor: `${activeAccent}12`,
                  color: activeAccent,
                }}
              >
                {activeAudience}
              </div>
              <h4 className="mt-3 text-2xl font-medium text-slate-950 sm:text-[2rem]">
                {activeAudience === "Individuals"
                  ? "Personal clarity and startup direction"
                  : "Better offers and stronger business structure"}
              </h4>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                {activeAudience === "Individuals"
                  ? "For professionals, students, founders, and emerging entrepreneurs who need more clarity before the next move."
                  : "For service businesses and growing teams that want clearer selling, smoother operations, and a stronger structure for growth."}
              </p>
            </div>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:gap-8">
            {visiblePackages.map((item, index) => (
              <PackageCardView
                key={`${activeAudience}-${item.title}`}
                item={item}
                index={index}
                audience={activeAudience}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeftFade {
          from {
            opacity: 0;
            transform: translateX(28px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRightFade {
          from {
            opacity: 0;
            transform: translateX(-28px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
