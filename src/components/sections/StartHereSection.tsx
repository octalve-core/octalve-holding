"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import start1 from "@/assets/start/start1.png";
import start2 from "@/assets/start/start2.png";
import start3 from "@/assets/start/start3.png";

const START_HERE_COLORS = {
  sectionBg: "#F3F4F6",
  cardBg: "rgba(255,255,255,0.8)",
  cardBorder: "rgba(0,0,0,0.035)",
  cardShadow: "0 1px 2px rgba(15,23,42,0.02)",
  cardHoverShadow: "0 18px 40px rgba(15,23,42,0.045)",
  imageBg: "#ECEFF3",
  headingText: "#111827",
  bodyText: "#667085",
  buttonBg: "#0064E0",
  buttonHoverBg: "#0057C2",
  buttonText: "#FFFFFF",
  browseCardBg: "rgba(255,255,255,0.9)",
  browseCardBorder: "rgba(0,0,0,0.04)",
  browseMutedText: "#667085",
  browseStrongText: "#111827",
  browseIcon: "#98A2B3",
};

type StartHereCard = {
  id: number;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
};

const startHereCards: StartHereCard[] = [
  {
    id: 1,
    title: "Get clarity, direction, and structure for your business",
    description:
      "Start with Octalve Consult to clarify your ideas, refine your offer, and build a practical path for growth.",
    href: "/models/consult",
    image: start1,
  },
  {
    id: 2,
    title: "Build your brand, website, and digital presence",
    description:
      "Work with Octalve Lab for branding, design, websites, and digital execution that positions your business better.",
    href: "/models/lab",
    image: start2,
  },
  {
    id: 3,
    title: "Handle registration, licensing, and business setup",
    description:
      "Use Octalve Leap for registration, licensing, and setup support that helps you launch with more confidence.",
    href: "/models/leap",
    image: start3,
  },
];

function StartHereCardItem({ card }: { card: StartHereCard }) {
  return (
    <article
      className="group h-full rounded-[28px] p-4 transition-all duration-300 hover:-translate-y-0.5 sm:p-5"
      style={{
        backgroundColor: START_HERE_COLORS.cardBg,
        boxShadow: START_HERE_COLORS.cardShadow,
        border: `1px solid ${START_HERE_COLORS.cardBorder}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = START_HERE_COLORS.cardHoverShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = START_HERE_COLORS.cardShadow;
      }}
    >
      <Link
        href={card.href}
        className="flex h-full flex-col"
        aria-label={card.title}
      >
        <div
          className="relative aspect-[16/10] overflow-hidden rounded-[20px]"
          style={{ backgroundColor: START_HERE_COLORS.imageBg }}
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            priority={card.id === 1}
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 33vw, 100vw"
          />
        </div>

        <div className="relative z-[1] flex flex-1 flex-col pt-5 sm:pt-6">
          <h3
            className="max-w-[24ch] text-[1.22rem] font-medium leading-[1.34] tracking-[-0.022em] sm:text-[1.34rem]"
            style={{ color: START_HERE_COLORS.headingText }}
          >
            {card.title}
          </h3>

          <p
            className="mt-3 block text-[15px] leading-[1.82] tracking-[-0.01em] sm:text-[15.5px]"
            style={{ color: START_HERE_COLORS.bodyText }}
          >
            {card.description}
          </p>

          <div className="mt-6 pt-1">
            <span
              className="inline-flex items-center gap-2 rounded-[12px] px-4 py-3 text-[14px] font-medium tracking-[-0.01em] transition duration-200"
              style={{
                backgroundColor: START_HERE_COLORS.buttonBg,
                color: START_HERE_COLORS.buttonText,
              }}
            >
              View services
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function StartHereSection() {
  return (
    <section
      id="start"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      style={{ backgroundColor: START_HERE_COLORS.sectionBg }}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[920px] text-center">
          <h2
            className="text-balance text-[2rem] font-medium leading-[1.06] tracking-[-0.045em] sm:text-[2.7rem] lg:text-[4rem]"
            style={{ color: START_HERE_COLORS.headingText }}
          >
            Start With What You Need Most
          </h2>

          <p
            className="mx-auto mt-5 max-w-[760px] text-pretty text-[16px] leading-[1.8] tracking-[-0.012em] sm:text-[18px]"
            style={{ color: START_HERE_COLORS.bodyText }}
          >
            Whether you need business clarity, branding and digital execution,
            or support with registration and licensing, this gives you the best
            place to begin without confusion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {startHereCards.map((card) => (
            <StartHereCardItem key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="#models"
            className="inline-flex w-full max-w-[430px] items-center justify-center gap-2 rounded-[16px] px-5 py-4 text-center transition duration-200 sm:w-auto sm:min-w-[340px]"
            aria-label="Browse all Octalve models"
            style={{
              backgroundColor: START_HERE_COLORS.browseCardBg,
              border: `1px solid ${START_HERE_COLORS.browseCardBorder}`,
            }}
          >
            <span
              className="text-[15px] font-normal tracking-[-0.01em]"
              style={{ color: START_HERE_COLORS.browseMutedText }}
            >
              Ready to explore?
            </span>

            <span
              className="text-[15px] font-medium tracking-[-0.015em]"
              style={{ color: START_HERE_COLORS.browseStrongText }}
            >
              Browse all models
            </span>

            <ChevronDown
              className="h-4 w-4"
              strokeWidth={1.9}
              style={{ color: START_HERE_COLORS.browseIcon }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
