"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

export type MessageRole = "assistant" | "user";

export type ChatMessage = {
  id: number;
  role: MessageRole;
  content: string;
};

export type SourceItem = {
  site: string;
  title: string;
  url: string;
  path: string;
};

type ChatApiResponse = {
  answer?: string;
  sources?: SourceItem[];
  mode?: string;
  prompts?: string[];
};

type OctalveSmartContextValue = {
  isOpen: boolean;
  openChat: (prompt?: string) => void;
  closeChat: () => void;
  startNewChat: () => void;
  sendMessage: (rawText?: string) => Promise<void>;
  chatInput: string;
  setChatInput: (value: string) => void;
  messages: ChatMessage[];
  suggestions: string[];
  isLoading: boolean;
  mode: string | null;
  sources: SourceItem[];
};

const DEFAULT_PROMPTS = [
  "I need a business website for my company",
  "Which Octalve model fits my business?",
  "Tell me about Octalve Suite",
  "Can Octalve build an AI chatbot for my website?",
  "I need branding and website design",
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Welcome to Octalve Smart. Tell me what you are trying to build, fix, improve, or automate, and I will guide you to the right Octalve solution.",
  },
];

const OctalveSmartContext = createContext<OctalveSmartContextValue | null>(
  null,
);

export function OctalveSmartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [suggestions, setSuggestions] = useState<string[]>(DEFAULT_PROMPTS);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<string | null>(null);
  const [sources, setSources] = useState<SourceItem[]>([]);

  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  function resetState() {
    setMessages(INITIAL_MESSAGES);
    setSuggestions(DEFAULT_PROMPTS);
    setChatInput("");
    setIsLoading(false);
    setMode(null);
    setSources([]);
  }

  function closeChat() {
    setIsOpen(false);
  }

  function startNewChat() {
    resetState();
    setIsOpen(true);
  }

  async function sendMessage(rawText?: string, baseMessages?: ChatMessage[]) {
    const messageText = (rawText ?? chatInput).trim();

    if (!messageText || isLoading) return;

    const activeMessages = baseMessages ?? messagesRef.current;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: messageText,
    };

    const nextMessages = [...activeMessages, userMessage];

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

      if (!response.ok) {
        throw new Error("Failed to get chat response");
      }

      const data = (await response.json()) as ChatApiResponse;

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            data.answer?.trim() ||
            "I can help you identify the right Octalve service, model, or solution for your business needs.",
        },
      ]);

      setSources(Array.isArray(data.sources) ? data.sources.slice(0, 8) : []);
      setMode(typeof data.mode === "string" ? data.mode : null);

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
            "I’m having trouble reaching Octalve Smart right now. I can still help with websites, branding, systems, cloud infrastructure, AI chatbots, and business strategy.",
        },
      ]);
      setMode("fallback-guided");
      setSources([]);
      setSuggestions(DEFAULT_PROMPTS);
    } finally {
      setIsLoading(false);
    }
  }

  function openChat(prompt?: string) {
    setIsOpen(true);

    const cleanPrompt = prompt?.trim();
    if (!cleanPrompt) return;

    const baseMessages = [...INITIAL_MESSAGES];
    setMessages(baseMessages);
    setSuggestions(DEFAULT_PROMPTS);
    setChatInput("");
    setMode(null);
    setSources([]);

    window.setTimeout(() => {
      void sendMessage(cleanPrompt, baseMessages);
    }, 60);
  }

  return (
    <OctalveSmartContext.Provider
      value={{
        isOpen,
        openChat,
        closeChat,
        startNewChat,
        sendMessage,
        chatInput,
        setChatInput,
        messages,
        suggestions,
        isLoading,
        mode,
        sources,
      }}
    >
      {children}
    </OctalveSmartContext.Provider>
  );
}

export function useOctalveSmart() {
  const context = useContext(OctalveSmartContext);

  if (!context) {
    throw new Error("useOctalveSmart must be used within OctalveSmartProvider");
  }

  return context;
}
