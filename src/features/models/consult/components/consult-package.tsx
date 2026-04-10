// "use client";

// import { useMemo, useState } from "react";

// const BRAND = {
//   blue: "#0064E0",
//   red: "#E61525",
//   green: "#29BE3E",
//   orange: "#FC7E24",
//   text: "#334155",
//   ink: "#0F172A",
//   border: "#E6EAF2",
//   soft: "#F8FAFC",
// };

// type Audience = "Individuals" | "Businesses";

// type PackageCard = {
//   title: string;
//   audience: Audience;
//   eyebrow: string;
//   summary: string;
//   problem: string;
//   solution: string;
//   accent: string;
//   iconUrl: string;
//   artStyle: "rings" | "grid" | "signal" | "flow";
// };

// const PACKAGES: PackageCard[] = [
//   {
//     audience: "Individuals",
//     eyebrow: "For professionals, founders, and students",
//     title: "Personal Brand Strategy",
//     summary: "Build a personal brand people trust and remember.",
//     problem:
//       "You have value, but people do not quickly understand what you do or why they should take you seriously.",
//     solution:
//       "We help you clarify your message, positioning, and brand direction so your profile, presence, and communication feel stronger and more credible.",
//     accent: BRAND.blue,
//     iconUrl:
//       "https://api.iconify.design/solar/user-id-linear.svg?color=%230064E0",
//     artStyle: "rings",
//   },
//   {
//     audience: "Individuals",
//     eyebrow: "For first-time founders and side hustlers",
//     title: "Startup Launch Roadmap",
//     summary: "Get a practical roadmap to launch your business with clarity.",
//     problem:
//       "You want to start something meaningful, but the process feels confusing and you are unsure what to do first.",
//     solution:
//       "We help you define the idea, audience, next steps, and launch direction so you can move forward with more confidence and less guesswork.",
//     accent: BRAND.orange,
//     iconUrl:
//       "https://api.iconify.design/solar/rocket-2-linear.svg?color=%23FC7E24",
//     artStyle: "flow",
//   },
//   {
//     audience: "Businesses",
//     eyebrow: "For service businesses and growing teams",
//     title: "Offer & Sales Blueprint",
//     summary:
//       "Turn your idea or service into an offer people can understand and buy.",
//     problem:
//       "Your service may be good, but customers still feel confused about what you offer, how it works, or why they should say yes.",
//     solution:
//       "We help you shape the offer, pricing direction, and sales flow so your business becomes easier to explain, present, and sell.",
//     accent: BRAND.red,
//     iconUrl:
//       "https://api.iconify.design/solar/chart-square-linear.svg?color=%23E61525",
//     artStyle: "grid",
//   },
//   {
//     audience: "Businesses",
//     eyebrow: "For businesses that feel scattered",
//     title: "Business Structure Setup",
//     summary:
//       "Create a more organized business with clear systems and workflow.",
//     problem:
//       "Operations feel messy, too much depends on you, and the business lacks a simple structure that can support growth.",
//     solution:
//       "We help you organize roles, workflow, and process direction so the business runs with more order, clarity, and consistency.",
//     accent: BRAND.green,
//     iconUrl:
//       "https://api.iconify.design/solar/widget-4-linear.svg?color=%2329BE3E",
//     artStyle: "signal",
//   },
// ];

// function ArtPanel({
//   accent,
//   iconUrl,
//   artStyle,
// }: {
//   accent: string;
//   iconUrl: string;
//   artStyle: PackageCard["artStyle"];
// }) {
//   const tint = `${accent}12`;
//   const strongTint = `${accent}22`;

//   return (
//     <div
//       className="relative h-[220px] overflow-hidden rounded-b-[28px] border-t sm:h-[240px]"
//       style={{
//         borderColor: BRAND.border,
//         background:
//           artStyle === "rings"
//             ? `radial-gradient(circle at center, ${strongTint} 0%, ${strongTint} 18%, transparent 18%, transparent 34%, ${tint} 34%, ${tint} 35%, transparent 35%, transparent 51%, ${tint} 51%, ${tint} 52%, transparent 52%), linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`
//             : artStyle === "grid"
//               ? `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`
//               : artStyle === "signal"
//                 ? `linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%)`
//                 : `linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`,
//         backgroundSize:
//           artStyle === "grid" ? "86px 86px, 86px 86px, auto" : undefined,
//       }}
//     >
//       <div className="absolute inset-0">
//         <div
//           className="absolute left-6 top-6 h-16 w-16 rounded-full blur-2xl"
//           style={{ backgroundColor: `${accent}18` }}
//         />
//         <div
//           className="absolute bottom-6 right-6 h-16 w-16 rounded-full blur-2xl"
//           style={{ backgroundColor: `${accent}14` }}
//         />
//       </div>

//       {artStyle === "flow" ? (
//         <div className="absolute inset-0">
//           <svg viewBox="0 0 600 260" className="h-full w-full">
//             <path
//               d="M40 170 C 120 40, 240 230, 360 120 S 520 100, 560 56"
//               fill="none"
//               stroke={accent}
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeDasharray="10 10"
//               opacity="0.75"
//             />
//             <path
//               d="M515 46 L560 56 L532 84"
//               fill="none"
//               stroke={accent}
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               opacity="0.75"
//             />
//           </svg>
//         </div>
//       ) : null}

//       {artStyle === "signal" ? (
//         <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-3 px-8 opacity-70">
//           {Array.from({ length: 11 }).map((_, index) => (
//             <span
//               key={index}
//               className="rounded-full"
//               style={{
//                 width: 4,
//                 height: index % 2 === 0 ? 18 : 30,
//                 backgroundColor: index === 5 ? accent : "rgba(15,23,42,0.16)",
//               }}
//             />
//           ))}
//         </div>
//       ) : null}

//       <div className="absolute inset-0 flex items-center justify-center">
//         <div
//           className="relative flex h-28 w-28 items-center justify-center rounded-full shadow-sm transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-32"
//           style={{ backgroundColor: accent }}
//         >
//           <img
//             src={iconUrl}
//             alt="Package illustration"
//             className="h-14 w-14 brightness-0 invert sm:h-16 sm:w-16"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function PackageCardView({
//   item,
//   index,
//   audience,
// }: {
//   item: PackageCard;
//   index: number;
//   audience: Audience;
// }) {
//   const animationName =
//     audience === "Individuals"
//       ? index % 2 === 0
//         ? "slideUpFade"
//         : "slideRightFade"
//       : index % 2 === 0
//         ? "slideLeftFade"
//         : "slideUpFade";

//   return (
//     <article
//       className="group flex h-full flex-col overflow-hidden rounded-[28px] border bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(15,23,42,0.10)]"
//       style={{
//         borderColor: BRAND.border,
//         boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
//         animation: `${animationName} 0.7s ease both`,
//         animationDelay: `${index * 120}ms`,
//       }}
//     >
//       <div className="flex flex-1 flex-col p-6 sm:p-7 md:p-8">
//         <div
//           className="inline-flex w-fit rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
//           style={{
//             backgroundColor: `${item.accent}12`,
//             color: item.accent,
//           }}
//         >
//           {item.eyebrow}
//         </div>

//         <h3
//           className="mt-4 text-2xl font-medium tracking-tight sm:text-[1.75rem]"
//           style={{ color: BRAND.ink }}
//         >
//           {item.title}
//         </h3>

//         <p
//           className="mt-3 text-base font-medium leading-7"
//           style={{ color: BRAND.ink }}
//         >
//           {item.summary}
//         </p>

//         <div className="mt-6 flex-1 space-y-5">
//           <div>
//             <h6 className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
//               The problem
//             </h6>
//             <p
//               className="mt-2 text-sm leading-7 sm:text-[15px]"
//               style={{ color: BRAND.text }}
//             >
//               {item.problem}
//             </p>
//           </div>

//           <div>
//             <h6 className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
//               How this helps
//             </h6>
//             <p
//               className="mt-2 text-sm leading-7 sm:text-[15px]"
//               style={{ color: BRAND.text }}
//             >
//               {item.solution}
//             </p>
//           </div>
//         </div>
//       </div>

//       <ArtPanel
//         accent={item.accent}
//         iconUrl={item.iconUrl}
//         artStyle={item.artStyle}
//       />
//     </article>
//   );
// }

// export default function ConsultPackagesRefined() {
//   const [activeAudience, setActiveAudience] = useState<Audience>("Individuals");

//   const visiblePackages = useMemo(
//     () => PACKAGES.filter((item) => item.audience === activeAudience),
//     [activeAudience],
//   );

//   const activeAccent =
//     activeAudience === "Individuals" ? BRAND.blue : BRAND.red;

//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
//         <div className="mx-auto max-w-3xl text-center">
//           <div className="flex justify-center">
//             <div className="grid w-full max-w-[560px] grid-cols-2 rounded-[22px] border border-slate-200 bg-slate-50 p-2 shadow-sm sm:p-2.5">
//               {(["Individuals", "Businesses"] as Audience[]).map((audience) => {
//                 const isActive = activeAudience === audience;
//                 const accent =
//                   audience === "Individuals" ? BRAND.blue : BRAND.red;

//                 return (
//                   <button
//                     key={audience}
//                     type="button"
//                     onClick={() => setActiveAudience(audience)}
//                     className="rounded-[16px] px-5 py-4 text-sm font-medium transition-all duration-300 sm:px-8 sm:py-5 sm:text-base"
//                     style={{
//                       backgroundColor: isActive ? accent : "transparent",
//                       color: isActive ? "#FFFFFF" : BRAND.ink,
//                       boxShadow: isActive
//                         ? "0 12px 28px rgba(15,23,42,0.10)"
//                         : "none",
//                       transform: isActive
//                         ? "translateY(-1px)"
//                         : "translateY(0)",
//                     }}
//                   >
//                     {audience}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           <h2 className="mt-7 text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
//             Consulting packages built around real business problems
//           </h2>

//           <p
//             className="mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg"
//             style={{ color: BRAND.text }}
//           >
//             Octalve Consult is structured to help individuals and businesses
//             solve confusion, improve direction, and move with more clarity,
//             structure, and confidence.
//           </p>
//         </div>

//         <div
//           className="mt-10 rounded-[28px] border px-5 py-6 sm:mt-12 sm:px-6 sm:py-7 lg:px-8"
//           style={{
//             borderColor: `${activeAccent}18`,
//             background: `linear-gradient(180deg, ${activeAccent}05 0%, #FFFFFF 36%)`,
//           }}
//         >
//           <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <div
//                 className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
//                 style={{
//                   backgroundColor: `${activeAccent}12`,
//                   color: activeAccent,
//                 }}
//               >
//                 {activeAudience}
//               </div>
//               <h4 className="mt-3 text-2xl font-medium text-slate-950 sm:text-[2rem]">
//                 {activeAudience === "Individuals"
//                   ? "Personal clarity and startup direction"
//                   : "Better offers and stronger business structure"}
//               </h4>
//               <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
//                 {activeAudience === "Individuals"
//                   ? "For professionals, students, founders, and emerging entrepreneurs who need more clarity before the next move."
//                   : "For service businesses and growing teams that want clearer selling, smoother operations, and a stronger structure for growth."}
//               </p>
//             </div>
//           </div>

//           <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:gap-8">
//             {visiblePackages.map((item, index) => (
//               <PackageCardView
//                 key={`${activeAudience}-${item.title}`}
//                 item={item}
//                 index={index}
//                 audience={activeAudience}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideUpFade {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideLeftFade {
//           from {
//             opacity: 0;
//             transform: translateX(28px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideRightFade {
//           from {
//             opacity: 0;
//             transform: translateX(-28px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import { useMemo, useState } from "react";
// import { ArrowUpRight } from "lucide-react";

// const CONSULT_COLORS = {
//   sectionBg: "#FFFFFF",
//   panelBg: "#F8FAFC",
//   panelBorder: "rgba(15,23,42,0.06)",
//   cardBg: "rgba(255,255,255,0.82)",
//   cardBorder: "rgba(15,23,42,0.05)",
//   cardShadow: "0 1px 2px rgba(15,23,42,0.02)",
//   cardHoverShadow: "0 18px 40px rgba(15,23,42,0.045)",
//   headingText: "#111827",
//   bodyText: "#667085",
//   mutedText: "#64748B",
//   ink: "#0F172A",
//   chipBg: "#FFFFFF",
//   chipBorder: "rgba(15,23,42,0.06)",
//   activeTabText: "#FFFFFF",
//   buttonText: "#FFFFFF",
//   white: "#FFFFFF",
//   blue: "#0064E0",
//   red: "#E61525",
//   green: "#29BE3E",
//   orange: "#FC7E24",
// } as const;

// type Audience = "Individuals" | "Businesses";
// type ArtStyle = "rings" | "grid" | "signal" | "flow";

// type ConsultPackage = {
//   id: string;
//   title: string;
//   audience: Audience;
//   eyebrow: string;
//   summary: string;
//   problem: string;
//   solution: string;
//   accent: string;
//   iconUrl: string;
//   artStyle: ArtStyle;
// };

// const CONSULT_PACKAGES: readonly ConsultPackage[] = [
//   {
//     id: "personal-brand-strategy",
//     audience: "Individuals",
//     eyebrow: "For professionals, founders, and students",
//     title: "Personal Brand Strategy",
//     summary: "Build a personal brand people trust and remember.",
//     problem:
//       "You have value, but people do not quickly understand what you do or why they should take you seriously.",
//     solution:
//       "We help you clarify your message, positioning, and brand direction so your profile, presence, and communication feel stronger and more credible.",
//     accent: CONSULT_COLORS.blue,
//     iconUrl:
//       "https://api.iconify.design/solar/user-id-linear.svg?color=%230064E0",
//     artStyle: "rings",
//   },
//   {
//     id: "startup-launch-roadmap",
//     audience: "Individuals",
//     eyebrow: "For first-time founders and side hustlers",
//     title: "Startup Launch Roadmap",
//     summary: "Get a practical roadmap to launch your business with clarity.",
//     problem:
//       "You want to start something meaningful, but the process feels confusing and you are unsure what to do first.",
//     solution:
//       "We help you define the idea, audience, next steps, and launch direction so you can move forward with more confidence and less guesswork.",
//     accent: CONSULT_COLORS.orange,
//     iconUrl:
//       "https://api.iconify.design/solar/rocket-2-linear.svg?color=%23FC7E24",
//     artStyle: "flow",
//   },
//   {
//     id: "offer-sales-blueprint",
//     audience: "Businesses",
//     eyebrow: "For service businesses and growing teams",
//     title: "Offer & Sales Blueprint",
//     summary:
//       "Turn your idea or service into an offer people can understand and buy.",
//     problem:
//       "Your service may be good, but customers still feel confused about what you offer, how it works, or why they should say yes.",
//     solution:
//       "We help you shape the offer, pricing direction, and sales flow so your business becomes easier to explain, present, and sell.",
//     accent: CONSULT_COLORS.red,
//     iconUrl:
//       "https://api.iconify.design/solar/chart-square-linear.svg?color=%23E61525",
//     artStyle: "grid",
//   },
//   {
//     id: "business-structure-setup",
//     audience: "Businesses",
//     eyebrow: "For businesses that feel scattered",
//     title: "Business Structure Setup",
//     summary:
//       "Create a more organized business with clear systems and workflow.",
//     problem:
//       "Operations feel messy, too much depends on you, and the business lacks a simple structure that can support growth.",
//     solution:
//       "We help you organize roles, workflow, and process direction so the business runs with more order, clarity, and consistency.",
//     accent: CONSULT_COLORS.green,
//     iconUrl:
//       "https://api.iconify.design/solar/widget-4-linear.svg?color=%2329BE3E",
//     artStyle: "signal",
//   },
// ] as const;

// const AUDIENCE_META: Record<
//   Audience,
//   {
//     accent: string;
//     title: string;
//     description: string;
//   }
// > = {
//   Individuals: {
//     accent: CONSULT_COLORS.blue,
//     title: "Personal clarity and startup direction",
//     description:
//       "For professionals, students, founders, and emerging entrepreneurs who need more clarity before the next move.",
//   },
//   Businesses: {
//     accent: CONSULT_COLORS.red,
//     title: "Better offers and stronger business structure",
//     description:
//       "For service businesses and growing teams that want clearer selling, smoother operations, and a stronger structure for growth.",
//   },
// };

// function InfoBlock({ label, text }: { label: string; text: string }) {
//   return (
//     <div className="rounded-[18px] border px-4 py-4 sm:px-5">
//       <div
//         className="text-[11px] font-medium uppercase tracking-[0.16em]"
//         style={{ color: CONSULT_COLORS.mutedText }}
//       >
//         {label}
//       </div>

//       <p
//         className="mt-2 text-[14.5px] leading-[1.82] tracking-[-0.01em] sm:text-[15px]"
//         style={{ color: CONSULT_COLORS.bodyText }}
//       >
//         {text}
//       </p>
//     </div>
//   );
// }

// function ArtPanel({
//   accent,
//   iconUrl,
//   artStyle,
// }: {
//   accent: string;
//   iconUrl: string;
//   artStyle: ArtStyle;
// }) {
//   const tint = `${accent}12`;
//   const strongTint = `${accent}22`;

//   return (
//     <div
//       className="relative h-[220px] overflow-hidden rounded-[20px] border sm:h-[240px]"
//       style={{
//         borderColor: CONSULT_COLORS.cardBorder,
//         background:
//           artStyle === "rings"
//             ? `radial-gradient(circle at center, ${strongTint} 0%, ${strongTint} 18%, transparent 18%, transparent 34%, ${tint} 34%, ${tint} 35%, transparent 35%, transparent 51%, ${tint} 51%, ${tint} 52%, transparent 52%), linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`
//             : artStyle === "grid"
//               ? `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`
//               : artStyle === "signal"
//                 ? `linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%)`
//                 : `linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`,
//         backgroundSize:
//           artStyle === "grid" ? "86px 86px, 86px 86px, auto" : undefined,
//       }}
//     >
//       <div className="absolute inset-0">
//         <div
//           className="absolute left-6 top-6 h-16 w-16 rounded-full blur-2xl"
//           style={{ backgroundColor: `${accent}18` }}
//         />
//         <div
//           className="absolute bottom-6 right-6 h-16 w-16 rounded-full blur-2xl"
//           style={{ backgroundColor: `${accent}14` }}
//         />
//       </div>

//       {artStyle === "flow" ? (
//         <div className="absolute inset-0">
//           <svg viewBox="0 0 600 260" className="h-full w-full">
//             <path
//               d="M40 170 C 120 40, 240 230, 360 120 S 520 100, 560 56"
//               fill="none"
//               stroke={accent}
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeDasharray="10 10"
//               opacity="0.75"
//             />
//             <path
//               d="M515 46 L560 56 L532 84"
//               fill="none"
//               stroke={accent}
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               opacity="0.75"
//             />
//           </svg>
//         </div>
//       ) : null}

//       {artStyle === "signal" ? (
//         <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-3 px-8 opacity-70">
//           {Array.from({ length: 11 }).map((_, index) => (
//             <span
//               key={index}
//               className="rounded-full"
//               style={{
//                 width: 4,
//                 height: index % 2 === 0 ? 18 : 30,
//                 backgroundColor: index === 5 ? accent : "rgba(15,23,42,0.16)",
//               }}
//             />
//           ))}
//         </div>
//       ) : null}

//       <div className="absolute inset-0 flex items-center justify-center">
//         <div
//           className="relative flex h-28 w-28 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-[1.03] sm:h-32 sm:w-32"
//           style={{ backgroundColor: accent }}
//         >
//           <img
//             src={iconUrl}
//             alt=""
//             className="h-14 w-14 brightness-0 invert sm:h-16 sm:w-16"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function AudienceTabs({
//   activeAudience,
//   onChange,
// }: {
//   activeAudience: Audience;
//   onChange: (audience: Audience) => void;
// }) {
//   return (
//     <div
//       className="grid grid-cols-2 rounded-[18px] border p-1.5"
//       style={{
//         backgroundColor: CONSULT_COLORS.chipBg,
//         borderColor: CONSULT_COLORS.chipBorder,
//       }}
//     >
//       {(["Individuals", "Businesses"] as const).map((audience) => {
//         const isActive = activeAudience === audience;
//         const accent = AUDIENCE_META[audience].accent;

//         return (
//           <button
//             key={audience}
//             type="button"
//             onClick={() => onChange(audience)}
//             className="rounded-[14px] px-4 py-3 text-sm font-medium tracking-[-0.01em] transition-all duration-300"
//             style={{
//               backgroundColor: isActive ? accent : "transparent",
//               color: isActive
//                 ? CONSULT_COLORS.activeTabText
//                 : CONSULT_COLORS.ink,
//               boxShadow: isActive ? "0 10px 24px rgba(15,23,42,0.08)" : "none",
//             }}
//           >
//             {audience}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// function PackageCard({ item }: { item: ConsultPackage }) {
//   return (
//     <article
//       className="group flex h-full flex-col rounded-[28px] p-4 transition-all duration-300 hover:-translate-y-0.5 sm:p-5"
//       style={{
//         backgroundColor: CONSULT_COLORS.cardBg,
//         boxShadow: CONSULT_COLORS.cardShadow,
//         border: `1px solid ${CONSULT_COLORS.cardBorder}`,
//       }}
//       onMouseEnter={(event) => {
//         event.currentTarget.style.boxShadow = CONSULT_COLORS.cardHoverShadow;
//       }}
//       onMouseLeave={(event) => {
//         event.currentTarget.style.boxShadow = CONSULT_COLORS.cardShadow;
//       }}
//     >
//       <div className="flex flex-1 flex-col">
//         <div
//           className="inline-flex w-fit rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
//           style={{
//             backgroundColor: `${item.accent}12`,
//             color: item.accent,
//           }}
//         >
//           {item.eyebrow}
//         </div>

//         <h3
//           className="mt-4 max-w-[24ch] text-[1.22rem] font-medium leading-[1.34] tracking-[-0.022em] sm:text-[1.36rem]"
//           style={{ color: CONSULT_COLORS.headingText }}
//         >
//           {item.title}
//         </h3>

//         <p
//           className="mt-3 text-[15px] leading-[1.82] tracking-[-0.01em] sm:text-[15.5px]"
//           style={{ color: CONSULT_COLORS.bodyText }}
//         >
//           {item.summary}
//         </p>

//         <div className="mt-6 space-y-4">
//           <InfoBlock label="The problem" text={item.problem} />
//           <InfoBlock label="How this helps" text={item.solution} />
//         </div>

//         <div className="mt-6 pt-1">
//           <span
//             className="inline-flex items-center gap-2 rounded-[12px] px-4 py-3 text-[14px] font-medium tracking-[-0.01em]"
//             style={{
//               backgroundColor: item.accent,
//               color: CONSULT_COLORS.buttonText,
//             }}
//           >
//             View package
//             <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
//           </span>
//         </div>
//       </div>

//       <div className="mt-5">
//         <ArtPanel
//           accent={item.accent}
//           iconUrl={item.iconUrl}
//           artStyle={item.artStyle}
//         />
//       </div>
//     </article>
//   );
// }

// export default function ConsultPackagesRefined() {
//   const [activeAudience, setActiveAudience] = useState<Audience>("Individuals");

//   const visiblePackages = useMemo(
//     () => CONSULT_PACKAGES.filter((item) => item.audience === activeAudience),
//     [activeAudience],
//   );

//   const activeMeta = AUDIENCE_META[activeAudience];

//   return (
//     <section
//       className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
//       style={{ backgroundColor: CONSULT_COLORS.sectionBg }}
//     >
//       <div className="mx-auto max-w-[1320px]">
//         <div className="mx-auto max-w-[920px] text-center">
//           <h2
//             className="text-balance text-[2rem] font-medium leading-[1.06] tracking-[-0.045em] sm:text-[2.7rem] lg:text-[4rem]"
//             style={{ color: CONSULT_COLORS.headingText }}
//           >
//             Consulting packages built around real business problems
//           </h2>

//           <p
//             className="mx-auto mt-5 max-w-[760px] text-pretty text-[16px] leading-[1.8] tracking-[-0.012em] sm:text-[18px]"
//             style={{ color: CONSULT_COLORS.bodyText }}
//           >
//             Octalve Consult is structured to help individuals and businesses
//             solve confusion, improve direction, and move with more clarity,
//             structure, and confidence.
//           </p>
//         </div>

//         <div
//           className="mt-12 rounded-[32px] border p-4 sm:p-5 lg:p-6"
//           style={{
//             backgroundColor: CONSULT_COLORS.panelBg,
//             borderColor: CONSULT_COLORS.panelBorder,
//           }}
//         >
//           <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
//             <aside className="rounded-[28px] border bg-white p-4 sm:p-5">
//               <AudienceTabs
//                 activeAudience={activeAudience}
//                 onChange={setActiveAudience}
//               />

//               <div className="mt-5">
//                 <div
//                   className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
//                   style={{
//                     backgroundColor: `${activeMeta.accent}12`,
//                     color: activeMeta.accent,
//                   }}
//                 >
//                   {activeAudience}
//                 </div>

//                 <h3
//                   className="mt-4 text-[1.5rem] font-medium leading-[1.2] tracking-[-0.03em] sm:text-[1.75rem]"
//                   style={{ color: CONSULT_COLORS.headingText }}
//                 >
//                   {activeMeta.title}
//                 </h3>

//                 <p
//                   className="mt-3 text-[15px] leading-[1.82] tracking-[-0.01em] sm:text-[15.5px]"
//                   style={{ color: CONSULT_COLORS.bodyText }}
//                 >
//                   {activeMeta.description}
//                 </p>
//               </div>
//             </aside>

//             <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:gap-7">
//               {visiblePackages.map((item) => (
//                 <PackageCard key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const CONSULT_COLORS = {
  sectionBg: "#F3F4F6",
  cardBg: "rgba(255,255,255,0.84)",
  cardBorder: "rgba(15,23,42,0.045)",
  cardShadow: "0 1px 2px rgba(15,23,42,0.02)",
  cardHoverShadow: "0 16px 34px rgba(15,23,42,0.05)",
  headingText: "#111827",
  bodyText: "#667085",
  mutedText: "#98A2B3",
  subtleBg: "rgba(255,255,255,0.9)",
  subtleBorder: "rgba(15,23,42,0.05)",
  buttonText: "#FFFFFF",
  whatsappText: "#111827",
  whatsappBg: "#FFFFFF",
  whatsappBorder: "rgba(15,23,42,0.08)",
  whatsappHoverBg: "#F8FAFC",
  whatsappGreen: "#25D366",
  modalBackdrop: "rgba(0,0,0,0.7)",
  modalSurface: "#FFFFFF",
  modalBorder: "rgba(15,23,42,0.08)",
  closeBg: "#F1F5F9",
  closeHoverBg: "#E2E8F0",
  blue: "#0064E0",
  red: "#E61525",
  green: "#29BE3E",
  orange: "#FC7E24",
} as const;

type Audience = "Individuals" | "Businesses";
type ArtStyle = "rings" | "grid" | "signal" | "flow";

type ConsultPackage = {
  id: string;
  title: string;
  audience: Audience;
  eyebrow: string;
  summary: string;
  problem: string;
  solution: string;
  accent: string;
  iconUrl: string;
  artStyle: ArtStyle;
  whatsappText: string;
};

const CONSULT_PACKAGES: ConsultPackage[] = [
  {
    id: "personal-brand-strategy",
    audience: "Individuals",
    eyebrow: "For professionals, founders, and students",
    title: "Personal Brand Strategy",
    summary: "Build a personal brand people trust and remember.",
    problem:
      "You have value, but people do not quickly understand what you do or why they should take you seriously.",
    solution:
      "We help you clarify your message, positioning, and brand direction so your profile, presence, and communication feel stronger and more credible.",
    accent: CONSULT_COLORS.blue,
    iconUrl:
      "https://api.iconify.design/solar/user-id-linear.svg?color=%230064E0",
    artStyle: "rings",
    whatsappText:
      "Hello Octalve, I want to discuss your Personal Brand Strategy package and how you can help me strengthen my brand, positioning, and visibility.",
  },
  {
    id: "startup-launch-roadmap",
    audience: "Individuals",
    eyebrow: "For first-time founders and side hustlers",
    title: "Startup Launch Roadmap",
    summary: "Get a practical roadmap to launch your business with clarity.",
    problem:
      "You want to start something meaningful, but the process feels confusing and you are unsure what to do first.",
    solution:
      "We help you define the idea, audience, next steps, and launch direction so you can move forward with more confidence and less guesswork.",
    accent: CONSULT_COLORS.orange,
    iconUrl:
      "https://api.iconify.design/solar/rocket-2-linear.svg?color=%23FC7E24",
    artStyle: "flow",
    whatsappText:
      "Hello Octalve, I want to discuss your Startup Launch Roadmap package and how you can help me launch my business with more clarity and structure.",
  },
  {
    id: "offer-sales-blueprint",
    audience: "Businesses",
    eyebrow: "For service businesses and growing teams",
    title: "Offer & Sales Blueprint",
    summary:
      "Turn your idea or service into an offer people can understand and buy.",
    problem:
      "Your service may be good, but customers still feel confused about what you offer, how it works, or why they should say yes.",
    solution:
      "We help you shape the offer, pricing direction, and sales flow so your business becomes easier to explain, present, and sell.",
    accent: CONSULT_COLORS.red,
    iconUrl:
      "https://api.iconify.design/solar/chart-square-linear.svg?color=%23E61525",
    artStyle: "grid",
    whatsappText:
      "Hello Octalve, I want to discuss your Offer & Sales Blueprint package and how you can help me refine my offer, improve how I sell, and grow conversions.",
  },
  {
    id: "business-structure-setup",
    audience: "Businesses",
    eyebrow: "For businesses that feel scattered",
    title: "Business Structure Setup",
    summary:
      "Create a more organized business with clear systems and workflow.",
    problem:
      "Operations feel messy, too much depends on you, and the business lacks a simple structure that can support growth.",
    solution:
      "We help you organize roles, workflow, and process direction so the business runs with more order, clarity, and consistency.",
    accent: CONSULT_COLORS.green,
    iconUrl:
      "https://api.iconify.design/solar/widget-4-linear.svg?color=%2329BE3E",
    artStyle: "signal",
    whatsappText:
      "Hello Octalve, I want to discuss your Business Structure Setup package and how you can help me organize my business operations for better growth and consistency.",
  },
];

const AUDIENCE_LABELS = ["All", "Individuals", "Businesses"] as const;

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/2348073459090?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      style={{ display: "block", flexShrink: 0 }}
      fill="none"
    >
      <circle cx="12" cy="12" r="12" fill={CONSULT_COLORS.whatsappGreen} />
      <path
        fill="#FFFFFF"
        d="M17.11 15.18c-.19.52-1.09 1-1.52 1.07-.39.06-.88.08-1.42-.09-.33-.11-.76-.25-1.31-.49-2.31-1-3.82-3.35-3.94-3.51-.12-.16-.94-1.25-.94-2.39 0-1.14.6-1.7.81-1.94.21-.24.46-.3.61-.3.15 0 .31 0 .45.01.14.01.33-.05.52.4.19.45.64 1.56.7 1.67.06.11.1.25.02.41-.08.16-.12.25-.24.39-.12.14-.25.31-.36.41-.12.12-.24.26-.1.51.14.25.63 1.04 1.35 1.68.93.83 1.71 1.09 1.96 1.21.25.12.39.1.54-.06.15-.16.63-.73.8-.98.17-.25.34-.21.57-.13.24.08 1.49.7 1.74.83.25.12.41.19.47.29.06.1.06.6-.13 1.12Z"
      />
    </svg>
  );
}

function CalendlyModal({
  open,
  onClose,
  packageTitle,
}: {
  open: boolean;
  onClose: () => void;
  packageTitle?: string;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] backdrop-blur-md"
      style={{ backgroundColor: CONSULT_COLORS.modalBackdrop }}
      role="dialog"
      aria-modal="true"
      aria-label="Book a session"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-4xl overflow-hidden rounded-[28px] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
          style={{
            backgroundColor: CONSULT_COLORS.modalSurface,
            border: `1px solid ${CONSULT_COLORS.modalBorder}`,
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <div className="text-sm font-medium text-slate-900">
                Book a Free 30-minute Call
              </div>

              {packageTitle ? (
                <div className="mt-1 text-sm text-slate-500">
                  Selected package: {packageTitle}
                </div>
              ) : null}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-900 transition-colors"
              style={{ backgroundColor: CONSULT_COLORS.closeBg }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor =
                  CONSULT_COLORS.closeHoverBg;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor =
                  CONSULT_COLORS.closeBg;
              }}
            >
              Close
            </button>
          </div>

          <div className="h-[78vh] min-h-[520px] w-full">
            <iframe
              title="Calendly booking"
              className="h-full w-full"
              src="https://calendly.com/octalve-info/30min"
              frameBorder="0"
              loading="lazy"
              allow="camera; microphone; fullscreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtPanel({
  accent,
  iconUrl,
  artStyle,
}: {
  accent: string;
  iconUrl: string;
  artStyle: ArtStyle;
}) {
  const tint = `${accent}12`;
  const strongTint = `${accent}22`;

  return (
    <div
      className="relative h-[220px] overflow-hidden rounded-[20px] border sm:h-[230px]"
      style={{
        borderColor: CONSULT_COLORS.cardBorder,
        background:
          artStyle === "rings"
            ? `radial-gradient(circle at center, ${strongTint} 0%, ${strongTint} 18%, transparent 18%, transparent 34%, ${tint} 34%, ${tint} 35%, transparent 35%, transparent 51%, ${tint} 51%, ${tint} 52%, transparent 52%), linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`
            : artStyle === "grid"
              ? `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`
              : artStyle === "signal"
                ? `linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%)`
                : `linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%)`,
        backgroundSize:
          artStyle === "grid" ? "86px 86px, 86px 86px, auto" : undefined,
      }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute left-6 top-6 h-16 w-16 rounded-full blur-2xl"
          style={{ backgroundColor: `${accent}18` }}
        />
        <div
          className="absolute bottom-6 right-6 h-16 w-16 rounded-full blur-2xl"
          style={{ backgroundColor: `${accent}14` }}
        />
      </div>

      {artStyle === "flow" ? (
        <div className="absolute inset-0">
          <svg viewBox="0 0 600 260" className="h-full w-full">
            <path
              d="M40 170 C 120 40, 240 230, 360 120 S 520 100, 560 56"
              fill="none"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="10 10"
              opacity="0.75"
            />
            <path
              d="M515 46 L560 56 L532 84"
              fill="none"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.75"
            />
          </svg>
        </div>
      ) : null}

      {artStyle === "signal" ? (
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-3 px-8 opacity-70">
          {Array.from({ length: 11 }).map((_, index) => (
            <span
              key={index}
              className="rounded-full"
              style={{
                width: 4,
                height: index % 2 === 0 ? 18 : 30,
                backgroundColor: index === 5 ? accent : "rgba(15,23,42,0.16)",
              }}
            />
          ))}
        </div>
      ) : null}

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative flex h-28 w-28 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-[1.03] sm:h-32 sm:w-32"
          style={{ backgroundColor: accent }}
        >
          <img
            src={iconUrl}
            alt=""
            className="h-14 w-14 brightness-0 invert sm:h-16 sm:w-16"
          />
        </div>
      </div>
    </div>
  );
}

function PackageCard({
  item,
  onBook,
}: {
  item: ConsultPackage;
  onBook: (item: ConsultPackage) => void;
}) {
  return (
    <article
      className="group h-full rounded-[28px] p-4 transition-all duration-300 hover:-translate-y-0.5 sm:p-5"
      style={{
        backgroundColor: CONSULT_COLORS.cardBg,
        boxShadow: CONSULT_COLORS.cardShadow,
        border: `1px solid ${CONSULT_COLORS.cardBorder}`,
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.boxShadow = CONSULT_COLORS.cardHoverShadow;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.boxShadow = CONSULT_COLORS.cardShadow;
      }}
    >
      <div className="flex h-full flex-col">
        <ArtPanel
          accent={item.accent}
          iconUrl={item.iconUrl}
          artStyle={item.artStyle}
        />

        <div className="pt-4 sm:pt-5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
              style={{
                backgroundColor: `${item.accent}12`,
                color: item.accent,
              }}
            >
              {item.audience}
            </span>

            <span
              className="text-[11px] font-medium uppercase tracking-[0.16em]"
              style={{ color: CONSULT_COLORS.mutedText }}
            >
              {item.eyebrow}
            </span>
          </div>

          <h3
            className="mt-3 max-w-[24ch] text-[1.34rem] font-medium leading-[1.28] tracking-[-0.026em] sm:text-[1.56rem]"
            style={{ color: CONSULT_COLORS.headingText }}
          >
            {item.title}
          </h3>

          <p
            className="mt-3 text-[15px] leading-[1.82] tracking-[-0.01em] sm:text-[15.5px]"
            style={{ color: CONSULT_COLORS.bodyText }}
          >
            <span
              className="font-medium"
              style={{ color: CONSULT_COLORS.headingText }}
            >
              {item.summary}
            </span>{" "}
            {item.problem} {item.solution}
          </p>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => onBook(item)}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[12px] px-4 text-[13.5px] font-medium tracking-[-0.01em] transition-all duration-200 hover:translate-y-[-1px] active:translate-y-0 sm:w-auto"
              style={{
                backgroundColor: item.accent,
                color: CONSULT_COLORS.buttonText,
              }}
            >
              Book a Session
              <ArrowUpRight className="h-[15px] w-[15px]" strokeWidth={2} />
            </button>

            <a
              href={buildWhatsAppUrl(item.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp about ${item.title}`}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[12px] border px-4 text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-200 sm:w-auto"
              style={{
                backgroundColor: CONSULT_COLORS.whatsappBg,
                color: CONSULT_COLORS.whatsappText,
                borderColor: CONSULT_COLORS.whatsappBorder,
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor =
                  CONSULT_COLORS.whatsappHoverBg;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor =
                  CONSULT_COLORS.whatsappBg;
              }}
            >
              <span className="inline-flex h-[18px] w-[18px] items-center justify-center">
                <WhatsAppIcon />
              </span>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ConsultPackagesRefined() {
  const [selectedPackage, setSelectedPackage] = useState<ConsultPackage | null>(
    null,
  );

  return (
    <>
      <section
        id="booksession"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        style={{ backgroundColor: CONSULT_COLORS.sectionBg }}
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="mx-auto max-w-[920px] text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {AUDIENCE_LABELS.map((label) => (
                <span
                  key={label}
                  className="inline-flex rounded-full px-4 py-2 text-[13px] font-medium tracking-[-0.01em]"
                  style={{
                    backgroundColor: CONSULT_COLORS.subtleBg,
                    border: `1px solid ${CONSULT_COLORS.subtleBorder}`,
                    color: CONSULT_COLORS.headingText,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            <h2
              className="mt-6 text-balance text-[2rem] font-medium leading-[1.06] tracking-[-0.045em] sm:text-[2.7rem] lg:text-[4rem]"
              style={{ color: CONSULT_COLORS.headingText }}
            >
              Consulting packages built around real business problems
            </h2>

            <p
              className="mx-auto mt-5 max-w-[760px] text-pretty text-[16px] leading-[1.8] tracking-[-0.012em] sm:text-[18px]"
              style={{ color: CONSULT_COLORS.bodyText }}
            >
              Octalve Consult is structured to help individuals and businesses
              solve confusion, improve direction, and move with more clarity,
              structure, and confidence.
            </p>
          </div>

          <div
            id="packages"
            className="mt-10 grid gap-5 md:grid-cols-2 xl:gap-6"
          >
            {CONSULT_PACKAGES.map((item) => (
              <PackageCard
                key={item.id}
                item={item}
                onBook={setSelectedPackage}
              />
            ))}
          </div>
        </div>
      </section>

      <CalendlyModal
        open={Boolean(selectedPackage)}
        onClose={() => setSelectedPackage(null)}
        packageTitle={selectedPackage?.title}
      />
    </>
  );
}
