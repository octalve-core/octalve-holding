import React from "react";

const CONTACT_ITEMS = [
  {
    id: "location",
    title: "Location:",
    // value: "AP Plaza, No. 1 Aguiyi Ironsi Street Maitama, Opposite Transcorp Hilton, Abuja.",
    value: "Wuye, Abuja, Nigeria.",
    bg: "bg-red-500",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="white" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "phone",
    title: "Phone:",
    value: "+2348073459090",
    bg: "bg-blue-600",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "email",
    title: "Email:",
    value: "info@octalve.com",
    bg: "bg-green-500",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 6h16v12H4z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function ContactCard({
  title,
  value,
  bg,
  icon,
}: {
  title: string;
  value: string;
  bg: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] bg-white px-6 py-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] ring-1 ring-black/5">
      <div className="flex items-center gap-5">
        <div
          className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full ${bg}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-[28px] font-light leading-none text-[#2f2f2f] sm:text-[30px]">
            {title}
          </h3>
          <p className="mt-4 break-words text-xl font-light leading-8 text-slate-600">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactHero() {
  return (
    <section className="bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium tracking-[0.28em] text-[#2563eb]">
            Contact Info
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-light leading-[1.05] tracking-[-0.04em] text-[#333333] sm:text-5xl lg:text-7xl">
            Reach Out to Us for any Inquiries or Support
          </h1>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CONTACT_ITEMS.map((item) => (
            <ContactCard
              key={item.id}
              title={item.title}
              value={item.value}
              bg={item.bg}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
