"use client";

import Link from "next/link";
import {
  Globe,
  Layers3,
  MessageSquareMore,
  MonitorSmartphone,
  Palette,
  SquareDashed,
} from "lucide-react";

export default function LabCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#4A0208] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(230,21,37,0.16),transparent_34%),linear-gradient(180deg,#500008_0%,#3A0006_100%)]" />
        <div className="absolute left-[14%] top-[24%] text-white/18">
          <Palette className="h-8 w-8" strokeWidth={1.3} />
        </div>
        <div className="absolute right-[17%] top-[26%] text-white/16">
          <MonitorSmartphone className="h-8 w-8" strokeWidth={1.3} />
        </div>
        <div className="absolute left-[22%] bottom-[34%] rotate-12 text-white/14">
          <SquareDashed className="h-6 w-6" strokeWidth={1.3} />
        </div>
        <div className="absolute right-[22%] bottom-[28%] text-white/14">
          <MessageSquareMore className="h-7 w-7" strokeWidth={1.3} />
        </div>
        <div className="absolute right-[8%] bottom-[18%] text-white/12">
          <Globe className="h-7 w-7" strokeWidth={1.3} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
          Build sharp. <span className="text-[#FF4B57]">Grow bigger.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
          Branding, websites, product design, and digital execution built to
          make your business look stronger and perform better.
        </p>

        <div className="mt-8">
          <Link
            href="/start-project"
            className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-[#F42525] px-8 text-sm font-semibold uppercase tracking-[0.02em] text-white transition hover:brightness-110"
          >
            Start with Octalve Lab
          </Link>
        </div>
      </div>
    </section>
  );
}
