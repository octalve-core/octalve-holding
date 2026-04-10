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

import quick4Desktop from "@/assets/portfolio/quick-4/desktop.jpg";
import quick4Mobile from "@/assets/portfolio/quick-4/mobile.jpg";

// Example for future cards
// import quick5Desktop from "@/assets/portfolio/quick-5/desktop.jpg";
// import quick5Mobile from "@/assets/portfolio/quick-5/mobile.jpg";

const SECTION_COLORS = {
  white: "#FFFFFF",
  textDark: "#0F172A",
  arrowBg: "rgba(255,255,255,0.94)",
  arrowBorder: "#E2E8F0",
  buttonBg: "#FFFFFF",
  buttonText: "#0F172A",
  cardBg: "#F8FAFC",
};

type QuickCard = {
  id: number;
  title: string;
  href: string;
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
};

const quickCards: QuickCard[] = [
  {
    id: 1,
    title: "Octalve Consult",
    href: "/models/consult",
    desktopImage: quick1Desktop,
    mobileImage: quick1Mobile,
  },
  {
    id: 2,
    title: "Octalve Suite",
    href: "/models/suite",
    desktopImage: quick2Desktop,
    mobileImage: quick2Mobile,
  },
  {
    id: 3,
    title: "Octalve Lab",
    href: "/models/lab",
    desktopImage: quick3Desktop,
    mobileImage: quick3Mobile,
  },
  {
    id: 4,
    title: "PayHx",
    href: "/",
    desktopImage: quick4Desktop,
    mobileImage: quick4Mobile,
  },
  // {
  //   id: 5,
  //   title: "Strategy Portfolio",
  //   href: "/portfolio/strategy",
  //   desktopImage: quick5Desktop,
  //   mobileImage: quick5Mobile,
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
    <article className="relative w-[84vw] max-w-[680px] shrink-0 snap-start md:w-[calc(50%-12px)]">
      <Link
        href={card.href}
        className="group relative block overflow-hidden rounded-[28px]"
        aria-label={card.title}
      >
        <div
          className="relative overflow-hidden rounded-[28px]"
          style={{ backgroundColor: SECTION_COLORS.cardBg }}
        >
          <Image
            src={card.mobileImage}
            alt={card.title}
            className="h-auto w-full md:hidden"
            sizes="84vw"
            priority={card.id === 1}
          />

          <Image
            src={card.desktopImage}
            alt={card.title}
            className="hidden h-auto w-full md:block"
            sizes="(min-width: 768px) 50vw, 84vw"
            priority={card.id === 1}
          />

          <div className="absolute inset-0 bg-black/[0.02] transition group-hover:bg-black/[0.04]" />

          <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8">
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
        </div>
      </Link>
    </article>
  );
}

export default function QuickAccessSlider() {
  const desktopSliderRef = useRef<HTMLDivElement | null>(null);
  const mobileSliderRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  function getActiveContainer() {
    if (typeof window === "undefined") {
      return desktopSliderRef.current ?? mobileSliderRef.current;
    }

    return window.innerWidth >= 768
      ? desktopSliderRef.current
      : mobileSliderRef.current;
  }

  function getCardPositions(container: HTMLDivElement) {
    return Array.from(container.children).map(
      (child) => (child as HTMLElement).offsetLeft,
    );
  }

  function getClosestIndex(positions: number[], currentScroll: number) {
    return positions.reduce((closestIndex, position, index) => {
      const currentDistance = Math.abs(position - currentScroll);
      const closestDistance = Math.abs(positions[closestIndex] - currentScroll);

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
  }

  function scrollToIndex(container: HTMLDivElement, index: number) {
    const positions = getCardPositions(container);
    if (!positions.length) return;

    const safeIndex =
      index < 0 ? positions.length - 1 : index >= positions.length ? 0 : index;

    container.scrollTo({
      left: positions[safeIndex],
      behavior: "smooth",
    });
  }

  function scrollNext() {
    const container = getActiveContainer();
    if (!container) return;

    const positions = getCardPositions(container);
    if (!positions.length) return;

    const currentIndex = getClosestIndex(positions, container.scrollLeft);
    scrollToIndex(container, currentIndex + 1);
  }

  function scrollPrev() {
    const container = getActiveContainer();
    if (!container) return;

    const positions = getCardPositions(container);
    if (!positions.length) return;

    const currentIndex = getClosestIndex(positions, container.scrollLeft);
    scrollToIndex(container, currentIndex - 1);
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
      className="bg-white px-4 py-14 sm:px-6 sm:py-14 md:py-14"
      style={{ backgroundColor: SECTION_COLORS.white }}
    >
      <div className="mx-auto max-w-[1360px]">
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 z-10 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border shadow-md transition hover:scale-[1.03]"
              style={{
                backgroundColor: SECTION_COLORS.arrowBg,
                borderColor: SECTION_COLORS.arrowBorder,
                color: SECTION_COLORS.textDark,
              }}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon />
            </button>

            <div
              ref={desktopSliderRef}
              className="flex min-w-0 snap-x snap-mandatory items-start gap-6 overflow-x-auto scroll-smooth px-[72px] pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {quickCards.map((card) => (
                <QuickAccessCard key={card.id} card={card} />
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-0 top-1/2 z-10 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border shadow-md transition hover:scale-[1.03]"
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

          <div
            ref={mobileSliderRef}
            className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:hidden"
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
