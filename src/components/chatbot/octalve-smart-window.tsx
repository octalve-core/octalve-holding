// "use client";

// import { Fragment, useEffect, useMemo, useRef } from "react";
// import {
//   type ChatMessage,
//   type SourceItem,
//   useOctalveSmart,
// } from "./octalve-smart-provider";

// const UI_COLORS = {
//   red: "#EF4444",
//   blue: "#3B82F6",
//   yellow: "#F59E0B",
//   green: "#22C55E",
//   pageBg: "#F8FAFC",
//   white: "#FFFFFF",
//   border: "#E5E7EB",
//   chipBg: "#F3F4F6",
//   darkButton: "#111827",
// };

// const CANONICAL_HEADINGS = [
//   "What this usually means",
//   "How Octalve can help",
//   "What result to expect",
//   "Recommended next step",
// ] as const;

// type ParsedSection = {
//   heading: string | null;
//   body: string;
// };

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

// function CloseIcon() {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M6 6L18 18M18 6L6 18"
//         stroke="currentColor"
//         strokeWidth="1.9"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function RefreshIcon() {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M20 11A8 8 0 1 0 18.3 16.3M20 11V5M20 11H14"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function StopIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden="true"
//     >
//       <rect x="6" y="6" width="12" height="12" rx="2" />
//     </svg>
//   );
// }

// function normalizeHeading(block: string) {
//   const cleaned = block
//     .replace(/^\*\*/, "")
//     .replace(/\*\*$/, "")
//     .replace(/:$/, "")
//     .trim();

//   const canonical = CANONICAL_HEADINGS.find(
//     (heading) => heading.toLowerCase() === cleaned.toLowerCase(),
//   );

//   return canonical ?? null;
// }

// function parseAssistantSections(content: string): ParsedSection[] {
//   const blocks = content
//     .split(/\n{2,}/)
//     .map((block) => block.trim())
//     .filter(Boolean);

//   if (blocks.length === 0) {
//     return [{ heading: null, body: content.trim() }];
//   }

//   const sections: ParsedSection[] = [];
//   let current: ParsedSection = { heading: null, body: "" };

//   function pushCurrent() {
//     if (current.heading || current.body.trim()) {
//       sections.push({
//         heading: current.heading,
//         body: current.body.trim(),
//       });
//     }
//   }

//   for (const block of blocks) {
//     const heading = normalizeHeading(block);

//     if (heading) {
//       pushCurrent();
//       current = { heading, body: "" };
//       continue;
//     }

//     if (!current.body) {
//       current.body = block;
//     } else {
//       current.body = `${current.body}\n\n${block}`;
//     }
//   }

//   pushCurrent();

//   return sections.length > 0
//     ? sections
//     : [{ heading: null, body: content.trim() }];
// }

// function toReadablePath(path: string) {
//   if (!path || path === "/") return "Home";

//   return path
//     .replace(/^\/+/, "")
//     .split("/")
//     .filter(Boolean)
//     .map((part) =>
//       part
//         .replace(/[-_]+/g, " ")
//         .replace(/\b\w/g, (char) => char.toUpperCase()),
//     )
//     .join(" / ");
// }

// function sourceLabel(source: SourceItem) {
//   const pageLabel = source.title?.trim() || toReadablePath(source.path);
//   return `${source.site} — ${pageLabel}`;
// }

// function sanitizeHref(rawHref: string) {
//   const base = "https://octalve.com";

//   try {
//     if (rawHref.startsWith("/")) {
//       return rawHref;
//     }

//     const url = new URL(rawHref, base);

//     if (!/^https?:$/i.test(url.protocol)) {
//       return null;
//     }

//     if (!url.hostname.toLowerCase().includes("octalve")) {
//       return null;
//     }

//     return url.toString();
//   } catch {
//     return null;
//   }
// }

// function renderInlineMarkdown(text: string, keyPrefix: string) {
//   const nodes: React.ReactNode[] = [];
//   const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;

//   let lastIndex = 0;
//   let match: RegExpExecArray | null = regex.exec(text);

//   while (match) {
//     if (match.index > lastIndex) {
//       nodes.push(
//         <span key={`${keyPrefix}-text-${lastIndex}`}>
//           {text.slice(lastIndex, match.index)}
//         </span>,
//       );
//     }

//     if (match[2] && match[3]) {
//       const label = match[2];
//       const href = sanitizeHref(match[3]);

//       if (href) {
//         nodes.push(
//           <a
//             key={`${keyPrefix}-link-${match.index}`}
//             href={href}
//             className="font-medium text-blue-600 underline underline-offset-4 transition hover:text-blue-700"
//           >
//             {label}
//           </a>,
//         );
//       } else {
//         nodes.push(
//           <span
//             key={`${keyPrefix}-label-${match.index}`}
//             className="font-medium"
//           >
//             {label}
//           </span>,
//         );
//       }
//     } else if (match[4]) {
//       nodes.push(
//         <strong
//           key={`${keyPrefix}-strong-${match.index}`}
//           className="font-semibold text-slate-950"
//         >
//           {match[4]}
//         </strong>,
//       );
//     }

//     lastIndex = regex.lastIndex;
//     match = regex.exec(text);
//   }

//   if (lastIndex < text.length) {
//     nodes.push(
//       <span key={`${keyPrefix}-tail-${lastIndex}`}>
//         {text.slice(lastIndex)}
//       </span>,
//     );
//   }

//   return nodes;
// }

// function renderParagraph(paragraph: string, key: string) {
//   const lines = paragraph.split("\n");

//   return (
//     <p
//       key={key}
//       className="whitespace-pre-wrap text-[15px] leading-7 text-slate-800 sm:text-base sm:leading-8"
//     >
//       {lines.map((line, index) => (
//         <Fragment key={`${key}-line-${index}`}>
//           {renderInlineMarkdown(line, `${key}-inline-${index}`)}
//           {index < lines.length - 1 ? <br /> : null}
//         </Fragment>
//       ))}
//     </p>
//   );
// }

// function renderBody(body: string) {
//   const blocks = body
//     .split(/\n{2,}/)
//     .map((block) => block.trim())
//     .filter(Boolean);

//   return (
//     <div className="space-y-4">
//       {blocks.map((block, blockIndex) => {
//         const lines = block
//           .split("\n")
//           .map((line) => line.trim())
//           .filter(Boolean);

//         const isBulletList =
//           lines.length > 1 &&
//           lines.every((line) => /^(-|•|\d+\.)\s+/.test(line));

//         if (isBulletList) {
//           return (
//             <ul
//               key={`list-${blockIndex}`}
//               className="space-y-2 pl-5 text-[15px] leading-7 text-slate-800 sm:text-base"
//             >
//               {lines.map((line, lineIndex) => (
//                 <li key={`li-${blockIndex}-${lineIndex}`}>
//                   {renderInlineMarkdown(
//                     line.replace(/^(-|•|\d+\.)\s+/, ""),
//                     `li-${blockIndex}-${lineIndex}`,
//                   )}
//                 </li>
//               ))}
//             </ul>
//           );
//         }

//         return renderParagraph(block, `paragraph-${blockIndex}`);
//       })}
//     </div>
//   );
// }

// function AssistantBubble({ message }: { message: ChatMessage }) {
//   const sections = useMemo(
//     () => parseAssistantSections(message.content),
//     [message.content],
//   );

//   return (
//     <div
//       className="max-w-[92%] rounded-[28px] rounded-tl-md px-6 py-5 text-slate-900"
//       style={{ backgroundColor: UI_COLORS.chipBg }}
//     >
//       <div className="space-y-5">
//         {sections.map((section, index) => (
//           <div key={`${section.heading}-${index}`} className="space-y-3">
//             {section.heading && (
//               <p className="text-[16px] font-semibold text-slate-950 sm:text-[17px]">
//                 {section.heading}
//               </p>
//             )}
//             {renderBody(section.body)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function LoadingBubble({
//   phase,
// }: {
//   phase: "retrieving" | "generating" | null;
// }) {
//   const label =
//     phase === "retrieving"
//       ? "Octalve Smart is checking Octalve websites and services…"
//       : "Octalve Smart is writing your answer…";

//   return (
//     <div
//       className="max-w-[92%] rounded-[28px] rounded-tl-md px-6 py-5 text-slate-900"
//       style={{ backgroundColor: UI_COLORS.chipBg }}
//     >
//       <p className="text-[15px] leading-7 sm:text-base sm:leading-8">{label}</p>
//     </div>
//   );
// }

// export default function OctalveSmartWindow() {
//   const {
//     isOpen,
//     closeChat,
//     startNewChat,
//     sendMessage,
//     stopGenerating,
//     chatInput,
//     setChatInput,
//     messages,
//     suggestions,
//     isLoading,
//     mode,
//     sources,
//     cta,
//     streamStatus,
//   } = useOctalveSmart();

//   const messagesEndRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     document.body.style.overflow = "hidden";

//     const onEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         closeChat();
//       }
//     };

//     document.addEventListener("keydown", onEscape);

//     return () => {
//       document.body.style.overflow = "";
//       document.removeEventListener("keydown", onEscape);
//     };
//   }, [isOpen, closeChat]);

//   useEffect(() => {
//     if (!isOpen) return;

//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//     });
//   }, [isOpen, messages, isLoading, streamStatus, cta]);

//   const modeLabel = useMemo(() => {
//     if (mode === "website-first") return "Website-first";
//     if (mode === "fallback-guided") return "Guided";
//     return "Live";
//   }, [mode]);

//   function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
//     if (event.key === "Enter" && !event.shiftKey) {
//       event.preventDefault();
//       void sendMessage();
//     }
//   }

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[90] flex flex-col"
//       style={{ backgroundColor: UI_COLORS.pageBg }}
//       role="dialog"
//       aria-modal="true"
//       aria-label="Octalve Smart chat"
//     >
//       <div className="flex h-1 w-full flex-none">
//         <div className="w-1/4" style={{ backgroundColor: UI_COLORS.red }} />
//         <div className="w-1/4" style={{ backgroundColor: UI_COLORS.blue }} />
//         <div className="w-1/4" style={{ backgroundColor: UI_COLORS.yellow }} />
//         <div className="w-1/4" style={{ backgroundColor: UI_COLORS.green }} />
//       </div>

//       <div
//         className="relative flex h-[72px] flex-none items-center justify-center border-b"
//         style={{
//           borderColor: UI_COLORS.border,
//           backgroundColor: UI_COLORS.white,
//         }}
//       >
//         <div className="flex items-center gap-3">
//           <h2 className="text-xl font-semibold text-slate-900">
//             Octalve Smart
//           </h2>
//           <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
//             {modeLabel}
//           </span>
//         </div>

//         <div className="absolute left-4 flex items-center gap-2 sm:left-6">
//           <button
//             onClick={startNewChat}
//             className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-900 transition hover:bg-slate-100"
//             aria-label="Start new chat"
//             title="Start new chat"
//           >
//             <RefreshIcon />
//           </button>
//         </div>

//         <button
//           onClick={closeChat}
//           className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-900 transition hover:bg-slate-100 sm:right-6"
//           aria-label="Close chat"
//         >
//           <CloseIcon />
//         </button>
//       </div>

//       <div className="flex min-h-0 flex-1 flex-col">
//         <div className="min-h-0 flex-1 overflow-y-auto">
//           <div className="mx-auto max-w-[980px] px-4 py-6 sm:px-6 md:py-8">
//             {sources.length > 0 && (
//               <div className="mb-6 flex flex-wrap gap-2">
//                 {sources.slice(0, 4).map((source) => (
//                   <a
//                     key={source.url}
//                     href={source.url}
//                     className="rounded-full border px-3 py-2 text-xs text-slate-700 transition hover:bg-slate-100"
//                     style={{ borderColor: UI_COLORS.border }}
//                     title={source.url}
//                   >
//                     {sourceLabel(source)}
//                   </a>
//                 ))}
//               </div>
//             )}

//             <div className="space-y-6">
//               {messages.map((message, index) => {
//                 const isStreamingPlaceholder =
//                   message.role === "assistant" &&
//                   !message.content.trim() &&
//                   isLoading &&
//                   index === messages.length - 1;

//                 return (
//                   <div
//                     key={message.id}
//                     className={`flex ${
//                       message.role === "user" ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     {message.role === "user" ? (
//                       <div
//                         className="max-w-[80%] rounded-[24px] rounded-tr-md px-5 py-4 text-white"
//                         style={{ backgroundColor: UI_COLORS.green }}
//                       >
//                         <p className="whitespace-pre-wrap text-[15px] leading-7 sm:text-base sm:leading-8">
//                           {message.content}
//                         </p>
//                       </div>
//                     ) : isStreamingPlaceholder ? (
//                       <LoadingBubble phase={streamStatus} />
//                     ) : (
//                       <AssistantBubble message={message} />
//                     )}
//                   </div>
//                 );
//               })}

//               {cta && !isLoading && (
//                 <div className="flex justify-start">
//                   <div className="max-w-[92%] rounded-[26px] border border-slate-200 bg-white px-5 py-5 shadow-sm">
//                     <p className="text-sm font-semibold text-slate-950">
//                       Recommended next action
//                     </p>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       {cta.description}
//                     </p>
//                     <a
//                       href={cta.url}
//                       className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
//                     >
//                       {cta.label}
//                     </a>
//                   </div>
//                 </div>
//               )}

//               <div ref={messagesEndRef} />
//             </div>
//           </div>
//         </div>

//         <div
//           className="flex-none border-t px-4 pb-5 pt-4 sm:px-6"
//           style={{
//             borderColor: UI_COLORS.border,
//             backgroundColor: "rgba(248, 250, 252, 0.96)",
//             backdropFilter: "blur(14px)",
//           }}
//         >
//           <div className="mx-auto max-w-[980px]">
//             <div className="mb-4 flex items-center justify-between gap-4">
//               <div className="overflow-x-auto pb-1 hide-scrollbar">
//                 <div className="flex w-max min-w-full gap-3">
//                   {suggestions.map((prompt) => (
//                     <button
//                       key={prompt}
//                       onClick={() => void sendMessage(prompt)}
//                       disabled={isLoading}
//                       className="whitespace-nowrap rounded-[16px] border px-4 py-3 text-sm text-slate-900 transition hover:bg-slate-50 disabled:opacity-60"
//                       style={{
//                         borderColor: UI_COLORS.border,
//                         backgroundColor: UI_COLORS.chipBg,
//                       }}
//                     >
//                       {prompt}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <p className="hidden text-xs text-slate-500 md:block">
//                 {streamStatus === "retrieving"
//                   ? "Reading Octalve websites…"
//                   : streamStatus === "generating"
//                     ? "Streaming live answer…"
//                     : "Ask about websites, branding, cloud, systems, or AI automation."}
//               </p>
//             </div>

//             <div
//               className="rounded-[32px] border bg-white p-4 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-5"
//               style={{
//                 borderColor: UI_COLORS.border,
//                 backgroundColor: UI_COLORS.white,
//               }}
//             >
//               <textarea
//                 value={chatInput}
//                 onChange={(event) => setChatInput(event.target.value)}
//                 onKeyDown={handleKeyDown}
//                 rows={3}
//                 placeholder="Ask Octalve Smart about your website, brand, cloud setup, product, or business system..."
//                 className="min-h-[96px] w-full resize-none border-none bg-transparent text-base leading-7 text-slate-900 outline-none placeholder:text-slate-400"
//               />

//               <div className="mt-4 flex items-center justify-between gap-4">
//                 <p className="text-xs text-slate-500">Press Enter to send</p>

//                 {isLoading ? (
//                   <button
//                     onClick={stopGenerating}
//                     className="inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
//                     style={{ borderColor: UI_COLORS.border }}
//                     aria-label="Stop generating"
//                   >
//                     <StopIcon />
//                     Stop
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => void sendMessage()}
//                     className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
//                     style={{ backgroundColor: UI_COLORS.darkButton }}
//                     aria-label="Send chat message"
//                   >
//                     <SendIcon />
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  Fragment,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import {
  type ChatMessage,
  type SourceItem,
  useOctalveSmart,
} from "./octalve-smart-provider";

const UI_COLORS = {
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

const CANONICAL_HEADINGS = [
  "What this usually means",
  "How Octalve can help",
  "What result to expect",
  "Recommended next step",
] as const;

type ParsedSection = {
  heading: string | null;
  body: string;
};

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

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
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

function RefreshIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 11A8 8 0 1 0 18.3 16.3M20 11V5M20 11H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </svg>
  );
}

function normalizeHeading(block: string) {
  const cleaned = block
    .replace(/^\*\*/, "")
    .replace(/\*\*$/, "")
    .replace(/:$/, "")
    .trim();

  const canonical = CANONICAL_HEADINGS.find(
    (heading) => heading.toLowerCase() === cleaned.toLowerCase(),
  );

  return canonical ?? null;
}

function parseAssistantSections(content: string): ParsedSection[] {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  if (blocks.length === 0) {
    return [{ heading: null, body: content.trim() }];
  }

  const sections: ParsedSection[] = [];
  let current: ParsedSection = { heading: null, body: "" };

  function pushCurrent() {
    if (current.heading || current.body.trim()) {
      sections.push({
        heading: current.heading,
        body: current.body.trim(),
      });
    }
  }

  for (const block of blocks) {
    const heading = normalizeHeading(block);

    if (heading) {
      pushCurrent();
      current = { heading, body: "" };
      continue;
    }

    if (!current.body) {
      current.body = block;
    } else {
      current.body = `${current.body}\n\n${block}`;
    }
  }

  pushCurrent();

  return sections.length > 0
    ? sections
    : [{ heading: null, body: content.trim() }];
}

function toReadablePath(path: string) {
  if (!path || path === "/") return "Home";

  return path
    .replace(/^\/+/, "")
    .split("/")
    .filter(Boolean)
    .map((part) =>
      part
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    )
    .join(" / ");
}

function sourceLabel(source: SourceItem) {
  const pageLabel = source.title?.trim() || toReadablePath(source.path);
  return `${source.site} — ${pageLabel}`;
}

function sanitizeHref(rawHref: string) {
  const base = "https://octalve.com";

  try {
    if (rawHref.startsWith("/")) {
      return rawHref;
    }

    const url = new URL(rawHref, base);

    if (!/^https?:$/i.test(url.protocol)) {
      return null;
    }

    if (!url.hostname.toLowerCase().includes("octalve")) {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

function renderInlineMarkdown(text: string, keyPrefix: string) {
  const nodes: ReactNode[] = [];
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null = regex.exec(text);

  while (match) {
    if (match.index > lastIndex) {
      nodes.push(
        <span key={`${keyPrefix}-text-${lastIndex}`}>
          {text.slice(lastIndex, match.index)}
        </span>,
      );
    }

    if (match[2] && match[3]) {
      const label = match[2];
      const href = sanitizeHref(match[3]);

      if (href) {
        nodes.push(
          <a
            key={`${keyPrefix}-link-${match.index}`}
            href={href}
            className="font-medium text-blue-600 underline underline-offset-4 transition hover:text-blue-700"
          >
            {label}
          </a>,
        );
      } else {
        nodes.push(
          <span
            key={`${keyPrefix}-label-${match.index}`}
            className="font-medium"
          >
            {label}
          </span>,
        );
      }
    } else if (match[4]) {
      nodes.push(
        <strong
          key={`${keyPrefix}-strong-${match.index}`}
          className="font-semibold text-slate-950"
        >
          {match[4]}
        </strong>,
      );
    }

    lastIndex = regex.lastIndex;
    match = regex.exec(text);
  }

  if (lastIndex < text.length) {
    nodes.push(
      <span key={`${keyPrefix}-tail-${lastIndex}`}>
        {text.slice(lastIndex)}
      </span>,
    );
  }

  return nodes;
}

function renderParagraph(paragraph: string, key: string) {
  const lines = paragraph.split("\n");

  return (
    <p
      key={key}
      className="whitespace-pre-wrap text-[15px] leading-7 text-slate-800 sm:text-base sm:leading-8"
    >
      {lines.map((line, index) => (
        <Fragment key={`${key}-line-${index}`}>
          {renderInlineMarkdown(line, `${key}-inline-${index}`)}
          {index < lines.length - 1 ? <br /> : null}
        </Fragment>
      ))}
    </p>
  );
}

function renderBody(body: string) {
  const blocks = body
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="space-y-4">
      {blocks.map((block, blockIndex) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);

        const isBulletList =
          lines.length > 1 &&
          lines.every((line) => /^(-|•|\d+\.)\s+/.test(line));

        if (isBulletList) {
          return (
            <ul
              key={`list-${blockIndex}`}
              className="space-y-2 pl-5 text-[15px] leading-7 text-slate-800 sm:text-base"
            >
              {lines.map((line, lineIndex) => (
                <li key={`li-${blockIndex}-${lineIndex}`}>
                  {renderInlineMarkdown(
                    line.replace(/^(-|•|\d+\.)\s+/, ""),
                    `li-${blockIndex}-${lineIndex}`,
                  )}
                </li>
              ))}
            </ul>
          );
        }

        return renderParagraph(block, `paragraph-${blockIndex}`);
      })}
    </div>
  );
}

function AssistantBubble({ message }: { message: ChatMessage }) {
  const sections = useMemo(
    () => parseAssistantSections(message.content),
    [message.content],
  );

  return (
    <div
      className="max-w-[92%] rounded-[24px] rounded-tl-md px-5 py-4 text-slate-900 sm:rounded-[28px] sm:px-6 sm:py-5"
      style={{ backgroundColor: UI_COLORS.chipBg }}
    >
      <div className="space-y-5">
        {sections.map((section, index) => (
          <div key={`${section.heading}-${index}`} className="space-y-3">
            {section.heading && (
              <p className="text-[16px] font-semibold text-slate-950 sm:text-[17px]">
                {section.heading}
              </p>
            )}
            {renderBody(section.body)}
          </div>
        ))}
      </div>
    </div>
  );
}

function LoadingBubble({
  phase,
}: {
  phase: "retrieving" | "generating" | null;
}) {
  const label =
    phase === "retrieving"
      ? "Octalve Smart is checking Octalve websites and services…"
      : "Octalve Smart is writing your answer…";

  return (
    <div
      className="max-w-[92%] rounded-[24px] rounded-tl-md px-5 py-4 text-slate-900 sm:rounded-[28px] sm:px-6 sm:py-5"
      style={{ backgroundColor: UI_COLORS.chipBg }}
    >
      <p className="text-[15px] leading-7 sm:text-base sm:leading-8">{label}</p>
    </div>
  );
}

export default function OctalveSmartWindow() {
  const {
    isOpen,
    closeChat,
    startNewChat,
    sendMessage,
    stopGenerating,
    chatInput,
    setChatInput,
    messages,
    suggestions,
    isLoading,
    mode,
    sources,
    cta,
    streamStatus,
  } = useOctalveSmart();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const hasUserStartedConversation = useMemo(
    () => messages.some((message) => message.role === "user"),
    [messages],
  );

  const isLargeComposerState = !hasUserStartedConversation;
  const hasTypedSomething = chatInput.trim().length > 0;
  const showFloatingSuggestions =
    !isLoading && hasTypedSomething && suggestions.length > 0;

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeChat();
      }
    };

    document.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onEscape);
    };
  }, [isOpen, closeChat]);

  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [isOpen, messages, isLoading, streamStatus, cta, showFloatingSuggestions]);

  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea || !isOpen) return;

    const minHeight = 30;
    const maxHeight = isLargeComposerState ? 200 : 180;

    textarea.style.height = "0px";

    const nextHeight = Math.min(
      Math.max(textarea.scrollHeight, minHeight),
      maxHeight,
    );

    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [chatInput, isLargeComposerState, isOpen]);

  const modeLabel = useMemo(() => {
    if (mode === "website-first") return "Website-first";
    if (mode === "fallback-guided") return "Guided";
    return "Live";
  }, [mode]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col"
      style={{ backgroundColor: UI_COLORS.pageBg }}
      role="dialog"
      aria-modal="true"
      aria-label="Octalve Smart chat"
    >
      <div className="flex h-1 w-full flex-none">
        <div className="w-1/4" style={{ backgroundColor: UI_COLORS.red }} />
        <div className="w-1/4" style={{ backgroundColor: UI_COLORS.blue }} />
        <div className="w-1/4" style={{ backgroundColor: UI_COLORS.yellow }} />
        <div className="w-1/4" style={{ backgroundColor: UI_COLORS.green }} />
      </div>

      <div
        className="relative flex h-[72px] flex-none items-center justify-center border-b"
        style={{
          borderColor: UI_COLORS.border,
          backgroundColor: UI_COLORS.white,
        }}
      >
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-slate-900">
            Octalve Smart
          </h2>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
            {modeLabel}
          </span>
        </div>

        <div className="absolute left-4 flex items-center gap-2 sm:left-6">
          <button
            onClick={startNewChat}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-900 transition hover:bg-slate-100"
            aria-label="Start new chat"
            title="Start new chat"
          >
            <RefreshIcon />
          </button>
        </div>

        <button
          onClick={closeChat}
          className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-900 transition hover:bg-slate-100 sm:right-6"
          aria-label="Close chat"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[980px] px-4 py-5 sm:px-6 md:py-8">
            {sources.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
                {sources.slice(0, 4).map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    className="rounded-full border px-3 py-2 text-xs text-slate-700 transition hover:bg-slate-100"
                    style={{ borderColor: UI_COLORS.border }}
                    title={source.url}
                  >
                    {sourceLabel(source)}
                  </a>
                ))}
              </div>
            )}

            <div className="space-y-4 sm:space-y-6">
              {messages.map((message, index) => {
                const isStreamingPlaceholder =
                  message.role === "assistant" &&
                  !message.content.trim() &&
                  isLoading &&
                  index === messages.length - 1;

                return (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "user" ? (
                      <div
                        className="max-w-[84%] rounded-[20px] rounded-tr-md px-4 py-3.5 text-white sm:max-w-[80%] sm:rounded-[24px] sm:px-5 sm:py-4"
                        style={{ backgroundColor: UI_COLORS.green }}
                      >
                        <p className="whitespace-pre-wrap text-[15px] leading-7 sm:text-base sm:leading-8">
                          {message.content}
                        </p>
                      </div>
                    ) : isStreamingPlaceholder ? (
                      <LoadingBubble phase={streamStatus} />
                    ) : (
                      <AssistantBubble message={message} />
                    )}
                  </div>
                );
              })}

              {cta && !isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[92%] rounded-[22px] border border-slate-200 bg-white px-4 py-4 shadow-sm sm:rounded-[26px] sm:px-5 sm:py-5">
                    <p className="text-sm font-semibold text-slate-950">
                      Recommended next action
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {cta.description}
                    </p>
                    <a
                      href={cta.url}
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      {cta.label}
                    </a>
                  </div>
                </div>
              )}

              {/* {showFloatingSuggestions && (
                <div className="sticky bottom-3 z-10 pt-2 sm:bottom-4 sm:pt-3">
                  <div className="overflow-x-auto pb-1 hide-scrollbar">
                    <div className="mx-auto flex w-max min-w-full justify-start gap-2 rounded-[18px] border border-slate-200 bg-white/95 p-2 shadow-[0_14px_40px_rgba(15,23,42,0.10)] backdrop-blur sm:gap-2.5 sm:rounded-[20px] sm:p-2.5">
                      {suggestions.map((prompt) => (
                        <button
                          key={prompt}
                          onClick={() => void sendMessage(prompt)}
                          disabled={isLoading}
                          className="shrink-0 whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 transition hover:bg-slate-100 disabled:opacity-60 sm:px-3.5 sm:text-sm"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )} */}

              {showFloatingSuggestions && (
                <div className="sticky bottom-3 z-10 pt-2 sm:bottom-4 sm:pt-3">
                  <div className="overflow-x-auto pb-1 hide-scrollbar">
                    <div className="flex w-max min-w-full gap-2 sm:gap-2.5">
                      {suggestions.map((prompt) => (
                        <button
                          key={prompt}
                          onClick={() => void sendMessage(prompt)}
                          disabled={isLoading}
                          className="shrink-0 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 disabled:opacity-60 sm:px-3.5 sm:text-sm"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>

        <div
          className="flex-none border-t px-3 pt-3 sm:px-6 sm:pt-4"
          style={{
            borderColor: UI_COLORS.border,
            backgroundColor: "rgba(248, 250, 252, 0.96)",
            backdropFilter: "blur(14px)",
            paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
          }}
        >
          <div className="mx-auto max-w-[980px]">
            <div
              className={`overflow-hidden border bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-200 ${
                isLargeComposerState
                  ? "rounded-[26px] p-4 sm:rounded-[32px] sm:p-5"
                  : "rounded-[22px] p-4 sm:rounded-[28px] sm:p-4"
              }`}
              style={{
                borderColor: UI_COLORS.border,
                backgroundColor: UI_COLORS.white,
              }}
            >
              <textarea
                ref={textareaRef}
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder={
                  isLargeComposerState
                    ? "Ask Octalve Smart about your website, brand, cloud setup, product, or business system..."
                    : "Reply or ask a follow-up..."
                }
                className="w-full resize-none border-none bg-transparent px-1 py-1 text-[15px] leading-6 text-slate-900 outline-none placeholder:text-slate-400 sm:text-base sm:leading-7"
              />

              <div className="mt-3 flex items-end justify-between gap-3 px-1">
                <p className="text-[11px] text-slate-500 sm:text-xs">
                  Press Enter to send
                </p>

                {isLoading ? (
                  <button
                    onClick={stopGenerating}
                    className="inline-flex h-10 items-center gap-2 rounded-full border px-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-50 sm:h-11 sm:px-4"
                    style={{ borderColor: UI_COLORS.border }}
                    aria-label="Stop generating"
                  >
                    <StopIcon />
                    <span className="hidden sm:inline">Stop</span>
                  </button>
                ) : (
                  <button
                    onClick={() => void sendMessage()}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition active:scale-[0.98] sm:h-11 sm:w-11"
                    style={{ backgroundColor: UI_COLORS.darkButton }}
                    aria-label="Send chat message"
                  >
                    <SendIcon />
                  </button>
                )}
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] leading-5 text-slate-500 sm:text-xs">
              Ask about websites, branding, cloud, systems, or AI automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
