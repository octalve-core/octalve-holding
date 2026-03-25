"use client";

import Image from "next/image";
import Link from "next/link";

import nodeHero from "@/assets/nodehero.jpg";

const tickerItems = [
  "Workspace",
  "Innovation Hub",
  "Office Services",
  "Octalve Lab",
  "Octalve Cloud",
  "Innovation",
  "Team Work",
  "Launchpad",
  "Creator Room",
  "Community",
  "Private Workspace",
  "Meetings",
  "Startup Energy",
  "And More",
];

const marqueeLoop = [...tickerItems, ...tickerItems, ...tickerItems];

export default function NodeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050505]">
      <div className="relative min-h-[760px] sm:min-h-[820px] lg:min-h-[900px]">
        <Image
          src={nodeHero}
          alt="Octalve Node hero background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.52)_58%,rgba(0,0,0,0.80)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1320px] items-center px-5 py-16 sm:px-6 sm:py-20 lg:min-h-[900px] lg:px-8">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/82 backdrop-blur-md sm:text-xs">
              Coming Soon
            </p>

            <h1
              className="mx-auto mt-6 max-w-[980px] text-balance font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-[6.2rem]"
              style={{
                textShadow: "0 10px 30px rgba(0,0,0,0.28)",
              }}
            >
              The intersection of innovation and you.
            </h1>

            <p className="mx-auto mt-6 max-w-[780px] text-base leading-8 text-white/78 sm:text-lg sm:leading-9">
              Octalve Node is where ambitious people, ideas, teams, and
              execution meet — a modern workspace, innovation hub, and office
              services environment designed for creators, founders, and
              businesses building what is next.
            </p>

            <div className="mt-9 flex items-center justify-center">
              <Link
                href="/who-we-are"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-transparent bg-blue-600 px-7 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 sm:px-8 sm:text-base"
              >
                Who We Are
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t border-white/8 bg-[#E61525]">
          <div className="marquee-track flex w-max items-center py-4">
            {marqueeLoop.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex shrink-0 items-center text-white"
              >
                <span className="px-6 text-sm font-semibold uppercase tracking-[0.18em] sm:px-8 sm:text-base">
                  {item}
                </span>
                <span className="text-white/70">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: nodeMarquee 30s linear infinite;
        }

        @keyframes nodeMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
