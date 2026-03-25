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
      "Octalve helped us refine our brand presence and deliver a clean, professional branding that actually supports enquiries. The process was structured, communication was clear, and they paid attention to details that matter for customer trust. Since launching, our online presentation looks more credible and easier for clients to interact with.",
    name: "Dr. Akerele Ronke",
    role: "Founder",
    company: "SapphireQuest Travels and Tour",
    location: "Abuja",
  },
  {
    id: 2,
    quote:
      "Working with Octalve was a smooth experience from discovery to delivery. They didn’t just build a website—they built a system that reflects our organization and improves how we receive and manage enquiries. Their execution discipline and support after launch stood out.",
    name: "Prof. Rabiu Babatunde",
    role: "Founder",
    company: "NSEE Org.",
    location: "Abuja",
  },
  {
    id: 3,
    quote:
      "Octalve delivered a modern brand look and a website that feels premium and conversion-focused. What impressed me most was how they guided us through the structure, content, and user journey instead of just designing pages. The result is a stronger digital presence that supports growth.",
    name: "Dr. Michael Ojo",
    role: "Founder",
    company: "Gotooeasy Homes and Travels",
    location: "Lagos",
  },
  {
    id: 4,
    quote:
      "Octalve brought clarity and quality to our brand logo and identity delivery. The logo is clean, aesthetic, and well organised, and their support approach is professional. I appreciated the speed, documentation, and how they made the entire process easy.",
    name: "Sarah A.",
    role: "Founder",
    company: "IHHConsulting",
    location: "Canada",
  },
  {
    id: 5,
    quote:
      "Octalve delivered a clean, professional brand direction and website experience that matches our industry standard. Their team was structured, responsive, and clear about timelines and deliverables. The final output improved how our company presents itself online and how enquiries are handled.",
    name: "Victor Emaka",
    role: "MD",
    company: "Mayport Oil and Gas",
    location: "Lagos",
  },
  {
    id: 6,
    quote:
      "Octalve approached our project with strong execution discipline. From brand clarity, structure and technical delivery, everything was handled professionally. Communication was consistent, and the final result was modern, fast, and easy to scale—exactly what we needed.",
    name: "Abraham Akinwale",
    role: "Founder",
    company: "AIICOTECH",
    location: "USA",
  },
  {
    id: 7,
    quote:
      "What stood out about Octalve was their ability to translate our ideas into a clear brand identity that supports conversion. They gave helpful guidance on structure and messaging, and their deployment support made launch smooth.",
    name: "Angel Akinwale",
    role: "Founder",
    company: "DSF Inc.",
    location: "USA",
  },
  {
    id: 8,
    quote:
      "Octalve helped us build a strong digital foundation—branding, website structure, and technical setup. Their delivery was thoughtful and detail-oriented, and they made the process easy even when we had multiple moving parts. We’re satisfied with the quality and professionalism.",
    name: "Haleemah A.",
    role: "Founder",
    company: "SafedeenHQ",
    location: "Lagos",
  },
];

const CARD_THEMES = [
  {
    bg: "#F8E7C9",
    text: "#111827",
    subtext: "#374151",
    border: "rgba(17,24,39,0.08)",
  },
  {
    bg: "#D9F0FF",
    text: "#0F172A",
    subtext: "#334155",
    border: "rgba(15,23,42,0.08)",
  },
  {
    bg: "#FCE2E5",
    text: "#111827",
    subtext: "#475569",
    border: "rgba(17,24,39,0.08)",
  },
  {
    bg: "#0F172A",
    text: "#FFFFFF",
    subtext: "rgba(255,255,255,0.78)",
    border: "rgba(255,255,255,0.12)",
  },
  {
    bg: "#FFFFFF",
    text: "#0F172A",
    subtext: "#475569",
    border: "rgba(15,23,42,0.09)",
  },
  {
    bg: "#E8F5E9",
    text: "#0F172A",
    subtext: "#475569",
    border: "rgba(15,23,42,0.08)",
  },
  {
    bg: "#EEF2FF",
    text: "#0F172A",
    subtext: "#475569",
    border: "rgba(15,23,42,0.08)",
  },
  {
    bg: "#EFF6FF",
    text: "#0F172A",
    subtext: "#475569",
    border: "rgba(15,23,42,0.08)",
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
          : "rgba(255,255,255,0.28)",
        borderColor: isLightText
          ? "rgba(255,255,255,0.24)"
          : "rgba(15,23,42,0.14)",
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
          backgroundColor: isLightText ? "#FFFFFF" : "#0F172A",
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
                      className="flex min-h-[420px] flex-col rounded-[28px] border p-7 sm:p-9"
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
                        className="mt-5 text-[1.06rem] leading-9"
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
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50"
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
                page === index ? "w-8 bg-[#0B7CFF]" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonials"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default function LabTestimonials() {
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
    <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-black sm:text-5xl lg:text-7xl">
            Real client wins,
            <span className="block text-[#EF4444]">built with clarity</span>
          </h2>
        </div>

        <TestimonialsCarousel key={cardsPerView} cardsPerView={cardsPerView} />
      </div>
    </section>
  );
}
