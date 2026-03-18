"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import brand1 from "@/assets/portfolio/brand1.png";
import brand2 from "@/assets/portfolio/brand2.png";

const SECTION_COLORS = {
  pageBg: "#F8FAFC",
  textDark: "#0F172A",
  textSoft: "#64748B",
  overlay:
    "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.62) 100%)",
  primaryBtn: "#0B7CFF",
  primaryBtnText: "#FFFFFF",
  secondaryBtn: "rgba(255,255,255,0.88)",
  secondaryBtnText: "#0F172A",
  modalBg: "rgba(2, 11, 28, 0.82)",
  closeBg: "rgba(255,255,255,0.92)",
  closeText: "#0F172A",
};

type ShowcaseCard = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
};

const brandingCards: ShowcaseCard[] = [
  {
    id: 1,
    eyebrow: "Brand Identity Showcase",
    title: "Designed to stand out.",
    description:
      "Selected branding work built to help businesses communicate clearly, look premium, and position with confidence.",
    href: "/models/suite",
    image: brand1,
  },
  {
    id: 2,
    eyebrow: "Creative Systems Showcase",
    title: "Advanced. Inside and out.",
    description:
      "From logo systems to visual direction and campaign assets, explore branding projects shaped for clarity and growth.",
    href: "/models/suite",
    image: brand2,
  },
];

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrandingCard({
  item,
  onPreview,
}: {
  item: ShowcaseCard;
  onPreview: (item: ShowcaseCard) => void;
}) {
  return (
    <article className="group relative h-[320px] overflow-hidden rounded-[28px] sm:h-[420px] lg:h-[520px]">
      <button
        type="button"
        onClick={() => onPreview(item)}
        className="absolute inset-0 block h-full w-full"
        aria-label={`Open ${item.title}`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={item.id <= 2}
        />
      </button>

      <div
        className="absolute inset-0"
        style={{ background: SECTION_COLORS.overlay }}
      />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 md:p-10">
        <p className="text-sm font-medium tracking-[0.02em] text-white/85">
          {item.eyebrow}
        </p>

        {/* <h3 className="mt-3 max-w-[16ch] text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-[44px] lg:text-[56px]">
          {item.title}
        </h3> */}

        <p className="mt-4 max-w-[32rem] text-base leading-8 text-white/85">
          {item.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={item.href}
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: SECTION_COLORS.primaryBtn,
              color: SECTION_COLORS.primaryBtnText,
            }}
          >
            Visit Suite
          </Link>

          <button
            type="button"
            onClick={() => onPreview(item)}
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: SECTION_COLORS.secondaryBtn,
              color: SECTION_COLORS.secondaryBtnText,
            }}
          >
            View Image
          </button>
        </div>
      </div>
    </article>
  );
}

export default function BrandingShowcase() {
  const [activeCard, setActiveCard] = useState<ShowcaseCard | null>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveCard(null);
      }
    }

    if (activeCard) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeCard]);

  return (
    <>
      <section
        className="px-4 py-16 sm:px-6 md:py-20"
        style={{ backgroundColor: SECTION_COLORS.pageBg }}
      >
        <div className="mx-auto max-w-[1560px]">
          {/* <div className="mx-auto max-w-[900px] text-center">
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
              Branding Showcase
            </h2>

            <p
              className="mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: SECTION_COLORS.textSoft }}
            >
              Explore selected branding visuals from our portfolio.
            </p>
          </div> */}

          <div className="mt-2 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {brandingCards.map((item) => (
              <BrandingCard
                key={item.id}
                item={item}
                onPreview={setActiveCard}
              />
            ))}
          </div>
        </div>
      </section>

      {activeCard && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6 sm:px-6"
          style={{ backgroundColor: SECTION_COLORS.modalBg }}
          onClick={() => setActiveCard(null)}
        >
          <div
            className="relative w-full max-w-[1500px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCard(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full shadow-sm transition hover:scale-105"
              style={{
                backgroundColor: SECTION_COLORS.closeBg,
                color: SECTION_COLORS.closeText,
              }}
              aria-label="Close image preview"
            >
              <CloseIcon />
            </button>

            <div className="relative h-[72vh] min-h-[320px] w-full overflow-hidden rounded-[28px] bg-black">
              <Image
                src={activeCard.image}
                alt={activeCard.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
