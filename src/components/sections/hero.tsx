"use client";

import { useEffect, useMemo, useState } from "react";
import { useOctalveSmart } from "@/components/chatbot/octalve-smart-provider";

const HERO_COLORS = {
  red: "#EF4444",
  blue: "#3B82F6",
  yellow: "#F59E0B",
  green: "#22C55E",
  pageBg: "#F8FAFC",
  white: "#FFFFFF",
  border: "#E5E7EB",
  chipBg: "#F3F4F6",
  darkButton: "#111827",
};

const rotatingWords = [
  { text: "Strategy", color: "#3B82F6" },
  { text: "Branding", color: "#EF4444" },
  { text: "Websites", color: "#22C55E" },
  { text: "Systems", color: "#F59E0B" },
];

function SendIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5V19M12 5L6 11M12 5L18 11"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.6 9H20.4M3.6 15H20.4M12 3C14.2 5.4 15.45 8.6 15.5 12C15.45 15.4 14.2 18.6 12 21M12 3C9.8 5.4 8.55 8.6 8.5 12C8.55 15.4 9.8 18.6 12 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
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

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [previewInput, setPreviewInput] = useState("");
  const { openChat, suggestions } = useOctalveSmart();

  const currentWord = useMemo(
    () => rotatingWords[currentWordIndex],
    [currentWordIndex],
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const clean = previewInput.trim();
    setPreviewInput("");

    if (!clean) {
      openChat();
      return;
    }

    openChat(clean);
  }

  function handlePreviewKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      const clean = previewInput.trim();
      setPreviewInput("");

      if (!clean) {
        openChat();
        return;
      }

      openChat(clean);
    }
  }

  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20"
      style={{ backgroundColor: HERO_COLORS.pageBg }}
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h1 className="text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-7xl">
            Smarter Access to{" "}
            <span
              key={currentWord.text}
              className="inline-block"
              style={{ color: currentWord.color }}
              aria-live="polite"
            >
              {currentWord.text}
            </span>{" "}
            to grow your business.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            Octalve helps businesses and organizations build stronger digital
            foundations through strategy, branding, websites, systems, cloud
            infrastructure, and smart automation.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[980px]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-5 md:p-7"
            style={{
              borderColor: HERO_COLORS.border,
              backgroundColor: HERO_COLORS.white,
            }}
          >
            <textarea
              value={previewInput}
              onChange={(event) => setPreviewInput(event.target.value)}
              onKeyDown={handlePreviewKeyDown}
              rows={3}
              placeholder="Ask Octalve Smart about your business website, cloud hosting, brand, system, or growth needs..."
              className="min-h-[120px] w-full resize-none border-none bg-transparent text-base leading-7 text-slate-900 outline-none placeholder:text-slate-400 sm:min-h-[140px] sm:text-[18px]"
            />

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium text-slate-900"
                style={{ borderColor: HERO_COLORS.border }}
              >
                <GlobeIcon />
                English
                <ChevronDownIcon />
              </button>

              <button
                type="submit"
                className="inline-flex h-12 w-12 items-center justify-center self-end rounded-full text-white transition hover:scale-[1.02]"
                style={{ backgroundColor: HERO_COLORS.darkButton }}
                aria-label="Open Octalve Smart"
              >
                <SendIcon />
              </button>
            </div>
          </form>

          <div className="mt-6 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex w-max min-w-full gap-3">
              {suggestions.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => openChat(prompt)}
                  className="whitespace-nowrap rounded-[20px] border px-5 py-4 text-sm text-slate-900 transition hover:bg-slate-50"
                  style={{
                    borderColor: HERO_COLORS.border,
                    backgroundColor: HERO_COLORS.chipBg,
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Get Started,{" "}
              <span style={{ color: HERO_COLORS.green }}>Scroll Down</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
