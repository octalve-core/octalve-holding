"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LAUNCH_COLORS, launchSteps } from "../launch-data";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="#0f172a"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LaunchTimeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const timelineEl = timelineRef.current;
    if (!timelineEl) return;

    const updateProgress = (index: number) => {
      const node = nodeRefs.current[index];
      if (!node) return;

      const timelineRect = timelineEl.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      const centerY = nodeRect.top + nodeRect.height / 2 - timelineRect.top;
      setProgressHeight(Math.max(0, centerY));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = stepRefs.current.findIndex((el) => el === entry.target);
          if (index >= 0) {
            setActiveIndex(index);
            updateProgress(index);
          }
        });
      },
      { threshold: 0.55 },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    updateProgress(0);

    const onResize = () => updateProgress(activeIndex);
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [activeIndex]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Launch in No Time.
          </h2>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/start-project"
              className="inline-flex w-full items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-900 sm:w-auto"
            >
              Free 30-Min Strategy Call
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-7 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div ref={timelineRef} className="relative mt-12 sm:mt-14">
          <div
            className="absolute bottom-0 left-5 top-0 w-px lg:left-1/2 lg:-translate-x-1/2"
            style={{ backgroundColor: "#F3D0D4" }}
            aria-hidden="true"
          />

          <div
            className="absolute left-5 top-0 w-px lg:left-1/2 lg:-translate-x-1/2"
            style={{
              backgroundColor: LAUNCH_COLORS.primary,
              height: `${progressHeight}px`,
            }}
            aria-hidden="true"
          />

          <div className="space-y-14 lg:space-y-20">
            {launchSteps.map((step, index) => {
              const isDone = index <= activeIndex;

              return (
                <article
                  key={step.phase}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="relative pl-12 lg:grid lg:grid-cols-[1fr_140px_1fr] lg:items-start lg:gap-10 lg:pl-0"
                >
                  <div
                    ref={(el) => {
                      nodeRefs.current[index] = el;
                    }}
                    className="absolute left-5 top-6 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-xl border bg-white transition lg:left-1/2 lg:top-10 lg:-translate-x-1/2"
                    style={{
                      borderColor: isDone ? LAUNCH_COLORS.primary : "#F1D6D9",
                      boxShadow: isDone
                        ? "0 0 0 6px rgba(230,21,37,0.12)"
                        : "none",
                    }}
                    aria-hidden="true"
                  >
                    <span
                      className="h-3 w-3 rounded transition"
                      style={{
                        backgroundColor: isDone
                          ? LAUNCH_COLORS.primary
                          : "#F1D6D9",
                      }}
                    />
                  </div>

                  <div className="lg:pr-6 lg:text-right">
                    <span className="inline-flex rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-900">
                      {step.phase}
                    </span>
                    <h3 className="mt-4 text-lg font-medium leading-snug text-slate-900 sm:text-xl">
                      {step.title}
                    </h3>
                  </div>

                  <div className="hidden lg:block" />

                  <div className="lg:pl-6">
                    <div
                      className="rounded-3xl p-6 shadow-sm ring-1 ring-black/5 sm:p-7"
                      style={{
                        backgroundColor: step.highlight ? "#FFF0F1" : "#F8FAFC",
                      }}
                    >
                      <p className="text-sm leading-relaxed text-slate-700">
                        {step.summary}
                      </p>

                      <div className="mt-6 space-y-4">
                        {step.items.map((item) => (
                          <div key={item.title} className="flex gap-3">
                            <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white ring-1 ring-black/5">
                              <CheckIcon />
                            </span>

                            <div>
                              <div className="text-sm font-medium text-slate-900">
                                {item.title}
                              </div>
                              {item.note ? (
                                <div className="text-xs leading-relaxed text-slate-600">
                                  {item.note}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-700">
                        <span>⏱</span>
                        {step.duration}
                      </div>

                      {index === launchSteps.length - 1 ? (
                        <div className="mt-7">
                          <Link
                            href="/contact"
                            className="inline-flex w-full items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-900 sm:w-auto"
                          >
                            Start Your Business
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
