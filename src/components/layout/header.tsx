// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState, type ReactNode } from "react";
// import { usePathname } from "next/navigation";
// import octalveLogo from "@/assets/logos/octalve.png";

// const NAV_COLORS = {
//   red: "#E61525",
//   blue: "#0064E0",
//   yellow: "#29BE3E",
//   green: "#FC7E24",
//   topBarBg: "#0F3D33",
//   headerBg: "#F8FAFC",
//   textDark: "#0F172A",
//   textSoft: "#475569",
//   border: "#E2E8F0",
//   white: "#FFFFFF",
//   primary: "#0A84FF",
//   primaryHover: "#006FE0",
//   mobileBg: "#000A16",
//   mobileBorder: "rgba(255,255,255,0.12)",
//   mobileSoft: "rgba(255,255,255,0.72)",
// };

// const CONTACT_LINKS = {
//   nigeriaPhone: "tel:+2348073459090",
//   ukPhone: "tel:+447413753552",
//   email: "mailto:info@octalve.com",
//   nigeriaWhatsapp:
//     "https://wa.me/2348073459090?text=Hello%20Octalve%2C%20I%20want%20to%20make%20an%20enquiry%20about%20your%20services.",
//   ukWhatsapp:
//     "https://wa.me/447413753552?text=Hello%20Octalve%2C%20I%20want%20to%20make%20an%20enquiry%20about%20your%20services.",
// };

// const models = [
//   {
//     title: "Consult",
//     description:
//       "Strategy, advisory, and transformation support, when you need it, how you need it.",
//     href: "/models/consult",
//   },
//   {
//     title: "Suite",
//     description:
//       "One platform. Zero stress. Launch with website, branding, and marketing tools in 14 days.",
//     href: "/models/suite",
//   },
//   {
//     title: "One",
//     description: "Building intelligent business solutions for SMEs.",
//     href: "/models/one",
//   },
//   {
//     title: "Node",
//     description: "The intersection of innovation and you.",
//     href: "/models/node",
//   },
//   {
//     title: "Lab",
//     description:
//       "We design tech solutions users love, investors can't resist, and builders are proud of.",
//     href: "/models/lab",
//   },
//   {
//     title: "Leap",
//     description: "Growth-focused execution and market expansion support.",
//     href: "/models/leap",
//   },
//   {
//     title: "Vault",
//     description: "Lock in with innovation and growth assets.",
//     href: "/models/vault",
//   },
//   {
//     title: "Cloud",
//     description:
//       "Domain-Hosting | Grow your ideas and business online — faster, smarter, for less.",
//     href: "/models/cloud",
//   },
// ];

// const whoWeAre = [
//   { label: "Who We Are", href: "/who-we-are" },
//   { label: "Leadership", href: "/leadership" },
// ];

// const explore = [
//   { label: "Trend", href: "/trends" },
//   { label: "Portfolio", href: "/portfolio" },
//   { label: "IAMimpact", href: "/iamimpact" },
//   { label: "Career", href: "/career" },
// ];

// function isActivePath(pathname: string, href: string) {
//   if (href === "/") return pathname === "/";
//   return pathname === href || pathname.startsWith(`${href}/`);
// }

// function ChevronDown({ className = "" }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M6 9L12 15L18 9"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function MenuIcon() {
//   return (
//     <svg
//       width="22"
//       height="22"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M4 7H20M4 12H20M4 17H20"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function CloseIcon() {
//   return (
//     <svg
//       width="22"
//       height="22"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M6 6L18 18M18 6L6 18"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function PhoneIcon() {
//   return (
//     <svg
//       width="17"
//       height="17"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M22 16.92v2.6a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 1.8h2.6a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L7.8 9.34a16 16 0 0 0 6.86 6.86l1.09-1.09a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function MailIcon() {
//   return (
//     <svg
//       width="17"
//       height="17"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M4 6h16v12H4V6Z"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="m4 7 8 6 8-6"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function WhatsAppIcon() {
//   return (
//     <svg
//       width="17"
//       height="17"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M5.2 19.1 6.3 15.4a7.4 7.4 0 1 1 2.7 2.6l-3.8 1.1Z"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M9.5 8.9c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2.1 2.9 2.7l.5-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.5.3-1.2.5-2 .3-2.7-.5-5.8-3.3-6.4-6.2-.2-.8 0-1.5.3-2Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

// function DesktopNavLink({
//   href,
//   label,
//   pathname,
// }: {
//   href: string;
//   label: string;
//   pathname: string;
// }) {
//   const active = isActivePath(pathname, href);

//   return (
//     <Link
//       href={href}
//       className="group relative py-8 text-[15px] font-medium uppercase tracking-[0.08em] transition"
//       style={{ color: active ? NAV_COLORS.primary : NAV_COLORS.textDark }}
//     >
//       <span className="transition group-hover:text-[#0A84FF]">{label}</span>

//       <span
//         className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-200 ${
//           active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
//         }`}
//         style={{ backgroundColor: NAV_COLORS.primary }}
//       />
//     </Link>
//   );
// }

// type DropdownProps = {
//   label: string;
//   items: { label: string; href: string }[];
//   pathname: string;
// };

// function DesktopDropdown({ label, items, pathname }: DropdownProps) {
//   const active = items.some((item) => isActivePath(pathname, item.href));

//   return (
//     <div className="group relative">
//       <button
//         className="relative flex items-center gap-1 py-8 text-[15px] font-medium uppercase tracking-[0.08em] transition"
//         style={{ color: active ? NAV_COLORS.primary : NAV_COLORS.textDark }}
//         type="button"
//       >
//         <span className="transition group-hover:text-[#0A84FF]">{label}</span>
//         <ChevronDown className="mt-px h-4 w-4 transition group-hover:text-[#0A84FF]" />

//         <span
//           className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-200 ${
//             active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
//           }`}
//           style={{ backgroundColor: NAV_COLORS.primary }}
//         />
//       </button>

//       <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 rounded-2xl border bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
//         <div
//           className="overflow-hidden rounded-2xl"
//           style={{ borderColor: NAV_COLORS.border }}
//         >
//           {items.map((item, index) => {
//             const itemActive = isActivePath(pathname, item.href);

//             return (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className={`block px-5 py-4 text-sm font-medium transition ${
//                   index !== items.length - 1 ? "border-b" : ""
//                 }`}
//                 style={{
//                   borderColor: NAV_COLORS.border,
//                   color: itemActive ? NAV_COLORS.primary : NAV_COLORS.mobileBg,
//                   backgroundColor: itemActive ? "#F8FAFC" : NAV_COLORS.white,
//                 }}
//               >
//                 <span className="transition hover:text-[#0A84FF]">
//                   {item.label}
//                 </span>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function MegaMenuLink({
//   title,
//   description,
//   href,
//   pathname,
// }: {
//   title: string;
//   description: string;
//   href: string;
//   pathname: string;
// }) {
//   const active = isActivePath(pathname, href);

//   return (
//     <Link
//       href={href}
//       className="group block border-b py-4 transition"
//       style={{ borderColor: NAV_COLORS.border }}
//     >
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <h4
//             className="text-[15px] font-semibold transition"
//             style={{ color: active ? NAV_COLORS.primary : NAV_COLORS.mobileBg }}
//           >
//             <span className="group-hover:text-[#0A84FF]">{title}</span>
//           </h4>

//           <p
//             className="mt-1.5 text-sm leading-6"
//             style={{ color: NAV_COLORS.textSoft }}
//           >
//             {description}
//           </p>
//         </div>

//         <span
//           className="mt-1 text-sm opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
//           style={{ color: NAV_COLORS.primary }}
//         >
//           ↗
//         </span>
//       </div>
//     </Link>
//   );
// }

// function DesktopMegaMenu({ pathname }: { pathname: string }) {
//   const active = models.some((model) => isActivePath(pathname, model.href));
//   const leftColumn = models.slice(0, 4);
//   const rightColumn = models.slice(4, 8);

//   return (
//     <div className="group static">
//       <button
//         className="relative flex items-center gap-2 py-8 text-[15px] font-medium uppercase tracking-[0.08em] transition"
//         style={{ color: active ? NAV_COLORS.primary : NAV_COLORS.textDark }}
//         type="button"
//       >
//         <span className="transition group-hover:text-[#0A84FF]">Models</span>
//         <ChevronDown className="mt-px h-4 w-4 transition group-hover:text-[#0A84FF]" />

//         <span
//           className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-200 ${
//             active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
//           }`}
//           style={{ backgroundColor: NAV_COLORS.primary }}
//         />
//       </button>

//       <div className="invisible absolute left-0 top-full z-50 w-full translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
//         <div
//           className="border-b border-t bg-white shadow-[0_14px_32px_rgba(15,23,42,0.07)]"
//           style={{ borderColor: NAV_COLORS.border }}
//         >
//           <div className="mx-auto w-full max-w-330 px-8 py-6 xl:px-10 xl:py-7">
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
//               <div className="pt-1">
//                 <p
//                   className="text-xs font-semibold uppercase tracking-[0.18em]"
//                   style={{ color: NAV_COLORS.primary }}
//                 >
//                   Octalve Models
//                 </p>

//                 <h3
//                   className="mt-2 text-[28px] font-semibold leading-[1.15]"
//                   style={{ color: NAV_COLORS.mobileBg }}
//                 >
//                   Explore the Octalve ecosystem
//                 </h3>

//                 <p
//                   className="mt-2 text-sm leading-6"
//                   style={{ color: NAV_COLORS.textSoft }}
//                 >
//                   Each model is designed to support a different layer of
//                   strategy, delivery, infrastructure, security, and growth.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 xl:gap-x-12">
//                 <div>
//                   {leftColumn.map((model) => (
//                     <MegaMenuLink
//                       key={model.title}
//                       title={model.title}
//                       description={model.description}
//                       href={model.href}
//                       pathname={pathname}
//                     />
//                   ))}
//                 </div>

//                 <div>
//                   {rightColumn.map((model) => (
//                     <MegaMenuLink
//                       key={model.title}
//                       title={model.title}
//                       description={model.description}
//                       href={model.href}
//                       pathname={pathname}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function MobileAccordion({
//   label,
//   items,
//   pathname,
//   onNavigate,
// }: {
//   label: string;
//   items: { label: string; href: string }[];
//   pathname: string;
//   onNavigate: () => void;
// }) {
//   const [open, setOpen] = useState(false);
//   const active = items.some((item) => isActivePath(pathname, item.href));

//   return (
//     <div
//       className="border-b py-3"
//       style={{ borderColor: NAV_COLORS.mobileBorder }}
//     >
//       <button
//         onClick={() => setOpen((prev) => !prev)}
//         className="flex w-full items-center justify-between text-left text-sm font-medium uppercase tracking-[0.08em] transition"
//         style={{
//           color: active || open ? NAV_COLORS.primary : NAV_COLORS.white,
//         }}
//         type="button"
//       >
//         {label}
//         <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
//       </button>

//       {open && (
//         <div className="mt-3 space-y-3 pl-2">
//           {items.map((item) => {
//             const itemActive = isActivePath(pathname, item.href);

//             return (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 onClick={onNavigate}
//                 className="block text-sm transition"
//                 style={{
//                   color: itemActive
//                     ? NAV_COLORS.primary
//                     : NAV_COLORS.mobileSoft,
//                 }}
//               >
//                 {item.label}
//               </Link>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// function MobileModelsAccordion({
//   pathname,
//   onNavigate,
// }: {
//   pathname: string;
//   onNavigate: () => void;
// }) {
//   const [open, setOpen] = useState(false);
//   const active = models.some((model) => isActivePath(pathname, model.href));

//   return (
//     <div
//       className="border-b py-3"
//       style={{ borderColor: NAV_COLORS.mobileBorder }}
//     >
//       <button
//         onClick={() => setOpen((prev) => !prev)}
//         className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.08em] transition"
//         style={{
//           color: active || open ? NAV_COLORS.primary : NAV_COLORS.white,
//         }}
//         type="button"
//       >
//         Models
//         <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
//       </button>

//       {open && (
//         <div className="mt-4 grid gap-3">
//           {models.map((model) => {
//             const itemActive = isActivePath(pathname, model.href);

//             return (
//               <Link
//                 key={model.title}
//                 href={model.href}
//                 onClick={onNavigate}
//                 className="rounded-2xl border p-4"
//                 style={{
//                   borderColor: NAV_COLORS.mobileBorder,
//                   backgroundColor: "rgba(255,255,255,0.03)",
//                 }}
//               >
//                 <h4
//                   className="text-sm font-semibold"
//                   style={{
//                     color: itemActive ? NAV_COLORS.primary : NAV_COLORS.white,
//                   }}
//                 >
//                   {model.title}
//                 </h4>

//                 <p
//                   className="mt-1 text-sm leading-6"
//                   style={{ color: NAV_COLORS.mobileSoft }}
//                 >
//                   {model.description}
//                 </p>
//               </Link>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// function MobileContactLink({
//   href,
//   label,
//   icon,
//   external,
// }: {
//   href: string;
//   label: string;
//   icon: ReactNode;
//   external?: boolean;
// }) {
//   return (
//     <a
//       href={href}
//       target={external ? "_blank" : undefined}
//       rel={external ? "noreferrer" : undefined}
//       className="flex items-center gap-3 rounded-2xl border px-3.5 py-3 text-sm font-medium transition hover:bg-white/8"
//       style={{
//         borderColor: NAV_COLORS.mobileBorder,
//         color: NAV_COLORS.white,
//         backgroundColor: "rgba(255,255,255,0.035)",
//       }}
//     >
//       <span
//         className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
//         style={{
//           color: NAV_COLORS.white,
//           backgroundColor: "rgba(10,132,255,0.18)",
//         }}
//       >
//         {icon}
//       </span>

//       <span className="min-w-0 break-words">{label}</span>
//     </a>
//   );
// }

// function MobileEmergencyCard() {
//   return (
//     <div
//       className="mt-8 rounded-2xl p-4"
//       style={{
//         backgroundColor: "rgba(255,255,255,0.04)",
//         border: `1px solid ${NAV_COLORS.mobileBorder}`,
//       }}
//     >
//       <p
//         className="text-xs font-semibold uppercase tracking-[0.16em]"
//         style={{ color: NAV_COLORS.mobileSoft }}
//       >
//         Emergency Line
//       </p>

//       <div className="mt-4 grid gap-3">
//         <MobileContactLink
//           href={CONTACT_LINKS.nigeriaPhone}
//           label="+234 807 345 9090"
//           icon={<PhoneIcon />}
//         />

//         <MobileContactLink
//           href={CONTACT_LINKS.ukPhone}
//           label="+44 7413 753552"
//           icon={<PhoneIcon />}
//         />

//         <MobileContactLink
//           href={CONTACT_LINKS.email}
//           label="info@octalve.com"
//           icon={<MailIcon />}
//         />
//       </div>

//       <div className="mt-4 grid gap-2 sm:grid-cols-2">
//         <MobileContactLink
//           href={CONTACT_LINKS.nigeriaWhatsapp}
//           label="WhatsApp Nigeria"
//           icon={<WhatsAppIcon />}
//           external
//         />

//         <MobileContactLink
//           href={CONTACT_LINKS.ukWhatsapp}
//           label="WhatsApp UK"
//           icon={<WhatsAppIcon />}
//           external
//         />
//       </div>
//     </div>
//   );
// }

// export default function Header() {
//   const pathname = usePathname();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const panelRef = useRef<HTMLDivElement | null>(null);

//   const closeMobileMenu = () => setMobileOpen(false);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         mobileOpen &&
//         panelRef.current &&
//         !panelRef.current.contains(event.target as Node)
//       ) {
//         setMobileOpen(false);
//       }
//     }

//     function handleEscape(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setMobileOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [mobileOpen]);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   return (
//     <header className="sticky top-0 z-50 w-full">
//       <div className="flex h-1 w-full">
//         <div style={{ backgroundColor: NAV_COLORS.red }} className="w-1/4" />
//         <div style={{ backgroundColor: NAV_COLORS.blue }} className="w-1/4" />
//         <div style={{ backgroundColor: NAV_COLORS.yellow }} className="w-1/4" />
//         <div style={{ backgroundColor: NAV_COLORS.green }} className="w-1/4" />
//       </div>

//       <div
//         className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white sm:px-6"
//         style={{ backgroundColor: NAV_COLORS.topBarBg }}
//       >
//         Quick Response&nbsp;&nbsp;|&nbsp;&nbsp;
//         <a href={CONTACT_LINKS.nigeriaPhone} className="hover:underline">
//           +234 807 345 9090
//         </a>
//         &nbsp;&nbsp;|&nbsp;&nbsp;Support:
//         <a href={CONTACT_LINKS.email} className="ml-1 hover:underline">
//           info@octalve.com
//         </a>
//       </div>

//       <div
//         className="border-b"
//         style={{
//           backgroundColor: NAV_COLORS.headerBg,
//           borderColor: NAV_COLORS.border,
//         }}
//       >
//         <div className="mx-auto flex h-22 w-full max-w-370 items-center justify-between px-4 sm:px-6 lg:relative lg:px-8">
//           <Link href="/" className="flex items-center gap-3">
//             <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-white">
//               <Image
//                 src={octalveLogo}
//                 alt="Octalve Holding logo"
//                 fill
//                 className="object-contain p-1"
//                 sizes="48px"
//               />
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-9 xl:flex">
//             <DesktopNavLink href="/" label="Home" pathname={pathname} />

//             <DesktopDropdown
//               label="Who We Are"
//               items={whoWeAre}
//               pathname={pathname}
//             />

//             <DesktopMegaMenu pathname={pathname} />

//             <DesktopDropdown
//               label="Explore"
//               items={explore}
//               pathname={pathname}
//             />

//             <DesktopNavLink
//               href="/contact"
//               label="Contact Us"
//               pathname={pathname}
//             />
//           </nav>

//           <div className="hidden items-center gap-3 xl:flex">
//             <Link
//               href="/contact"
//               className="inline-flex rounded-full border px-5 py-3 text-sm font-semibold transition"
//               style={{
//                 borderColor: NAV_COLORS.border,
//                 color: NAV_COLORS.textDark,
//                 backgroundColor: NAV_COLORS.white,
//               }}
//             >
//               Talk to Us
//             </Link>

//             <Link
//               href="/start-project"
//               className="inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
//               style={{ backgroundColor: NAV_COLORS.primary }}
//             >
//               Start a Project
//             </Link>
//           </div>

//           <button
//             onClick={() => setMobileOpen(true)}
//             className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-900 xl:hidden"
//             aria-label="Open navigation menu"
//             type="button"
//           >
//             <MenuIcon />
//           </button>
//         </div>
//       </div>

//       {mobileOpen && (
//         <div className="fixed inset-0 z-60 bg-slate-950/40 backdrop-blur-[2px] xl:hidden">
//           <div
//             ref={panelRef}
//             className="ml-auto h-full w-full max-w-sm overflow-y-auto shadow-2xl"
//             style={{ backgroundColor: NAV_COLORS.mobileBg }}
//           >
//             <div
//               className="flex items-center justify-between border-b px-5 py-5"
//               style={{ borderColor: NAV_COLORS.mobileBorder }}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-white">
//                   <Image
//                     src={octalveLogo}
//                     alt="Octalve Holding logo"
//                     fill
//                     className="object-contain p-1"
//                     sizes="48px"
//                   />
//                 </div>
//               </div>

//               <button
//                 onClick={closeMobileMenu}
//                 className="inline-flex h-11 w-11 items-center justify-center rounded-xl border text-white"
//                 style={{ borderColor: NAV_COLORS.mobileBorder }}
//                 aria-label="Close navigation menu"
//                 type="button"
//               >
//                 <CloseIcon />
//               </button>
//             </div>

//             <div className="px-5 py-5">
//               <Link
//                 href="/"
//                 onClick={closeMobileMenu}
//                 className="block border-b py-3 text-sm font-medium uppercase tracking-[0.08em] transition"
//                 style={{
//                   borderColor: NAV_COLORS.mobileBorder,
//                   color: isActivePath(pathname, "/")
//                     ? NAV_COLORS.primary
//                     : NAV_COLORS.white,
//                 }}
//               >
//                 Home
//               </Link>

//               <MobileAccordion
//                 label="Who We Are"
//                 items={whoWeAre}
//                 pathname={pathname}
//                 onNavigate={closeMobileMenu}
//               />

//               <MobileModelsAccordion
//                 pathname={pathname}
//                 onNavigate={closeMobileMenu}
//               />

//               <MobileAccordion
//                 label="Explore"
//                 items={explore}
//                 pathname={pathname}
//                 onNavigate={closeMobileMenu}
//               />

//               <Link
//                 href="/contact"
//                 onClick={closeMobileMenu}
//                 className="block border-b py-3 text-sm font-medium uppercase tracking-[0.08em] transition"
//                 style={{
//                   borderColor: NAV_COLORS.mobileBorder,
//                   color: isActivePath(pathname, "/contact")
//                     ? NAV_COLORS.primary
//                     : NAV_COLORS.white,
//                 }}
//               >
//                 Contact Us
//               </Link>

//               <div className="mt-6 grid gap-3">
//                 <Link
//                   href="/contact"
//                   onClick={closeMobileMenu}
//                   className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium"
//                   style={{
//                     borderColor: NAV_COLORS.mobileBorder,
//                     color: NAV_COLORS.white,
//                   }}
//                 >
//                   Talk to Us
//                 </Link>

//                 <Link
//                   href="/start-project"
//                   onClick={closeMobileMenu}
//                   className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white"
//                   style={{ backgroundColor: NAV_COLORS.primary }}
//                 >
//                   Start a Project
//                 </Link>
//               </div>

//               <MobileEmergencyCard />
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import octalveLogo from "@/assets/logos/octalve.png";

const NAV_COLORS = {
  red: "#E61525",
  blue: "#0064E0",
  yellow: "#29BE3E",
  green: "#FC7E24",
  topBarBg: "#0F3D33",
  headerBg: "#F8FAFC",
  textDark: "#000A16",
  textSoft: "#475569",
  border: "#E2E8F0",
  white: "#FFFFFF",
  primary: "#0A84FF",
  primaryHover: "#006FE0",
  mobileBg: "#FFFFFF",
  mobileSoft: "#64748B",
  mobileBorder: "#E2E8F0",
  navy: "#000A16",
  mist: "#F1F6FF",
};

const CONTACT_LINKS = {
  nigeriaPhone: "tel:+2348073459090",
  ukPhone: "tel:+447413753552",
  email: "mailto:info@octalve.com",
  nigeriaWhatsapp:
    "https://wa.me/2348073459090?text=Hello%20Octalve%2C%20I%20want%20to%20make%20an%20enquiry%20about%20your%20services.",
  ukWhatsapp:
    "https://wa.me/447413753552?text=Hello%20Octalve%2C%20I%20want%20to%20make%20an%20enquiry%20about%20your%20services.",
};

const PORTAL_LINK = {
  label: "Octalve Workdesk",
  href: "/portal",
};

const SEARCH_LINK = {
  label: "Search or explore Octalve",
  href: "/models",
};

type BadgeTone =
  | "new"
  | "popular"
  | "impact"
  | "ai"
  | "growth"
  | "cloud"
  | "build"
  | "strategy";

type NavBadge = {
  label: string;
  tone: BadgeTone;
};

type NavItem = {
  label: string;
  href: string;
  description?: string;
  badge?: NavBadge;
};

type ModelItem = {
  title: string;
  description: string;
  href: string;
  badge?: NavBadge;
};

const badgeClasses: Record<BadgeTone, string> = {
  new: "bg-[#F04D23] text-white",
  popular: "bg-[#FC7E24] text-white",
  impact: "bg-[#29BE3E] text-white",
  ai: "bg-[#651FFF] text-white",
  growth: "bg-[#0064E0] text-white",
  cloud: "bg-[#0A84FF] text-white",
  build: "bg-[#000A16] text-white",
  strategy: "bg-[#0F3D33] text-white",
};

const models: ModelItem[] = [
  {
    title: "Consult",
    description:
      "Strategy, advisory, and transformation support, when you need it, how you need it.",
    href: "/models/consult",
    badge: { label: "Strategy", tone: "strategy" },
  },
  {
    title: "Suite",
    description:
      "One platform. Zero stress. Launch with website, branding, and marketing tools in 14 days.",
    href: "/models/suite",
    badge: { label: "Popular", tone: "popular" },
  },
  {
    title: "One",
    description: "Building intelligent business solutions for SMEs.",
    href: "/models/one",
    badge: { label: "AI", tone: "ai" },
  },
  {
    title: "Node",
    description: "The intersection of innovation and you.",
    href: "/models/node",
    badge: { label: "Hub", tone: "growth" },
  },
  {
    title: "Lab",
    description:
      "We design tech solutions users love, investors can't resist, and builders are proud of.",
    href: "/models/lab",
    badge: { label: "Build", tone: "build" },
  },
  {
    title: "Leap",
    description: "Growth-focused execution and market expansion support.",
    href: "/models/leap",
    badge: { label: "Growth", tone: "growth" },
  },
  {
    title: "Vault",
    description: "Lock in with innovation and growth assets.",
    href: "/models/vault",
    badge: { label: "Assets", tone: "impact" },
  },
  {
    title: "Cloud",
    description:
      "Domain-Hosting | Grow your ideas and business online — faster, smarter, for less.",
    href: "/models/cloud",
    badge: { label: "Cloud", tone: "cloud" },
  },
];

const whoWeAre: NavItem[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    description: "Understand Octalve’s mission, structure, and vision.",
    badge: { label: "About", tone: "strategy" },
  },
  {
    label: "Leadership",
    href: "/leadership",
    description: "Meet the people and philosophy behind Octalve.",
    badge: { label: "People", tone: "growth" },
  },
];

const explore: NavItem[] = [
  {
    label: "Trend",
    href: "/trends",
    description: "Insights, signals, and business-growth perspectives.",
    badge: { label: "New", tone: "new" },
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    description: "Selected projects, products, and implementation work.",
    badge: { label: "Work", tone: "build" },
  },
  {
    label: "IAMimpact",
    href: "/iamimpact",
    description: "A personal impact and thought-leadership channel.",
    badge: { label: "Impact", tone: "impact" },
  },
  {
    label: "Career",
    href: "/career",
    description: "Opportunities to work, build, and grow with Octalve.",
    badge: { label: "Hiring", tone: "popular" },
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Badge({
  badge,
  compact = false,
}: {
  badge: NavBadge;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-md font-bold uppercase leading-none tracking-[0.03em]",
        badgeClasses[badge.tone],
        compact ? "px-1.5 py-1 text-[10px]" : "px-2 py-1 text-[11px]",
      )}
    >
      {badge.label}
    </span>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11 19A8 8 0 1 0 11 3a8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 21a8 8 0 0 0-16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 16.92v2.6a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 1.8h2.6a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L7.8 9.34a16 16 0 0 0 6.86 6.86l1.09-1.09a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5.2 19.1 6.3 15.4a7.4 7.4 0 1 1 2.7 2.6l-3.8 1.1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 8.9c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2.1 2.9 2.7l.5-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.5.3-1.2.5-2 .3-2.7-.5-5.8-3.3-6.4-6.2-.2-.8 0-1.5.3-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PortalProfileLink({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href={PORTAL_LINK.href}
      className={cn(
        "group inline-flex shrink-0 items-center justify-center border border-slate-200 bg-white text-[#000A16] shadow-sm transition hover:border-[#0A84FF]/40 hover:bg-[#F1F6FF] hover:text-[#0A84FF]",
        compact ? "h-14 w-14 rounded-2xl" : "h-11 w-11 rounded-xl",
      )}
      aria-label={PORTAL_LINK.label}
      title={PORTAL_LINK.label}
    >
      <UserIcon />
    </Link>
  );
}

function DesktopNavLink({
  href,
  label,
  pathname,
  badge,
}: {
  href: string;
  label: string;
  pathname: string;
  badge?: NavBadge;
}) {
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex h-12 items-center whitespace-nowrap rounded-xl px-3.5 text-[14.5px] font-semibold transition hover:bg-[#F1F6FF] hover:text-[#0A84FF]",
        active && "bg-[#F1F6FF]",
      )}
      style={{
        color: active ? NAV_COLORS.primary : NAV_COLORS.textDark,
      }}
    >
      {badge ? (
        <span className="absolute -top-2 left-3.5">
          <Badge badge={badge} compact />
        </span>
      ) : null}

      {label}
    </Link>
  );
}

function DesktopDropdown({
  label,
  items,
  pathname,
  badge,
}: {
  label: string;
  items: NavItem[];
  pathname: string;
  badge?: NavBadge;
}) {
  const active = items.some((item) => isActivePath(pathname, item.href));

  return (
    <div className="group relative">
      <button
        className={cn(
          "relative inline-flex h-12 items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 text-[14.5px] font-semibold transition hover:bg-[#F1F6FF] hover:text-[#0A84FF]",
          active && "bg-[#F1F6FF]",
        )}
        style={{
          color: active ? NAV_COLORS.primary : NAV_COLORS.textDark,
        }}
        type="button"
      >
        {badge ? (
          <span className="absolute -top-2 left-3.5">
            <Badge badge={badge} compact />
          </span>
        ) : null}

        {label}
        <ChevronDown className="mt-px h-4 w-4 transition group-hover:rotate-180" />
      </button>

      <div className="invisible absolute left-0 top-[calc(100%-1px)] z-50 pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="w-[390px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
          {items.map((item) => {
            const itemActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group/item flex items-center justify-between gap-4 rounded-xl px-4 py-4 transition hover:bg-slate-50",
                  itemActive && "bg-[#F1F6FF]",
                )}
              >
                <span>
                  <span
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{
                      color: itemActive
                        ? NAV_COLORS.primary
                        : NAV_COLORS.textDark,
                    }}
                  >
                    {item.label}
                    {item.badge ? <Badge badge={item.badge} compact /> : null}
                  </span>

                  {item.description ? (
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      {item.description}
                    </span>
                  ) : null}
                </span>

                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 group-hover/item:text-[#0A84FF]" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MegaMenuLink({
  model,
  pathname,
}: {
  model: ModelItem;
  pathname: string;
}) {
  const active = isActivePath(pathname, model.href);

  return (
    <Link
      href={model.href}
      className={cn(
        "group block rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:border-[#0A84FF]/40 hover:bg-[#F8FAFC] hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)]",
        active
          ? "border-[#0A84FF]/40 bg-[#F1F6FF]"
          : "border-slate-200 bg-white",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4
              className="text-[15px] font-semibold tracking-[-0.02em]"
              style={{
                color: active ? NAV_COLORS.primary : NAV_COLORS.textDark,
              }}
            >
              {model.title}
            </h4>

            {model.badge ? <Badge badge={model.badge} compact /> : null}
          </div>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {model.description}
          </p>
        </div>

        <span className="mt-1 text-sm text-[#0A84FF] opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
          ↗
        </span>
      </div>
    </Link>
  );
}

function DesktopMegaMenu({ pathname }: { pathname: string }) {
  const active = models.some((model) => isActivePath(pathname, model.href));

  return (
    <div className="group static">
      <button
        className={cn(
          "relative inline-flex h-12 items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 text-[14.5px] font-semibold transition hover:bg-[#F1F6FF] hover:text-[#0A84FF]",
          active && "bg-[#F1F6FF]",
        )}
        style={{
          color: active ? NAV_COLORS.primary : NAV_COLORS.textDark,
        }}
        type="button"
      >
        <span className="absolute -top-2 left-3.5">
          <Badge badge={{ label: "Ecosystem", tone: "growth" }} compact />
        </span>
        Models
        <ChevronDown className="mt-px h-4 w-4 transition group-hover:rotate-180" />
      </button>

      <div className="invisible absolute left-0 top-[calc(100%-1px)] z-50 w-full pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="border-y border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
          <div className="mx-auto w-full max-w-[1380px] px-6 py-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[330px_minmax(0,1fr)]">
              <div className="rounded-[28px] border border-[#0A84FF]/20 bg-gradient-to-br from-[#001B3D] via-[#003B7A] to-[#0064E0] p-7 text-white shadow-[0_20px_60px_rgba(0,100,224,0.22)]">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Octalve Models
                  <Badge
                    badge={{ label: "Premium", tone: "popular" }}
                    compact
                  />
                </div>

                <h3 className="mt-5 text-[31px] font-semibold leading-[1.08] tracking-[-0.05em] text-white">
                  Explore the Octalve ecosystem
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/80">
                  Strategy, launch, software, cloud infrastructure, workspace,
                  and growth systems built for founders, SMEs, and ambitious
                  organizations.
                </p>

                <Link
                  href="/models"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                  style={{
                    color: NAV_COLORS.textDark,
                    backgroundColor: NAV_COLORS.white,
                  }}
                >
                  View all models
                  <span>↗</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {models.map((model) => (
                  <MegaMenuLink
                    key={model.title}
                    model={model}
                    pathname={pathname}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  label,
  items,
  pathname,
  onNavigate,
  badge,
}: {
  label: string;
  items: NavItem[];
  pathname: string;
  onNavigate: () => void;
  badge?: NavBadge;
}) {
  const [open, setOpen] = useState(false);
  const active = items.some((item) => isActivePath(pathname, item.href));

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between bg-white px-5 py-5 text-left text-[17px] font-semibold transition hover:bg-[#F1F6FF]"
        style={{
          color: active || open ? NAV_COLORS.primary : NAV_COLORS.textDark,
        }}
        type="button"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          {label}
          {badge ? <Badge badge={badge} /> : null}
        </span>

        <ChevronDown
          className={cn("h-5 w-5 transition", open && "rotate-180")}
        />
      </button>

      {open ? (
        <div className="bg-slate-100">
          {items.map((item) => {
            const itemActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className="block border-t border-white/80 px-5 py-4 transition hover:bg-white"
              >
                <span
                  className="flex items-center gap-2 text-base font-semibold"
                  style={{
                    color: itemActive
                      ? NAV_COLORS.primary
                      : NAV_COLORS.textDark,
                  }}
                >
                  {item.label}
                  {item.badge ? <Badge badge={item.badge} compact /> : null}
                </span>

                {item.description ? (
                  <span className="mt-1 block text-sm leading-6 text-slate-500">
                    {item.description}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function MobileModelsAccordion({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(true);
  const active = models.some((model) => isActivePath(pathname, model.href));

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between bg-white px-5 py-5 text-left text-[17px] font-semibold transition hover:bg-[#F1F6FF]"
        style={{
          color: active || open ? NAV_COLORS.primary : NAV_COLORS.textDark,
        }}
        type="button"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          Models
          <Badge badge={{ label: "Ecosystem", tone: "growth" }} />
        </span>

        <ChevronDown
          className={cn("h-5 w-5 transition", open && "rotate-180")}
        />
      </button>

      {open ? (
        <div className="grid gap-3 bg-slate-100 p-4">
          {models.map((model) => {
            const itemActive = isActivePath(pathname, model.href);

            return (
              <Link
                key={model.title}
                href={model.href}
                onClick={onNavigate}
                className={cn(
                  "rounded-2xl border p-4 transition hover:border-[#0A84FF]/40 hover:bg-white",
                  itemActive
                    ? "border-[#0A84FF]/40 bg-white"
                    : "border-slate-200 bg-white/70",
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h4
                    className="text-sm font-semibold"
                    style={{
                      color: itemActive
                        ? NAV_COLORS.primary
                        : NAV_COLORS.textDark,
                    }}
                  >
                    {model.title}
                  </h4>

                  {model.badge ? <Badge badge={model.badge} compact /> : null}
                </div>

                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                  {model.description}
                </p>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function MobileContactLink({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-semibold transition hover:border-[#0A84FF]/40 hover:bg-[#F1F6FF]"
      style={{ color: NAV_COLORS.textDark }}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#0A84FF]">
        {icon}
      </span>

      <span className="min-w-0 break-words">{label}</span>
    </a>
  );
}

function MobileEmergencyCard() {
  return (
    <div className="mt-5 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-4">
      <p
        className="text-xs font-bold uppercase tracking-[0.16em]"
        style={{ color: NAV_COLORS.textSoft }}
      >
        Quick Response
      </p>

      <div className="mt-4 grid gap-3">
        <MobileContactLink
          href={CONTACT_LINKS.nigeriaPhone}
          label="+234 807 345 9090"
          icon={<PhoneIcon />}
        />

        <MobileContactLink
          href={CONTACT_LINKS.ukPhone}
          label="+44 7413 753552"
          icon={<PhoneIcon />}
        />

        <MobileContactLink
          href={CONTACT_LINKS.email}
          label="info@octalve.com"
          icon={<MailIcon />}
        />
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <MobileContactLink
          href={CONTACT_LINKS.nigeriaWhatsapp}
          label="WhatsApp Nigeria"
          icon={<WhatsAppIcon />}
          external
        />

        <MobileContactLink
          href={CONTACT_LINKS.ukWhatsapp}
          label="WhatsApp UK"
          icon={<WhatsAppIcon />}
          external
        />
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const closeMobileMenu = () => setMobileOpen(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full">
      <div className="flex h-1 w-full">
        <div style={{ backgroundColor: NAV_COLORS.red }} className="w-1/4" />
        <div style={{ backgroundColor: NAV_COLORS.blue }} className="w-1/4" />
        <div style={{ backgroundColor: NAV_COLORS.yellow }} className="w-1/4" />
        <div style={{ backgroundColor: NAV_COLORS.green }} className="w-1/4" />
      </div>

      <div
        className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.20em] text-white sm:px-6"
        style={{
          backgroundColor: NAV_COLORS.topBarBg,
          color: NAV_COLORS.white,
        }}
      >
        Quick Response&nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          href={CONTACT_LINKS.nigeriaPhone}
          className="hover:underline"
          style={{ color: NAV_COLORS.white }}
        >
          +234 807 345 9090
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;Support:
        <a
          href={CONTACT_LINKS.email}
          className="ml-1 hover:underline"
          style={{ color: NAV_COLORS.white }}
        >
          info@octalve.com
        </a>
      </div>

      <div
        className="border-b"
        style={{
          backgroundColor: NAV_COLORS.headerBg,
          borderColor: NAV_COLORS.border,
        }}
      >
        <div className="mx-auto flex h-[80px] w-full max-w-[1540px] items-center justify-between gap-6 px-4 sm:px-6 lg:relative lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
              <Image
                src={octalveLogo}
                alt="Octalve Holding logo"
                fill
                className="object-contain p-1"
                sizes="48px"
              />
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1.5 xl:flex">
            <DesktopNavLink href="/" label="Home" pathname={pathname} />

            <DesktopDropdown
              label="Who We Are"
              items={whoWeAre}
              pathname={pathname}
              badge={{ label: "About", tone: "strategy" }}
            />

            <DesktopMegaMenu pathname={pathname} />

            <DesktopDropdown
              label="Explore"
              items={explore}
              pathname={pathname}
              badge={{ label: "New", tone: "new" }}
            />

            <DesktopNavLink
              href="/contact"
              label="Contact Us"
              pathname={pathname}
              badge={{ label: "Talk", tone: "cloud" }}
            />
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 text-[14.5px] font-semibold transition hover:border-[#0A84FF]"
              style={{
                color: NAV_COLORS.textDark,
                backgroundColor: NAV_COLORS.white,
              }}
            >
              Talk to Us
            </Link>

            <Link
              href="/start-project"
              className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl px-5 text-[14.5px] font-semibold shadow-[0_14px_30px_rgba(10,132,255,0.22)] transition hover:-translate-y-0.5"
              style={{
                color: NAV_COLORS.white,
                backgroundColor: NAV_COLORS.primary,
              }}
            >
              Start a Project
            </Link>

            <PortalProfileLink />
          </div>

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[#0A84FF] xl:hidden"
            style={{ color: NAV_COLORS.textDark }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="octalve-mobile-menu"
            type="button"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="octalve-mobile-menu"
          className="max-h-[calc(100vh-134px)] overflow-y-auto border-b border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] xl:hidden"
        >
          <div className="mx-auto w-full max-w-[760px] px-4 py-5 sm:px-6">
            <div className="mb-5 grid grid-cols-[1fr_auto] gap-3">
              <Link
                href={SEARCH_LINK.href}
                onClick={closeMobileMenu}
                className="relative flex h-14 w-full items-center rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-base font-medium transition hover:border-[#0A84FF] hover:ring-4 hover:ring-blue-100"
                style={{ color: NAV_COLORS.textSoft }}
              >
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <SearchIcon />
                </span>
                {SEARCH_LINK.label}
              </Link>

              <PortalProfileLink compact />
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-slate-200 px-5 py-5 text-[17px] font-semibold transition hover:bg-[#F1F6FF]"
                style={{
                  color: isActivePath(pathname, "/")
                    ? NAV_COLORS.primary
                    : NAV_COLORS.textDark,
                }}
              >
                <span>Home</span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </Link>

              <MobileAccordion
                label="Who We Are"
                items={whoWeAre}
                pathname={pathname}
                onNavigate={closeMobileMenu}
                badge={{ label: "About", tone: "strategy" }}
              />

              <MobileModelsAccordion
                pathname={pathname}
                onNavigate={closeMobileMenu}
              />

              <MobileAccordion
                label="Explore"
                items={explore}
                pathname={pathname}
                onNavigate={closeMobileMenu}
                badge={{ label: "New", tone: "new" }}
              />

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-5 py-5 text-[17px] font-semibold transition hover:bg-[#F1F6FF]"
                style={{
                  color: isActivePath(pathname, "/contact")
                    ? NAV_COLORS.primary
                    : NAV_COLORS.textDark,
                }}
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <Badge badge={{ label: "Talk", tone: "cloud" }} />
                </span>

                <ChevronRight className="h-5 w-5 text-slate-400" />
              </Link>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold transition hover:border-[#0A84FF]"
                style={{
                  color: NAV_COLORS.textDark,
                  backgroundColor: NAV_COLORS.white,
                }}
              >
                Talk to Us
                <span
                  className="mt-1 block text-xs font-medium"
                  style={{ color: NAV_COLORS.textSoft }}
                >
                  Speak with the Octalve team
                </span>
              </Link>

              <Link
                href="/start-project"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-[#0A84FF] px-5 py-4 text-sm font-semibold transition hover:bg-[#006FE0]"
                style={{
                  color: NAV_COLORS.white,
                  backgroundColor: NAV_COLORS.primary,
                }}
              >
                Start a Project
                <span className="mt-1 block text-xs font-medium text-white/80">
                  Begin your brand, website, app, or system
                </span>
              </Link>
            </div>

            <MobileEmergencyCard />
          </div>
        </div>
      ) : null}
    </header>
  );
}
