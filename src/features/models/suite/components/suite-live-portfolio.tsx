"use client";

import { useMemo, useState } from "react";
import { liveProjects, type LiveProject } from "../suite-data";

function ArrowRight() {
  return <span aria-hidden="true">›</span>;
}

function DeviceIcon({ kind }: { kind: "desktop" | "tablet" | "mobile" }) {
  if (kind === "tablet") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="3"
          width="12"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M10 18h4"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "mobile") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="2.5"
          width="8"
          height="19"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M11 19h2"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 5h16a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8 21h8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10 18v3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M14 18v3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LivePreviewCard({
  project,
  index,
}: {
  project: LiveProject;
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">(
    "desktop",
  );

  const widthMap = {
    desktop: 1120,
    tablet: 820,
    mobile: 420,
  };

  const hostname = useMemo(() => {
    try {
      return new URL(project.url).hostname.replace("www.", "");
    } catch {
      return project.url;
    }
  }, [project.url]);

  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
      <div className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="text-xl font-medium text-slate-900">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{project.subtitle}</p>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              {hostname}
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex items-center gap-2 rounded-2xl bg-slate-50 p-2 ring-1 ring-black/5">
              {(["desktop", "tablet", "mobile"] as const).map((kind) => (
                <button
                  key={kind}
                  onClick={() => setDevice(kind)}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition ${
                    device === kind
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                  }`}
                  aria-label={`${kind} view`}
                >
                  <DeviceIcon kind={kind} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90"
              >
                {expanded ? "Close Preview" : "Open Preview"}
              </button>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-slate-50"
              >
                Open site <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      {expanded ? (
        <div className="border-t border-slate-200 bg-white">
          <div className="px-4 pb-6 sm:px-6">
            <div className="py-4 text-xs font-medium text-slate-500">
              If the site blocks embeds, use “Open site”.
            </div>

            <div className="rounded-t-[28px] bg-slate-900 px-5 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <div className="ml-3 hidden h-7 max-w-[46vw] flex-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-white/10 px-4 text-[12px] font-medium text-white/80 sm:block">
                  {project.url}
                </div>
              </div>
            </div>

            <div className="rounded-b-[28px] bg-slate-950 p-3 shadow-[0_20px_80px_rgba(2,6,23,0.25)]">
              <div className="overflow-hidden rounded-[20px] bg-white ring-1 ring-white/10">
                <div className="bg-slate-100/60 p-3 sm:p-4">
                  <div
                    className="mx-auto overflow-hidden rounded-[16px] bg-white shadow-sm ring-1 ring-slate-200"
                    style={{ width: `${widthMap[device]}px`, maxWidth: "100%" }}
                  >
                    <iframe
                      title={`${project.title} preview`}
                      src={project.url}
                      className="w-full bg-white"
                      style={{ height: "74vh", minHeight: "640px" }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto h-4 w-[86%] rounded-b-[18px] bg-slate-200 shadow-sm" />
            <div className="mx-auto -mt-1 h-2 w-[32%] rounded-b-[999px] bg-slate-300" />
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default function SuiteLivePortfolio() {
  return (
    <section id="live-portfolio" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:py-24">
        <div>
          <p className="text-sm font-medium tracking-[0.22em] text-slate-500">
            LIVE PORTFOLIO
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Featured Website Portfolio
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
            A selection of our recent website projects across various
            industries.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-2">
          {liveProjects.map((project, index) => (
            <LivePreviewCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
