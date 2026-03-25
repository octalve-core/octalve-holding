"use client";

import { useEffect, useMemo, useState } from "react";

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

function chunkTestimonials(items: Testimonial[], size: number) {
  const chunks: (Testimonial | null)[][] = [];

  for (let i = 0; i < items.length; i += size) {
    const group = items.slice(i, i + size);

    if (group.length < size) {
      chunks.push([
        ...group,
        ...Array.from({ length: size - group.length }, () => null),
      ]);
    } else {
      chunks.push(group);
    }
  }

  return chunks;
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

function TestimonialsCarousel({ cardsPerView }: { cardsPerView: number }) {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pages = useMemo(() => {
    return chunkTestimonials(testimonials, cardsPerView);
  }, [cardsPerView]);

  const totalPages = pages.length;

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = window.setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused, totalPages]);

  const next = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {pages.map((pageItems, pageIndex) => (
            <div key={pageIndex} className="w-full shrink-0">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {pageItems.map((item, index) => {
                  if (!item) {
                    return (
                      <div
                        key={`empty-${pageIndex}-${index}`}
                        className="hidden xl:block"
                      />
                    );
                  }

                  const theme = CARD_THEMES[(item.id - 1) % CARD_THEMES.length];

                  return (
                    <article
                      key={item.id}
                      className="flex min-h-[420px] flex-col rounded-[28px] border p-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-9"
                      style={{
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
                        className="mt-5 text-[1.04rem] leading-9"
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
                            className="text-xl font-semibold leading-tight"
                            style={{ color: theme.text }}
                          >
                            {item.name}
                          </h3>

                          <p
                            className="mt-1 text-base leading-7"
                            style={{ color: theme.subtext }}
                          >
                            {item.role} • {item.company}
                          </p>

                          <p
                            className="text-base leading-7"
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
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonials"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D7EAD9] bg-white text-slate-900 transition hover:bg-[#F5FBF6]"
        >
          <ArrowLeft />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial page ${index + 1}`}
              onClick={() => setPage(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                page === index ? "w-8 bg-[#29BE3E]" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonials"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D7EAD9] bg-white text-slate-900 transition hover:bg-[#F5FBF6]"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default function LeapTestimonial() {
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateLayout = () => {
      const nextCardsPerView = getCardsPerView(window.innerWidth);
      setCardsPerView((prev) =>
        prev === nextCardsPerView ? prev : nextCardsPerView,
      );
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

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

        <TestimonialsCarousel key={cardsPerView} cardsPerView={cardsPerView} />
      </div>
    </section>
  );
}
