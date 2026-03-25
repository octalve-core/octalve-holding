"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Megaphone,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Workflow,
} from "lucide-react";

export default function SuiteCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071426] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_34%),linear-gradient(180deg,#0A1B35_0%,#071426_100%)]" />

        <div className="absolute left-[14%] top-[24%] text-white/18">
          <PenTool className="h-8 w-8" strokeWidth={1.3} />
        </div>
        <div className="absolute right-[17%] top-[26%] text-white/16">
          <MonitorSmartphone className="h-8 w-8" strokeWidth={1.3} />
        </div>
        <div className="absolute left-[22%] bottom-[34%] rotate-12 text-white/14">
          <Workflow className="h-6 w-6" strokeWidth={1.3} />
        </div>
        <div className="absolute right-[22%] bottom-[28%] text-white/14">
          <Megaphone className="h-7 w-7" strokeWidth={1.3} />
        </div>
        <div className="absolute right-[8%] bottom-[18%] text-white/12">
          <LayoutDashboard className="h-7 w-7" strokeWidth={1.3} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
          One platform. <span className="text-[#60A5FA]">Zero stress.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
          Branding, websites, launch support, and growth systems designed to
          move your business from idea to market-ready with less friction.
        </p>

        <div className="mt-8">
          <Link
            href="/suite/pricing"
            className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-md bg-[#2563EB] px-8 text-sm font-semibold uppercase tracking-[0.02em] text-white transition hover:brightness-110"
          >
            <Rocket className="h-4 w-4" />
            Explore Octalve Suite
          </Link>
        </div>
      </div>
    </section>
  );
}
