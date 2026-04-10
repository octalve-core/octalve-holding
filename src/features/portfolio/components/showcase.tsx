"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  brandingProjects,
  portfolioFilters,
  type BrandingProject,
  type PortfolioFilter,
  type WebsiteProject,
  websiteProjects,
} from "../portfolio-data";

const SECTION_COLORS = {
  pageBg: "#F8FAFC",
  overlay:
    "linear-gradient(180deg, rgba(2, 6, 23, 0.02) 0%, rgba(2, 6, 23, 0.34) 100%)",
  primaryBtn: "#0B7CFF",
  primaryBtnText: "#FFFFFF",
  controlBg: "rgba(15, 23, 42, 0.32)",
  controlBorder: "rgba(255,255,255,0.45)",
  controlText: "#FFFFFF",
  websiteCardBg: "#0B1220",
};

function PauseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 6.5V17.5M16 6.5V17.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8.5 6.8C8.5 6.04 9.33 5.56 10 5.97L18.35 11.17C18.98 11.56 18.98 12.44 18.35 12.83L10 18.03C9.33 18.44 8.5 17.96 8.5 17.2V6.8Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium tracking-[0.18em] text-slate-500">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-[2.2rem] sm:leading-[1.1]">
        {title}
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-[1.02rem]">
        {description}
      </p>
    </div>
  );
}

function WebsitePortfolioCard({ item }: { item: WebsiteProject }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        setHasError(false);
        video.load();
        video.currentTime = 0;
        await video.play();
        setIsPaused(false);
      } catch {
        setIsPaused(true);
      }
    };

    playVideo();
  }, [item.id]);

  const handleTogglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPaused(false);
      } catch {
        setIsPaused(true);
      }
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <article className="group overflow-hidden rounded-[26px] bg-[#0B1220] shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/9] lg:aspect-[16/8]">
        <div className="absolute inset-0 bg-[#0B1220]" />

        <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
          {!hasError ? (
            <video
              key={item.id}
              ref={videoRef}
              className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.01]"
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
              onError={() => setHasError(true)}
            >
              <source src={item.videoSrc} type="video/webm" />
            </video>
          ) : (
            <div className="px-6 text-center text-sm text-white/75">
              Video preview unavailable
            </div>
          )}
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: SECTION_COLORS.overlay }}
        />

        <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
          <div className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
            {item.name}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-6 md:p-8">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={item.ariaLabel}
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition hover:opacity-90 sm:px-6 sm:py-3"
            style={{
              backgroundColor: SECTION_COLORS.primaryBtn,
              color: SECTION_COLORS.primaryBtnText,
            }}
          >
            {item.buttonLabel}
          </a>

          <button
            type="button"
            onClick={handleTogglePlayback}
            aria-label={isPaused ? "Play video" : "Pause video"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition hover:scale-105 sm:h-12 sm:w-12"
            style={{
              backgroundColor: SECTION_COLORS.controlBg,
              borderColor: SECTION_COLORS.controlBorder,
              color: SECTION_COLORS.controlText,
            }}
          >
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </button>
        </div>
      </div>
    </article>
  );
}

function BrandingPortfolioCard({
  project,
  onOpen,
}: {
  project: BrandingProject;
  onOpen: (project: BrandingProject) => void;
}) {
  return (
    <article className="group overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-label={`Open ${project.title} project preview`}
      >
        <div className="relative">
          <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
            <div className="rounded-2xl bg-white/82 px-4 py-2 shadow-sm ring-1 ring-white/70 backdrop-blur-md">
              <div className="text-sm font-medium text-slate-900 sm:text-base">
                {project.brand}
              </div>
            </div>
          </div>
        </div>
      </button>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium tracking-[-0.02em] text-slate-900">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{project.subtitle}</p>
          </div>

          <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 sm:text-xs">
            {project.type.toUpperCase()}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-700">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function BrandingPreviewModal({
  project,
  onClose,
}: {
  project: BrandingProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/72 backdrop-blur-sm"
      />

      <div className="relative z-[121] w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(15,23,42,0.28)]">
        <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[320px] bg-slate-100 sm:min-h-[420px] lg:min-h-[640px]">
            <Image
              src={project.image}
              alt={`${project.title} full preview`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="relative p-6 sm:p-8 lg:p-10">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
            >
              <CloseIcon />
            </button>

            <div className="pr-14">
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-700">
                {project.type}
              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-slate-950 sm:text-3xl">
                {project.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-500 sm:text-base">
                {project.subtitle}
              </p>

              <p className="mt-6 text-base leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-8">
                <p className="text-sm font-medium tracking-[0.12em] text-slate-500">
                  PROJECT TAGS
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[22px] bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="text-sm text-slate-500">Brand</p>
                <p className="mt-1 text-lg font-medium text-slate-950">
                  {project.brand}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState<PortfolioFilter>("all");
  const [selectedBrandingProject, setSelectedBrandingProject] =
    useState<BrandingProject | null>(null);

  const showWebsites = filter === "all" || filter === "Website";
  const showBranding = filter === "all" || filter === "Branding";

  return (
    <>
      <section
        id="portfolio-showcase"
        className="bg-[#F8FAFC]"
        style={{ backgroundColor: SECTION_COLORS.pageBg }}
      >
        <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.22em] text-slate-500">
                PORTFOLIO
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Selected projects.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                A simple and mature collection of our website and branding work.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {portfolioFilters.map((item) => {
                const active = filter === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {item === "all" ? "All" : item}
                  </button>
                );
              })}
            </div>
          </div>

          {showWebsites ? (
            <div className={showBranding ? "mt-14 sm:mt-16" : "mt-10 sm:mt-12"}>
              <SectionHeader
                eyebrow="WEBSITE PROJECTS"
                title="Websites we’ve designed and built."
                description="Live website previews presented in a cleaner and more immersive format."
              />

              <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-8">
                {websiteProjects.map((item) => (
                  <WebsitePortfolioCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ) : null}

          {showBranding ? (
            <div className={showWebsites ? "mt-20 sm:mt-24" : "mt-10 sm:mt-12"}>
              <SectionHeader
                eyebrow="BRANDING PROJECTS"
                title="Brand identities and visual systems."
                description="A refined selection of identity and visual work across business, NGO, and growth-focused brands."
              />

              <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
                {brandingProjects.map((project) => (
                  <BrandingPortfolioCard
                    key={project.id}
                    project={project}
                    onOpen={setSelectedBrandingProject}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <BrandingPreviewModal
        project={selectedBrandingProject}
        onClose={() => setSelectedBrandingProject(null)}
      />
    </>
  );
}
