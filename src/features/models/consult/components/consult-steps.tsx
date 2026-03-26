"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  LayoutPanelTop,
  Rocket,
  Sparkles,
} from "lucide-react";

const BRAND = {
  blue: "#0064E0",
  red: "#E61525",
  green: "#29BE3E",
  orange: "#FC7E24",
  lilac: "#E8DFF6",
  purpleDeep: "#2A006D",
  purpleMid: "#4B0AA3",
  purpleSoft: "#7E54F5",
  line: "rgba(255,255,255,0.22)",
  white: "#FFFFFF",
};

type StepItem = {
  id: number;
  tag: string;
  title: string;
  description: string;
  eyebrow: string;
  panelTitle: string;
  panelText: string;
  accent: string;
  iconUrl: string;
  chips: string[];
  details: string[];
};

const STEPS: StepItem[] = [
  {
    id: 1,
    tag: "STEP 01",
    title: "Clarify the real problem",
    description:
      "We start by identifying what is actually slowing you down, whether it is positioning, structure, weak offers, or uncertainty about your next move.",
    eyebrow: "Clarity first",
    panelTitle: "Find the gap before you waste more time",
    panelText:
      "Get a focused consulting direction around your business, offer, audience, or growth decisions so your next step is based on clarity, not guesswork.",
    accent: BRAND.blue,
    iconUrl:
      "https://api.iconify.design/solar/magnifer-linear.svg?color=%230064E0",
    chips: ["Positioning", "Offer Audit", "Decision Clarity"],
    details: ["Current challenge", "Priority goals", "Best next move"],
  },
  {
    id: 2,
    tag: "STEP 02",
    title: "Build the right structure",
    description:
      "We help you shape the offer, process, and working structure that makes your business easier to explain, easier to run, and easier to grow.",
    eyebrow: "Structure matters",
    panelTitle: "Turn scattered effort into a clearer system",
    panelText:
      "From customer flow to offer packaging and simple business systems, we help you organize what should happen next so the business does not feel messy.",
    accent: BRAND.orange,
    iconUrl:
      "https://api.iconify.design/solar/widget-4-linear.svg?color=%23FC7E24",
    chips: ["Offer Blueprint", "Workflow", "Service Flow"],
    details: ["What you sell", "How it works", "What improves first"],
  },
  {
    id: 3,
    tag: "STEP 03",
    title: "Launch and grow with direction",
    description:
      "Once the path is clear, we help you move into practical execution with the right priorities for launch, visibility, and intentional growth.",
    eyebrow: "Move with confidence",
    panelTitle: "Launch properly and grow more intentionally",
    panelText:
      "You leave with clearer actions, stronger direction, and a more confident path for growth instead of trying to do everything at once.",
    accent: BRAND.green,
    iconUrl:
      "https://api.iconify.design/solar/rocket-2-linear.svg?color=%2329BE3E",
    chips: ["Launch Roadmap", "Growth Priorities", "Focused Execution"],
    details: ["Launch steps", "Growth focus", "What to act on now"],
  },
];

function BrowserDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
    </div>
  );
}

function StepIllustration({ step }: { step: StepItem }) {
  const accentGlow = useMemo(
    () => ({
      background: `radial-gradient(circle, ${step.accent}33 0%, transparent 70%)`,
    }),
    [step.accent],
  );

  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-4 sm:min-h-[320px] sm:p-5 lg:p-6">
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
        style={accentGlow}
      />
      <div className="absolute -bottom-12 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

      <div className="relative rounded-[20px] bg-white/10 p-3 backdrop-blur-sm sm:p-4">
        <div className="flex items-center justify-between gap-4 rounded-[16px] bg-white/95 px-4 py-3 text-slate-900 shadow-sm">
          <BrowserDots />
          <div className="text-[11px] font-medium text-slate-500 sm:text-xs">
            Octalve Consult Workflow
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-3 rounded-[18px] bg-white/95 p-4 text-slate-900 shadow-sm">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 sm:text-xs"
              style={{ backgroundColor: `${step.accent}18` }}
            >
              <img src={step.iconUrl} alt="Step icon" className="h-4 w-4" />
              {step.eyebrow}
            </div>

            <div>
              <h3 className="text-lg font-bold leading-tight sm:text-xl">
                {step.panelTitle}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[15px]">
                {step.panelText}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {step.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-3 py-1.5 text-[11px] font-medium text-slate-700 sm:text-xs"
                  style={{
                    borderColor: `${step.accent}50`,
                    backgroundColor: `${step.accent}12`,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-[18px] bg-white/95 p-4 text-slate-900 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Guided focus
                  </p>
                  <h4 className="mt-2 text-base font-bold sm:text-lg">
                    What this step helps you solve
                  </h4>
                </div>
                <div
                  className="rounded-2xl p-3"
                  style={{ backgroundColor: `${step.accent}16` }}
                >
                  <img
                    src={step.iconUrl}
                    alt="Step illustration"
                    className="h-8 w-8 sm:h-9 sm:w-9"
                  />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {step.details.map((detail, index) => (
                  <div
                    key={detail}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 px-3 py-3"
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: step.accent }}
                    >
                      {index + 1}
                    </div>
                    <p className="text-sm text-slate-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] bg-white/95 p-4 text-slate-900 shadow-sm">
                <div
                  className="inline-flex rounded-2xl p-2.5"
                  style={{ backgroundColor: `${step.accent}16` }}
                >
                  <Sparkles
                    className="h-4 w-4"
                    style={{ color: step.accent }}
                  />
                </div>
                <div className="mt-3 text-sm font-semibold">
                  Practical, not abstract
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                  You get action-focused guidance that fits where your business
                  is now.
                </p>
              </div>

              <div className="rounded-[18px] bg-white/95 p-4 text-slate-900 shadow-sm">
                <div
                  className="inline-flex rounded-2xl p-2.5"
                  style={{ backgroundColor: `${step.accent}16` }}
                >
                  {step.id === 1 ? (
                    <CalendarDays
                      className="h-4 w-4"
                      style={{ color: step.accent }}
                    />
                  ) : step.id === 2 ? (
                    <LayoutPanelTop
                      className="h-4 w-4"
                      style={{ color: step.accent }}
                    />
                  ) : (
                    <Rocket
                      className="h-4 w-4"
                      style={{ color: step.accent }}
                    />
                  )}
                </div>
                <div className="mt-3 text-sm font-semibold">
                  Clear next-step direction
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                  Each stage makes the next move easier to understand and easier
                  to act on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-6 hidden sm:block">
        <img
          src="https://api.iconify.design/solar/arrow-right-up-linear.svg?color=%2300D39B"
          alt="Decorative arrow"
          className="h-10 w-10 opacity-90"
        />
      </div>

      <div className="absolute left-[48%] top-[50%] hidden -translate-x-1/2 -translate-y-1/2 sm:block">
        <svg viewBox="0 0 120 120" className="h-12 w-12 lg:h-14 lg:w-14">
          <path
            d="M12 84 C 18 30, 92 102, 108 46"
            fill="none"
            stroke="#00D39B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 10"
          />
        </svg>
      </div>
    </div>
  );
}

export default function ConsultSteps() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) => (current === STEPS.length ? 1 : current + 1));
    }, 20000);

    return () => window.clearInterval(interval);
  }, []);

  const currentStep = STEPS.find((step) => step.id === activeStep) ?? STEPS[0];

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: BRAND.lilac }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Move from confusion to clarity in three focused steps
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Octalve Consult gives founders, professionals, and growing
            businesses a simpler path to get clear, build the right structure,
            and move forward with more confidence.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-[32px] p-5 sm:mt-12 sm:p-7 lg:p-8"
          style={{
            background: `linear-gradient(180deg, ${BRAND.purpleMid} 0%, ${BRAND.purpleDeep} 100%)`,
            boxShadow: "0 24px 80px rgba(42, 0, 109, 0.22)",
          }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10">
            <div className="relative">
              <div className="absolute left-[15px] top-4 hidden h-[calc(100%-32px)] w-px bg-white/20 sm:block" />

              <div className="space-y-5 sm:space-y-6">
                {STEPS.map((step) => {
                  const isActive = step.id === activeStep;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStep(step.id)}
                      className="group block w-full text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative z-10 mt-1 flex flex-col items-center">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium transition-all duration-500"
                            style={{
                              borderColor: isActive
                                ? "#FACC15"
                                : "rgba(255,255,255,0.26)",
                              backgroundColor: isActive
                                ? "#FACC15"
                                : "rgba(255,255,255,0.12)",
                              color: isActive ? "#1F2937" : "#FFFFFF",
                              boxShadow: isActive
                                ? "0 0 0 4px rgba(250,204,21,0.12)"
                                : "none",
                            }}
                          >
                            {step.id}
                          </div>
                        </div>

                        <div className="flex-1 pb-1">
                          <div className="inline-flex rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/90 sm:text-[11px]">
                            {step.tag}
                          </div>

                          <h3 className="mt-3 text-2xl font-medium leading-tight text-white transition-opacity duration-300 sm:text-[2rem]">
                            {step.title}
                          </h3>

                          <div
                            className={`overflow-hidden transition-all duration-500 ease-out ${isActive ? "mt-3 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"}`}
                          >
                            <p className="max-w-md text-sm leading-7 text-white/80 sm:text-[1rem]">
                              {step.description}
                            </p>
                          </div>

                          {step.id === 3 ? (
                            <div
                              className={`overflow-hidden transition-all duration-500 ease-out ${isActive ? "mt-5 max-h-20 opacity-100" : "mt-0 max-h-0 opacity-0"}`}
                            >
                              <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-95"
                                style={{ backgroundColor: "#FACC15" }}
                              >
                                Book Now
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div key={currentStep.id} className="animate-[fadeIn_.55s_ease]">
                <StepIllustration step={currentStep} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
