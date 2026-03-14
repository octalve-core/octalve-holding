"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const HERO_COLORS = {
  red: "#EF4444",
  blue: "#3B82F6",
  yellow: "#F59E0B",
  green: "#22C55E",
  pageBg: "#F8FAFC",
  white: "#FFFFFF",
  textDark: "#111827",
  textSoft: "#6B7280",
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

const DEFAULT_PROMPTS = [
  "I need a business website for my company",
  "Which Octalve model fits my business?",
  "Tell me about Octalve Suite",
  "Can Octalve build an AI chatbot for my website?",
  "I need branding and website design",
];

type MessageRole = "assistant" | "user";

type Message = {
  id: number;
  role: MessageRole;
  content: string;
};

type ChatApiResponse = {
  answer: string;
  sources?: string[];
  mode?: string;
  prompts?: string[];
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Good evening! Welcome to Octalve Holding. How can I help you with strategy, branding, websites, systems, or digital solutions today?",
  },
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
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [suggestions, setSuggestions] = useState<string[]>(DEFAULT_PROMPTS);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    if (chatOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [chatOpen]);

  useEffect(() => {
    if (!chatOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseChat();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [chatOpen]);

  useEffect(() => {
    if (chatOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatOpen, messages, isLoading]);

  function resetConversation() {
    setMessages(INITIAL_MESSAGES);
    setSuggestions(DEFAULT_PROMPTS);
    setChatInput("");
    setPreviewInput("");
    setIsLoading(false);
  }

  function handleCloseChat() {
    setChatOpen(false);
    resetConversation();
  }

  function openChatOnly() {
    setChatOpen(true);
  }

  async function sendMessage(rawText?: string) {
    const messageText = (rawText ?? chatInput).trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: messageText,
    };

    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setChatInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = (await response.json()) as ChatApiResponse;

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            data.answer ||
            "I can help with Octalve services, strategy, branding, websites, and systems. Tell me what you need.",
        },
      ]);

      if (Array.isArray(data.prompts) && data.prompts.length > 0) {
        setSuggestions(data.prompts.slice(0, 6));
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "I’m having trouble reaching Octalve Smart right now. You can still ask about branding, websites, systems, business strategy, or Octalve services.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenChat(prompt?: string) {
    setChatOpen(true);

    const cleanPrompt = prompt?.trim();
    if (!cleanPrompt) return;

    window.setTimeout(() => {
      void sendMessage(cleanPrompt);
    }, 80);
  }

  function handlePreviewSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = previewInput.trim();
    if (!clean) {
      openChatOnly();
      return;
    }

    setPreviewInput("");
    handleOpenChat(clean);
  }

  function handlePreviewKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      const clean = previewInput.trim();
      if (!clean) {
        openChatOnly();
        return;
      }

      setPreviewInput("");
      handleOpenChat(clean);
    }
  }

  function handleChatKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  return (
    <>
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
              foundations through strategy, branding, websites, systems, and
              smart automation.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[980px]">
            <form
              onSubmit={handlePreviewSubmit}
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
                placeholder="Ask Octalve Smart about your business website, brand, system, or growth needs..."
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

            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex w-max min-w-full gap-3">
                {suggestions.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleOpenChat(prompt)}
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

      {chatOpen && (
        <div
          className="fixed inset-0 z-[80]"
          style={{ backgroundColor: HERO_COLORS.pageBg }}
        >
          <div className="flex h-1 w-full">
            <div
              className="w-1/4"
              style={{ backgroundColor: HERO_COLORS.red }}
            />
            <div
              className="w-1/4"
              style={{ backgroundColor: HERO_COLORS.blue }}
            />
            <div
              className="w-1/4"
              style={{ backgroundColor: HERO_COLORS.yellow }}
            />
            <div
              className="w-1/4"
              style={{ backgroundColor: HERO_COLORS.green }}
            />
          </div>

          <div
            className="relative flex h-[72px] items-center justify-center border-b"
            style={{
              borderColor: HERO_COLORS.border,
              backgroundColor: HERO_COLORS.white,
            }}
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Octalve Smart
            </h2>

            <button
              onClick={handleCloseChat}
              className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-900 transition hover:bg-slate-100 sm:right-6"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="h-[calc(100vh-73px)] overflow-y-auto pb-[245px]">
            <div className="mx-auto max-w-[920px] px-4 py-6 sm:px-6 md:py-8">
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-[24px] px-5 py-4 ${
                        message.role === "user"
                          ? "max-w-[80%] rounded-tr-md text-white"
                          : "max-w-[92%] rounded-tl-md text-slate-900"
                      }`}
                      style={{
                        backgroundColor:
                          message.role === "user"
                            ? HERO_COLORS.green
                            : HERO_COLORS.chipBg,
                      }}
                    >
                      {message.content.split("\n").map((line, index) => (
                        <p
                          key={`${message.id}-${index}`}
                          className="text-base leading-8"
                        >
                          {line || "\u00A0"}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div
                      className="max-w-[92%] rounded-[24px] rounded-tl-md px-5 py-4 text-slate-900"
                      style={{ backgroundColor: HERO_COLORS.chipBg }}
                    >
                      <p className="text-base leading-8">
                        Octalve Smart is checking our services…
                      </p>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          <div
            className="fixed bottom-0 left-0 right-0 border-t px-4 pb-5 pt-4 sm:px-6"
            style={{
              borderColor: HERO_COLORS.border,
              backgroundColor: "rgba(248, 250, 252, 0.96)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="mx-auto max-w-[920px]">
              <div className="mb-4 overflow-x-auto pb-1">
                <div className="flex w-max min-w-full gap-3">
                  {suggestions.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => void sendMessage(prompt)}
                      className="whitespace-nowrap rounded-[16px] border px-4 py-3 text-sm text-slate-900 transition hover:bg-slate-50"
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

              <div
                className="rounded-[32px] border bg-white p-4 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-5"
                style={{
                  borderColor: HERO_COLORS.border,
                  backgroundColor: HERO_COLORS.white,
                }}
              >
                <textarea
                  value={chatInput}
                  onChange={(event) => setChatInput(event.target.value)}
                  onKeyDown={handleChatKeyDown}
                  rows={3}
                  placeholder="Ask Octalve Smart about your website, brand, product, or business system..."
                  className="min-h-[96px] w-full resize-none border-none bg-transparent text-base leading-7 text-slate-900 outline-none placeholder:text-slate-400"
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
                    onClick={() => void sendMessage()}
                    disabled={isLoading}
                    className="inline-flex h-12 w-12 items-center justify-center self-end rounded-full text-white disabled:opacity-60"
                    style={{ backgroundColor: HERO_COLORS.darkButton }}
                    aria-label="Send chat message"
                  >
                    <SendIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
