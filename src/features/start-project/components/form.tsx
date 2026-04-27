// export default function StartProjectForm() {
//   return (
//     <section id="project-form" className="bg-[#F8FAFC]">
//       <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
//           <div>
//             <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
//               Project brief form
//             </h2>
//             <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
//               ----
//             </p>
//           </div>

//           <form className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//             <div className="grid gap-5 sm:grid-cols-2">
//               <div className="sm:col-span-1">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Full name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your full name"
//                   className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
//                 />
//               </div>

//               <div className="sm:col-span-1">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
//                 />
//               </div>

//               <div className="sm:col-span-1">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Phone number
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="+234..."
//                   className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
//                 />
//               </div>

//               <div className="sm:col-span-1">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Project type
//                 </label>
//                 <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]">
//                   <option>Website</option>
//                   <option>Branding</option>
//                   <option>UI/UX Design</option>
//                   <option>Business Strategy</option>
//                   <option>Product Setup</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Project title
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="What are you building?"
//                   className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
//                 />
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Project description
//                 </label>
//                 <textarea
//                   rows={6}
//                   placeholder="Describe your project goals, audience, timeline, and anything important..."
//                   className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
//                 />
//               </div>

//               <div className="sm:col-span-1">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Budget range
//                 </label>
//                 <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]">
//                   <option>Not sure yet</option>
//                   <option>₦50,000 - ₦150,000</option>
//                   <option>₦150,000 - ₦500,000</option>
//                   <option>₦500,000 - ₦1,000,000</option>
//                   <option>₦1,000,000+</option>
//                 </select>
//               </div>

//               <div className="sm:col-span-1">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Timeline
//                 </label>
//                 <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]">
//                   <option>As soon as possible</option>
//                   <option>Within 2 weeks</option>
//                   <option>Within 1 month</option>
//                   <option>Flexible</option>
//                 </select>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="mt-6 inline-flex rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
//             >
//               Submit project brief
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// Old Start Project form with tabs and embedded Calendly widget for meeting booking. Keeping this here for reference and potential reuse in the future when we want to expand the form with more options without changing the URL structure.

// "use client";

// import { useState } from "react";
// import {
//   BriefcaseBusiness,
//   CalendarDays,
//   ChevronLeft,
//   ChevronRight,
//   Cloud,
//   LifeBuoy,
//   Mail,
//   PackageOpen,
//   PhoneCall,
// } from "lucide-react";

// type StartProjectTab = "project" | "meeting" | "email" | "call";

// const USE_EXTERNAL_PROJECT_FORM = false;
// const PROJECT_FORM_EMBED_URL = "";

// // Keep this embedded for now.
// const USE_EMBEDDED_MEETING_WIDGET = true;
// const CALENDLY_EMBED_URL =
//   "https://calendly.com/octalve-info/30min?hide_gdpr_banner=1&primary_color=0064e0";

// const tabs = [
//   {
//     key: "project" as const,
//     label: "Project brief",
//     icon: BriefcaseBusiness,
//   },
//   {
//     key: "meeting" as const,
//     label: "Book a meeting",
//     icon: CalendarDays,
//   },
//   {
//     key: "email" as const,
//     label: "Send us an email",
//     icon: Mail,
//   },
//   {
//     key: "call" as const,
//     label: "Give us a call",
//     icon: PhoneCall,
//   },
// ];

// const inputClassName =
//   "w-full rounded-2xl border border-slate-300/90 bg-white px-4 py-3.5 text-sm text-black shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-black/35 focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10";

// const textareaClassName =
//   "w-full rounded-2xl border border-slate-300/90 bg-white px-4 py-3.5 text-sm text-black shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-black/35 focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10";

// const selectClassName =
//   "w-full rounded-2xl border border-slate-300/90 bg-white px-4 py-3.5 text-sm text-black shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none transition focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10";

// const primaryButtonClassName =
//   "inline-flex items-center justify-center rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8] focus:outline-none focus:ring-4 focus:ring-[#0064E0]/15";

// const secondaryButtonClassName =
//   "inline-flex items-center justify-center rounded-full border border-[#0064E0]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0064E0] transition hover:border-[#0064E0]/40 hover:bg-[#0064E0]/5 focus:outline-none focus:ring-4 focus:ring-[#0064E0]/10";

// export default function StartProjectForm() {
//   const [activeTab, setActiveTab] = useState<StartProjectTab>("project");

//   return (
//     <section
//       id="project-form"
//       className="bg-[linear-gradient(180deg,#F8FAFC_0%,#F3F7FD_100%)]"
//     >
//       <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
//         <div className="mx-auto max-w-4xl text-center">
//           <span className="inline-flex rounded-full border border-[#0064E0]/15 bg-[#0064E0]/5 px-4 py-1 text-sm font-medium text-[#0064E0]">
//             Start a Project
//           </span>

//           <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
//             Looking to start something meaningful?
//           </h2>

//           <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
//             Choose how you’d like to connect with Octalve — send a project
//             brief, book a meeting, email the right team, or call us directly.
//           </p>
//         </div>

//         <div className="mx-auto mt-10 max-w-5xl">
//           <div className="rounded-[30px] border border-slate-200/80 bg-white/80 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
//             <div
//               role="tablist"
//               aria-label="Start a project contact options"
//               className="flex gap-2 overflow-x-auto px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//             >
//               {tabs.map(({ key, label, icon: Icon }) => {
//                 const isActive = activeTab === key;

//                 return (
//                   <button
//                     key={key}
//                     type="button"
//                     role="tab"
//                     aria-selected={isActive}
//                     onClick={() => setActiveTab(key)}
//                     className={`group flex min-w-[180px] shrink-0 flex-col items-center justify-center rounded-[24px] border px-4 py-4 text-center transition sm:min-w-[200px] md:flex-1 ${
//                       isActive
//                         ? "border-[#0064E0]/15 bg-[#0064E0]/6 text-[#0064E0] shadow-[0_8px_24px_rgba(0,100,224,0.08)]"
//                         : "border-transparent bg-transparent text-slate-900 hover:border-[#0064E0]/10 hover:bg-[#0064E0]/4 hover:text-[#0064E0]"
//                     }`}
//                   >
//                     <span
//                       className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
//                         isActive
//                           ? "bg-[#0064E0]/10"
//                           : "bg-slate-100 group-hover:bg-[#0064E0]/8"
//                       }`}
//                     >
//                       <Icon className="h-5 w-5" strokeWidth={1.9} />
//                     </span>

//                     <span className="mt-3 text-sm font-medium">{label}</span>

//                     <span
//                       className={`mt-3 h-[3px] w-12 rounded-full transition ${
//                         isActive ? "bg-[#0064E0]" : "bg-transparent"
//                       }`}
//                     />
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="mt-2 flex items-center justify-center gap-1 text-xs font-medium text-[#0064E0] md:hidden">
//               <ChevronLeft className="h-4 w-4" />
//               <span>Swipe left or right</span>
//               <ChevronRight className="h-4 w-4" />
//             </div>
//           </div>
//         </div>

//         <div className="mx-auto mt-8 max-w-4xl">
//           {activeTab === "project" && <ProjectBriefPanel />}
//           {activeTab === "meeting" && (
//             <MeetingPanel onSwitchToProject={() => setActiveTab("project")} />
//           )}
//           {activeTab === "email" && <EmailPanel />}
//           {activeTab === "call" && <CallPanel />}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProjectBriefPanel() {
//   return (
//     <div className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
//       <div className="border-b border-slate-200/70 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-6 py-8 sm:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
//             Share your project brief
//           </h3>

//           <p className="mt-4 text-base leading-7 text-slate-600">
//             Tell us what you’re building, what you need, and where you want to
//             go. We’ll review it and connect you with the right Octalve service,
//             team, or next step.
//           </p>

//           <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
//             {[
//               "Branding",
//               "Websites",
//               "Strategy",
//               "Structure",
//               "Cloud",
//               "Digital Products",
//             ].map((item) => (
//               <span
//                 key={item}
//                 className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="p-6 sm:p-8">
//         {/*
//           External form slot:
//           Switch USE_EXTERNAL_PROJECT_FORM to true and add your Zoho / Tally / Typeform / Google Form embed URL
//           to PROJECT_FORM_EMBED_URL when you're ready to replace the internal form without changing this layout.
//         */}
//         {USE_EXTERNAL_PROJECT_FORM && PROJECT_FORM_EMBED_URL ? (
//           <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
//             <iframe
//               src={PROJECT_FORM_EMBED_URL}
//               title="Project brief form"
//               className="h-[980px] w-full border-0 md:h-[920px]"
//             />
//           </div>
//         ) : (
//           <form>
//             <div className="grid gap-5 sm:grid-cols-2">
//               <div>
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Full name
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Your full name"
//                   className={inputClassName}
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="you@example.com"
//                   className={inputClassName}
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Phone number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="+234..."
//                   className={inputClassName}
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Project type / service needed
//                 </label>
//                 <select name="projectType" className={selectClassName}>
//                   <option className="text-black">Website / Landing Page</option>
//                   <option className="text-black">Brand Identity</option>
//                   <option className="text-black">UI/UX Design</option>
//                   <option className="text-black">
//                     Personal Brand Strategy
//                   </option>
//                   <option className="text-black">
//                     Offer &amp; Sales Blueprint
//                   </option>
//                   <option className="text-black">
//                     Business Structure Setup
//                   </option>
//                   <option className="text-black">Startup Launch Roadmap</option>
//                   <option className="text-black">Cloud / Domain / Email</option>
//                   <option className="text-black">Vault / Storefront</option>
//                   <option className="text-black">Custom Digital Product</option>
//                   <option className="text-black">Other</option>
//                 </select>
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Project title
//                 </label>
//                 <input
//                   type="text"
//                   name="projectTitle"
//                   placeholder="What are you building?"
//                   className={inputClassName}
//                 />
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Project description
//                 </label>
//                 <textarea
//                   rows={6}
//                   name="projectDescription"
//                   placeholder="Tell us what you need, who it is for, your goals, timeline, budget, and anything important we should know..."
//                   className={textareaClassName}
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Budget range
//                 </label>
//                 <select name="budget" className={selectClassName}>
//                   <option className="text-black">Not sure yet</option>
//                   <option className="text-black">₦50,000 - ₦150,000</option>
//                   <option className="text-black">₦150,000 - ₦500,000</option>
//                   <option className="text-black">₦500,000 - ₦1,000,000</option>
//                   <option className="text-black">₦1,000,000+</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium text-slate-900">
//                   Timeline
//                 </label>
//                 <select name="timeline" className={selectClassName}>
//                   <option className="text-black">As soon as possible</option>
//                   <option className="text-black">Within 2 weeks</option>
//                   <option className="text-black">Within 1 month</option>
//                   <option className="text-black">Flexible</option>
//                 </select>
//               </div>
//             </div>

//             <div className="mt-6 flex flex-wrap items-center gap-3">
//               <button type="submit" className={primaryButtonClassName}>
//                 Submit project brief
//               </button>

//               <a href="#book-meeting" className={secondaryButtonClassName}>
//                 Book a meeting instead
//               </a>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// function MeetingPanel({
//   onSwitchToProject,
// }: {
//   onSwitchToProject: () => void;
// }) {
//   return (
//     <div
//       id="book-meeting"
//       className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
//     >
//       <div className="border-b border-slate-200/70 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-6 py-8 sm:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
//             Book a 30-minute meeting
//           </h3>

//           <p className="mt-4 text-base leading-7 text-slate-600">
//             Pick a time that works for you and let’s talk through your idea,
//             business, project scope, or next step.
//           </p>
//         </div>
//       </div>

//       <div className="p-4 sm:p-6">
//         {USE_EMBEDDED_MEETING_WIDGET ? (
//           <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
//             <iframe
//               src={CALENDLY_EMBED_URL}
//               title="Book a meeting with Octalve"
//               className="h-[720px] w-full border-0 sm:h-[760px] lg:h-[800px]"
//             />
//           </div>
//         ) : (
//           <div className="mx-auto max-w-2xl rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-center sm:p-8">
//             <p className="text-base leading-7 text-slate-600">
//               Use our booking link to schedule a conversation with the Octalve
//               team.
//             </p>

//             <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
//               <a
//                 href={CALENDLY_EMBED_URL}
//                 target="_blank"
//                 rel="noreferrer"
//                 className={primaryButtonClassName}
//               >
//                 Book a meeting
//               </a>

//               <button
//                 type="button"
//                 onClick={onSwitchToProject}
//                 className={secondaryButtonClassName}
//               >
//                 Send project brief
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function EmailPanel() {
//   const emails = [
//     {
//       title: "General enquiries",
//       email: "info@octalve.com",
//       note: "For project enquiries, collaborations, partnerships, and general business conversations.",
//       icon: Mail,
//     },
//     {
//       title: "Support",
//       email: "support@octalve.com",
//       note: "For follow-ups, support questions, and help across the Octalve ecosystem.",
//       icon: LifeBuoy,
//     },
//     {
//       title: "Cloud",
//       email: "cloud@octalve.com",
//       note: "For hosting, domains, email setup, servers, migration, and infrastructure questions.",
//       icon: Cloud,
//     },
//     {
//       title: "Vault",
//       email: "vault@octalve.com",
//       note: "For storefront, templates, digital assets, and related enquiries.",
//       icon: PackageOpen,
//     },
//   ];

//   return (
//     <div className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
//       <div className="border-b border-slate-200/70 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-6 py-8 sm:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
//             Send us an email
//           </h3>

//           <p className="mt-4 text-base leading-7 text-slate-600">
//             Reach the right team directly using the email that best matches your
//             need.
//           </p>
//         </div>
//       </div>

//       <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
//         {emails.map((item) => {
//           const Icon = item.icon;

//           return (
//             <a
//               key={item.email}
//               href={`mailto:${item.email}`}
//               className="group rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0064E0]/20 hover:shadow-[0_14px_40px_rgba(0,100,224,0.08)]"
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0064E0]/8 text-[#0064E0]">
//                   <Icon className="h-5 w-5" strokeWidth={1.9} />
//                 </div>

//                 <span className="inline-flex rounded-full bg-[#0064E0]/6 px-3 py-1 text-xs font-medium text-[#0064E0]">
//                   Email now
//                 </span>
//               </div>

//               <p className="mt-5 text-sm font-semibold text-slate-950">
//                 {item.title}
//               </p>

//               <p className="mt-3 text-base font-semibold text-[#0064E0] break-all">
//                 {item.email}
//               </p>

//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 {item.note}
//               </p>
//             </a>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function CallPanel() {
//   const phoneNumbers = [
//     {
//       flag: "🇳🇬",
//       region: "Nigeria",
//       number: "+2348073459090",
//       href: "tel:+2348073459090",
//     },
//     {
//       flag: "🇦🇪",
//       region: "UAE",
//       number: "+9710000000",
//       href: "tel:+9710000000",
//     },
//     {
//       flag: "🇬🇧",
//       region: "UK",
//       number: "+1 84030393",
//       href: "tel:+184030393",
//     },
//   ];

//   return (
//     <div className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
//       <div className="border-b border-slate-200/70 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-6 py-8 sm:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
//             Give us a call
//           </h3>

//           <p className="mt-4 text-base leading-7 text-slate-600">
//             Prefer to speak directly? Reach us through the number closest to
//             your location.
//           </p>
//         </div>
//       </div>

//       <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
//         {phoneNumbers.map((item) => (
//           <a
//             key={item.region}
//             href={item.href}
//             className="group rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[#0064E0]/20 hover:shadow-[0_14px_40px_rgba(0,100,224,0.08)]"
//           >
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0064E0]/8 text-2xl">
//               <span>{item.flag}</span>
//             </div>

//             <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
//               {item.region}
//             </p>

//             <p className="mt-2 text-base font-semibold text-slate-950">
//               {item.number}
//             </p>

//             <span className="mt-4 inline-flex rounded-full bg-[#0064E0]/6 px-4 py-2 text-sm font-semibold text-[#0064E0]">
//               Call now
//             </span>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }
