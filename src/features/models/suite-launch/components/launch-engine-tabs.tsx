"use client";

import Image from "next/image";
import { useState } from "react";
import { launchTabs } from "../launch-data";

export default function LaunchEngineTabs() {
  const [activeTab, setActiveTab] = useState<
    "branding" | "website" | "mediakit"
  >("branding");

  const active = launchTabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-slate-900 sm:text-4xl">
            What’s Inside Your <br className="sm:hidden" />
            Launch Engine
          </h2>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="mx-auto max-w-xl">
            <div className="flex items-center justify-center gap-6 border-b border-slate-200">
              <div className="flex w-full justify-center gap-2 overflow-x-auto px-1 py-2 sm:overflow-visible">
                {launchTabs.map((tab) => {
                  const isActive = tab.id === activeTab;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex flex-none items-center gap-2 border-b-2 px-3 py-3 text-sm font-medium transition ${
                        isActive
                          ? "border-slate-900 text-slate-900"
                          : "border-transparent text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative h-72 w-full sm:h-[420px]">
                  <Image
                    src={active.image}
                    alt={active.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/5 to-transparent" />
              </div>

              <div>
                <h3 className="text-2xl font-medium text-slate-900 sm:text-3xl">
                  {active.title}
                </h3>

                <h4 className="mt-2 text-lg font-medium leading-8 text-slate-700">
                  {active.subtitle}
                </h4>

                <div className="mt-4 max-w-xl space-y-4 text-base leading-8 text-slate-700">
                  {active.description.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>

                <ul className="mt-8 space-y-4 text-sm sm:text-base">
                  {active.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-50">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="#16a34a"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-slate-800">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
