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
  textDark: "#0F172A",
  textSoft: "#475569",
  border: "#E2E8F0",
  white: "#FFFFFF",
  primary: "#0A84FF",
  primaryHover: "#006FE0",
  mobileBg: "#000A16",
  mobileBorder: "rgba(255,255,255,0.12)",
  mobileSoft: "rgba(255,255,255,0.72)",
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

const models = [
  {
    title: "Consult",
    description:
      "Strategy, advisory, and transformation support, when you need it, how you need it.",
    href: "/models/consult",
  },
  {
    title: "Suite",
    description:
      "One platform. Zero stress. Launch with website, branding, and marketing tools in 14 days.",
    href: "/models/suite",
  },
  {
    title: "One",
    description: "Building intelligent business solutions for SMEs.",
    href: "/models/one",
  },
  {
    title: "Node",
    description: "The intersection of innovation and you.",
    href: "/models/node",
  },
  {
    title: "Lab",
    description:
      "We design tech solutions users love, investors can't resist, and builders are proud of.",
    href: "/models/lab",
  },
  {
    title: "Leap",
    description: "Growth-focused execution and market expansion support.",
    href: "/models/leap",
  },
  {
    title: "Vault",
    description: "Lock in with innovation and growth assets.",
    href: "/models/vault",
  },
  {
    title: "Cloud",
    description:
      "Domain-Hosting | Grow your ideas and business online — faster, smarter, for less.",
    href: "/models/cloud",
  },
];

const whoWeAre = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Leadership", href: "/leadership" },
];

const explore = [
  { label: "Trend", href: "/trends" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "IAMimpact", href: "/iamimpact" },
  { label: "Career", href: "/career" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
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

function DesktopNavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      className="group relative py-8 text-[15px] font-medium uppercase tracking-[0.08em] transition"
      style={{ color: active ? NAV_COLORS.primary : NAV_COLORS.textDark }}
    >
      <span className="transition group-hover:text-[#0A84FF]">{label}</span>

      <span
        className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-200 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
        style={{ backgroundColor: NAV_COLORS.primary }}
      />
    </Link>
  );
}

type DropdownProps = {
  label: string;
  items: { label: string; href: string }[];
  pathname: string;
};

function DesktopDropdown({ label, items, pathname }: DropdownProps) {
  const active = items.some((item) => isActivePath(pathname, item.href));

  return (
    <div className="group relative">
      <button
        className="relative flex items-center gap-1 py-8 text-[15px] font-medium uppercase tracking-[0.08em] transition"
        style={{ color: active ? NAV_COLORS.primary : NAV_COLORS.textDark }}
        type="button"
      >
        <span className="transition group-hover:text-[#0A84FF]">{label}</span>
        <ChevronDown className="mt-px h-4 w-4 transition group-hover:text-[#0A84FF]" />

        <span
          className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-200 ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
          style={{ backgroundColor: NAV_COLORS.primary }}
        />
      </button>

      <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 rounded-2xl border bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div
          className="overflow-hidden rounded-2xl"
          style={{ borderColor: NAV_COLORS.border }}
        >
          {items.map((item, index) => {
            const itemActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-5 py-4 text-sm font-medium transition ${
                  index !== items.length - 1 ? "border-b" : ""
                }`}
                style={{
                  borderColor: NAV_COLORS.border,
                  color: itemActive ? NAV_COLORS.primary : NAV_COLORS.mobileBg,
                  backgroundColor: itemActive ? "#F8FAFC" : NAV_COLORS.white,
                }}
              >
                <span className="transition hover:text-[#0A84FF]">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MegaMenuLink({
  title,
  description,
  href,
  pathname,
}: {
  title: string;
  description: string;
  href: string;
  pathname: string;
}) {
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      className="group block border-b py-4 transition"
      style={{ borderColor: NAV_COLORS.border }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4
            className="text-[15px] font-semibold transition"
            style={{ color: active ? NAV_COLORS.primary : NAV_COLORS.mobileBg }}
          >
            <span className="group-hover:text-[#0A84FF]">{title}</span>
          </h4>

          <p
            className="mt-1.5 text-sm leading-6"
            style={{ color: NAV_COLORS.textSoft }}
          >
            {description}
          </p>
        </div>

        <span
          className="mt-1 text-sm opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
          style={{ color: NAV_COLORS.primary }}
        >
          ↗
        </span>
      </div>
    </Link>
  );
}

function DesktopMegaMenu({ pathname }: { pathname: string }) {
  const active = models.some((model) => isActivePath(pathname, model.href));
  const leftColumn = models.slice(0, 4);
  const rightColumn = models.slice(4, 8);

  return (
    <div className="group static">
      <button
        className="relative flex items-center gap-2 py-8 text-[15px] font-medium uppercase tracking-[0.08em] transition"
        style={{ color: active ? NAV_COLORS.primary : NAV_COLORS.textDark }}
        type="button"
      >
        <span className="transition group-hover:text-[#0A84FF]">Models</span>
        <ChevronDown className="mt-px h-4 w-4 transition group-hover:text-[#0A84FF]" />

        <span
          className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-200 ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
          style={{ backgroundColor: NAV_COLORS.primary }}
        />
      </button>

      <div className="invisible absolute left-0 top-full z-50 w-full translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div
          className="border-b border-t bg-white shadow-[0_14px_32px_rgba(15,23,42,0.07)]"
          style={{ borderColor: NAV_COLORS.border }}
        >
          <div className="mx-auto w-full max-w-330 px-8 py-6 xl:px-10 xl:py-7">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
              <div className="pt-1">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: NAV_COLORS.primary }}
                >
                  Octalve Models
                </p>

                <h3
                  className="mt-2 text-[28px] font-semibold leading-[1.15]"
                  style={{ color: NAV_COLORS.mobileBg }}
                >
                  Explore the Octalve ecosystem
                </h3>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: NAV_COLORS.textSoft }}
                >
                  Each model is designed to support a different layer of
                  strategy, delivery, infrastructure, security, and growth.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 xl:gap-x-12">
                <div>
                  {leftColumn.map((model) => (
                    <MegaMenuLink
                      key={model.title}
                      title={model.title}
                      description={model.description}
                      href={model.href}
                      pathname={pathname}
                    />
                  ))}
                </div>

                <div>
                  {rightColumn.map((model) => (
                    <MegaMenuLink
                      key={model.title}
                      title={model.title}
                      description={model.description}
                      href={model.href}
                      pathname={pathname}
                    />
                  ))}
                </div>
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
}: {
  label: string;
  items: { label: string; href: string }[];
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const active = items.some((item) => isActivePath(pathname, item.href));

  return (
    <div
      className="border-b py-3"
      style={{ borderColor: NAV_COLORS.mobileBorder }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left text-sm font-medium uppercase tracking-[0.08em] transition"
        style={{
          color: active || open ? NAV_COLORS.primary : NAV_COLORS.white,
        }}
        type="button"
      >
        {label}
        <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-3 space-y-3 pl-2">
          {items.map((item) => {
            const itemActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className="block text-sm transition"
                style={{
                  color: itemActive
                    ? NAV_COLORS.primary
                    : NAV_COLORS.mobileSoft,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
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
  const [open, setOpen] = useState(false);
  const active = models.some((model) => isActivePath(pathname, model.href));

  return (
    <div
      className="border-b py-3"
      style={{ borderColor: NAV_COLORS.mobileBorder }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.08em] transition"
        style={{
          color: active || open ? NAV_COLORS.primary : NAV_COLORS.white,
        }}
        type="button"
      >
        Models
        <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-4 grid gap-3">
          {models.map((model) => {
            const itemActive = isActivePath(pathname, model.href);

            return (
              <Link
                key={model.title}
                href={model.href}
                onClick={onNavigate}
                className="rounded-2xl border p-4"
                style={{
                  borderColor: NAV_COLORS.mobileBorder,
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                <h4
                  className="text-sm font-semibold"
                  style={{
                    color: itemActive ? NAV_COLORS.primary : NAV_COLORS.white,
                  }}
                >
                  {model.title}
                </h4>

                <p
                  className="mt-1 text-sm leading-6"
                  style={{ color: NAV_COLORS.mobileSoft }}
                >
                  {model.description}
                </p>
              </Link>
            );
          })}
        </div>
      )}
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
      className="flex items-center gap-3 rounded-2xl border px-3.5 py-3 text-sm font-medium transition hover:bg-white/8"
      style={{
        borderColor: NAV_COLORS.mobileBorder,
        color: NAV_COLORS.white,
        backgroundColor: "rgba(255,255,255,0.035)",
      }}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{
          color: NAV_COLORS.white,
          backgroundColor: "rgba(10,132,255,0.18)",
        }}
      >
        {icon}
      </span>

      <span className="min-w-0 break-words">{label}</span>
    </a>
  );
}

function MobileEmergencyCard() {
  return (
    <div
      className="mt-8 rounded-2xl p-4"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: `1px solid ${NAV_COLORS.mobileBorder}`,
      }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-[0.16em]"
        style={{ color: NAV_COLORS.mobileSoft }}
      >
        Emergency Line
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
  const panelRef = useRef<HTMLDivElement | null>(null);

  const closeMobileMenu = () => setMobileOpen(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileOpen &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex h-1 w-full">
        <div style={{ backgroundColor: NAV_COLORS.red }} className="w-1/4" />
        <div style={{ backgroundColor: NAV_COLORS.blue }} className="w-1/4" />
        <div style={{ backgroundColor: NAV_COLORS.yellow }} className="w-1/4" />
        <div style={{ backgroundColor: NAV_COLORS.green }} className="w-1/4" />
      </div>

      <div
        className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white sm:px-6"
        style={{ backgroundColor: NAV_COLORS.topBarBg }}
      >
        Quick Response&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href={CONTACT_LINKS.nigeriaPhone} className="hover:underline">
          +234 807 345 9090
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;Support:
        <a href={CONTACT_LINKS.email} className="ml-1 hover:underline">
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
        <div className="mx-auto flex h-22 w-full max-w-370 items-center justify-between px-4 sm:px-6 lg:relative lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-white">
              <Image
                src={octalveLogo}
                alt="Octalve Holding logo"
                fill
                className="object-contain p-1"
                sizes="48px"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-9 xl:flex">
            <DesktopNavLink href="/" label="Home" pathname={pathname} />

            <DesktopDropdown
              label="Who We Are"
              items={whoWeAre}
              pathname={pathname}
            />

            <DesktopMegaMenu pathname={pathname} />

            <DesktopDropdown
              label="Explore"
              items={explore}
              pathname={pathname}
            />

            <DesktopNavLink
              href="/contact"
              label="Contact Us"
              pathname={pathname}
            />
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="/contact"
              className="inline-flex rounded-full border px-5 py-3 text-sm font-semibold transition"
              style={{
                borderColor: NAV_COLORS.border,
                color: NAV_COLORS.textDark,
                backgroundColor: NAV_COLORS.white,
              }}
            >
              Talk to Us
            </Link>

            <Link
              href="/start-project"
              className="inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: NAV_COLORS.primary }}
            >
              Start a Project
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-900 xl:hidden"
            aria-label="Open navigation menu"
            type="button"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-60 bg-slate-950/40 backdrop-blur-[2px] xl:hidden">
          <div
            ref={panelRef}
            className="ml-auto h-full w-full max-w-sm overflow-y-auto shadow-2xl"
            style={{ backgroundColor: NAV_COLORS.mobileBg }}
          >
            <div
              className="flex items-center justify-between border-b px-5 py-5"
              style={{ borderColor: NAV_COLORS.mobileBorder }}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-white">
                  <Image
                    src={octalveLogo}
                    alt="Octalve Holding logo"
                    fill
                    className="object-contain p-1"
                    sizes="48px"
                  />
                </div>
              </div>

              <button
                onClick={closeMobileMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border text-white"
                style={{ borderColor: NAV_COLORS.mobileBorder }}
                aria-label="Close navigation menu"
                type="button"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="px-5 py-5">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block border-b py-3 text-sm font-medium uppercase tracking-[0.08em] transition"
                style={{
                  borderColor: NAV_COLORS.mobileBorder,
                  color: isActivePath(pathname, "/")
                    ? NAV_COLORS.primary
                    : NAV_COLORS.white,
                }}
              >
                Home
              </Link>

              <MobileAccordion
                label="Who We Are"
                items={whoWeAre}
                pathname={pathname}
                onNavigate={closeMobileMenu}
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
              />

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block border-b py-3 text-sm font-medium uppercase tracking-[0.08em] transition"
                style={{
                  borderColor: NAV_COLORS.mobileBorder,
                  color: isActivePath(pathname, "/contact")
                    ? NAV_COLORS.primary
                    : NAV_COLORS.white,
                }}
              >
                Contact Us
              </Link>

              <div className="mt-6 grid gap-3">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium"
                  style={{
                    borderColor: NAV_COLORS.mobileBorder,
                    color: NAV_COLORS.white,
                  }}
                >
                  Talk to Us
                </Link>

                <Link
                  href="/start-project"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white"
                  style={{ backgroundColor: NAV_COLORS.primary }}
                >
                  Start a Project
                </Link>
              </div>

              <MobileEmergencyCard />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
