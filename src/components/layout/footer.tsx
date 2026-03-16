"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import octalveLogo from "@/assets/logos/octalve.png";

const FOOTER_COLORS = {
  bg: "#020B1C",
  accent: "#0B7CFF",
  accentSoft: "#0F5FCC",
  text: "#F8FAFC",
  muted: "#C7D2E1",
  soft: "#8FA2BF",
  divider: "rgba(11, 124, 255, 0.22)",
  iconBg: "#0B7CFF",
  iconText: "#FFFFFF",
};

const models = [
  { label: "Octalve Node", href: "/models/node" },
  { label: "Octalve Consult", href: "/models/consult" },
  { label: "Octalve Lab", href: "/models/lab" },
  { label: "Octalve Leap", href: "/models/leap" },
  { label: "Octalve Suite", href: "/models/suite" },
  { label: "Octalve Cloud", href: "/models/cloud" },
  { label: "Octalve Vault", href: "/models/vault" },
  { label: "Octalve One", href: "/models/one" },
];

const suites = [
  { label: "Launch-Suite", href: "/suite/launch-suite" },
  { label: "Impact-Suite", href: "/suite/impact-suite" },
  { label: "Growth-Suite", href: "/suite/pricing" },
  { label: "Partner-Suite", href: "/contact" },
  { label: "Pricing", href: "/suite/pricing" },
];

const products = [
  {
    label: "Business Plan Templates",
    href: "/vault/shop",
  },
  { label: "Pitch Deck Templates", href: "/vault/shop" },
  { label: "Proposal Templates", href: "/vault/shop" },
  { label: "Invoice Templates", href: "/vault/shop" },
  { label: "Startup Guides", href: "/vault/shop" },
  { label: "Sales Scripts", href: "/vault/shop" },
  { label: "HR Templates", href: "/vault/shop" },
  { label: "Finance Trackers", href: "/vault/shop" },
  { label: "Resource Bundles", href: "/vault/shop" },
];

const helpSupport = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact us", href: "/contact" },
  { label: "Mail Login", href: "/#" },
  // { label: "Archives", href: "/archives" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Octalve Smart", href: "/#" },
  { label: "Octalve Academy", href: "/#" },
  { label: "Trend", href: "/trends" },
  { label: "Careers", href: "/career" },
];

const feedback = [
  { label: "Give feedback", href: "/contact" },
  { label: "+234 807 345 9090", href: "tel:+2348073459090" },
  { label: "Info@octalve.com", href: "mailto:Info@octalve.com" },
  { label: "Wuye, Abuja.", href: "/contact" },
];

function ArrowUpRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 8H16V5H13.5C10.9 5 9 6.8 9 9.8V12H7V15H9V20H12.5V15H15.2L15.7 12H12.5V10.2C12.5 8.9 13 8 14 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 8.5C7.6 8.5 8.5 7.6 8.5 6.5C8.5 5.4 7.6 4.5 6.5 4.5C5.4 4.5 4.5 5.4 4.5 6.5C4.5 7.6 5.4 8.5 6.5 8.5Z"
        fill="currentColor"
      />
      <path d="M5 10H8V19H5V10Z" fill="currentColor" />
      <path
        d="M10.5 10H13.3V11.3C13.8 10.5 14.9 9.8 16.4 9.8C19.2 9.8 20 11.6 20 14.2V19H17V14.9C17 13.5 16.5 12.6 15.2 12.6C13.9 12.6 13.3 13.5 13.3 14.9V19H10.5V10Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5L19 19M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FooterSection({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3
        className="text-[15px] font-semibold tracking-[-0.02em]"
        style={{ color: FOOTER_COLORS.text }}
      >
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="group inline-flex items-start gap-2 text-sm leading-7 transition"
              style={{ color: FOOTER_COLORS.muted }}
            >
              <span
                className="mt-[5px] shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: FOOTER_COLORS.accent }}
              >
                <ArrowUpRightIcon />
              </span>
              <span className="group-hover:text-white">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-14 w-14 items-center justify-center rounded-full transition hover:scale-105"
      style={{
        backgroundColor: FOOTER_COLORS.iconBg,
        color: FOOTER_COLORS.iconText,
      }}
    >
      {children}
    </a>
  );
}

function getGreetingByHour(hour: number) {
  if (hour < 12) {
    return { text: "morning", emoji: "☀️" };
  }

  if (hour < 18) {
    return { text: "afternoon", emoji: "🌤️" };
  }

  return { text: "evening", emoji: "🌙" };
}

export default function Footer() {
  const [hour, setHour] = useState<number | null>(null);

  useEffect(() => {
    setHour(new Date().getHours());
  }, []);

  const greeting = useMemo(() => {
    if (hour === null) {
      return { text: "evening", emoji: "🌙" };
    }

    return getGreetingByHour(hour);
  }, [hour]);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="px-4 pt-14 pb-8 sm:px-6 md:px-8 md:pt-20"
      style={{ backgroundColor: FOOTER_COLORS.bg }}
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <h2
              className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl"
              style={{ color: FOOTER_COLORS.text }}
            >
              Octalve,{" "}
              <span style={{ color: FOOTER_COLORS.accent }}>
                good {greeting.text}
              </span>{" "}
              <span>{greeting.emoji}</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <SocialLink
              href="https://web.facebook.com/octalve"
              label="Facebook"
            >
              <FacebookIcon />
            </SocialLink>

            <SocialLink
              href="https://ng.linkedin.com/company/octalve"
              label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialLink>

            <SocialLink
              href="https://www.instagram.com/octalve_/"
              label="Instagram"
            >
              <InstagramIcon />
            </SocialLink>

            <SocialLink href="https://x.com/octalve" label="X">
              <XIcon />
            </SocialLink>
          </div>
        </div>

        <div className="mt-12 grid gap-12 xl:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={octalveLogo}
                alt="Octalve logo"
                width={170}
                height={52}
                className="h-auto w-[150px] object-contain sm:w-[170px]"
                priority={false}
              />
            </Link>

            <p
              className="mt-6 max-w-md text-base leading-8"
              style={{ color: FOOTER_COLORS.muted }}
            >
              Octalve is a business development and technology company helping
              businesses grow through strategy, branding, websites, systems, and
              modern digital solutions.
            </p>
          </div>

          <FooterSection title="Models" items={models} />
          <FooterSection title="Octalve Suites" items={suites} />
          <FooterSection title="Products" items={products} />
          <FooterSection title="Help & Support" items={helpSupport} />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <FooterSection title="Feedback" items={feedback} />

          <div
            className="rounded-[28px] border p-6 sm:p-7"
            style={{ borderColor: FOOTER_COLORS.divider }}
          >
            <h3
              className="text-[15px] font-semibold tracking-[-0.02em]"
              style={{ color: FOOTER_COLORS.text }}
            >
              Social Media Links
            </h3>

            <div className="mt-6 flex flex-wrap gap-4">
              <SocialLink
                href="https://web.facebook.com/octalve"
                label="Facebook"
              >
                <FacebookIcon />
              </SocialLink>

              <SocialLink
                href="https://ng.linkedin.com/company/octalve"
                label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialLink>

              <SocialLink
                href="https://www.instagram.com/octalve_/"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialLink>

              <SocialLink href="https://x.com/octalve" label="X">
                <XIcon />
              </SocialLink>
            </div>

            <p
              className="mt-6 text-sm leading-7"
              style={{ color: FOOTER_COLORS.soft }}
            >
              Stay connected with Octalve across our official social channels.
            </p>
          </div>
        </div>

        <div
          className="mt-14 border-t pt-6"
          style={{ borderColor: FOOTER_COLORS.divider }}
        >
          <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
            <p style={{ color: FOOTER_COLORS.muted }}>
              © {currentYear} Octalve. All Rights Reserved.
            </p>

            <p style={{ color: FOOTER_COLORS.soft }}>
              Powered by{" "}
              <span style={{ color: FOOTER_COLORS.accent }}>
                Octalve Holding
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
