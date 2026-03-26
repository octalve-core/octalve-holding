"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";

import nodeImage from "@/assets/portfolio/models/node.png";
import consultImage from "@/assets/portfolio/models/consult.png";
import labImage from "@/assets/portfolio/models/lab.png";
import leapImage from "@/assets/portfolio/models/leap.png";
import suiteImage from "@/assets/portfolio/models/suite.png";
import cloudImage from "@/assets/portfolio/models/cloud.png";
import vaultImage from "@/assets/portfolio/models/vault.png";
import oneImage from "@/assets/portfolio/models/one.png";

const MODEL_COLORS = {
  pageBg: "#F8FAFC",
  textDark: "#0F172A",
  textSoft: "#64748B",
  border: "#E5E7EB",
  cardBg: "#FFFFFF",
  hoverBg: "#0064EO",
  hoverText: "#FFFFFF",
  arrow: "#134E4A",
  arrowBg: "rgba(255,255,255,0.92)",
  arrowBorder: "#E2E8F0",
};

type ModelCard = {
  title: string;
  href: string;
  image: StaticImageData;
  summary: string;
  details: string;
};

const modelCards: ModelCard[] = [
  {
    title: "Octalve Node",
    href: "/models/node",
    image: nodeImage,
    summary: "Workspace, virtual office, training, and startup support access.",
    details:
      "Co-working access, private workspace, virtual office, meeting room access, training and event hosting, community networking, and startup support environment.",
  },
  {
    title: "Octalve Consult",
    href: "/models/consult",
    image: consultImage,
    summary: "Strategy, advisory, growth planning, and business improvement.",
    details:
      "Business strategy, operations advisory, SOP and process design, sales advisory, growth strategy, digital transformation consulting, human capital advisory, project management, and business audits.",
  },
  {
    title: "Octalve Lab",
    href: "/models/lab",
    image: labImage,
    summary: "Branding, design, websites, apps, and digital product execution.",
    details:
      "Brand identity design, logo design, web design, web development, app design, app development, UI/UX design, product design, digital marketing creatives, e-commerce development, landing pages, and custom software builds.",
  },
  {
    title: "Octalve Leap",
    href: "/models/leap",
    image: leapImage,
    summary:
      "Startup guidance, business setup, readiness, and founder support.",
    details:
      "Startup guidance, idea validation, business registration, licensing support, compliance support, business plan development, pitch deck support, funding readiness, lead generation setup, founder training, and monetization support.",
  },
  {
    title: "Octalve Suite",
    href: "/models/suite",
    image: suiteImage,
    summary: "Launch support, rollout systems, content, and growth materials.",
    details:
      "Business launch support, branding rollout, website setup, lead capture, content creation, payment integration, website updates, monthly design support, marketing asset production, and donor or visibility support.",
  },
  {
    title: "Octalve Cloud",
    href: "/models/cloud",
    image: cloudImage,
    summary: "Domains, hosting, security, migration, maintenance, and uptime.",
    details:
      "Domain registration, web hosting, business email setup, SSL and security setup, website migration, backups, maintenance, performance optimization, and managed hosting support.",
  },
  {
    title: "Octalve Vault",
    href: "/models/vault",
    image: vaultImage,
    summary:
      "Downloadable resources, templates, playbooks, and business tools.",
    details:
      "Self-serve business resources, downloadable templates, learning tools, execution guides, playbooks, and digital kits.",
  },
  {
    title: "Octalve One",
    href: "/models/one",
    image: oneImage,
    summary: "Business software, automation, CRM, analytics, and AI tools.",
    details:
      "Business software solutions, workflow automation, invoicing systems, CRM systems, lead management, booking systems, support tools, analytics, and AI-enabled business tools.",
  },
];

function ChevronLeftIcon() {
  return (
    <svg
      width="28"
      height="28"
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
      width="28"
      height="28"
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

function ArrowUpRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ModelCardItem({ item }: { item: ModelCard }) {
  return (
    <article className="group w-[84vw] max-w-[392px] shrink-0 snap-start overflow-hidden rounded-[24px] border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]">
      <Link href={item.href} className="block h-full">
        <div className="relative h-[230px] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.06]"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 84vw"
          />
        </div>

        <div className="border-t p-6 transition duration-300 group-hover:border-transparent group-hover:bg-green-600">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-slate-900 transition group-hover:text-white">
              {item.title}
            </h3>

            <span className="mt-0.5 shrink-0 text-slate-900 transition group-hover:text-white">
              <ArrowUpRightIcon />
            </span>
          </div>

          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 transition group-hover:text-white/80">
            {item.summary}
          </p>

          <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-600 transition group-hover:text-white">
            {item.details}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default function Models() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <section
      id="models"
      className="px-4 py-16 sm:px-6 md:py-20"
      style={{ backgroundColor: MODEL_COLORS.pageBg }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
            Igniting business growth through expert consulting and innovative
            solutions.
          </h2>

          <p
            className="mx-auto mt-6 max-w-3xl text-base leading-8 sm:text-lg"
            style={{ color: MODEL_COLORS.textSoft }}
          >
            From workspace access and strategic advisory to product design,
            startup support, hosting, resources, and automation, Octalve models
            are built to help businesses launch, operate, and scale with
            confidence.
          </p>
        </div>

        <div className="relative mt-14">
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border shadow-md transition hover:scale-[1.03] md:inline-flex"
            style={{
              backgroundColor: MODEL_COLORS.arrowBg,
              borderColor: MODEL_COLORS.arrowBorder,
              color: MODEL_COLORS.arrow,
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
              backgroundColor: MODEL_COLORS.arrowBg,
              borderColor: MODEL_COLORS.arrowBorder,
              color: MODEL_COLORS.arrow,
            }}
            aria-label="Scroll right"
          >
            <ChevronRightIcon />
          </button>

          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] md:gap-6"
          >
            {modelCards.map((item) => (
              <ModelCardItem key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border"
              style={{
                backgroundColor: MODEL_COLORS.arrowBg,
                borderColor: MODEL_COLORS.arrowBorder,
                color: MODEL_COLORS.arrow,
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
                backgroundColor: MODEL_COLORS.arrowBg,
                borderColor: MODEL_COLORS.arrowBorder,
                color: MODEL_COLORS.arrow,
              }}
              aria-label="Scroll right"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-slate-500">
            Explore the ecosystem.{" "}
            <Link
              href="/models/one"
              className="font-medium !text-green-600 underline underline-offset-4"
            >
              Browse all Products
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
