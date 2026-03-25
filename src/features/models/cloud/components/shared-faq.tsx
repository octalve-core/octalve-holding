"use client";

import { useMemo, useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  items: FaqItem[];
  accentColor?: string;
};

export default function SharedFaq({
  eyebrow,
  title,
  description,
  items,
  accentColor = "#0064E0",
}: FaqSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const visibleItems = useMemo(
    () => (showAll ? items : items.slice(0, 5)),
    [items, showAll],
  );

  const allVisibleOpen =
    visibleItems.length > 0 &&
    visibleItems.every((_, index) => openIndexes.includes(index));

  function toggleItem(index: number) {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  }

  function toggleExpandAll() {
    if (allVisibleOpen) {
      setOpenIndexes([]);
      return;
    }

    setOpenIndexes(visibleItems.map((_, index) => index));
  }

  function toggleShowMore() {
    if (showAll) {
      setShowAll(false);
      setOpenIndexes((prev) => prev.filter((index) => index < 5));
      return;
    }

    setShowAll(true);
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            {eyebrow ? (
              <span
                className="inline-flex rounded-full px-4 py-1.5 text-sm font-medium"
                style={{
                  backgroundColor: `${accentColor}14`,
                  color: accentColor,
                }}
              >
                {eyebrow}
              </span>
            ) : null}

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {title}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              {description}
            </p>
          </div>

          <button
            type="button"
            onClick={toggleExpandAll}
            className="inline-flex items-center gap-3 self-start rounded-full border px-5 py-3 text-sm font-medium transition hover:bg-slate-50 sm:text-base"
            style={{
              borderColor: `${accentColor}55`,
              color: accentColor,
            }}
          >
            {allVisibleOpen ? "Collapse all" : "Expand all"}
            <span className="text-xl leading-none">
              {allVisibleOpen ? "−" : "+"}
            </span>
          </button>
        </div>

        <div className="mt-12 border-t border-slate-200">
          {visibleItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div key={item.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-start justify-between gap-4 py-8 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="pr-4 text-2xl font-medium leading-snug sm:text-[2rem]"
                    style={{ color: isOpen ? accentColor : "#0F172A" }}
                  >
                    {index + 1}. {item.question}
                  </span>

                  <span
                    className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center text-3xl font-light leading-none"
                    style={{ color: isOpen ? accentColor : "#0F172A" }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-4xl pb-8 pr-2 text-base leading-8 text-slate-700 sm:text-lg">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {items.length > 5 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={toggleShowMore}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200 sm:text-base"
            >
              {showAll ? "Show less" : "Show more"}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path
                  d="M5 8l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
