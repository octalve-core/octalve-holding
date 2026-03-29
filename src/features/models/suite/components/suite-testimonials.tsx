"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { testimonials } from "../suite-data";

const AUTO_DELAY = 8000;

const FALLBACK_BACKGROUNDS = [
  "#D7EAF0",
  "#D8D1C7",
  "#EACFC7",
  "#E7EEF6",
  "#F1E4D8",
];

const QUOTE_COLORS = ["#14A7C4", "#BDA98F", "#EF9B7D", "#7AA7D9", "#D49272"];

function getDesktopWindow(total: number, active: number) {
  if (total <= 3) {
    return Array.from({ length: total }, (_, index) => index);
  }

  if (active === 0) return [0, 1, 2];
  if (active === total - 1) return [total - 3, total - 2, total - 1];

  return [active - 1, active, active + 1];
}

export default function SuiteTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const scrollTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (!isMobile) return;

    const container = mobileScrollRef.current;
    if (!container) return;

    const child = container.children[activeIndex] as HTMLElement | undefined;
    if (!child) return;

    child.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const container = mobileScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current);
      }

      scrollTimerRef.current = window.setTimeout(() => {
        const center = container.scrollLeft + container.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        Array.from(container.children).forEach((child, index) => {
          const el = child as HTMLElement;
          const childCenter = el.offsetLeft + el.clientWidth / 2;
          const distance = Math.abs(center - childCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex);
      }, 80);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, [isMobile]);

  const desktopItems = useMemo(() => {
    const indexes = getDesktopWindow(testimonials.length, activeIndex);
    return indexes.map((index) => ({
      ...testimonials[index],
      originalIndex: index,
    }));
  }, [activeIndex]);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="text-center">
          <div className="text-sm font-medium tracking-wide text-black/55">
            100+ Founders
          </div>

          <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] text-black md:text-5xl lg:text-6xl">
            Built for <span className="text-[#E61525]">Founders</span>. Made for{" "}
            <span className="text-[#29BE3E]"> Impacts</span>.
          </h2>
        </div>

        <div
          className="mt-12 hidden items-stretch gap-5 md:flex lg:gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {desktopItems.map((item) => {
            const isActive = item.originalIndex === activeIndex;
            const bg =
              item.accentBg ??
              FALLBACK_BACKGROUNDS[
                item.originalIndex % FALLBACK_BACKGROUNDS.length
              ];
            const quoteColor =
              QUOTE_COLORS[item.originalIndex % QUOTE_COLORS.length];

            if (isActive) {
              return (
                <article
                  key={item.id}
                  className="flex h-[520px] flex-1 overflow-hidden rounded-[40px] border border-black/10 px-7 py-7 transition-all duration-700 ease-out lg:px-9 lg:py-9"
                  style={{ background: bg }}
                >
                  <div className="grid h-full w-full items-center gap-8 lg:grid-cols-[310px_minmax(0,1fr)] xl:grid-cols-[345px_minmax(0,1fr)]">
                    <div className="relative h-[350px] self-center overflow-hidden rounded-[32px] border border-black/10 bg-white lg:h-[385px] xl:h-[410px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1279px) 310px, 345px"
                        priority
                      />
                    </div>

                    <div className="flex h-full min-w-0 flex-col justify-center">
                      <div
                        className="text-5xl leading-none lg:text-6xl"
                        style={{ color: quoteColor }}
                        aria-hidden="true"
                      >
                        “
                      </div>

                      <p className="mt-4 max-w-[540px] text-[1.12rem] font-medium leading-[1.52] tracking-[-0.015em] text-black/90 md:text-[1.18rem] lg:text-[1.24rem] xl:text-[1.34rem]">
                        {item.quote}
                      </p>

                      <div className="mt-8">
                        <div className="text-[1.18rem] font-medium leading-tight tracking-[-0.02em] text-black lg:text-[1.3rem]">
                          {item.name}
                        </div>

                        <div className="mt-2 text-base leading-7 text-black/65">
                          {item.rolePrefix}{" "}
                          <span className="text-[#1664E2]">{item.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(item.originalIndex)}
                className="group relative h-[520px] w-[165px] shrink-0 overflow-hidden rounded-[36px] border border-black/10 transition-all duration-700 ease-out lg:w-[172px]"
                aria-label={`Show testimonial from ${item.name}`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="172px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute bottom-6 left-6 z-10 flex h-[calc(100%-3rem)] items-end">
                  <div className="[writing-mode:vertical-rl] rotate-180 text-left text-white">
                    <div className="text-sm font-medium leading-5 text-white/80">
                      {item.rolePrefix} {item.company}
                    </div>
                    <div className="mt-2 text-[1.05rem] font-medium leading-5 tracking-[-0.01em]">
                      {item.name}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div
          className="mt-10 md:hidden"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={mobileScrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, index) => {
              const bg =
                item.accentBg ??
                FALLBACK_BACKGROUNDS[index % FALLBACK_BACKGROUNDS.length];
              const quoteColor = QUOTE_COLORS[index % QUOTE_COLORS.length];

              return (
                <article
                  key={item.id}
                  className="w-[88%] shrink-0 snap-center overflow-hidden rounded-[32px] border border-black/10"
                  style={{ background: bg }}
                >
                  <div className="p-5">
                    <div className="relative h-[280px] overflow-hidden rounded-[26px] border border-black/10 bg-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="88vw"
                      />
                    </div>

                    <div className="mt-6">
                      <div
                        className="text-5xl leading-none"
                        style={{ color: quoteColor }}
                        aria-hidden="true"
                      >
                        “
                      </div>

                      <p className="mt-3 text-[1.08rem] font-medium leading-8 tracking-[-0.01em] text-black/90">
                        {item.quote}
                      </p>

                      <div className="mt-7">
                        <div className="text-xl font-medium leading-tight text-black">
                          {item.name}
                        </div>
                        <div className="mt-2 text-base leading-7 text-black/65">
                          {item.rolePrefix}{" "}
                          <span className="text-[#1664E2]">{item.company}</span>
                        </div>
                        {item.location ? (
                          <div className="text-sm leading-6 text-black/45">
                            {item.location}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-black/80" : "w-2.5 bg-black/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
