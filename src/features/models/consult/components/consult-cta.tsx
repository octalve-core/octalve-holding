"use client";

import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  LayoutPanelTop,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

export default function ConsultCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#2A006D] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_32%),linear-gradient(180deg,#3A0A8D_0%,#2A006D_48%,#1E0250_100%)]" />

        <div className="absolute left-[10%] top-[18%] text-white/14">
          <Target className="h-8 w-8" strokeWidth={1.35} />
        </div>
        <div className="absolute right-[14%] top-[22%] text-white/14">
          <BriefcaseBusiness className="h-8 w-8" strokeWidth={1.35} />
        </div>
        <div className="absolute left-[16%] bottom-[24%] rotate-[-8deg] text-white/12">
          <BadgeCheck className="h-7 w-7" strokeWidth={1.35} />
        </div>
        <div className="absolute right-[18%] bottom-[20%] rotate-[8deg] text-white/12">
          <LayoutPanelTop className="h-7 w-7" strokeWidth={1.35} />
        </div>
        <div className="absolute left-[48%] top-[16%] text-white/10">
          <Sparkles className="h-6 w-6" strokeWidth={1.35} />
        </div>
        <div className="absolute right-[8%] bottom-[14%] text-white/10">
          <Rocket className="h-7 w-7" strokeWidth={1.35} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
          Get clear. <span className="text-[#7DB5FF]">Build better.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
          Strategy, structure, and launch guidance designed to help founders,
          professionals, and growing businesses make better decisions and move
          with more confidence.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-[#e00000] px-8 text-sm font-semibold uppercase tracking-[0.02em] text-white transition hover:brightness-110"
          >
            Book a Clarity Session
          </Link>

          <Link
            href="/models/consult"
            className="inline-flex min-h-[56px] items-center justify-center rounded-md border border-white/16 bg-white/10 px-8 text-sm font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-white/14"
          >
            Explore Octalve Consult
          </Link>
        </div>
      </div>
    </section>
  );
}
