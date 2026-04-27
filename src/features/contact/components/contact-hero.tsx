// import React from "react";

// const CONTACT_ITEMS = [
//   {
//     id: "location",
//     title: "Location:",
//     // value: "AP Plaza, No. 1 Aguiyi Ironsi Street Maitama, Opposite Transcorp Hilton, Abuja.",
//     value: "Wuye, Abuja, Nigeria.",
//     bg: "bg-red-500",
//     icon: (
//       <svg
//         width="34"
//         height="34"
//         viewBox="0 0 24 24"
//         fill="none"
//         aria-hidden="true"
//       >
//         <path
//           d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
//           stroke="white"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <circle cx="12" cy="10" r="2.5" stroke="white" strokeWidth="1.8" />
//       </svg>
//     ),
//   },
//   {
//     id: "phone",
//     title: "Phone:",
//     value: "+2348073459090",
//     bg: "bg-blue-600",
//     icon: (
//       <svg
//         width="34"
//         height="34"
//         viewBox="0 0 24 24"
//         fill="none"
//         aria-hidden="true"
//       >
//         <path
//           d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z"
//           stroke="white"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "email",
//     title: "Email:",
//     value: "info@octalve.com",
//     bg: "bg-green-500",
//     icon: (
//       <svg
//         width="34"
//         height="34"
//         viewBox="0 0 24 24"
//         fill="none"
//         aria-hidden="true"
//       >
//         <path
//           d="M4 6h16v12H4z"
//           stroke="white"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="m4 7 8 6 8-6"
//           stroke="white"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
// ];

// function ContactCard({
//   title,
//   value,
//   bg,
//   icon,
// }: {
//   title: string;
//   value: string;
//   bg: string;
//   icon: React.ReactNode;
// }) {
//   return (
//     <div className="rounded-[28px] bg-white px-6 py-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] ring-1 ring-black/5">
//       <div className="flex items-center gap-5">
//         <div
//           className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full ${bg}`}
//         >
//           {icon}
//         </div>

//         <div className="min-w-0">
//           <h3 className="text-[28px] font-light leading-none text-[#2f2f2f] sm:text-[30px]">
//             {title}
//           </h3>
//           <p className="mt-4 break-words text-xl font-light leading-8 text-slate-600">
//             {value}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ContactHero() {
//   return (
//     <section className="bg-[#f8fafc]">
//       <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
//         <div className="mx-auto max-w-4xl text-center">
//           <p className="text-sm font-medium tracking-[0.28em] text-[#2563eb]">
//             Contact Info
//           </p>

//           <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-[1.05] tracking-[-0.04em] text-[#333333] sm:text-5xl lg:text-7xl">
//             Reach Out to Us for any Inquiries or Support
//           </h1>
//         </div>

//         <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {CONTACT_ITEMS.map((item) => (
//             <ContactCard
//               key={item.id}
//               title={item.title}
//               value={item.value}
//               bg={item.bg}
//               icon={item.icon}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

type ContactItem = {
  id: string;
  title: string;
  value: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: ReactNode;
  iconClassName: string;
  badgeClassName: string;
  external?: boolean;
};

const CONTACT_LINKS = {
  location:
    "https://www.google.com/maps/search/?api=1&query=Gwarimpa%201st%20Avenue%2C%20Abuja%2C%20Nigeria",
  phone: "tel:+2348073459090",
  email: "mailto:info@octalve.com",
  whatsapp:
    "https://wa.me/2348073459090?text=Hello%20Octalve%2C%20I%20want%20to%20make%20an%20enquiry%20about%20your%20services.",
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    id: "location",
    title: "Visit / Locate Us",
    value: "Gwarimpa 1st Avenue, Abuja, Nigeria",
    description:
      "Reach Octalve physically or use the map direction to locate our base in Abuja.",
    href: CONTACT_LINKS.location,
    actionLabel: "Open map",
    icon: <MapPin className="h-6 w-6" strokeWidth={1.9} />,
    iconClassName: "bg-[#E61525]/10 text-[#E61525]",
    badgeClassName: "bg-[#E61525]/8 text-[#E61525]",
    external: true,
  },
  {
    id: "phone",
    title: "Call Octalve",
    value: "+234 807 345 9090",
    description:
      "Speak with us directly about strategy, branding, websites, systems, or partnerships.",
    href: CONTACT_LINKS.phone,
    actionLabel: "Call now",
    icon: <PhoneCall className="h-6 w-6" strokeWidth={1.9} />,
    iconClassName: "bg-[#0064E0]/10 text-[#0064E0]",
    badgeClassName: "bg-[#0064E0]/8 text-[#0064E0]",
  },
  {
    id: "email",
    title: "Email Us",
    value: "info@octalve.com",
    description:
      "Send enquiries, project briefs, collaboration requests, and official messages.",
    href: CONTACT_LINKS.email,
    actionLabel: "Send email",
    icon: <Mail className="h-6 w-6" strokeWidth={1.9} />,
    iconClassName: "bg-[#29BE3E]/10 text-[#159A2B]",
    badgeClassName: "bg-[#29BE3E]/8 text-[#159A2B]",
  },
];

function ContactCard({
  title,
  value,
  description,
  href,
  actionLabel,
  icon,
  iconClassName,
  badgeClassName,
  external,
}: ContactItem) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0064E0]/25 hover:shadow-[0_24px_70px_rgba(0,100,224,0.10)] sm:p-7"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#E61525_0%,#0064E0_35%,#FC7E24_70%,#29BE3E_100%)] opacity-80" />

      <div className="flex items-start justify-between gap-5">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconClassName}`}
        >
          {icon}
        </div>

        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${badgeClassName}`}
        >
          {actionLabel}
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
          {title}
        </h3>

        <p className="mt-3 break-words text-lg font-semibold leading-7 text-slate-800">
          {value}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </a>
  );
}

function WhatsAppStrip() {
  return (
    <div className="mt-8 overflow-hidden rounded-[30px] border border-[#0064E0]/10 bg-[linear-gradient(135deg,#FFFFFF_0%,#F4F8FF_55%,#EEF6FF_100%)] p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0064E0]/10 text-[#0064E0]">
            <MessageCircle className="h-6 w-6" strokeWidth={1.9} />
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">
              Need a faster response?
            </h3>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
              Send us a direct WhatsApp message and tell us what you want to
              build, fix, launch, or grow.
            </p>
          </div>
        </div>

        <a
          href={CONTACT_LINKS.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8] focus:outline-none focus:ring-4 focus:ring-[#0064E0]/15"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function ContactHero() {
  return (
    <section className="bg-[linear-gradient(180deg,#F8FAFC_0%,#F3F7FD_100%)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#0064E0]/15 bg-[#0064E0]/5 px-4 py-1 text-sm font-medium text-[#0064E0]">
            Contact Octalve
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
            Let’s talk about what you want to build next.
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Reach Octalve for business strategy, branding, websites, digital
            systems, cloud support, partnerships, or project enquiries.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {CONTACT_ITEMS.map((item) => (
            <ContactCard key={item.id} {...item} />
          ))}
        </div>

        <WhatsAppStrip />
      </div>
    </section>
  );
}
