"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type LabelTone =
  | "strategy"
  | "build"
  | "growth"
  | "popular"
  | "cloud"
  | "assets"
  | "ai"
  | "workspace";

export type ModelIndexItem = {
  name: string;
  title: string;
  href: string;
  image: StaticImageData;
  label: string;
  labelTone: LabelTone;
  type: "Model" | "Product" | "Service" | "Platform";
  summary: string;
  description: string;
  tags: string[];
};

type ModelsGridProps = {
  items: ModelIndexItem[];
  onClearFilters: () => void;
};

const labelClasses: Record<LabelTone, string> = {
  strategy: "bg-[#0F3D33] text-white",
  build: "bg-[#000A16] text-white",
  growth: "bg-[#0064E0] text-white",
  popular: "bg-[#FC7E24] text-white",
  cloud: "bg-[#0A84FF] text-white",
  assets: "bg-[#29BE3E] text-white",
  ai: "bg-[#651FFF] text-white",
  workspace: "bg-[#E61525] text-white",
};

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

function EmptyState({ onClearFilters }: { onClearFilters: () => void }) {
  return (
    <div className="mx-auto max-w-2xl rounded-[32px] border border-slate-200 bg-white px-6 py-12 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:px-10">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0064E0]">
        No match found
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#000A16] sm:text-4xl">
        No model matched your current search.
      </h2>

      <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-slate-600">
        Try searching for strategy, hosting, software, startup, workspace,
        templates, website, AI, or launch support.
      </p>

      <button
        type="button"
        onClick={onClearFilters}
        className="mt-7 inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
      >
        Clear filters
      </button>
    </div>
  );
}

function ModelCard({ item }: { item: ModelIndexItem }) {
  return (
    <Link href={item.href} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_42px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#0064E0]/50 hover:shadow-[0_22px_60px_rgba(0,100,224,0.12)]">
        <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden bg-[#F4F7FB] px-8 py-9">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,100,224,0.12),transparent_38%)]" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-[26px] border border-white bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
            <Image
              src={item.image}
              alt={item.title}
              width={70}
              height={70}
              className="h-[70px] w-[70px] object-contain transition duration-500 group-hover:scale-110"
            />
          </div>

          <span className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0064E0] shadow-sm transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRightIcon />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-600">
              {item.type}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${labelClasses[item.labelTone]}`}
            >
              {item.label}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#000A16] transition group-hover:text-[#0064E0]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
            {item.summary}
          </p>

          <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={`${item.title}-${tag}`}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function ModelsGrid({ items, onClearFilters }: ModelsGridProps) {
  return (
    <section className="bg-[#F7F9FF] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        {items.length === 0 ? (
          <EmptyState onClearFilters={onClearFilters} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <ModelCard key={item.href} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
