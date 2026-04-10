"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const BRAND = {
  blue: "#0064E0",
  red: "#E61525",
  purple: "#5300D9",
  green: "#29BE3E",
  orange: "#FC7E24",
  lilac: "#E8DFF6",
  ink: "#0F172A",
  text: "#334155",
};

const trustPoints = [
  "Practical support for founders and small businesses",
  "Clear next steps instead of vague advice",
  "Built to help you move with more confidence and direction",
];

export default function ConsultHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: BRAND.lilac }}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
              Octalve Consult
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.25] tracking-tight text-black sm:text-5xl lg:text-[2.35rem]">
              We help you get clear, get organized, launch properly, and grow
              intentionally
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-8 sm:text-lg"
              style={{ color: BRAND.text }}
            >
              Octalve Consult helps founders, professionals, and growing
              businesses move from confusion to clarity with practical support
              across positioning, structure, launch direction, and growth
              planning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#booksession"
                className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-4 text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: BRAND.purple }}
              >
                Book a Clarity Session
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#packages"
                className="inline-flex items-center justify-center rounded-sm px-6 py-4 text-sm font-semibold text-white transition hover:opacity-95"
                style={{
                  backgroundColor: BRAND.red,
                  boxShadow: "0 10px 24px rgba(230,21,37,0.16)",
                }}
              >
                Explore Consulting Services
              </Link>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-1">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: BRAND.green }}
                  />
                  <p
                    className="text-sm leading-6 sm:text-[15px]"
                    style={{ color: BRAND.text }}
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-white/50 bg-white/12 p-4 backdrop-blur-[2px] sm:p-5 lg:p-6">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)",
                  backgroundSize: "84px 84px",
                }}
              />

              <div className="relative min-h-[460px] rounded-[28px] sm:min-h-[560px] lg:min-h-[600px]">
                <div className="absolute left-[10%] top-[10%] hidden h-14 w-14 rounded-full bg-white/45 blur-xl sm:block" />
                <div className="absolute right-[18%] top-[12%] hidden h-16 w-16 rounded-full bg-white/35 blur-xl sm:block" />
                <div className="absolute bottom-[16%] left-[24%] hidden h-16 w-16 rounded-full bg-white/35 blur-xl sm:block" />

                <div className="absolute left-[8%] top-[16%] hidden w-16 rotate-[-8deg] sm:block lg:w-[72px]">
                  <img
                    src="https://api.iconify.design/solar/calendar-linear.svg?color=%230064E0"
                    alt="Calendar icon"
                    className="h-full w-full"
                  />
                </div>

                <div className="absolute right-[8%] bottom-[12%] hidden w-14 rotate-[10deg] sm:block lg:w-16">
                  <img
                    src="https://api.iconify.design/solar/chat-round-dots-linear.svg?color=%23FC7E24"
                    alt="Chat icon"
                    className="h-full w-full"
                  />
                </div>

                <div className="absolute left-[41%] top-[24%] z-20 w-[29%] min-w-[170px] max-w-[230px] rounded-xl bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.10)] sm:p-4">
                  <div className="text-[10px] font-medium text-slate-500 sm:text-xs">
                    Quick discovery form
                  </div>
                  <div className="mt-3 space-y-2.5">
                    <div className="rounded-md border border-slate-200 px-3 py-2 text-[11px] text-slate-400 sm:text-xs">
                      Name
                    </div>
                    <div className="rounded-md border border-slate-200 px-3 py-2 text-[11px] text-slate-400 sm:text-xs">
                      Business email
                    </div>
                    <div
                      className="rounded-md px-3 py-2.5 text-center text-[11px] font-semibold text-white sm:text-xs"
                      style={{ backgroundColor: BRAND.blue }}
                    >
                      Book Strategy Call
                    </div>
                  </div>
                </div>

                <div className="absolute right-[7%] top-[7%] z-20 w-[21%] min-w-[128px] max-w-[180px] rounded-2xl bg-[#7E54F5] p-2 shadow-[0_18px_42px_rgba(15,23,42,0.12)] sm:p-3">
                  <div className="overflow-hidden rounded-[18px] bg-[#EFD8FF]">
                    <img
                      src="https://api.dicebear.com/9.x/notionists/svg?seed=OctalveFounder&backgroundColor=b6e3f4,d1d4f9,fde68a"
                      alt="Founder illustration"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute right-[18%] top-[14%] z-30 w-[25%] min-w-[145px] max-w-[205px] rounded-xl bg-white px-3 py-2 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
                  <div className="flex items-center gap-2 text-[10px] text-slate-600 sm:text-[11px]">
                    <img
                      src="https://api.iconify.design/solar/calendar-linear.svg?color=%230064E0"
                      alt="Mini calendar"
                      className="h-5 w-5 shrink-0"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">
                        Strategy Session
                      </div>
                      <div>14 Nov • 7:00 pm</div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[33%] top-[47%] z-10 hidden w-[18%] min-w-[80px] sm:block">
                  <svg viewBox="0 0 220 120" className="h-auto w-full">
                    <path
                      d="M10 85 C 45 15, 105 110, 210 25"
                      fill="none"
                      stroke="#29BE3E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="8 10"
                    />
                  </svg>
                </div>

                <div className="absolute right-[28%] top-[48%] z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white/35 shadow-[0_10px_30px_rgba(0,100,224,0.16)] backdrop-blur-sm sm:h-24 sm:w-24">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg sm:h-16 sm:w-16"
                    style={{ backgroundColor: BRAND.blue }}
                  >
                    <div className="ml-1 h-0 w-0 border-b-[8px] border-l-[12px] border-t-[8px] border-b-transparent border-l-white border-t-transparent sm:border-b-[9px] sm:border-l-[14px] sm:border-t-[9px]" />
                  </div>
                </div>

                <div className="absolute right-[9%] top-[50%] z-20 w-[23%] min-w-[140px] max-w-[185px] rounded-xl bg-white p-3 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
                  <div className="text-[10px] font-medium text-slate-500 sm:text-xs">
                    Next available
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-1.5 text-center text-[10px] font-medium text-slate-700 sm:text-[11px]">
                    <div className="rounded-md bg-[#F1E8FF] px-2 py-2">Mon</div>
                    <div className="rounded-md border border-slate-200 px-2 py-2">
                      Tue
                    </div>
                    <div className="rounded-md border border-slate-200 px-2 py-2">
                      Wed
                    </div>
                  </div>
                </div>

                <div className="absolute left-[37%] bottom-[8%] z-20 w-[24%] min-w-[152px] max-w-[215px] rounded-2xl bg-[#4E38F0] p-2.5 shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:p-3">
                  <div className="overflow-hidden rounded-[18px] bg-[#B8FFF1]">
                    <img
                      src="https://api.dicebear.com/9.x/notionists/svg?seed=GrowthPlanner&backgroundColor=c0aede,b6e3f4,d1d4f9"
                      alt="Client illustration"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute left-[28%] bottom-[18%] z-20 w-[23%] min-w-[128px] max-w-[178px] rounded-xl bg-white px-3 py-2 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
                  <div className="flex items-center gap-2 text-[10px] text-slate-600 sm:text-[11px]">
                    <img
                      src="https://api.iconify.design/solar/check-circle-linear.svg?color=%2329BE3E"
                      alt="Confirmed icon"
                      className="h-5 w-5 shrink-0"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">
                        Clarity booked
                      </div>
                      <div>Focused advisory session confirmed</div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[60%] bottom-[18%] z-20 w-[24%] min-w-[145px] max-w-[190px] rounded-xl bg-white p-3 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
                  <div className="text-[10px] font-medium text-slate-500 sm:text-xs">
                    Available slots
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-medium text-slate-700 sm:text-[11px]">
                    <div className="rounded-md bg-[#F1E8FF] px-2 py-2 text-center">
                      09:00 am
                    </div>
                    <div className="rounded-md border border-slate-200 px-2 py-2 text-center">
                      09:30 am
                    </div>
                    <div className="rounded-md border border-slate-200 px-2 py-2 text-center">
                      10:30 am
                    </div>
                    <div className="rounded-md border border-slate-200 px-2 py-2 text-center">
                      11:00 am
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
