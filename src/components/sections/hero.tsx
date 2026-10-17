// OCTALVE ORIGINAL COMPONENT - PRESERVED IN COMMENTS
// "use client";
//
// import { useEffect, useMemo, useState } from "react";
// import { useOctalveSmart } from "@/components/chatbot/octalve-smart-provider";
//
// const HERO_COLORS = {
//   red: "#E61525",
//   blue: "#0064E0",
//   yellow: "#29BE3E",
//   green: "#FC7E24",
//   pageBg: "#F8FAFC",
//   white: "#FFFFFF",
//   border: "#E5E7EB",
//   chipBg: "#F3F4F6",
//   darkButton: "#111827",
// };
//
// const rotatingWords = [
//   { text: "Strategy", color: "#0064E0" },
//   { text: "Branding", color: "#E61525" },
//   { text: "Websites", color: "#FC7E24" },
//   { text: "Systems", color: "#29BE3E" },
//   { text: "Automation", color: "#5300D9" },
// ];
//
// function SendIcon() {
//   return (
//     <svg
//       width="22"
//       height="22"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M12 5V19M12 5L6 11M12 5L18 11"
//         stroke="currentColor"
//         strokeWidth="1.9"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
//
// function GlobeIcon() {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 12 21Z"
//         stroke="currentColor"
//         strokeWidth="1.7"
//       />
//       <path
//         d="M3.6 9H20.4M3.6 15H20.4M12 3C14.2 5.4 15.45 8.6 15.5 12C15.45 15.4 14.2 18.6 12 21M12 3C9.8 5.4 8.55 8.6 8.5 12C8.55 15.4 9.8 18.6 12 21"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }
//
// function ChevronDownIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M6 9L12 15L18 9"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
//
// export default function Hero() {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [previewInput, setPreviewInput] = useState("");
//   const { openChat, suggestions } = useOctalveSmart();
//
//   const currentWord = useMemo(
//     () => rotatingWords[currentWordIndex],
//     [currentWordIndex],
//   );
//
//   useEffect(() => {
//     const interval = window.setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
//     }, 2200);
//
//     return () => window.clearInterval(interval);
//   }, []);
//
//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//
//     const clean = previewInput.trim();
//     setPreviewInput("");
//
//     if (!clean) {
//       openChat();
//       return;
//     }
//
//     openChat(clean);
//   }
//
//   function handlePreviewKeyDown(
//     event: React.KeyboardEvent<HTMLTextAreaElement>,
//   ) {
//     if (event.key === "Enter" && !event.shiftKey) {
//       event.preventDefault();
//
//       const clean = previewInput.trim();
//       setPreviewInput("");
//
//       if (!clean) {
//         openChat();
//         return;
//       }
//
//       openChat(clean);
//     }
//   }
//
//   return (
//     <section
//       className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20"
//       style={{ backgroundColor: HERO_COLORS.pageBg }}
//     >
//       <div className="mx-auto max-w-[1120px]">
//         <div className="mx-auto max-w-[980px] text-center">
//           <h1 className="text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-7xl">
//             Smarter Access to{" "}
//             <span
//               key={currentWord.text}
//               className="inline-block"
//               style={{ color: currentWord.color }}
//               aria-live="polite"
//             >
//               {currentWord.text}
//             </span>{" "}
//             to grow your business.
//           </h1>
//
//           <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
//             Octalve helps businesses and organizations build stronger digital
//             foundations through strategy, branding, websites, systems, cloud
//             infrastructure, and smart automation.
//           </p>
//         </div>
//
//         <div className="mx-auto mt-12 max-w-[980px]">
//           <form
//             onSubmit={handleSubmit}
//             className="rounded-[32px] border bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-5 md:p-7"
//             style={{
//               borderColor: HERO_COLORS.border,
//               backgroundColor: HERO_COLORS.white,
//             }}
//           >
//             <textarea
//               value={previewInput}
//               onChange={(event) => setPreviewInput(event.target.value)}
//               onKeyDown={handlePreviewKeyDown}
//               rows={3}
//               placeholder="Ask Octalve Smart about your business website, cloud hosting, brand, system, or growth needs..."
//               className="min-h-[120px] w-full resize-none border-none bg-transparent text-base leading-7 text-slate-900 outline-none placeholder:text-slate-400 sm:min-h-[140px] sm:text-[18px]"
//             />
//
//             <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//               <button
//                 type="button"
//                 className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium text-slate-900"
//                 style={{ borderColor: HERO_COLORS.border }}
//               >
//                 <GlobeIcon />
//                 English
//                 <ChevronDownIcon />
//               </button>
//
//               <button
//                 type="submit"
//                 className="inline-flex h-12 w-12 items-center justify-center self-end rounded-full text-white transition hover:scale-[1.02]"
//                 style={{ backgroundColor: HERO_COLORS.darkButton }}
//                 aria-label="Open Octalve Smart"
//               >
//                 <SendIcon />
//               </button>
//             </div>
//           </form>
//
//           <div className="mt-6 overflow-x-auto pb-2 hide-scrollbar">
//             <div className="flex w-max min-w-full gap-3">
//               {suggestions.map((prompt) => (
//                 <button
//                   key={prompt}
//                   onClick={() => openChat(prompt)}
//                   className="whitespace-nowrap rounded-[20px] border px-5 py-4 text-sm text-slate-900 transition hover:bg-slate-50"
//                   style={{
//                     borderColor: HERO_COLORS.border,
//                     backgroundColor: HERO_COLORS.chipBg,
//                   }}
//                 >
//                   {prompt}
//                 </button>
//               ))}
//             </div>
//           </div>
//
//           <div className="mt-12 text-center">
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
//               Get Started,{" "}
//               <span>
//                 <a href="#start" style={{ color: HERO_COLORS.green }}>
//                   Scroll Down
//                 </a>
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
//

// OCTALVE 2026 REDESIGN ACTIVE BELOW
// OCTALVE HERO POSITIONING V6
// OCTALVE HEADER HERO V4 POLISH
"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp, ChevronDown, Globe2 } from "lucide-react";
import { useOctalveSmart } from "@/components/chatbot/octalve-smart-provider";

const SMART_PROMPT = "Ask Octalve Smart about your business website, cloud hosting, brand, system, or growth needs...";

const ROTATING_WORDS = [
  { text: "Branding", color: "#E61525" },
  { text: "Websites", color: "#0064E0" },
  { text: "Strategy", color: "#29BE3E" },
  { text: "Software", color: "#FC7E24" },
  { text: "AI & Smart Systems", color: "#8C4DFF" },
  { text: "Apps", color: "#FFFFFF" },
  { text: "Cloud Hosting", color: "#258CFF" },
];

export default function Hero() {
  const [question, setQuestion] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typedPlaceholder, setTypedPlaceholder] = useState(SMART_PROMPT);
  const pauseTypingRef = useRef(false);
  const { openChat } = useOctalveSmart();

  const currentWord = useMemo(() => ROTATING_WORDS[wordIndex], [wordIndex]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setWordIndex((previous) => (previous + 1) % ROTATING_WORDS.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let length = SMART_PROMPT.length;
    let deleting = true;
    let timeout: number;

    const tick = () => {
      if (pauseTypingRef.current) {
        timeout = window.setTimeout(tick, 200);
        return;
      }

      if (deleting) {
        length = Math.max(0, length - 1);
        setTypedPlaceholder(SMART_PROMPT.slice(0, length));
        if (length === 0) {
          deleting = false;
          timeout = window.setTimeout(tick, 500);
          return;
        }
        timeout = window.setTimeout(tick, 22);
      } else {
        length = Math.min(SMART_PROMPT.length, length + 1);
        setTypedPlaceholder(SMART_PROMPT.slice(0, length));
        if (length === SMART_PROMPT.length) {
          deleting = true;
          timeout = window.setTimeout(tick, 1900);
          return;
        }
        timeout = window.setTimeout(tick, 48);
      }
    };

    timeout = window.setTimeout(tick, 1600);
    return () => window.clearTimeout(timeout);
  }, []);
  function submitQuestion() {
    const value = question.trim();
    setQuestion("");
    openChat(value || undefined);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitQuestion();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      submitQuestion();
    }
  }

  return (
    <section
      aria-labelledby="octalve-hero-title"
      className="relative isolate flex w-full flex-1 flex-col overflow-hidden bg-[#0A0D11] px-4 pb-12 pt-3 text-white sm:px-5 lg:px-5 lg:pb-14"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(5,8,12,0.42) 0%, rgba(5,8,12,0.58) 42%, rgba(5,8,12,0.82) 100%), url('/images/octalve-hero-office.webp')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_30%)]" />

      <div className="mx-auto flex w-full max-w-[1540px] flex-1 flex-col bg-transparent">
        <div className="mx-auto w-full max-w-[1200px] px-2 pt-[72px] text-center sm:px-4 lg:pt-[86px]">
          <h1
            id="octalve-hero-title"
            className="mx-auto max-w-[980px] text-balance text-[clamp(2.75rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-white"
          >
            Your business growth,
            <br />
            powered by{" "}
            <span
              key={currentWord.text}
              aria-live="polite"
              className="inline-block transition-all duration-300"
              style={{ color: currentWord.color }}
            >
              {currentWord.text}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[700px] text-pretty text-[16px] leading-[1.55] text-white/92 sm:text-[17px]">
            Octalve brings strategy, creativity, technology, and execution
            together to help businesses and organizations turn ideas into
            reality, build smarter operations, and achieve sustainable growth.
          </p>
        </div>

        <div className="mx-auto mt-7 w-full max-w-[1160px] rounded-[40px] bg-[linear-gradient(180deg,rgba(18,20,24,0.94)_0%,rgba(20,23,27,0.96)_100%)] px-4 pb-9 pt-9 shadow-[0_35px_100px_rgba(0,0,0,0.34)] sm:px-7 lg:px-[64px] lg:pb-11 lg:pt-10">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex min-h-[210px] w-full max-w-[1010px] flex-col justify-between rounded-[30px] border border-white/4 bg-[#080A0D] px-6 pb-5 pt-8 sm:min-h-[220px] sm:px-10 sm:pb-6 sm:pt-8"
          >
            <label htmlFor="octalve-smart-question" className="sr-only">
              Ask Octalve Smart about your business
            </label>
            <textarea
              id="octalve-smart-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={handleKeyDown}
              rows={3}
              placeholder={typedPlaceholder}
              onFocus={() => {
                pauseTypingRef.current = true;
                setTypedPlaceholder(SMART_PROMPT);
              }}
              onBlur={() => { pauseTypingRef.current = false; }}
              className="min-h-0 w-full flex-1 resize-none border-0 bg-transparent text-[clamp(0.75rem,1.05vw,1rem)] leading-[1.6] text-white outline-none placeholder:text-[#8A8E95]"
            />

            <div className="mt-4 flex items-end justify-between gap-4">
              <span className="inline-flex h-[28px] items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 text-[11px] text-white/58">
                <Globe2 className="h-3.5 w-3.5" />
                English
                <ChevronDown className="h-3 w-3" />
              </span>

              <button
                type="submit"
                aria-label={question.trim() ? "Send question" : "Open Octalve Smart"}
                className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#0064E0] text-white transition hover:bg-[#0052B8]"
              >
                <ArrowUp className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </form>

          <div className="mt-8 flex justify-center">
            <a
              href="https://workspace.octalve.com"
              className="inline-flex min-h-[56px] min-w-[270px] items-center justify-center rounded-[14px] bg-[#2878EB] px-6 text-center text-[17px] font-medium text-white transition hover:bg-[#0064E0]"
            >
              Get Started on Workspace
            </a>
          </div>
        </div>

        <div className="flex-1" />
      </div>
    </section>
  );
}
