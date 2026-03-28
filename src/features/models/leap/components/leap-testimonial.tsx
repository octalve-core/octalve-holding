"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Octalve Leap made our business setup process feel far less overwhelming. From guidance on structure to registration support and practical founder direction, they helped us move with more clarity and confidence. What stood out was how they simplified the journey and made the business feel more credible and ready for growth.",
    name: "Al-Hijabah",
    role: "Founder",
    company: "AlHijabah Consults",
    location: "Nigeria",
  },
  {
    id: 2,
    quote:
      "Working with Octalve Leap was a smart decision for our business. They helped us think beyond just registration and pushed us toward a more growth-ready setup. Their support around business clarity, compliance direction, and founder readiness gave us a stronger foundation to build on.",
    name: "Ayusupphy",
    role: "Founder",
    company: "Ayush Travels and Tours",
    location: "Nigeria",
  },
  {
    id: 3,
    quote:
      "Octalve Leap brought structure to our startup process in a way that was practical and professional. They helped us better understand what the business needed, what documents mattered, and how to move forward without confusion. The experience gave us confidence that we were building on the right footing.",
    name: "Gadget Bobo",
    role: "Founder",
    company: "Gadget Baron Enterprise",
    location: "Nigeria",
  },
  {
    id: 4,
    quote:
      "What I appreciated most about Octalve Leap was the clarity they brought to our business journey. They did not just point us in random directions—they helped us think properly about setup, compliance, and positioning. Their support made the process easier and gave our business a more serious and organized start.",
    name: "Ajibade I.",
    role: "Founder",
    company: "Al-Hudaa Global Ventures",
    location: "Nigeria",
  },
  {
    id: 5,
    quote:
      "Octalve Leap helped us move from idea-stage uncertainty to a more structured and business-ready position. Their support was clear, timely, and focused on what actually matters for a founder trying to start well. The whole process felt intentional, and it gave us a stronger sense of direction.",
    name: "Ameenah S.",
    role: "Founder",
    company: "Ameenah Essentials",
    location: "Nigeria",
  },
];

const CARD_THEMES = [
  {
    bg: "#F3FBF4",
    text: "#0F172A",
    subtext: "#475569",
    border: "rgba(41,190,62,0.14)",
  },
  {
    bg: "#EAF8EC",
    text: "#0F172A",
    subtext: "#475569",
    border: "rgba(41,190,62,0.14)",
  },
  {
    bg: "#FFFFFF",
    text: "#0F172A",
    subtext: "#475569",
    border: "rgba(15,23,42,0.09)",
  },
  {
    bg: "#0D1F12",
    text: "#FFFFFF",
    subtext: "rgba(255,255,255,0.78)",
    border: "rgba(255,255,255,0.10)",
  },
  {
    bg: "#EDF9EF",
    text: "#0F172A",
    subtext: "#475569",
    border: "rgba(41,190,62,0.14)",
  },
];

const GAP_PX = 24;
const AUTO_SCROLL_SPEED = 26;
const MANUAL_SCROLL_SPEED = 1200;

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function getCardsPerView(width: number) {
  if (width < 768) return 1;
  if (width < 1180) return 2;
  return 3;
}

function ArrowLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.5 5L7.5 12L14.5 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.5 5L16.5 12L9.5 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlaceholderAvatar({
  initials,
  text,
}: {
  initials: string;
  text: string;
}) {
  const isLightText = text === "#FFFFFF";

  return (
    <div
      className="relative flex h-14 w-14 items-center justify-center rounded-full border border-dashed"
      style={{
        backgroundColor: isLightText
          ? "rgba(255,255,255,0.08)"
          : "rgba(41,190,62,0.10)",
        borderColor: isLightText
          ? "rgba(255,255,255,0.22)"
          : "rgba(41,190,62,0.22)",
        color: text,
      }}
      aria-hidden="true"
    >
      <span className="text-sm font-semibold tracking-[0.08em]">
        {initials}
      </span>

      <span
        className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold"
        style={{
          backgroundColor: isLightText ? "#FFFFFF" : "#29BE3E",
          color: isLightText ? "#0F172A" : "#FFFFFF",
        }}
      >
        +
      </span>
    </div>
  );
}

function TestimonialsCarousel() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const middleSetRef = useRef<HTMLDivElement | null>(null);

  const offsetRef = useRef(0);
  const manualShiftRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateLayout = () => {
      const width = viewport.clientWidth;
      const nextCardsPerView = getCardsPerView(width);
      const nextCardWidth =
        (width - GAP_PX * (nextCardsPerView - 1)) / nextCardsPerView;

      setCardsPerView((prev) =>
        prev === nextCardsPerView ? prev : nextCardsPerView,
      );
      setCardWidth((prev) =>
        Math.abs(prev - nextCardWidth) < 0.5 ? prev : nextCardWidth,
      );
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const middleSet = middleSetRef.current;
    const track = trackRef.current;

    if (!middleSet || !track || cardWidth <= 0) return;

    const setWidth = middleSet.scrollWidth;
    offsetRef.current = -setWidth;
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  }, [cardWidth, cardsPerView]);

  useEffect(() => {
    const tick = (time: number) => {
      const track = trackRef.current;
      const middleSet = middleSetRef.current;

      if (!track || !middleSet) {
        animationFrameRef.current = window.requestAnimationFrame(tick);
        return;
      }

      const setWidth = middleSet.scrollWidth;

      if (!setWidth) {
        animationFrameRef.current = window.requestAnimationFrame(tick);
        return;
      }

      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!pausedRef.current) {
        offsetRef.current -= AUTO_SCROLL_SPEED * delta;
      }

      if (Math.abs(manualShiftRef.current) > 0.1) {
        const manualDelta =
          Math.sign(manualShiftRef.current) *
          Math.min(
            Math.abs(manualShiftRef.current),
            MANUAL_SCROLL_SPEED * delta,
          );

        offsetRef.current += manualDelta;
        manualShiftRef.current -= manualDelta;
      }

      while (offsetRef.current <= -2 * setWidth) {
        offsetRef.current += setWidth;
      }

      while (offsetRef.current >= 0) {
        offsetRef.current -= setWidth;
      }

      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = null;
    };
  }, []);

  const movePrev = () => {
    manualShiftRef.current += cardWidth + GAP_PX;
  };

  const moveNext = () => {
    manualShiftRef.current -= cardWidth + GAP_PX;
  };

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div ref={viewportRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          {[0, 1, 2].map((copyIndex) => (
            <div
              key={copyIndex}
              ref={copyIndex === 1 ? middleSetRef : null}
              className="flex shrink-0 gap-6"
            >
              {testimonials.map((item) => {
                const theme = CARD_THEMES[(item.id - 1) % CARD_THEMES.length];

                return (
                  <article
                    key={`${copyIndex}-${item.id}`}
                    className="flex min-h-[420px] shrink-0 flex-col rounded-[28px] border p-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-9"
                    style={{
                      width: `${cardWidth}px`,
                      backgroundColor: theme.bg,
                      borderColor: theme.border,
                    }}
                  >
                    <p
                      className="text-[27px] leading-none"
                      style={{ color: theme.text }}
                      aria-hidden="true"
                    >
                      “
                    </p>

                    <blockquote
                      className="mt-5 text-[1.02rem] leading-8 sm:text-[1.04rem] sm:leading-9"
                      style={{ color: theme.text }}
                    >
                      {item.quote}
                    </blockquote>

                    <div className="mt-auto flex items-center gap-4 pt-8">
                      <PlaceholderAvatar
                        initials={getInitials(item.name)}
                        text={theme.text}
                      />

                      <div>
                        <h3
                          className="text-lg font-semibold leading-tight sm:text-xl"
                          style={{ color: theme.text }}
                        >
                          {item.name}
                        </h3>

                        <p
                          className="mt-1 text-sm leading-6 sm:text-base sm:leading-7"
                          style={{ color: theme.subtext }}
                        >
                          {item.role} • {item.company}
                        </p>

                        <p
                          className="text-sm leading-6 sm:text-base sm:leading-7"
                          style={{ color: theme.subtext }}
                        >
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={movePrev}
          aria-label="Move testimonials backward"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D7EAD9] bg-white text-slate-900 transition hover:bg-[#F5FBF6]"
        >
          <ArrowLeft />
        </button>

        <button
          type="button"
          onClick={moveNext}
          aria-label="Move testimonials forward"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D7EAD9] bg-white text-slate-900 transition hover:bg-[#F5FBF6]"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default function LeapTestimonial() {
  return (
    <section className="bg-[#F8FBF8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-black sm:text-5xl lg:text-7xl">
            Founder stories,
            <span className="block text-[#29BE3E]">built with clarity</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Real feedback from founders and businesses who used Octalve Leap for
            structure, compliance direction, registration support, and better
            startup readiness.
          </p>
        </div>

        <TestimonialsCarousel />
      </div>
    </section>
  );
}
