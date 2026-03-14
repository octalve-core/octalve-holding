"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SUITE_COLORS, backedByLogos, suiteAssets } from "../suite-data";

function ArrowRight() {
  return <span aria-hidden="true">›</span>;
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
      className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Book a call"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] ring-1 ring-black/10"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-6">
            <div className="text-sm font-medium text-slate-900">
              Book a Free 30-minute Call
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200"
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

export default function SuiteHero() {
  const [openCalendly, setOpenCalendly] = useState(false);

  return (
    <>
      <section className="w-full bg-[#000A16]">
        <div className="mx-auto max-w-[1180px] px-4 py-12 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-6">
              <p className="text-sm font-medium text-white/70 md:text-base">
                Based in Abuja (FCT) — built for Founders, Business Owners &
                NGOs.
              </p>

              <h1 className="text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                Octalve Suite™ for Abuja founders, businesses & NGOs.
              </h1>

              <p className="max-w-xl text-base leading-8 text-white/75 md:text-lg">
                Octalve Suite is an all-in-one production house designed to take
                you from idea to market-ready. Whether you are a solo founder, a
                growing business, or an NGO in Abuja, we help you launch faster
                with strong brand identity, high-converting websites, content
                systems, and ongoing support.
                <br className="hidden sm:block" />
                Launch smarter, scale confidently, and manage everything in one
                place with Octalve Suite™.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
                <button
                  onClick={() => setOpenCalendly(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
                  style={{ background: SUITE_COLORS.primary }}
                >
                  Free 30min. Call <ArrowRight />
                </button>

                <Link
                  href="/start-project"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-black px-6 py-3 text-sm font-medium text-black transition hover:bg-white/40"
                >
                  Book a Demo
                </Link>
              </div>

              <div className="pt-1">
                <Link
                  href="/models/suite/impact"
                  className="text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white"
                >
                  Explore Abuja services for founders & NGOs →
                </Link>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <span className="text-sm font-medium text-white/90">
                  Excellent
                </span>

                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="inline-flex h-5 w-5 items-center justify-center rounded bg-emerald-600 text-xs text-white"
                    >
                      ★
                    </span>
                  ))}
                </div>

                <div className="text-white">Trustpilot</div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:justify-self-end">
              <div
                className="absolute right-4 top-10 h-[320px] w-[320px] rounded-full md:right-10 md:top-14 md:h-[380px] md:w-[380px]"
                style={{ background: "rgba(245, 200, 55, .55)" }}
              />

              <div className="absolute left-0 top-0 z-20 w-[250px] sm:w-[280px] md:left-2 md:top-2">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-sm">
                  <div className="border-b border-slate-200 bg-pink-50 px-5 py-3">
                    <div className="font-medium text-black">Analytics</div>
                  </div>

                  <div className="grid gap-3 p-4">
                    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <div className="text-sm font-medium text-black/60">
                        Total Orders
                      </div>
                      <div className="text-sm font-medium text-black/60">
                        200
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <div className="text-sm font-medium text-black/60">
                        Total Clients
                      </div>
                      <div className="text-sm font-medium text-black/60">
                        150
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-20 z-20 max-w-[220px] text-right sm:max-w-[260px] md:top-24">
                <p className="text-2xl font-medium leading-tight text-white/90 sm:text-3xl">
                  “Launch faster
                  <br />
                  <span className="opacity-70">grow smarter</span>”
                </p>
              </div>

              <div className="relative z-10 pt-10 md:pt-12">
                <div className="relative ml-auto h-[340px] w-[340px] overflow-hidden rounded-[50px] md:h-[420px] md:w-[420px]">
                  <Image
                    src={suiteAssets.suiteHeroImage}
                    alt="Octalve Suite hero preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute bottom-6 right-10 z-30 md:bottom-10 md:right-16">
                  <div className="rounded-2xl border border-black/10 bg-[#f4efcc] px-5 py-4 shadow-sm">
                    <div className="text-lg font-medium text-black">
                      Launch in Abuja
                    </div>
                    <div className="text-sm text-black/60">
                      Scale across Nigeria
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-14">
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm md:px-10">
              <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                <div className="text-xl font-medium md:text-2xl text-black">
                  Backed By The Best
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                  {backedByLogos.map((logo) => (
                    <div key={logo.name} className="relative h-8 w-[140px]">
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        fill
                        className="object-contain opacity-90"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CalendlyModal
        open={openCalendly}
        onClose={() => setOpenCalendly(false)}
      />
    </>
  );
}
