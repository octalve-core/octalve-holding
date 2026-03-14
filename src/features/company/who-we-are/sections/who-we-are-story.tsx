"use client";

import { useMemo, useState } from "react";

type StoryMilestone = {
  year: string;
  label: string;
  title: string;
  description: string;
};

const storyMilestones: StoryMilestone[] = [
  {
    year: "2019",
    label: "Foundation",
    title: "The journey began with Bi Creativity.",
    description:
      "Octalve’s story started in 2019 under the name Bi Creativity, built around helping businesses move from ideas to structured execution through strategy, branding, and digital support.",
  },
  {
    year: "2021",
    label: "Expansion of impact",
    title: "A stronger focus on transformation and real-world outcomes.",
    description:
      "As the work matured, the direction became clearer: build solutions that do more than advise. The emphasis shifted toward systems, business growth, innovation, and practical support that helps organizations move with confidence.",
  },
  {
    year: "2025",
    label: "Rebrand",
    title: "Bi Creativity evolved into Octalve.",
    description:
      "In April 2025, the brand was reintroduced as Octalve to better reflect a broader product and service ecosystem, including software, consulting, digital infrastructure, and growth-focused execution.",
  },
  {
    year: "Today",
    label: "Where we are now",
    title: "Advancing business for greater growth.",
    description:
      "Today, Octalve is positioned around strategy, AI-driven growth, software-enabled delivery, and scalable digital systems—serving founders, businesses, and institutions with clearer execution and stronger operating structure.",
  },
];

function TimelineArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35"
      aria-label={
        direction === "left" ? "Previous milestone" : "Next milestone"
      }
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {direction === "left" ? (
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export function WhoWeAreStory() {
  const [activeIndex, setActiveIndex] = useState(2);

  const activeMilestone = useMemo(
    () => storyMilestones[activeIndex],
    [activeIndex],
  );

  return (
    <section className="bg-[#F5F7F8] px-5 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4rem]">
            Our history
          </h2>

          <p className="mx-auto mt-6 max-w-[980px] text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            Octalve began with a simple commitment: help people and
            organizations grow with more clarity, stronger systems, and better
            execution. What started as a focused creative and business support
            journey has evolved into a broader ecosystem of consulting,
            software, digital infrastructure, and growth-led innovation.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[24px] h-px bg-slate-300" />

            <div className="relative grid grid-cols-4 gap-4">
              {storyMilestones.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={`${item.year}-${item.label}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex flex-col items-center text-center"
                    aria-pressed={isActive}
                  >
                    <span
                      className={[
                        "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200",
                        isActive
                          ? "border-[#2563EB] bg-[#2563EB] text-white shadow-[0_10px_30px_rgba(37,99,235,0.22)]"
                          : "border-slate-300 bg-white text-slate-700 group-hover:border-slate-400",
                      ].join(" ")}
                    >
                      {index + 1}
                    </span>

                    <span
                      className={[
                        "mt-5 text-sm font-semibold uppercase tracking-[0.24em] transition-colors duration-200",
                        isActive ? "text-[#2563EB]" : "text-slate-500",
                      ].join(" ")}
                    >
                      {item.year}
                    </span>

                    <span
                      className={[
                        "mt-2 text-sm transition-colors duration-200 sm:text-[15px]",
                        isActive ? "text-slate-950" : "text-slate-600",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
            <div className="hidden lg:block">
              <TimelineArrow
                direction="left"
                onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
                disabled={activeIndex === 0}
              />
            </div>

            <article className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center">
                <div className="rounded-[28px] bg-[linear-gradient(135deg,#DBEAFE_0%,#EFF6FF_52%,#F8FAFC_100%)] p-6">
                  <div className="flex h-[220px] items-center justify-center rounded-[24px] border border-[#BFDBFE] bg-white/50">
                    <div className="text-center">
                      <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
                        {activeMilestone.year}
                      </div>
                      <div className="mt-4 text-5xl font-medium tracking-[-0.05em] text-slate-950">
                        {String(activeIndex + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB]">
                    {activeMilestone.label}
                  </p>

                  <h3 className="mt-4 max-w-[680px] text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-4xl">
                    {activeMilestone.title}
                  </h3>

                  <p className="mt-6 max-w-[760px] text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                    {activeMilestone.description}
                  </p>
                </div>
              </div>
            </article>

            <div className="hidden lg:block justify-self-end">
              <TimelineArrow
                direction="right"
                onClick={() =>
                  setActiveIndex((prev) =>
                    Math.min(prev + 1, storyMilestones.length - 1),
                  )
                }
                disabled={activeIndex === storyMilestones.length - 1}
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
            <TimelineArrow
              direction="left"
              onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
              disabled={activeIndex === 0}
            />
            <TimelineArrow
              direction="right"
              onClick={() =>
                setActiveIndex((prev) =>
                  Math.min(prev + 1, storyMilestones.length - 1),
                )
              }
              disabled={activeIndex === storyMilestones.length - 1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
