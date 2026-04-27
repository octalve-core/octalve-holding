// import Image from "next/image";
// import Link from "next/link";
// import bixpodBg from "@/assets/trends/explore.jpg";

// export default function BixpodHero() {
//   return (
//     <section className="relative isolate overflow-hidden">
//       <div className="absolute inset-0">
//         <Image
//           src={bixpodBg}
//           alt="Bixpod"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/85" />
//       </div>

//       <div className="relative mx-auto flex min-h-[60vh] max-w-[1280px] items-center justify-center px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
//         <div className="max-w-3xl">
//           <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-white/85 backdrop-blur-sm">
//             Bixpod
//           </span>
//           <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
//             A community for curious minds to connect and grow.
//           </h1>

//           <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
//             Bixpod brings Bix-Clan to life as a vibrant space for fresh
//             perspectives, bold conversations, shared learning, and meaningful
//             connections that support personal growth and collective progress.
//           </p>

//           <div className="mt-8 flex items-center justify-center">
//             <Link
//               href="https://chat.whatsapp.com/HNjv8sDxn8kGVxIXTPjVxL"
//               className="inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
//             >
//               Join us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const infoCards = [
  {
    icon: Users,
    title: "Who it is for",
    text: "Founders, creatives, operators, and emerging entrepreneurs who want clarity, structure, and a stronger path to growth.",
  },
  {
    icon: Sparkles,
    title: "What selected members get",
    text: "Practical guidance, community support, execution-focused learning, and access to a high-intent network built for real progress.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Current status",
    text: "Applications for this intake are closed. Join the community now to be first in line when the next selection opens.",
  },
];

const quickLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "REQUIREMENTS", href: "#requirements" },
  { label: "BENEFITS", href: "#benefits" },
  { label: "FAQS", href: "#faqs" },
];

function HeroPattern() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-[84%] rounded-b-[42px] bg-[#045CF6] sm:rounded-b-[72px]" />

      <div
        className="absolute inset-x-0 top-0 h-[84%] rounded-b-[42px] opacity-40 sm:rounded-b-[72px]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 22px 22px, rgba(255,255,255,0.10) 0 10px, transparent 10px),
            radial-gradient(circle at 68px 22px, rgba(255,255,255,0.06) 0 14px, transparent 14px)
          `,
          backgroundSize: "116px 64px",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[#F3F4F6]" />

      <div className="absolute inset-x-0 top-[73%] h-[12%]">
        <div className="absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-[#045CF6] sm:h-36 sm:w-36" />
        <div className="absolute left-[8%] bottom-0 h-28 w-28 rounded-full bg-[#045CF6] sm:h-40 sm:w-40" />
        <div className="absolute left-[24%] bottom-0 h-24 w-24 rounded-full bg-[#045CF6] sm:h-36 sm:w-36" />
        <div className="absolute left-[40%] bottom-0 h-28 w-28 rounded-full bg-[#045CF6] sm:h-44 sm:w-44" />
        <div className="absolute left-[58%] bottom-0 h-24 w-24 rounded-full bg-[#045CF6] sm:h-36 sm:w-36" />
        <div className="absolute left-[74%] bottom-0 h-28 w-28 rounded-full bg-[#045CF6] sm:h-40 sm:w-40" />
        <div className="absolute right-[6%] bottom-0 h-24 w-24 rounded-full bg-[#045CF6] sm:h-36 sm:w-36" />
        <div className="absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-[#045CF6] sm:h-36 sm:w-36" />
      </div>
    </>
  );
}

function SearchDevice() {
  return (
    <div className="relative mx-auto h-[210px] w-[290px] sm:h-[280px] sm:w-[420px] lg:h-[330px] lg:w-[520px]">
      <div className="absolute left-1/2 top-0 h-8 w-20 -translate-x-1/2 rounded-full bg-white/90 shadow-[0_6px_0_#000]" />
      <div className="absolute left-1/2 top-7 h-7 w-16 -translate-x-1/2 rounded-full bg-[#143A8F] ring-2 ring-black">
        <div className="absolute inset-2 rounded-full bg-[#7ED0FF]" />
      </div>

      <div className="absolute left-1/2 top-[52px] h-6 w-[84px] -translate-x-1/2 rounded-full bg-[#16336D] ring-[3px] ring-black sm:w-[110px]" />

      <div className="absolute left-[12px] top-[48px] h-[120px] w-[120px] rounded-full border-[10px] border-black bg-[#F7D117] shadow-[0_8px_0_#000] sm:left-[52px] sm:h-[170px] sm:w-[170px] sm:border-[14px]" />
      <div className="absolute right-[12px] top-[48px] h-[120px] w-[120px] rounded-full border-[10px] border-black bg-[#F7D117] shadow-[0_8px_0_#000] sm:right-[52px] sm:h-[170px] sm:w-[170px] sm:border-[14px]" />

      <div className="absolute left-[28px] top-[64px] h-[88px] w-[88px] rounded-full border-[3px] border-black bg-[#F2F2F2] sm:left-[72px] sm:h-[138px] sm:w-[138px]" />
      <div className="absolute right-[28px] top-[64px] h-[88px] w-[88px] rounded-full border-[3px] border-black bg-[#F2F2F2] sm:right-[72px] sm:h-[138px] sm:w-[138px]" />

      <div className="absolute left-1/2 top-[92px] h-[18px] w-[76px] -translate-x-1/2 rounded-full border-[3px] border-black bg-[#17346B] sm:top-[118px] sm:h-[24px] sm:w-[100px]" />

      <div className="absolute left-1/2 bottom-[44px] h-[64px] w-[64px] -translate-x-1/2 rounded-full border-[4px] border-black bg-white shadow-[0_8px_0_#000] sm:bottom-[56px] sm:h-[84px] sm:w-[84px]">
        <div className="absolute inset-[10px] rounded-full border-[3px] border-dashed border-[#045CF6]" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#045CF6]" />
      </div>

      <div className="absolute left-1/2 bottom-0 h-[26px] w-[160px] -translate-x-1/2 rounded-full border-[3px] border-black bg-[#F6E4A9] shadow-[0_8px_0_#000] sm:h-[30px] sm:w-[210px]" />

      <div className="absolute left-[10px] top-[22px] rounded-full bg-white px-2 py-1 text-[10px] font-extrabold text-[#0F172A] shadow-[0_4px_0_#000] sm:left-[36px] sm:text-xs">
        FOCUS
      </div>
      <div className="absolute right-[8px] top-[24px] rounded-full bg-white px-2 py-1 text-[10px] font-extrabold text-[#0F172A] shadow-[0_4px_0_#000] sm:right-[30px] sm:text-xs">
        CLARITY
      </div>
    </div>
  );
}

export default function IAMimpactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F3F4F6]">
      <HeroPattern />

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 pb-8 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-14">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,430px)] lg:gap-10">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md sm:text-xs">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F7D117]" />
              #IAMimpact Community
            </span>

            <h1 className="mt-6 text-white">
              <span className="block text-[clamp(1.9rem,4vw,4.2rem)] font-semibold leading-[1.05]">
                The search for the
              </span>

              <span className="mt-1 block text-[clamp(4.4rem,12vw,9.5rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white [-webkit-text-stroke:2px_#000] [text-shadow:6px_6px_0_#000] sm:[-webkit-text-stroke:3px_#000] sm:[text-shadow:8px_8px_0_#000]">
                IMPACT 15
              </span>

              <span className="mt-2 block text-[clamp(1.7rem,4vw,3.2rem)] font-semibold leading-none">
                is on
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/88 sm:text-base sm:leading-8 lg:text-lg">
              A focused opportunity for serious builders who want more than
              inspiration. #IAMimpact is for founders, creatives, and emerging
              entrepreneurs ready to move from scattered effort to clearer
              direction, stronger structure, and practical growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-xs">
              <span className="rounded-full border border-white/18 bg-white/10 px-3 py-2">
                Clarity
              </span>
              <span className="rounded-full border border-white/18 bg-white/10 px-3 py-2">
                Structure
              </span>
              <span className="rounded-full border border-white/18 bg-white/10 px-3 py-2">
                Execution
              </span>
              <span className="rounded-full border border-white/18 bg-white/10 px-3 py-2">
                Community
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="https://chat.whatsapp.com/HNjv8sDxn8kGVxIXTPjVxL"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-[#F6E4A9] px-7 py-4 text-sm font-extrabold text-[#0F172A] shadow-[0_7px_0_#000] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Join the Community
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Explore the Programme
              </Link>
            </div>

            <div className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-black bg-[#F6E4A9] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[#0F172A] shadow-[0_6px_0_#000]">
              Applications currently closed
            </div>
          </div>

          <div className="grid gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
            {infoCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-[28px] border-2 border-black bg-[#0B47B8] p-5 text-white shadow-[0_8px_0_#000] sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/14">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-extrabold leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/88">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 mt-7 flex justify-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm">
            <ArrowDown className="h-5 w-5" />
          </span>
        </div>

        <div className="relative z-10 -mt-2 pb-6 pt-6 sm:pb-10 sm:pt-10">
          <SearchDevice />
        </div>

        <div className="relative z-10 border-t border-black/8 pt-4 sm:pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold tracking-[0.08em] text-[#1E293B] sm:justify-between">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
