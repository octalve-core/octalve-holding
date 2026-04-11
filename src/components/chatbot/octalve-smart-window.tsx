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

// "use client";

// import {
//   Fragment,
//   useEffect,
//   useLayoutEffect,
//   useMemo,
//   useRef,
//   type ReactNode,
// } from "react";
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
//   const nodes: ReactNode[] = [];
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
//       className="max-w-[92%] rounded-[24px] rounded-tl-md px-5 py-4 text-slate-900 sm:rounded-[28px] sm:px-6 sm:py-5"
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
//       className="max-w-[92%] rounded-[24px] rounded-tl-md px-5 py-4 text-slate-900 sm:rounded-[28px] sm:px-6 sm:py-5"
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
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);

//   const hasUserStartedConversation = useMemo(
//     () => messages.some((message) => message.role === "user"),
//     [messages],
//   );

//   const isLargeComposerState = !hasUserStartedConversation;
//   const hasTypedSomething = chatInput.trim().length > 0;
//   const showFloatingSuggestions =
//     !isLoading && hasTypedSomething && suggestions.length > 0;

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
//   }, [isOpen, messages, isLoading, streamStatus, cta, showFloatingSuggestions]);

//   useLayoutEffect(() => {
//     const textarea = textareaRef.current;
//     if (!textarea || !isOpen) return;

//     const minHeight = 30;
//     const maxHeight = isLargeComposerState ? 200 : 180;

//     textarea.style.height = "0px";

//     const nextHeight = Math.min(
//       Math.max(textarea.scrollHeight, minHeight),
//       maxHeight,
//     );

//     textarea.style.height = `${nextHeight}px`;
//     textarea.style.overflowY =
//       textarea.scrollHeight > maxHeight ? "auto" : "hidden";
//   }, [chatInput, isLargeComposerState, isOpen]);

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
//           <div className="mx-auto max-w-[980px] px-4 py-5 sm:px-6 md:py-8">
//             {sources.length > 0 && (
//               <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
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

//             <div className="space-y-4 sm:space-y-6">
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
//                         className="max-w-[84%] rounded-[20px] rounded-tr-md px-4 py-3.5 text-white sm:max-w-[80%] sm:rounded-[24px] sm:px-5 sm:py-4"
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
//                   <div className="max-w-[92%] rounded-[22px] border border-slate-200 bg-white px-4 py-4 shadow-sm sm:rounded-[26px] sm:px-5 sm:py-5">
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

//               {/* {showFloatingSuggestions && (
//                 <div className="sticky bottom-3 z-10 pt-2 sm:bottom-4 sm:pt-3">
//                   <div className="overflow-x-auto pb-1 hide-scrollbar">
//                     <div className="mx-auto flex w-max min-w-full justify-start gap-2 rounded-[18px] border border-slate-200 bg-white/95 p-2 shadow-[0_14px_40px_rgba(15,23,42,0.10)] backdrop-blur sm:gap-2.5 sm:rounded-[20px] sm:p-2.5">
//                       {suggestions.map((prompt) => (
//                         <button
//                           key={prompt}
//                           onClick={() => void sendMessage(prompt)}
//                           disabled={isLoading}
//                           className="shrink-0 whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 transition hover:bg-slate-100 disabled:opacity-60 sm:px-3.5 sm:text-sm"
//                         >
//                           {prompt}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )} */}

//               {showFloatingSuggestions && (
//                 <div className="sticky bottom-3 z-10 pt-2 sm:bottom-4 sm:pt-3">
//                   <div className="overflow-x-auto pb-1 hide-scrollbar">
//                     <div className="flex w-max min-w-full gap-2 sm:gap-2.5">
//                       {suggestions.map((prompt) => (
//                         <button
//                           key={prompt}
//                           onClick={() => void sendMessage(prompt)}
//                           disabled={isLoading}
//                           className="shrink-0 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 disabled:opacity-60 sm:px-3.5 sm:text-sm"
//                         >
//                           {prompt}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div ref={messagesEndRef} />
//             </div>
//           </div>
//         </div>

//         <div
//           className="flex-none border-t px-3 pt-3 sm:px-6 sm:pt-4"
//           style={{
//             borderColor: UI_COLORS.border,
//             backgroundColor: "rgba(248, 250, 252, 0.96)",
//             backdropFilter: "blur(14px)",
//             paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
//           }}
//         >
//           <div className="mx-auto max-w-[980px]">
//             <div
//               className={`overflow-hidden border bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-200 ${
//                 isLargeComposerState
//                   ? "rounded-[26px] p-4 sm:rounded-[32px] sm:p-5"
//                   : "rounded-[22px] p-4 sm:rounded-[28px] sm:p-4"
//               }`}
//               style={{
//                 borderColor: UI_COLORS.border,
//                 backgroundColor: UI_COLORS.white,
//               }}
//             >
//               <textarea
//                 ref={textareaRef}
//                 value={chatInput}
//                 onChange={(event) => setChatInput(event.target.value)}
//                 onKeyDown={handleKeyDown}
//                 rows={1}
//                 placeholder={
//                   isLargeComposerState
//                     ? "Ask Octalve Smart about your website, brand, cloud setup, product, or business system..."
//                     : "Reply or ask a follow-up..."
//                 }
//                 className="w-full resize-none border-none bg-transparent px-1 py-1 text-[15px] leading-6 text-slate-900 outline-none placeholder:text-slate-400 sm:text-base sm:leading-7"
//               />

//               <div className="mt-3 flex items-end justify-between gap-3 px-1">
//                 <p className="text-[11px] text-slate-500 sm:text-xs">
//                   Press Enter to send
//                 </p>

//                 {isLoading ? (
//                   <button
//                     onClick={stopGenerating}
//                     className="inline-flex h-10 items-center gap-2 rounded-full border px-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-50 sm:h-11 sm:px-4"
//                     style={{ borderColor: UI_COLORS.border }}
//                     aria-label="Stop generating"
//                   >
//                     <StopIcon />
//                     <span className="hidden sm:inline">Stop</span>
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => void sendMessage()}
//                     className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition active:scale-[0.98] sm:h-11 sm:w-11"
//                     style={{ backgroundColor: UI_COLORS.darkButton }}
//                     aria-label="Send chat message"
//                   >
//                     <SendIcon />
//                   </button>
//                 )}
//               </div>
//             </div>

//             <p className="mt-3 text-center text-[11px] leading-5 text-slate-500 sm:text-xs">
//               Ask about websites, branding, cloud, systems, or AI automation.
//             </p>
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
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
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

type NavigateHandler = (href: string) => void;

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

function CopyIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="9"
        y="9"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M15 9V7C15 5.89543 14.1046 5 13 5H7C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15H9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 16V5M12 5L8 9M12 5L16 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4V14M12 14L8 10M12 14L16 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 17V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
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

function normalizePdfText(text: string) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[•●▪◦]/g, "-")
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\t/g, "  ")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E\n]/g, "");
}

function escapePdfText(text: string) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function splitLongPdfWord(word: string, maxChars: number) {
  const parts: string[] = [];

  for (let index = 0; index < word.length; index += maxChars) {
    parts.push(word.slice(index, index + maxChars));
  }

  return parts;
}

function wrapPdfText(text: string, maxChars: number) {
  const inputLines = normalizePdfText(text).split("\n");
  const wrapped: string[] = [];

  for (const rawLine of inputLines) {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      wrapped.push("");
      continue;
    }

    const words = line.split(/\s+/);
    let currentLine = "";

    for (const word of words) {
      if (!currentLine) {
        if (word.length <= maxChars) {
          currentLine = word;
        } else {
          const parts = splitLongPdfWord(word, maxChars);
          wrapped.push(...parts.slice(0, -1));
          currentLine = parts[parts.length - 1] ?? "";
        }
        continue;
      }

      const nextCandidate = `${currentLine} ${word}`;

      if (nextCandidate.length <= maxChars) {
        currentLine = nextCandidate;
        continue;
      }

      wrapped.push(currentLine);

      if (word.length <= maxChars) {
        currentLine = word;
      } else {
        const parts = splitLongPdfWord(word, maxChars);
        wrapped.push(...parts.slice(0, -1));
        currentLine = parts[parts.length - 1] ?? "";
      }
    }

    wrapped.push(currentLine);
  }

  return wrapped.length > 0 ? wrapped : [""];
}

function chunkPdfLines(lines: string[], pageSize: number) {
  const pages: string[][] = [];

  for (let index = 0; index < lines.length; index += pageSize) {
    pages.push(lines.slice(index, index + pageSize));
  }

  return pages.length > 0 ? pages : [[""]];
}

function createPdfStream(lines: string[]) {
  const streamLines = ["BT", "/F1 12 Tf", "40 800 Td", "14 TL"];

  lines.forEach((line, index) => {
    streamLines.push(`(${escapePdfText(line)}) Tj`);

    if (index < lines.length - 1) {
      streamLines.push("T*");
    }
  });

  streamLines.push("ET");

  return streamLines.join("\n");
}

function buildPdfBlob(content: string) {
  const header = [
    "Octalve Smart Response",
    `Generated: ${new Date().toLocaleString()}`,
    "",
  ];

  const bodyLines = wrapPdfText(content, 88);
  const allLines = [...header, ...bodyLines];
  const pages = chunkPdfLines(allLines, 48);

  const objects: string[] = [];
  const pageObjectNumbers: number[] = [];
  const contentObjectNumbers: number[] = [];

  let nextObjectNumber = 4;

  for (let index = 0; index < pages.length; index += 1) {
    pageObjectNumbers.push(nextObjectNumber);
    nextObjectNumber += 1;

    contentObjectNumbers.push(nextObjectNumber);
    nextObjectNumber += 1;
  }

  objects[1] = `1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
`;

  objects[2] = `2 0 obj
<< /Type /Pages /Count ${pages.length} /Kids [${pageObjectNumbers
    .map((pageNumber) => `${pageNumber} 0 R`)
    .join(" ")}] >>
endobj
`;

  objects[3] = `3 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
`;

  pages.forEach((pageLines, index) => {
    const pageObjectNumber = pageObjectNumbers[index];
    const contentObjectNumber = contentObjectNumbers[index];
    const stream = createPdfStream(pageLines);

    objects[pageObjectNumber] = `${pageObjectNumber} 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentObjectNumber} 0 R >>
endobj
`;

    objects[contentObjectNumber] = `${contentObjectNumber} 0 obj
<< /Length ${stream.length} >>
stream
${stream}
endstream
endobj
`;
  });

  const maxObjectNumber = nextObjectNumber - 1;
  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];

  offsets[0] = 0;

  for (
    let objectNumber = 1;
    objectNumber <= maxObjectNumber;
    objectNumber += 1
  ) {
    offsets[objectNumber] = pdf.length;
    pdf += objects[objectNumber];
  }

  const xrefStart = pdf.length;

  pdf += `xref
0 ${maxObjectNumber + 1}
`;
  pdf += "0000000000 65535 f \n";

  for (
    let objectNumber = 1;
    objectNumber <= maxObjectNumber;
    objectNumber += 1
  ) {
    pdf += `${String(offsets[objectNumber]).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer
<< /Size ${maxObjectNumber + 1} /Root 1 0 R >>
startxref
${xrefStart}
%%EOF`;

  return new Blob([pdf], { type: "application/pdf" });
}

function createPdfFileName(prefix: string) {
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  return `${prefix}-${stamp}.pdf`;
}

function renderInlineMarkdown(
  text: string,
  keyPrefix: string,
  onNavigate?: NavigateHandler,
) {
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
            onClick={(event) => {
              if (!onNavigate) return;
              event.preventDefault();
              onNavigate(href);
            }}
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

function renderParagraph(
  paragraph: string,
  key: string,
  onNavigate?: NavigateHandler,
) {
  const lines = paragraph.split("\n");

  return (
    <p
      key={key}
      className="whitespace-pre-wrap break-words text-[15px] leading-7 text-slate-800 [overflow-wrap:anywhere] sm:text-base sm:leading-8"
    >
      {lines.map((line, index) => (
        <Fragment key={`${key}-line-${index}`}>
          {renderInlineMarkdown(line, `${key}-inline-${index}`, onNavigate)}
          {index < lines.length - 1 ? <br /> : null}
        </Fragment>
      ))}
    </p>
  );
}

function renderBody(body: string, onNavigate?: NavigateHandler) {
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
              className="space-y-2 break-words pl-5 text-[15px] leading-7 text-slate-800 [overflow-wrap:anywhere] sm:text-base"
            >
              {lines.map((line, lineIndex) => (
                <li key={`li-${blockIndex}-${lineIndex}`}>
                  {renderInlineMarkdown(
                    line.replace(/^(-|•|\d+\.)\s+/, ""),
                    `li-${blockIndex}-${lineIndex}`,
                    onNavigate,
                  )}
                </li>
              ))}
            </ul>
          );
        }

        return renderParagraph(block, `paragraph-${blockIndex}`, onNavigate);
      })}
    </div>
  );
}

function MessageActions({
  content,
  align = "left",
  allowShare = false,
  allowDownload = false,
  pdfFilePrefix = "octalve-smart-response",
}: {
  content: string;
  align?: "left" | "right";
  allowShare?: boolean;
  allowDownload?: boolean;
  pdfFilePrefix?: string;
}) {
  const [notice, setNotice] = useState("");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function showNotice(text: string) {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setNotice(text);

    timeoutRef.current = window.setTimeout(() => {
      setNotice("");
    }, 1800);
  }

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(content);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = content;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      showNotice("Copied to clipboard");
    } catch {
      showNotice("Copy failed");
    }
  }

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({ text: content });
        showNotice("Shared");
        return;
      }

      await handleCopy();
    } catch {
      // user cancelled share sheet or share failed
    }
  }

  function handleDownloadPdf() {
    try {
      const blob = buildPdfBlob(content);
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");

      anchor.href = objectUrl;
      anchor.download = createPdfFileName(pdfFilePrefix);
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      window.setTimeout(() => {
        URL.revokeObjectURL(objectUrl);
      }, 1000);

      showNotice("PDF downloaded");
    } catch {
      showNotice("PDF download failed");
    }
  }

  return (
    <div
      className={`mt-2 flex items-center gap-2 ${
        align === "right" ? "justify-end pr-1" : "pl-1"
      }`}
    >
      <button
        type="button"
        onClick={() => void handleCopy()}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 sm:h-10 sm:w-10"
        aria-label="Copy message"
        title="Copy message"
      >
        <CopyIcon />
      </button>

      {allowShare ? (
        <button
          type="button"
          onClick={() => void handleShare()}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 sm:h-10 sm:w-10"
          aria-label="Share response"
          title="Share response"
        >
          <ShareIcon />
        </button>
      ) : null}

      {allowDownload ? (
        <button
          type="button"
          onClick={handleDownloadPdf}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 sm:h-10 sm:w-10"
          aria-label="Download response as PDF"
          title="Download response as PDF"
        >
          <DownloadIcon />
        </button>
      ) : null}

      <span
        aria-live="polite"
        className={`min-h-[20px] text-[11px] font-medium text-slate-500 transition-opacity duration-200 sm:text-xs ${
          notice ? "opacity-100" : "opacity-0"
        }`}
      >
        {notice || "Status"}
      </span>
    </div>
  );
}

function AssistantBubble({
  message,
  onNavigate,
}: {
  message: ChatMessage;
  onNavigate: NavigateHandler;
}) {
  const sections = useMemo(
    () => parseAssistantSections(message.content),
    [message.content],
  );

  return (
    <div className="min-w-0 max-w-[92%]">
      <div
        className="overflow-hidden rounded-[24px] rounded-tl-md px-5 py-4 text-slate-900 sm:rounded-[28px] sm:px-6 sm:py-5"
        style={{ backgroundColor: UI_COLORS.chipBg }}
      >
        <div className="space-y-5 break-words [overflow-wrap:anywhere]">
          {sections.map((section, index) => (
            <div key={`${section.heading}-${index}`} className="space-y-3">
              {section.heading && (
                <p className="text-[16px] font-semibold text-slate-950 sm:text-[17px]">
                  {section.heading}
                </p>
              )}
              {renderBody(section.body, onNavigate)}
            </div>
          ))}
        </div>
      </div>

      <MessageActions
        content={message.content}
        align="left"
        allowShare
        allowDownload
        pdfFilePrefix="octalve-smart-response"
      />
    </div>
  );
}

function UserBubble({ message }: { message: ChatMessage }) {
  return (
    <div className="min-w-0 max-w-[84%] sm:max-w-[80%]">
      <div
        className="overflow-hidden rounded-[20px] rounded-tr-md px-4 py-3.5 text-white sm:rounded-[24px] sm:px-5 sm:py-4"
        style={{ backgroundColor: UI_COLORS.green }}
      >
        <p className="whitespace-pre-wrap break-words text-[15px] leading-7 [overflow-wrap:anywhere] sm:text-base sm:leading-8">
          {message.content}
        </p>
      </div>

      <MessageActions
        content={message.content}
        align="right"
        pdfFilePrefix="octalve-smart-message"
      />
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
  const router = useRouter();

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
  const [isMobileComposer, setIsMobileComposer] = useState(false);

  const hasUserStartedConversation = useMemo(
    () => messages.some((message) => message.role === "user"),
    [messages],
  );

  const isLargeComposerState = !hasUserStartedConversation;
  const hasTypedSomething = chatInput.trim().length > 0;
  const showFloatingSuggestions =
    !isLoading && hasTypedSomething && suggestions.length > 0;

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 767px), (pointer: coarse)",
    );

    const updateDeviceState = () => {
      setIsMobileComposer(mediaQuery.matches);
    };

    updateDeviceState();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateDeviceState);
      return () => mediaQuery.removeEventListener("change", updateDeviceState);
    }

    mediaQuery.addListener(updateDeviceState);
    return () => mediaQuery.removeListener(updateDeviceState);
  }, []);

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

  function navigateToHref(rawHref: string) {
    const href = sanitizeHref(rawHref);
    if (!href || typeof window === "undefined") return;

    try {
      const targetUrl = new URL(href, window.location.origin);

      if (targetUrl.origin === window.location.origin) {
        router.push(
          `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`,
        );
        return;
      }

      window.location.assign(targetUrl.toString());
    } catch {
      if (href.startsWith("/")) {
        router.push(href);
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.nativeEvent.isComposing) return;

    if (event.key === "Enter" && !event.shiftKey) {
      if (isMobileComposer) {
        return;
      }

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
                  <button
                    key={source.url}
                    type="button"
                    onClick={() => navigateToHref(source.url)}
                    className="rounded-full border px-3 py-2 text-left text-xs text-slate-700 transition hover:bg-slate-100"
                    style={{ borderColor: UI_COLORS.border }}
                    title={source.url}
                  >
                    {sourceLabel(source)}
                  </button>
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
                    className={`flex min-w-0 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "user" ? (
                      <UserBubble message={message} />
                    ) : isStreamingPlaceholder ? (
                      <LoadingBubble phase={streamStatus} />
                    ) : (
                      <AssistantBubble
                        message={message}
                        onNavigate={navigateToHref}
                      />
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
                    <p className="mt-2 break-words text-sm leading-6 text-slate-600 [overflow-wrap:anywhere]">
                      {cta.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => navigateToHref(cta.url)}
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      {cta.label}
                    </button>
                  </div>
                </div>
              )}

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

              <div className="mt-3 flex items-center justify-between gap-3 px-1">
                <p className="min-w-0 flex-1 text-[11px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                  {isMobileComposer
                    ? "Use the send button"
                    : "Enter sends • Shift + Enter for new line"}
                </p>

                {isLoading ? (
                  <button
                    onClick={stopGenerating}
                    className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-50 sm:h-11 sm:px-4"
                    style={{ borderColor: UI_COLORS.border }}
                    aria-label="Stop generating"
                  >
                    <StopIcon />
                    <span className="hidden sm:inline">Stop</span>
                  </button>
                ) : (
                  <button
                    onClick={() => void sendMessage()}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition active:scale-[0.98] sm:h-11 sm:w-11"
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
