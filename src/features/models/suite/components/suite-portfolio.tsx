"use client";

import Image from "next/image";
import { useState } from "react";
import { portfolioProjects } from "../suite-data";

export default function SuitePortfolio() {
  const [filter, setFilter] = useState<"all" | "Business" | "Branding" | "NGO">(
    "all",
  );

  const filteredProjects =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.type === filter);

  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.22em] text-slate-500">
              PORTFOLIO
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Featured Projects.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
              A selection of our recent work across various industries.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {(["all", "Business", "Branding", "NGO"] as const).map((type) => {
              const active = filter === type;
              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {type === "all" ? "All" : type}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <div className="relative">
                <div className="aspect-square w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="absolute bottom-5 left-5">
                  <div className="rounded-2xl bg-white/80 px-4 py-2 backdrop-blur-md ring-1 ring-white/70 shadow-sm">
                    <div className="text-base font-medium text-slate-900">
                      {project.brand}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {project.subtitle}
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
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
                      className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
