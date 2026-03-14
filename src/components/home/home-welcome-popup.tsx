"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import octalveLogo from "@/assets/logos/octalve.png";

const POPUP_COLORS = {
  overlay: "rgba(2, 11, 28, 0.50)",
  cardBg: "#FFFFFF",
  textDark: "#0F172A",
  textSoft: "#64748B",
  border: "#E5E7EB",
  primary: "#0B7CFF",
  primaryText: "#FFFFFF",
  secondaryBg: "#F8FAFC",
  secondaryText: "#0F172A",
};

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
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return {
      title: "Good morning",
      emoji: "☀️",
      message:
        "Welcome to Octalve. Start your day with smarter strategy, branding, websites, and digital systems built to move your business forward.",
    };
  }

  if (hour < 18) {
    return {
      title: "Good afternoon",
      emoji: "🌤️",
      message:
        "Welcome to Octalve. Explore practical solutions for business growth through strategy, branding, websites, automation, and modern digital execution.",
    };
  }

  return {
    title: "Good evening",
    emoji: "🌙",
    message:
      "Welcome to Octalve. End your day with clearer direction, stronger branding, better websites, and systems designed to support business growth.",
  };
}

export default function HomeWelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const greeting = useMemo(() => getGreeting(), []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6 sm:px-6"
      style={{
        backgroundColor: POPUP_COLORS.overlay,
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="relative w-full max-w-[520px] rounded-[28px] border p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-8"
        style={{
          backgroundColor: POPUP_COLORS.cardBg,
          borderColor: POPUP_COLORS.border,
        }}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Close welcome popup"
        >
          <CloseIcon />
        </button>

        <div className="mb-5 flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white">
            <Image
              src={octalveLogo}
              alt="Octalve logo"
              fill
              className="object-contain p-1.5"
              sizes="56px"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500">
              Welcome to Octalve
            </p>
            <h2
              className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
              style={{ color: POPUP_COLORS.textDark }}
            >
              {greeting.title} {greeting.emoji}
            </h2>
          </div>
        </div>

        <div>
          <h3
            className="text-[30px] font-semibold leading-tight tracking-[-0.04em] sm:text-[36px]"
            style={{ color: POPUP_COLORS.textDark }}
          >
            Smarter business growth starts here.
          </h3>

          <p
            className="mt-4 text-base leading-8"
            style={{ color: POPUP_COLORS.textSoft }}
          >
            {greeting.message}
          </p>

          <p
            className="mt-4 text-base leading-8"
            style={{ color: POPUP_COLORS.textSoft }}
          >
            Discover premium solutions for business launch, brand positioning,
            website development, digital systems, and scalable execution — all
            in one ecosystem.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/models/suite"
            // target="_blank"
            // rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: POPUP_COLORS.primary,
              color: POPUP_COLORS.primaryText,
            }}
          >
            Octalve Suite
          </Link>

          <Link
            href="/start-project"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:bg-slate-100"
            style={{
              backgroundColor: POPUP_COLORS.secondaryBg,
              color: POPUP_COLORS.secondaryText,
              border: `1px solid ${POPUP_COLORS.border}`,
            }}
          >
            Start A Project
          </Link>
        </div>
      </div>
    </div>
  );
}
