"use client";

import Script from "next/script";
import { useEffect, useState, type ReactNode } from "react";
import { CalendarDays, ShieldCheck, Sparkles, X } from "lucide-react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds?: () => void;
    };
  }
}

const COLORS = {
  blue: "#0064E0",
  blueDark: "#0052B8",
  text: "#0F172A",
  muted: "#64748B",
  border: "rgba(15, 23, 42, 0.08)",
  blueBorder: "rgba(0, 100, 224, 0.2)",
  blueSoft: "rgba(0, 100, 224, 0.06)",
  white: "#FFFFFF",
};

const TALLY_FORM_ID = "kd0kDj";
const TALLY_FORM_DIRECT_URL = `https://tally.so/r/${TALLY_FORM_ID}`;
const TALLY_EMBED_URL = `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

const CALENDLY_EMBED_URL =
  "https://calendly.com/octalve-info/30min?hide_gdpr_banner=1&primary_color=0064e0";

const projectTags = [
  "Strategy",
  "Branding",
  "Websites",
  "Business Structure",
  "Cloud",
  "Digital Products",
];

const primaryButtonClassName =
  "inline-flex items-center justify-center rounded-full bg-[#0064E0] px-6 py-3 text-sm font-medium !text-white transition hover:bg-[#0052B8] focus:outline-none focus:ring-4 focus:ring-[#0064E0]/15";

const secondaryButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-[#0064E0]/20 bg-white px-6 py-3 text-sm font-medium !text-[#0064E0] transition hover:border-[#0064E0]/40 hover:bg-[#0064E0]/5 focus:outline-none focus:ring-4 focus:ring-[#0064E0]/10";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function reloadTallyEmbeds() {
  if (typeof window === "undefined") return;

  window.setTimeout(() => {
    window.Tally?.loadEmbeds?.();
  }, 120);
}

export default function ContactProjectBrief() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  useEffect(() => {
    reloadTallyEmbeds();
  }, []);

  useEffect(() => {
    if (!isMeetingModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMeetingModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMeetingModalOpen]);

  return (
    <section
      id="contact-project-brief"
      className="bg-[linear-gradient(180deg,#F3F7FD_0%,#F8FAFC_100%)]"
    >
      <Script
        id="tally-embed-script-contact-project-brief"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={reloadTallyEmbeds}
        onReady={reloadTallyEmbeds}
      />

      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="inline-flex rounded-full border px-4 py-1 text-sm font-medium"
            style={{
              color: COLORS.blue,
              backgroundColor: COLORS.blueSoft,
              borderColor: COLORS.blueBorder,
            }}
          >
            Project Brief
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Share what you want Octalve to help you build.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-normal leading-7 text-slate-600 sm:text-lg">
            Tell us what you want to build, fix, launch, structure, or grow.
            We’ll review your brief and guide you to the right Octalve solution.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <ProjectBriefPanel
            onOpenMeetingModal={() => setIsMeetingModalOpen(true)}
          />
        </div>
      </div>

      <MeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />
    </section>
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
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-200/70 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-6 py-8 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow ? (
            <span
              className="inline-flex rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                color: COLORS.blue,
                backgroundColor: COLORS.blueSoft,
                borderColor: COLORS.blueBorder,
              }}
            >
              {eyebrow}
            </span>
          ) : null}

          <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em] text-slate-950 sm:text-3xl">
            {title}
          </h3>

          <p className="mt-4 text-base font-normal leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>

      {children}
    </div>
  );
}

function ProjectBriefPanel({
  onOpenMeetingModal,
}: {
  onOpenMeetingModal: () => void;
}) {
  return (
    <PanelShell
      eyebrow="Guided enquiry"
      title="Share your project brief"
      description="Tell us what you’re building, what you need, and where you want to go. We’ll review it and connect you with the right Octalve service, team, or next step."
    >
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <ProjectBriefSideCard onOpenMeetingModal={onOpenMeetingModal} />
          <TallyProjectForm />
        </div>
      </div>
    </PanelShell>
  );
}

function ProjectBriefSideCard({
  onOpenMeetingModal,
}: {
  onOpenMeetingModal: () => void;
}) {
  return (
    <aside className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_100%)] p-5 shadow-sm sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0064E0]/10 text-[#0064E0]">
        <Sparkles className="h-5 w-5" strokeWidth={1.9} />
      </div>

      <h4 className="mt-5 text-xl font-medium tracking-[-0.02em] text-slate-950">
        One form. Better direction.
      </h4>

      <p className="mt-3 text-sm font-normal leading-6 text-slate-600">
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
            <p className="text-sm font-medium text-slate-950">
              What happens after submission?
            </p>

            <p className="mt-2 text-sm font-normal leading-6 text-slate-600">
              We receive your brief, review it, and guide you to the most
              relevant Octalve solution.
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenMeetingModal}
        className={cn("mt-5 w-full", secondaryButtonClassName)}
        style={{
          color: COLORS.blue,
          backgroundColor: COLORS.white,
          borderColor: COLORS.blueBorder,
        }}
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
          <p className="text-sm font-medium text-slate-950">
            Octalve project enquiry
          </p>

          <p className="mt-0.5 text-xs font-normal text-slate-500">
            Complete this in about 2 minutes.
          </p>
        </div>

        <span
          className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
          style={{
            color: COLORS.blue,
            backgroundColor: COLORS.blueSoft,
          }}
        >
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

        <div className="border-t border-slate-100 px-3 py-4 text-center">
          <p className="text-xs font-normal leading-5 text-slate-500">
            Form not showing?{" "}
            <a
              href={TALLY_FORM_DIRECT_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium !text-[#0064E0] underline-offset-4 hover:underline"
              style={{ color: COLORS.blue }}
            >
              Open the project brief directly
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function MeetingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a meeting with Octalve"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
    >
      <button
        type="button"
        aria-label="Close meeting modal"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[32px] border border-white/20 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.35)]">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-5 py-5 sm:px-6">
          <div>
            <span
              className="inline-flex rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                color: COLORS.blue,
                backgroundColor: COLORS.blueSoft,
                borderColor: COLORS.blueBorder,
              }}
            >
              Strategy conversation
            </span>

            <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-slate-950 sm:text-2xl">
              Book a 30-minute meeting
            </h3>

            <p className="mt-2 max-w-2xl text-sm font-normal leading-6 text-slate-600">
              Pick a time that works for you and let’s talk through your idea,
              business, project scope, or next step.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#0064E0]/30 hover:bg-[#0064E0]/5 hover:text-[#0064E0] focus:outline-none focus:ring-4 focus:ring-[#0064E0]/10"
          >
            <X className="h-5 w-5" strokeWidth={1.9} />
          </button>
        </div>

        <div className="min-h-0 overflow-y-auto bg-white p-3 sm:p-4">
          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <iframe
              src={CALENDLY_EMBED_URL}
              title="Book a meeting with Octalve"
              className="h-[720px] w-full border-0 sm:h-[760px] lg:h-[800px]"
            />
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-center">
          <button
            type="button"
            onClick={onClose}
            className={primaryButtonClassName}
            style={{
              color: COLORS.white,
              backgroundColor: COLORS.blue,
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
