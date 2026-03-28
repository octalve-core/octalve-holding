"use client";

import { useEffect, useState } from "react";

export default function LeapHero() {
  const brand = {
    green: "#29BE3E",
    blue: "#0064E0",
    orange: "#FC7E24",
    softGreen: "#7DDF8A",
  };

  const rotatingItems = [
    { label: "Startup Guidance", color: brand.green, motion: "word-rise" },
    { label: "Idea Validation", color: brand.blue, motion: "word-zoom" },
    { label: "Registration", color: brand.softGreen, motion: "word-swing" },
    { label: "Licensing", color: brand.orange, motion: "word-slide" },
    { label: "Funding Readiness", color: brand.green, motion: "word-flip" },
    { label: "Founder Enablement", color: brand.blue, motion: "word-blur" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingItems.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [rotatingItems.length]);

  const activeItem = rotatingItems[activeIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#020714] px-4 py-10 sm:px-6 sm:py-10 md:py-6 lg:px-8 lg:py-8">
      <div className="absolute inset-0">
        {/* Base Background & Top Glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 8%, rgba(41, 190, 62, 0.20) 0%, rgba(41, 190, 62, 0.10) 16%, rgba(41, 190, 62, 0.03) 34%, transparent 56%),
              linear-gradient(180deg, #07160A 0%, #041007 48%, #020A04 100%)
            `,
          }}
        />

        {/* Dot Pattern Layer */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 0.8px, transparent 0.8px)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.18))",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.18))",
          }}
        />

        {/* Grid Pattern Layer */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.65), rgba(255,255,255,0.06))",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.65), rgba(255,255,255,0.06))",
          }}
        />

        {/* Main Top Center Glow */}
        <div className="absolute left-1/2 top-0 h-[240px] w-[72%] -translate-x-1/2 rounded-full bg-[#29BE3E]/[0.14] blur-3xl sm:h-[300px] md:h-[360px]" />

        {/* Side Accent Glows */}
        <div className="absolute left-[10%] top-[22%] h-28 w-28 rounded-full bg-[#29BE3E]/[0.07] blur-3xl md:h-40 md:w-40" />
        <div className="absolute right-[10%] top-[20%] h-28 w-28 rounded-full bg-[#FC7E24]/[0.05] blur-3xl md:h-40 md:w-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mx-auto flex min-h-[620px] max-w-[1080px] flex-col items-center justify-center text-center sm:min-h-[680px] md:min-h-[760px]">
          <div
            className="inline-flex max-w-full items-center gap-3 rounded-full border px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-4"
            style={{
              background: "rgba(9,16,30,0.56)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-[11px] font-medium tracking-[-0.02em] text-white/84 sm:text-sm">
              Leap forward. Grow faster with Octalve Leap.
            </span>

            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
              style={{
                background: brand.green,
                boxShadow: "0 8px 18px rgba(41,190,62,0.30)",
              }}
            >
              ↗
            </span>
          </div>

          <h1 className="mt-8 max-w-[340px] text-[2.55rem] font-medium leading-[0.92] tracking-[-0.055em] text-white sm:max-w-[760px] sm:text-[4.2rem] md:mt-10 md:max-w-[980px] md:text-[5.2rem] lg:max-w-[1100px] lg:text-[6rem] xl:text-[6.35rem]">
            <span
              key={activeItem.label}
              className={`inline-block whitespace-nowrap ${activeItem.motion}`}
              style={{
                color: activeItem.color,
                textShadow: `0 0 14px ${activeItem.color}12`,
              }}
            >
              {activeItem.label}
            </span>{" "}
            <span className="text-white">
              that helps founders start stronger and grow with confidence.
            </span>
          </h1>

          <p className="mt-6 max-w-[330px] text-sm leading-7 text-white/68 sm:max-w-[660px] sm:text-base sm:leading-8 md:max-w-[780px] md:text-[1.03rem]">
            From startup guidance and idea validation to registration,
            licensing, compliance, funding readiness, and monetization support,
            Octalve Leap helps founders move from confusion to clear execution.
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:mt-10 sm:max-w-none sm:flex-row">
            <a
              href="#leap"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full px-7 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              style={{
                background: brand.green,
                boxShadow:
                  "0 10px 24px rgba(41,190,62,0.24), inset 0 1px 0 rgba(255,255,255,0.16)",
              }}
            >
              Start With Octalve Leap
            </a>

            <a
              href="/start-project"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border px-7 text-sm font-medium text-white/88 transition-colors duration-300 hover:bg-white/[0.04] sm:w-auto"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(10px)",
              }}
            >
              Get Started
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-center text-sm text-white/70">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{
                background: brand.green,
                boxShadow: `0 0 10px ${brand.green}`,
              }}
            />
            Startup support, registration, licensing, and founder enablement
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes riseFade {
          0% {
            opacity: 0;
            transform: translateY(28px) scale(0.96);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes zoomReveal {
          0% {
            opacity: 0;
            transform: scale(0.8);
            filter: blur(14px);
          }
          70% {
            opacity: 1;
            transform: scale(1.03);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes swingIn {
          0% {
            opacity: 0;
            transform: rotate(-7deg) translateY(16px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: rotate(0deg) translateY(0);
            filter: blur(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(34px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes flipIn {
          0% {
            opacity: 0;
            transform: perspective(700px) rotateX(65deg);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: perspective(700px) rotateX(0deg);
            filter: blur(0);
          }
        }

        @keyframes blurLift {
          0% {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(18px);
            letter-spacing: 0.04em;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
            letter-spacing: normal;
          }
        }

        .word-rise {
          animation: riseFade 0.72s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .word-zoom {
          animation: zoomReveal 0.72s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .word-swing {
          animation: swingIn 0.74s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .word-slide {
          animation: slideInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .word-flip {
          animation: flipIn 0.76s cubic-bezier(0.22, 1, 0.36, 1);
          transform-origin: center bottom;
        }

        .word-blur {
          animation: blurLift 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </section>
  );
}
