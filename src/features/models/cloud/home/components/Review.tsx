"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type ReviewItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  source: string;
  tags: string[];
  href?: string;
  avatarSrc?: string;
  initials: string;
  featuredIcon?: "cloud" | "hosting" | "wordpress";
};

const reviews: ReviewItem[] = [
  {
    id: "review-1",
    quote:
      "Octalve Cloud made it easier for us to move from idea to a live online presence without the usual confusion around domains, hosting, and setup.",
    name: "Amina Yusuf",
    role: "Founder, Retail Brand",
    source: "Domain + Hosting",
    tags: ["Domains", "Web Hosting", "Launch"],
    initials: "AY",
    featuredIcon: "cloud",
  },
  {
    id: "review-2",
    quote:
      "The setup felt simple, clean, and professional. We got our business email and site running faster than expected, and everything felt aligned from day one.",
    name: "Daniel Okoro",
    role: "Operations Lead",
    source: "Email",
    tags: ["Email", "SSL", "Business Setup"],
    initials: "DO",
    featuredIcon: "hosting",
  },
  {
    id: "review-3",
    quote:
      "Migration support was smooth and the hosting feels stable. It gave us more confidence to focus on growth instead of technical issues.",
    name: "Zainab Bello",
    role: "Creative Business Owner",
    source: "Migration + Hosting",
    tags: ["Migration", "Hosting", "Support"],
    initials: "ZB",
    featuredIcon: "wordpress",
  },
  {
    id: "review-4",
    quote:
      "Octalve Cloud helped us present a more credible brand online with better email, cleaner structure, and infrastructure we can actually grow with.",
    name: "Tosin Adeyemi",
    role: "Marketing Consultant",
    source: "Brand Presence",
    tags: ["Email", "Security", "Growth"],
    initials: "TA",
    featuredIcon: "cloud",
  },
];

const duplicatedReviews = [...reviews, ...reviews];
const GAP = 24;

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#DDE7FF] px-4 py-1.5 text-sm font-medium text-slate-700">
      {children}
    </span>
  );
}

function ReviewIcon({ type }: { type?: ReviewItem["featuredIcon"] }) {
  const baseClass =
    "flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1F63] text-white shadow-sm";

  if (type === "hosting") {
    return (
      <div className={baseClass} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M4 7h16M4 12h16M4 17h10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (type === "wordpress") {
    return (
      <div className={baseClass} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8.8 8.5l2.4 7 1.5-4 1.5 4 2.1-7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={baseClass} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M6 15.5c1.2-1.8 2.7-2.7 4.5-2.7S13.8 13.7 15 15.5M8 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4.5 17.5h15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function RatingStrip() {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base">
      <span className="font-medium text-slate-800">Trusted by clients</span>

      <div className="flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-slate-900 text-xs text-white"
          >
            ★
          </span>
        ))}
      </div>

      <span className="text-slate-500">Growing with Octalve Cloud</span>
    </div>
  );
}

function Avatar({
  avatarSrc,
  initials,
  name,
}: {
  avatarSrc?: string;
  initials: string;
  name: string;
}) {
  if (avatarSrc) {
    return (
      <img
        src={avatarSrc}
        alt={name}
        className="h-12 w-12 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm font-medium text-slate-700">
      {initials}
    </div>
  );
}

function ReviewCard({ item }: { item: ReviewItem }) {
  const content = (
    <article className="flex h-full min-h-[360px] flex-col rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <ReviewIcon type={item.featuredIcon} />

      <blockquote className="mt-6 text-[1.32rem] font-medium leading-[1.6] tracking-[-0.02em] text-slate-700">
        “{item.quote}”
      </blockquote>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
          {item.source}
        </span>

        {item.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 pt-10">
        <div className="flex items-center gap-4">
          <Avatar
            avatarSrc={item.avatarSrc}
            initials={item.initials}
            name={item.name}
          />

          <div>
            <p className="text-lg font-medium text-slate-900">{item.name}</p>
            <p className="text-sm text-slate-500">{item.role}</p>
          </div>
        </div>

        {item.href ? (
          <span className="hidden text-sm font-medium text-[#0064E0] md:inline-flex">
            Read story
          </span>
        ) : null}
      </div>
    </article>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}

export default function CloudReview() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(320);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const updateWidths = () => {
      const width = el.clientWidth;

      if (window.innerWidth >= 1024) {
        setCardWidth((width - GAP * 2) / 3);
        return;
      }

      if (window.innerWidth >= 768) {
        setCardWidth((width - GAP) / 2);
        return;
      }

      setCardWidth(width * 0.88);
    };

    updateWidths();

    const resizeObserver = new ResizeObserver(() => updateWidths());
    resizeObserver.observe(el);
    window.addEventListener("resize", updateWidths);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  const distance = useMemo(
    () => reviews.length * (cardWidth + GAP),
    [cardWidth],
  );

  const duration = useMemo(() => {
    const pxPerSecond = 42;
    return Math.max(distance / pxPerSecond, 24);
  }, [distance]);

  return (
    <section className="overflow-hidden bg-black">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center text-white">
          <SectionBadge>Trusted by clients</SectionBadge>

          <h2 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            They launched online —
            <br className="hidden sm:block" />
            now it’s your turn
          </h2>

          <RatingStrip />
        </div>

        <div className="relative mt-12 sm:mt-14">
          <div className="review-fade pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16" />
          <div className="review-fade pointer-events-none absolute inset-y-0 right-0 z-10 w-10 rotate-180 sm:w-16" />

          <div
            ref={stageRef}
            className="mx-auto max-w-[1280px] overflow-hidden"
          >
            <div
              className="review-track flex items-stretch gap-6"
              style={
                {
                  "--marquee-distance": `-${distance}px`,
                  animationDuration: `${duration}s`,
                } as React.CSSProperties
              }
            >
              {duplicatedReviews.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <ReviewCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .review-fade {
          background: linear-gradient(
            to right,
            rgba(248, 250, 252, 1),
            rgba(248, 250, 252, 0)
          );
        }

        .review-track {
          will-change: transform;
          animation-name: cloud-review-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .review-track:hover {
          animation-play-state: paused;
        }

        @keyframes cloud-review-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(var(--marquee-distance));
          }
        }
      `}</style>
    </section>
  );
}
