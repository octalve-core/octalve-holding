"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Cloud,
  LifeBuoy,
  Mail,
  MessageCircle,
  PackageOpen,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type StartProjectTab = "project" | "meeting" | "email" | "call";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds?: () => void;
    };
  }
}

const TALLY_FORM_ID = "kd0kDj";
const TALLY_EMBED_URL = `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

const CALENDLY_EMBED_URL =
  "https://calendly.com/octalve-info/30min?hide_gdpr_banner=1&primary_color=0064e0";

const WHATSAPP_URL =
  "https://wa.me/2348073459090?text=Hello%20Octalve%2C%20I%20want%20to%20discuss%20how%20you%20can%20help%20me%20build%2C%20launch%2C%20structure%2C%20or%20grow%20my%20business.";

const sectionBadge = "Start a Project";

const tabs = [
  {
    key: "project" as const,
    label: "Project brief",
    description: "Share your enquiry",
    icon: BriefcaseBusiness,
  },
  {
    key: "meeting" as const,
    label: "Book a meeting",
    description: "Schedule a call",
    icon: CalendarDays,
  },
  {
    key: "email" as const,
    label: "Send us an email",
    description: "Reach a team",
    icon: Mail,
  },
  {
    key: "call" as const,
    label: "Give us a call",
    description: "Speak directly",
    icon: PhoneCall,
  },
];

const projectTags = [
  "Strategy",
  "Branding",
  "Websites",
  "Business Structure",
  "Cloud",
  "Digital Products",
];

const emailContacts = [
  {
    title: "General enquiries",
    email: "info@octalve.com",
    note: "For project enquiries, collaborations, partnerships, and general business conversations.",
    icon: Mail,
  },
  {
    title: "Support",
    email: "support@octalve.com",
    note: "For follow-ups, support questions, and help across the Octalve ecosystem.",
    icon: LifeBuoy,
  },
  {
    title: "Cloud",
    email: "cloud@octalve.com",
    note: "For hosting, domains, email setup, servers, migration, and infrastructure questions.",
    icon: Cloud,
  },
  {
    title: "Vault",
    email: "vault@octalve.com",
    note: "For storefront, templates, digital assets, and related enquiries.",
    icon: PackageOpen,
  },
];

const phoneNumbers = [
  {
    country: "Nigeria",
    label: "Primary line",
    number: "+234 807 345 9090",
    href: "tel:+2348073459090",
    flagUrl: "https://flagcdn.com/w80/ng.png",
    note: "Best for calls and WhatsApp enquiries.",
    active: true,
  },
  {
    country: "Qatar",
    label: "Regional line",
    number: "Coming soon",
    href: "",
    flagUrl: "https://flagcdn.com/w80/qa.png",
    note: "For Qatar partnership and client support.",
    active: false,
  },
  {
    country: "United Kingdom",
    label: "Regional line",
    number: "Coming soon",
    href: "",
    flagUrl: "https://flagcdn.com/w80/gb.png",
    note: "For UK partnership and client support.",
    active: false,
  },
];

const primaryButtonClassName =
  "inline-flex items-center justify-center rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8] focus:outline-none focus:ring-4 focus:ring-[#0064E0]/15";

const secondaryButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-[#0064E0]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0064E0] transition hover:border-[#0064E0]/40 hover:bg-[#0064E0]/5 focus:outline-none focus:ring-4 focus:ring-[#0064E0]/10";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function reloadTallyEmbeds() {
  if (typeof window === "undefined") return;

  window.setTimeout(() => {
    window.Tally?.loadEmbeds?.();
  }, 80);
}

export default function StartProjectForm() {
  const [activeTab, setActiveTab] = useState<StartProjectTab>("project");

  useEffect(() => {
    if (activeTab === "project") {
      reloadTallyEmbeds();
    }
  }, [activeTab]);

  return (
    <section
      id="project-form"
      className="bg-[linear-gradient(180deg,#F8FAFC_0%,#F3F7FD_100%)]"
    >
      <Script
        id="tally-embed-script"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={reloadTallyEmbeds}
        onReady={reloadTallyEmbeds}
      />

      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeader />

        <div className="mx-auto mt-10 max-w-5xl">
          <StartProjectTabs activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <div className="mx-auto mt-8 max-w-5xl">
          <div className={activeTab === "project" ? "block" : "hidden"}>
            <ProjectBriefPanel
              onSwitchToMeeting={() => setActiveTab("meeting")}
            />
          </div>

          {activeTab === "meeting" && (
            <MeetingPanel onSwitchToProject={() => setActiveTab("project")} />
          )}

          {activeTab === "email" && <EmailPanel />}

          {activeTab === "call" && <CallPanel />}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <span className="inline-flex rounded-full border border-[#0064E0]/15 bg-[#0064E0]/5 px-4 py-1 text-sm font-medium text-[#0064E0]">
        {sectionBadge}
      </span>

      <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
        Looking to start something meaningful?
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
        Choose how you’d like to connect with Octalve — send a project brief,
        book a meeting, email the right team, or call us directly.
      </p>
    </div>
  );
}

function StartProjectTabs({
  activeTab,
  onChange,
}: {
  activeTab: StartProjectTab;
  onChange: (tab: StartProjectTab) => void;
}) {
  return (
    <div className="rounded-[30px] border border-slate-200/80 bg-white/85 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <div
        role="tablist"
        aria-label="Start a project contact options"
        className="flex gap-2 overflow-x-auto px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map(({ key, label, description, icon: Icon }) => {
          const isActive = activeTab === key;

          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(key)}
              className={cn(
                "group flex min-w-[185px] shrink-0 flex-col items-center justify-center rounded-[24px] border px-4 py-4 text-center transition sm:min-w-[210px] md:flex-1",
                isActive
                  ? "border-[#0064E0]/15 bg-[#0064E0]/5 text-[#0064E0] shadow-[0_8px_24px_rgba(0,100,224,0.08)]"
                  : "border-transparent bg-transparent text-slate-900 hover:border-[#0064E0]/10 hover:bg-[#0064E0]/5 hover:text-[#0064E0]",
              )}
            >
              <span
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full transition",
                  isActive
                    ? "bg-[#0064E0]/10"
                    : "bg-slate-100 group-hover:bg-[#0064E0]/10",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.9} />
              </span>

              <span className="mt-3 text-sm font-semibold">{label}</span>

              <span
                className={cn(
                  "mt-1 text-[11px] font-medium",
                  isActive ? "text-[#0064E0]/75" : "text-slate-500",
                )}
              >
                {description}
              </span>

              <span
                className={cn(
                  "mt-3 h-[3px] w-12 rounded-full transition",
                  isActive ? "bg-[#0064E0]" : "bg-transparent",
                )}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-center gap-1 text-xs font-medium text-[#0064E0] md:hidden">
        <ChevronLeft className="h-4 w-4" />
        <span>Swipe left or right</span>
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  );
}

function PanelShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-200/70 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-6 py-8 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow ? (
            <span className="inline-flex rounded-full border border-[#0064E0]/15 bg-[#0064E0]/5 px-3 py-1 text-xs font-semibold text-[#0064E0]">
              {eyebrow}
            </span>
          ) : null}

          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
            {title}
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>

      {children}
    </div>
  );
}

function ProjectBriefPanel({
  onSwitchToMeeting,
}: {
  onSwitchToMeeting: () => void;
}) {
  return (
    <PanelShell
      eyebrow="Guided enquiry"
      title="Share your project brief"
      description="Tell us what you’re building, what you need, and where you want to go. We’ll review it and connect you with the right Octalve service, team, or next step."
    >
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <ProjectBriefSideCard onSwitchToMeeting={onSwitchToMeeting} />
          <TallyProjectForm />
        </div>
      </div>
    </PanelShell>
  );
}

function ProjectBriefSideCard({
  onSwitchToMeeting,
}: {
  onSwitchToMeeting: () => void;
}) {
  return (
    <aside className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_100%)] p-5 shadow-sm sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0064E0]/10 text-[#0064E0]">
        <Sparkles className="h-5 w-5" strokeWidth={1.9} />
      </div>

      <h4 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-slate-950">
        One form. Better direction.
      </h4>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        This helps us understand your stage, service need, urgency, budget
        range, and expected outcome before we respond.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {projectTags.map((item) => (
          <span
            key={item}
            className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-[22px] border border-[#0064E0]/10 bg-[#0064E0]/5 p-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0064E0]" />

          <div>
            <p className="text-sm font-semibold text-slate-950">
              What happens after submission?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              We receive your brief, review it, and guide you to the most
              relevant Octalve solution.
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onSwitchToMeeting}
        className={cn("mt-5 w-full", secondaryButtonClassName)}
      >
        Book a meeting instead
      </button>
    </aside>
  );
}

function TallyProjectForm() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 bg-slate-50 px-4 py-3 sm:px-5">
        <div>
          <p className="text-sm font-semibold text-slate-950">
            Octalve project enquiry
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            Complete this in about 1 minute.
          </p>
        </div>

        <span className="inline-flex rounded-full bg-[#0064E0]/10 px-3 py-1 text-xs font-semibold text-[#0064E0]">
          Secure form
        </span>
      </div>

      <div className="bg-white p-2 sm:p-3">
        <iframe
          src={TALLY_EMBED_URL}
          data-tally-src={TALLY_EMBED_URL}
          loading="eager"
          title="Octalve project brief form"
          className="min-h-[980px] w-full rounded-[22px] border-0 bg-white sm:min-h-[920px]"
        />
      </div>
    </div>
  );
}

function MeetingPanel({
  onSwitchToProject,
}: {
  onSwitchToProject: () => void;
}) {
  return (
    <PanelShell
      eyebrow="Strategy conversation"
      title="Book a 30-minute meeting"
      description="Pick a time that works for you and let’s talk through your idea, business, project scope, or next step."
    >
      <div className="p-4 sm:p-6">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
          <iframe
            src={CALENDLY_EMBED_URL}
            title="Book a meeting with Octalve"
            className="h-[720px] w-full border-0 sm:h-[760px] lg:h-[800px]"
          />
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onSwitchToProject}
            className={secondaryButtonClassName}
          >
            Send project brief instead
          </button>

          <a href={WHATSAPP_URL} className={primaryButtonClassName}>
            Continue on WhatsApp
          </a>
        </div>
      </div>
    </PanelShell>
  );
}

function EmailPanel() {
  return (
    <PanelShell
      eyebrow="Direct email"
      title="Send us an email"
      description="Reach the right team directly using the email that best matches your need."
    >
      <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
        {emailContacts.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.email}
              href={`mailto:${item.email}`}
              className="group rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0064E0]/20 hover:shadow-[0_14px_40px_rgba(0,100,224,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0064E0]/10 text-[#0064E0]">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <span className="inline-flex rounded-full bg-[#0064E0]/5 px-3 py-1 text-xs font-medium text-[#0064E0]">
                  Email now
                </span>
              </div>

              <p className="mt-5 text-sm font-semibold text-slate-950">
                {item.title}
              </p>

              <p className="mt-3 break-all text-base font-semibold text-[#0064E0]">
                {item.email}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.note}
              </p>
            </a>
          );
        })}
      </div>
    </PanelShell>
  );
}

function CallPanel() {
  return (
    <PanelShell
      eyebrow="Phone support"
      title="Give us a call"
      description="Prefer to speak directly? Start with our primary line or continue the conversation on WhatsApp."
    >
      <div className="p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {phoneNumbers.map((item) => (
            <PhoneCard key={item.country} {...item} />
          ))}
        </div>

        <div className="mt-5 rounded-[28px] border border-[#0064E0]/10 bg-[#0064E0]/5 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0064E0] shadow-sm">
              <MessageCircle className="h-5 w-5" strokeWidth={1.9} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-950">
                Faster response on WhatsApp
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Send a quick message and tell us what you want to build, fix,
                launch, or grow.
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className={cn("mt-4 sm:mt-0", primaryButtonClassName)}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </PanelShell>
  );
}

function PhoneCard({
  country,
  label,
  number,
  href,
  flagUrl,
  note,
  active,
}: {
  country: string;
  label: string;
  number: string;
  href: string;
  flagUrl: string;
  note: string;
  active: boolean;
}) {
  const cardContent = (
    <>
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
        <CountryFlag src={flagUrl} label={country} />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-base font-semibold text-slate-950">{country}</p>

      <p
        className={cn(
          "mt-2 text-sm font-semibold",
          active ? "text-[#0064E0]" : "text-slate-500",
        )}
      >
        {number}
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-600">{note}</p>

      <span
        className={cn(
          "mt-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold",
          active
            ? "bg-[#0064E0]/5 text-[#0064E0]"
            : "bg-slate-100 text-slate-500",
        )}
      >
        {active ? "Call now" : "Coming soon"}
      </span>
    </>
  );

  if (!active) {
    return (
      <div className="rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-5 text-center shadow-sm">
        {cardContent}
      </div>
    );
  }

  return (
    <a
      href={href}
      className="group rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[#0064E0]/20 hover:shadow-[0_14px_40px_rgba(0,100,224,0.08)]"
    >
      {cardContent}
    </a>
  );
}

function CountryFlag({ src, label }: { src: string; label: string }) {
  return (
    <span
      role="img"
      aria-label={`${label} flag`}
      className="block h-10 w-10 rounded-full bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)]"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
