// "use client";

// import Link from "next/link";
// import {
//   ArrowUpRight,
//   BriefcaseBusiness,
//   Layers3,
//   Lightbulb,
//   Mail,
// } from "lucide-react";

// export default function HomeCta() {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#0064E0] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,100,224,0.18),transparent_34%),linear-gradient(180deg,#0A1B3D_0%,##0064E0_100%)]" />
//         <div className="absolute left-[10%] top-[24%] text-white/15">
//           <Layers3 className="h-8 w-8" strokeWidth={1.3} />
//         </div>
//         <div className="absolute right-[12%] top-[22%] text-white/14">
//           <Lightbulb className="h-8 w-8" strokeWidth={1.3} />
//         </div>
//         <div className="absolute left-[18%] bottom-[24%] text-white/12">
//           <BriefcaseBusiness className="h-7 w-7" strokeWidth={1.3} />
//         </div>
//         <div className="absolute right-[18%] bottom-[22%] text-white/12">
//           <Mail className="h-7 w-7" strokeWidth={1.3} />
//         </div>
//       </div>

//       <div className="relative z-10 mx-auto max-w-5xl text-center">
//         {/* <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-xs">
//           Octalve
//         </p> */}

//         <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
//           Build smarter. <span className="text-[#ddeeff]">Grow stronger.</span>
//         </h2>

//         <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
//           Explore the Octalve ecosystem across execution, launch support,
//           business growth, and smart service delivery designed for ambitious
//           brands and growing businesses.
//         </p>

//         <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           <Link
//             href="/models/suite"
//             className="inline-flex min-h-[54px] items-center justify-center rounded-md bg-[#000a17] px-6 text-sm font-semibold text-white transition hover:brightness-110"
//           >
//             Suite
//           </Link>

//           <Link
//             href="/models/lab"
//             className="inline-flex min-h-[54px] items-center justify-center rounded-md border border-white/12 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
//           >
//             Lab
//           </Link>

//           <Link
//             href="/models/leap"
//             className="inline-flex min-h-[54px] items-center justify-center rounded-md border border-white/12 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
//           >
//             Leap
//           </Link>

//           <Link
//             href="/contact"
//             className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-md border border-[#5AA9FF]/30 bg-[#000a17]/12 px-6 text-sm font-semibold text-[#B8D9FF] transition hover:bg-[#0064E0]/18"
//           >
//             Contact Us
//             <ArrowUpRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { Layers3, Lightbulb, BriefcaseBusiness, Mail } from "lucide-react";

export default function HomeCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0064E0] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,100,224,0.18),transparent_34%),linear-gradient(180deg,#0A1B3D_0%,#0064E0_100%)]" />
        <div className="absolute left-[10%] top-[24%] text-white/15">
          <Layers3 className="h-8 w-8" strokeWidth={1.3} />
        </div>
        <div className="absolute right-[12%] top-[22%] text-white/14">
          <Lightbulb className="h-8 w-8" strokeWidth={1.3} />
        </div>
        <div className="absolute left-[18%] bottom-[24%] text-white/12">
          <BriefcaseBusiness className="h-7 w-7" strokeWidth={1.3} />
        </div>
        <div className="absolute right-[18%] bottom-[22%] text-white/12">
          <Mail className="h-7 w-7" strokeWidth={1.3} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
          Build smarter. <span className="text-[#ddeeff]">Grow stronger.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
          Explore the Octalve ecosystem across execution, launch support,
          business growth, and smart service delivery designed for ambitious
          brands and growing businesses.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/start-project"
            className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-white px-8 text-sm font-semibold !text-[#0064E0] transition hover:bg-[#F3F8FF]"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
