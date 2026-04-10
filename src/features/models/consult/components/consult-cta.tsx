// "use client";

// import Link from "next/link";
// import {
//   BadgeCheck,
//   BriefcaseBusiness,
//   LayoutPanelTop,
//   Rocket,
//   Sparkles,
//   Target,
// } from "lucide-react";

// export default function ConsultCta() {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#2A006D] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_32%),linear-gradient(180deg,#3A0A8D_0%,#2A006D_48%,#1E0250_100%)]" />

//         <div className="absolute left-[10%] top-[18%] text-white/14">
//           <Target className="h-8 w-8" strokeWidth={1.35} />
//         </div>
//         <div className="absolute right-[14%] top-[22%] text-white/14">
//           <BriefcaseBusiness className="h-8 w-8" strokeWidth={1.35} />
//         </div>
//         <div className="absolute left-[16%] bottom-[24%] rotate-[-8deg] text-white/12">
//           <BadgeCheck className="h-7 w-7" strokeWidth={1.35} />
//         </div>
//         <div className="absolute right-[18%] bottom-[20%] rotate-[8deg] text-white/12">
//           <LayoutPanelTop className="h-7 w-7" strokeWidth={1.35} />
//         </div>
//         <div className="absolute left-[48%] top-[16%] text-white/10">
//           <Sparkles className="h-6 w-6" strokeWidth={1.35} />
//         </div>
//         <div className="absolute right-[8%] bottom-[14%] text-white/10">
//           <Rocket className="h-7 w-7" strokeWidth={1.35} />
//         </div>
//       </div>

//       <div className="relative z-10 mx-auto max-w-5xl text-center">
//         <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
//           Get clear. <span className="text-[#7DB5FF]">Build better.</span>
//         </h2>

//         <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
//           Strategy, structure, and launch guidance designed to help founders,
//           professionals, and growing businesses make better decisions and move
//           with more confidence.
//         </p>

//         <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
//           <Link
//             href="/contact"
//             className="inline-flex min-h-[56px] items-center justify-center rounded-md bg-[#e00000] px-8 text-sm font-semibold uppercase tracking-[0.02em] text-white transition hover:brightness-110"
//           >
//             Book a Clarity Session
//           </Link>

//           <Link
//             href="/models/consult"
//             className="inline-flex min-h-[56px] items-center justify-center rounded-md border border-white/16 bg-white/10 px-8 text-sm font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-white/14"
//           >
//             Explore Octalve Consult
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  LayoutPanelTop,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

const CTA_COLORS = {
  sectionBg: "#2A006D",
  gradientTop: "#3A0A8D",
  gradientMid: "#2A006D",
  gradientBottom: "#1E0250",
  accentBlue: "#7DB5FF",
  primaryButton: "#E00000",
  primaryButtonHover: "#F11A1A",
  secondaryButtonBg: "rgba(255,255,255,0.10)",
  secondaryButtonHover: "rgba(255,255,255,0.14)",
  secondaryButtonBorder: "rgba(255,255,255,0.16)",
  textWhite: "#FFFFFF",
  whatsappGreen: "#25D366",
  modalBackdrop: "rgba(0,0,0,0.7)",
  modalSurface: "#FFFFFF",
  modalBorder: "rgba(15,23,42,0.08)",
  closeBg: "#F1F5F9",
  closeHoverBg: "#E2E8F0",
} as const;

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
      <circle cx="12" cy="12" r="12" fill={CTA_COLORS.whatsappGreen} />
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
}: {
  open: boolean;
  onClose: () => void;
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
      style={{ backgroundColor: CTA_COLORS.modalBackdrop }}
      role="dialog"
      aria-modal="true"
      aria-label="Book a clarity session"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-4xl overflow-hidden rounded-[28px] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
          style={{
            backgroundColor: CTA_COLORS.modalSurface,
            border: `1px solid ${CTA_COLORS.modalBorder}`,
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <div className="text-sm font-medium text-slate-900">
                Book a Free 30-minute Call
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Let’s discuss your clarity, strategy, structure, or launch
                needs.
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-900 transition-colors"
              style={{ backgroundColor: CTA_COLORS.closeBg }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor =
                  CTA_COLORS.closeHoverBg;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor = CTA_COLORS.closeBg;
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

export default function ConsultCta() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const whatsappMessage =
    "Hello Octalve, I want to discuss how you can help me with strategy, structure, clarity, and business growth.";

  return (
    <>
      <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: CTA_COLORS.sectionBg }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at top, rgba(255,255,255,0.10), transparent 32%), linear-gradient(180deg, ${CTA_COLORS.gradientTop} 0%, ${CTA_COLORS.gradientMid} 48%, ${CTA_COLORS.gradientBottom} 100%)`,
            }}
          />

          <div className="absolute left-[10%] top-[18%] text-white/14">
            <Target className="h-8 w-8" strokeWidth={1.35} />
          </div>
          <div className="absolute right-[14%] top-[22%] text-white/14">
            <BriefcaseBusiness className="h-8 w-8" strokeWidth={1.35} />
          </div>
          <div className="absolute left-[16%] bottom-[24%] rotate-[-8deg] text-white/12">
            <BadgeCheck className="h-7 w-7" strokeWidth={1.35} />
          </div>
          <div className="absolute right-[18%] bottom-[20%] rotate-[8deg] text-white/12">
            <LayoutPanelTop className="h-7 w-7" strokeWidth={1.35} />
          </div>
          <div className="absolute left-[48%] top-[16%] text-white/10">
            <Sparkles className="h-6 w-6" strokeWidth={1.35} />
          </div>
          <div className="absolute right-[8%] bottom-[14%] text-white/10">
            <Rocket className="h-7 w-7" strokeWidth={1.35} />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
            Get clear.{" "}
            <span style={{ color: CTA_COLORS.accentBlue }}>Build better.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
            Strategy, structure, and launch guidance designed to help founders,
            professionals, and growing businesses make better decisions and move
            with more confidence.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsCalendlyOpen(true)}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[12px] px-6 text-sm font-semibold uppercase tracking-[0.02em] text-white transition-all duration-200 hover:translate-y-[-1px] sm:w-auto"
              style={{ backgroundColor: CTA_COLORS.primaryButton }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor =
                  CTA_COLORS.primaryButtonHover;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor =
                  CTA_COLORS.primaryButton;
              }}
            >
              Book a Clarity Session
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </button>

            <a
              href={buildWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[12px] border px-6 text-sm font-semibold uppercase tracking-[0.02em] text-white transition-colors duration-200 sm:w-auto"
              style={{
                backgroundColor: CTA_COLORS.secondaryButtonBg,
                borderColor: CTA_COLORS.secondaryButtonBorder,
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor =
                  CTA_COLORS.secondaryButtonHover;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor =
                  CTA_COLORS.secondaryButtonBg;
              }}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CalendlyModal
        open={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </>
  );
}
