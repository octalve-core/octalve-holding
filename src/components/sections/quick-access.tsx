"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import quick1Desktop from "@/assets/portfolio/quick-1/desktop.jpg";
import quick1Mobile from "@/assets/portfolio/quick-1/mobile.jpg";

import quick2Desktop from "@/assets/portfolio/quick-2/desktop.jpg";
import quick2Mobile from "@/assets/portfolio/quick-2/mobile.jpg";

import quick3Desktop from "@/assets/portfolio/quick-3/desktop.jpg";
import quick3Mobile from "@/assets/portfolio/quick-3/mobile.jpg";

// Example for future cards
// import quick3Desktop from "@/assets/portfolio/quick-4/desktop.jpg";
// import quick3Mobile from "@/assets/portfolio/quick-4/mobile.jpg";

const SECTION_COLORS = {
  pageBg: "#F8FAFC",
  white: "#FFFFFF",
  textDark: "#0F172A",
  textSoft: "#64748B",
  border: "#E5E7EB",
  buttonBg: "#FFFFFF",
  buttonText: "#0F172A",
  statText: "#134E4A",
  arrowBg: "rgba(255,255,255,0.92)",
  arrowBorder: "#E2E8F0",
};

type QuickCard = {
  id: number;
  title: string;
  href: string;
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
};

const tractionStats = [
  { label: "Projects Delivered", value: "128+" },
  { label: "Businesses Supported", value: "50+" },
  { label: "Solutions Built", value: "100+" },
  { label: "Industries Served", value: "21+" },
  { label: "Client Satisfaction", value: "99%" },
];

const quickCards: QuickCard[] = [
  {
    id: 1,
    title: "Website Portfolio",
    href: "/",
    desktopImage: quick1Desktop,
    mobileImage: quick1Mobile,
  },
  {
    id: 2,
    title: "Branding Portfolio",
    href: "/",
    desktopImage: quick2Desktop,
    mobileImage: quick2Mobile,
  },
  {
    id: 3,
    title: "Strategy Portfolio",
    href: "/",
    desktopImage: quick3Desktop,
    mobileImage: quick3Mobile,
  },

  // {
  //   id: 4,
  //   title: "Strategy Portfolio",
  //   href: "/portfolio/strategy",
  //   desktopImage: quick3Desktop,
  //   mobileImage: quick3Mobile,
  // },
];

function ArrowUpRightIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H8.5M17 7V15.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuickAccessCard({ card }: { card: QuickCard }) {
  return (
    <article className="relative h-[520px] w-[84vw] max-w-[680px] shrink-0 snap-start overflow-hidden rounded-[28px] md:h-[460px] md:w-[calc(50%-12px)]">
      <Link
        href={card.href}
        className="group relative block h-full w-full"
        aria-label={card.title}
      >
        <div className="absolute inset-0">
          <Image
            src={card.mobileImage}
            alt={card.title}
            fill
            className="object-cover md:hidden"
            sizes="84vw"
            priority={card.id === 1}
          />

          <Image
            src={card.desktopImage}
            alt={card.title}
            fill
            className="hidden object-cover md:block"
            sizes="(min-width: 768px) 50vw, 84vw"
            priority={card.id === 1}
          />
        </div>

        <div className="absolute inset-0 bg-black/5 transition group-hover:bg-black/[0.08]" />

        <div className="absolute right-5 bottom-5 md:right-8 md:bottom-8">
          <span
            className="inline-flex h-20 w-20 items-center justify-center rounded-full shadow-md transition group-hover:scale-105 md:h-24 md:w-24"
            style={{
              backgroundColor: SECTION_COLORS.buttonBg,
              color: SECTION_COLORS.buttonText,
            }}
          >
            <ArrowUpRightIcon />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function QuickAccess() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  function getStepSize() {
    const container = sliderRef.current;
    if (!container) return 0;

    const firstCard = container.children[0] as HTMLElement | undefined;
    if (!firstCard) return 0;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");

    return firstCard.offsetWidth + gap;
  }

  function scrollNext() {
    const container = sliderRef.current;
    if (!container) return;

    const step = getStepSize();
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const nearEnd = container.scrollLeft + step >= maxScrollLeft - 10;

    container.scrollTo({
      left: nearEnd ? 0 : container.scrollLeft + step,
      behavior: "smooth",
    });
  }

  function scrollPrev() {
    const container = sliderRef.current;
    if (!container) return;

    const step = getStepSize();
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const nearStart = container.scrollLeft <= 10;

    container.scrollTo({
      left: nearStart ? maxScrollLeft : container.scrollLeft - step,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (quickCards.length <= 1 || isPaused) return;

    const interval = window.setInterval(() => {
      scrollNext();
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-20"
      style={{ backgroundColor: SECTION_COLORS.pageBg }}
    >
      <div className="mx-auto max-w-[1360px]">
        <div
          className="grid grid-cols-2 gap-y-8 border-t pt-8 md:grid-cols-3 lg:grid-cols-5"
          style={{ borderColor: SECTION_COLORS.border }}
        >
          {tractionStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-2 md:px-4 ${
                index !== tractionStats.length - 1 ? "lg:border-r" : ""
              }`}
              style={{
                borderColor:
                  index !== tractionStats.length - 1
                    ? SECTION_COLORS.border
                    : "transparent",
              }}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-600 sm:text-xs">
                {stat.label}
              </p>
              <h3
                className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl md:text-5xl"
                style={{ color: SECTION_COLORS.statText }}
              >
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border shadow-md transition hover:scale-[1.03] md:inline-flex"
            style={{
              backgroundColor: SECTION_COLORS.arrowBg,
              borderColor: SECTION_COLORS.arrowBorder,
              color: SECTION_COLORS.textDark,
            }}
            aria-label="Scroll left"
          >
            <ChevronLeftIcon />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border shadow-md transition hover:scale-[1.03] md:inline-flex"
            style={{
              backgroundColor: SECTION_COLORS.arrowBg,
              borderColor: SECTION_COLORS.arrowBorder,
              color: SECTION_COLORS.textDark,
            }}
            aria-label="Scroll right"
          >
            <ChevronRightIcon />
          </button>

          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] md:gap-6"
          >
            {quickCards.map((card) => (
              <QuickAccessCard key={card.id} card={card} />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border"
              style={{
                backgroundColor: SECTION_COLORS.arrowBg,
                borderColor: SECTION_COLORS.arrowBorder,
                color: SECTION_COLORS.textDark,
              }}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border"
              style={{
                backgroundColor: SECTION_COLORS.arrowBg,
                borderColor: SECTION_COLORS.arrowBorder,
                color: SECTION_COLORS.textDark,
              }}
              aria-label="Scroll right"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
