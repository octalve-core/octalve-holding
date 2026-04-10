// import {
//   Award,
//   Blocks,
//   BriefcaseBusiness,
//   Building2,
//   ShieldCheck,
//   type LucideIcon,
// } from "lucide-react";

// const BRAND_COLORS = {
//   red: "#E61525",
//   blue: "#0064E0",
//   yellow: "#29BE3E",
//   green: "#FC7E24",
//   purple: "#2A006D",
// };

// const SECTION_COLORS = {
//   white: "#FFFFFF",
//   border: "#E5E7EB",
//   statText: "#134E4A",
// };

// type TractionStat = {
//   label: string;
//   value: string;
//   icon: LucideIcon;
//   iconColor: string;
// };

// const tractionStats: TractionStat[] = [
//   {
//     label: "Projects Delivered",
//     value: "128+",
//     icon: BriefcaseBusiness,
//     iconColor: BRAND_COLORS.red,
//   },
//   {
//     label: "Businesses Supported",
//     value: "50+",
//     icon: Building2,
//     iconColor: BRAND_COLORS.blue,
//   },
//   {
//     label: "Solutions Built",
//     value: "100+",
//     icon: Blocks,
//     iconColor: BRAND_COLORS.yellow,
//   },
//   {
//     label: "2025 Awards",
//     value: "3",
//     icon: Award,
//     iconColor: BRAND_COLORS.green,
//   },
//   {
//     label: "Support Access",
//     value: "24/7",
//     icon: ShieldCheck,
//     iconColor: BRAND_COLORS.purple,
//   },
//   // {
//   //   label: "Client Satisfaction",
//   //   value: "99%",
//   //   icon: ShieldCheck,
//   //   iconColor: BRAND_COLORS.purple,
//   // },
// ];

// export default function QuickAccessTraction() {
//   return (
//     <section
//       // Added a custom soft, diffused shadow (shadow-xl with low opacity)
//       className="relative px-4 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] sm:px-6 md:py-16"
//       style={{ backgroundColor: SECTION_COLORS.white }}
//     >
//       <div className="mx-auto max-w-[1360px]">
//         <div
//           // Responsive grid layout: 1 col on mobile, center aligned
//           className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
//         >
//           {tractionStats.map((stat, index) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={stat.label}
//                 className={`flex flex-col items-center justify-center px-4 text-center ${
//                   index !== tractionStats.length - 1 ? "lg:border-r" : ""
//                 }`}
//                 style={{
//                   borderColor:
//                     index !== tractionStats.length - 1
//                       ? SECTION_COLORS.border
//                       : "transparent",
//                 }}
//               >
//                 <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500 sm:text-xs">
//                   {stat.label}
//                 </p>

//                 <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row">
//                   <span
//                     className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border"
//                     style={{
//                       color: stat.iconColor,
//                       borderColor: `${stat.iconColor}20`,
//                       backgroundColor: `${stat.iconColor}08`,
//                     }}
//                     aria-hidden="true"
//                   >
//                     <Icon className="h-5 w-5" strokeWidth={1.75} />
//                   </span>

//                   <h3
//                     // Changed font to medium and refined tracking
//                     className="text-4xl font-medium tracking-tight sm:text-5xl"
//                     style={{ color: SECTION_COLORS.statText }}
//                   >
//                     {stat.value}
//                   </h3>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  Award,
  Blocks,
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const BRAND_COLORS = {
  red: "#E61525",
  blue: "#0064E0",
  yellow: "#29BE3E",
  green: "#FC7E24",
  purple: "#2A006D",
};

const SECTION_COLORS = {
  white: "#FFFFFF",
  border: "#E5E7EB",
  statText: "#134E4A",
};

type TractionStat = {
  label: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
};

const tractionStats: TractionStat[] = [
  {
    label: "Projects Delivered",
    value: "128+",
    icon: BriefcaseBusiness,
    iconColor: BRAND_COLORS.red,
  },
  {
    label: "Businesses Supported",
    value: "50+",
    icon: Building2,
    iconColor: BRAND_COLORS.blue,
  },
  {
    label: "Solutions Built",
    value: "100+",
    icon: Blocks,
    iconColor: BRAND_COLORS.yellow,
  },
  {
    label: "2025 Awards",
    value: "3",
    icon: Award,
    iconColor: BRAND_COLORS.green,
  },
  {
    label: "Support Access",
    value: "24/7",
    icon: ShieldCheck,
    iconColor: BRAND_COLORS.purple,
  },
  // {
  //   label: "Client Satisfaction",
  //   value: "99%",
  //   icon: ShieldCheck,
  //   iconColor: BRAND_COLORS.purple,
  // },
];

export default function QuickAccessTraction() {
  return (
    <section
      // Soft, very light, well-spread shadow with broad blur
      className="relative px-4 py-12 shadow-[0_25px_60px_rgba(0,0,0,0.03)] sm:px-6 md:py-20"
      style={{ backgroundColor: SECTION_COLORS.white }}
    >
      <div className="mx-auto max-w-[1360px]">
        <div
          // Added gap-x-6 for mobile horizontal spacing and gap-y-16 for vertical breathing room
          className="grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-3 lg:grid-cols-5"
        >
          {tractionStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                // Centered content for a flawless, balanced mobile look
                className={`flex flex-col items-center justify-center text-center ${
                  index !== tractionStats.length - 1
                    ? "lg:border-r lg:px-4"
                    : "lg:px-4"
                }`}
                style={{
                  borderColor:
                    index !== tractionStats.length - 1
                      ? SECTION_COLORS.border
                      : "transparent",
                }}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                  {stat.label}
                </p>

                <div className="mt-4 flex flex-col items-center gap-2 sm:mt-6 sm:flex-row sm:gap-4">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border sm:h-12 sm:w-12"
                    style={{
                      color: stat.iconColor,
                      borderColor: `${stat.iconColor}18`,
                      backgroundColor: `${stat.iconColor}05`,
                    }}
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.5} />
                  </span>

                  <h3
                    // Clean Medium weight, elegant size scaling
                    className="text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl"
                    style={{ color: SECTION_COLORS.statText }}
                  >
                    {stat.value}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
