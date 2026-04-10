"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import frame1 from "@/assets/portfolio/brand1.png";
import frame2 from "@/assets/portfolio/brand2.png";

const SECTION_COLORS = {
  pageBg: "#F8FAFC",
  textDark: "#0F172A",
  textSoft: "#64748B",
  modalBg: "rgba(2, 11, 28, 0.82)",
  closeBg: "rgba(255,255,255,0.92)",
  closeText: "#0F172A",
  ctaBg: "#E61525",
  ctaText: "#FFFFFF",
};

type ProjectFrame = {
  id: number;
  title: string;
  image: StaticImageData;
};

const projectFrames: ProjectFrame[] = [
  {
    id: 1,
    title: "Featured Project 1",
    image: frame1,
  },
  {
    id: 2,
    title: "Featured Project 2",
    image: frame2,
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

function ProjectCard({
  item,
  onOpen,
}: {
  item: ProjectFrame;
  onOpen: (item: ProjectFrame) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group relative block h-[240px] w-full overflow-hidden rounded-[28px] bg-white text-left shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:h-[320px] lg:h-[420px]"
      aria-label={`Open ${item.title}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={item.id <= 2}
      />

      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-black/12 transition duration-300 group-hover:bg-black/18" />
      <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_-30px_80px_rgba(0,0,0,0.12)]" />
    </button>
  );
}

export default function LabBranding() {
  const [activeFrame, setActiveFrame] = useState<ProjectFrame | null>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveFrame(null);
      }
    }

    if (activeFrame) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeFrame]);

  return (
    <>
      <section
        className="px-4 py-16 sm:px-6 md:py-20"
        style={{ backgroundColor: SECTION_COLORS.pageBg }}
      >
        <div className="mx-auto max-w-[1560px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[900px] text-center lg:text-left">
              <h2 className="text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-black sm:text-3xl md:text-4xl">
                Featured Projects
              </h2>

              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg lg:mx-0"
                style={{ color: SECTION_COLORS.textSoft }}
              >
                Explore selected visual highlights from our project portfolio.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-[1.02] hover:opacity-95"
                style={{
                  backgroundColor: SECTION_COLORS.ctaBg,
                  color: SECTION_COLORS.ctaText,
                }}
              >
                More Portfolio
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-10">
            {projectFrames.map((item) => (
              <ProjectCard key={item.id} item={item} onOpen={setActiveFrame} />
            ))}
          </div>
        </div>
      </section>

      {activeFrame && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6"
          style={{ backgroundColor: SECTION_COLORS.modalBg }}
          onClick={() => setActiveFrame(null)}
        >
          <div
            className="relative w-full max-w-[1500px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveFrame(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full shadow-sm transition hover:scale-105"
              style={{
                backgroundColor: SECTION_COLORS.closeBg,
                color: SECTION_COLORS.closeText,
              }}
              aria-label="Close image preview"
            >
              <CloseIcon />
            </button>

            <div className="relative h-[72vh] min-h-[320px] w-full overflow-hidden rounded-[28px] bg-black shadow-[0_24px_70px_rgba(0,0,0,0.30)]">
              <Image
                src={activeFrame.image}
                alt={activeFrame.title}
                fill
                className="object-contain"
                sizes="100vw"
              />

              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-black/8" />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_-40px_100px_rgba(0,0,0,0.12)]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
