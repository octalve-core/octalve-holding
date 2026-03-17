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

export type CtaItem = {
  label: string;
  url: string;
  description: string;
};

export type StreamStatus = "retrieving" | "generating" | null;

type ChatStreamMeta = {
  sources?: SourceItem[];
  mode?: string;
  prompts?: string[];
  cta?: CtaItem | null;
};

type ChatStreamDelta = {
  text?: string;
};

type ChatStreamError = {
  message?: string;
};

type ChatStreamStatus = {
  phase?: StreamStatus;
};

type SseEvent = {
  event: string | null;
  data: string;
};

type OctalveSmartContextValue = {
  isOpen: boolean;
  openChat: (prompt?: string) => void;
  closeChat: () => void;
  startNewChat: () => void;
  sendMessage: (rawText?: string) => Promise<void>;
  stopGenerating: () => void;
  chatInput: string;
  setChatInput: (value: string) => void;
  messages: ChatMessage[];
  suggestions: string[];
  isLoading: boolean;
  mode: string | null;
  sources: SourceItem[];
  cta: CtaItem | null;
  streamStatus: StreamStatus;
};

const DEFAULT_PROMPTS = [
  "I need a business website for my company",
  "Which Octalve model fits my business?",
  "Tell me about Octalve Suite",
  "Can Octalve build an AI chatbot for my website?",
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

function parseSseBlock(block: string): SseEvent | null {
  const lines = block.split("\n");
  let event: string | null = null;
  const dataLines: string[] = [];

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (!line || line.startsWith(":")) continue;

    if (line.startsWith("event:")) {
      event = line.slice("event:".length).trim();
      continue;
    }

    if (line.startsWith("data:")) {
      dataLines.push(line.slice("data:".length).trimStart());
    }
  }

  if (dataLines.length === 0) return null;

  return {
    event,
    data: dataLines.join("\n"),
  };
}

function stripMarkdown(value: string) {
  return value
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function extractQuotedPhrases(value: string) {
  const matches = [
    ...value.matchAll(/"([^"]{6,100})"/g),
    ...value.matchAll(/“([^”]{6,100})”/g),
  ];

  return matches.map((match) => match[1].trim());
}

function extractSuggestedPromptsFromAnswer(content: string) {
  const candidates: string[] = [];
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  const addCandidate = (value: string) => {
    const cleaned = stripMarkdown(value)
      .replace(/^(-|•|\d+\.)\s*/, "")
      .replace(/^Reply with:\s*/i, "")
      .replace(/^You can say:\s*/i, "")
      .replace(/^Next step:\s*/i, "")
      .replace(/^Recommended next step:\s*/i, "")
      .trim()
      .replace(/^["“]|["”]$/g, "");

    if (cleaned.length < 6 || cleaned.length > 100) return;

    if (
      !candidates.some((item) => item.toLowerCase() === cleaned.toLowerCase())
    ) {
      candidates.push(cleaned);
    }
  };

  for (const block of blocks) {
    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    for (const line of lines) {
      if (/^(-|•|\d+\.)\s+/.test(line)) {
        addCandidate(line);
      }

      if (/\?$/.test(stripMarkdown(line))) {
        addCandidate(line);
      }

      if (
        /^(Reply with|You can say|Next step|Recommended next step):/i.test(line)
      ) {
        const value = line.split(":").slice(1).join(":");
        value
          .split(/,|\|/)
          .map((item) => item.trim())
          .filter(Boolean)
          .forEach(addCandidate);
      }
    }
  }

  extractQuotedPhrases(content).forEach(addCandidate);

  return candidates.slice(0, 4);
}

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
  const [cta, setCta] = useState<CtaItem | null>(null);
  const [streamStatus, setStreamStatus] = useState<StreamStatus>(null);

  const messagesRef = useRef(messages);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  function stopGenerating() {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsLoading(false);
    setStreamStatus(null);
  }

  function resetState() {
    stopGenerating();
    setMessages(INITIAL_MESSAGES);
    setSuggestions(DEFAULT_PROMPTS);
    setChatInput("");
    setIsLoading(false);
    setMode(null);
    setSources([]);
    setCta(null);
    setStreamStatus(null);
  }

  function closeChat() {
    stopGenerating();
    setIsOpen(false);
  }

  function startNewChat() {
    resetState();
    setIsOpen(true);
  }

  async function sendMessageInternal(
    rawText?: string,
    baseMessages?: ChatMessage[],
  ) {
    const messageText = (rawText ?? chatInput).trim();

    if (!messageText || isLoading) return;

    const activeMessages = baseMessages ?? messagesRef.current;
    const requestMessages = [
      ...activeMessages,
      {
        id: Date.now(),
        role: "user" as const,
        content: messageText,
      },
    ];

    const assistantMessageId = Date.now() + 1;

    setMessages([
      ...requestMessages,
      {
        id: assistantMessageId,
        role: "assistant",
        content: "",
      },
    ]);

    setChatInput("");
    setIsLoading(true);
    setStreamStatus("retrieving");
    setCta(null);

    const requestController = new AbortController();
    abortRef.current = requestController;

    let streamedText = "";
    let buffer = "";

    const appendAssistantText = (delta: string) => {
      if (!delta) return;

      streamedText += delta;

      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantMessageId
            ? { ...message, content: message.content + delta }
            : message,
        ),
      );
    };

    const replaceAssistantText = (text: string) => {
      streamedText = text;

      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantMessageId
            ? { ...message, content: text }
            : message,
        ),
      );
    };

    const removeEmptyAssistantPlaceholder = () => {
      setMessages((prev) =>
        prev.filter(
          (message) =>
            !(
              message.id === assistantMessageId &&
              message.role === "assistant" &&
              !message.content.trim()
            ),
        ),
      );
    };

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
        body: JSON.stringify({
          messages: requestMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
        signal: requestController.signal,
      });

      if (!response.ok) {
        throw new Error("Failed to start Octalve Smart stream");
      }

      if (!response.body) {
        throw new Error("Missing response stream");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();

        buffer += decoder.decode(value ?? new Uint8Array(), { stream: !done });
        buffer = buffer.replace(/\r\n/g, "\n");

        let boundaryIndex = buffer.indexOf("\n\n");

        while (boundaryIndex !== -1) {
          const block = buffer.slice(0, boundaryIndex).trim();
          buffer = buffer.slice(boundaryIndex + 2);

          if (block) {
            const parsed = parseSseBlock(block);

            if (parsed) {
              switch (parsed.event) {
                case "meta": {
                  const meta = JSON.parse(parsed.data) as ChatStreamMeta;

                  setSources(
                    Array.isArray(meta.sources) ? meta.sources.slice(0, 8) : [],
                  );
                  setMode(typeof meta.mode === "string" ? meta.mode : null);
                  setCta(meta.cta ?? null);

                  if (Array.isArray(meta.prompts) && meta.prompts.length > 0) {
                    setSuggestions(meta.prompts.slice(0, 6));
                  }

                  break;
                }

                case "status": {
                  const status = JSON.parse(parsed.data) as ChatStreamStatus;
                  setStreamStatus(status.phase ?? null);
                  break;
                }

                case "delta": {
                  const delta = JSON.parse(parsed.data) as ChatStreamDelta;
                  appendAssistantText(delta.text ?? "");
                  break;
                }

                case "error": {
                  const errorPayload = JSON.parse(
                    parsed.data,
                  ) as ChatStreamError;
                  const message =
                    errorPayload.message ??
                    "Octalve Smart could not complete the response.";

                  if (!streamedText.trim()) {
                    replaceAssistantText(message);
                  }

                  setIsLoading(false);
                  setStreamStatus(null);
                  break;
                }

                case "done": {
                  setIsLoading(false);
                  setStreamStatus(null);
                  break;
                }

                default:
                  break;
              }
            }
          }

          boundaryIndex = buffer.indexOf("\n\n");
        }

        if (done) {
          break;
        }
      }

      const extractedPrompts = extractSuggestedPromptsFromAnswer(streamedText);
      if (extractedPrompts.length >= 2) {
        setSuggestions(extractedPrompts);
      }
    } catch (error) {
      if (requestController.signal.aborted) {
        if (!streamedText.trim()) {
          removeEmptyAssistantPlaceholder();
        }

        setIsLoading(false);
        setStreamStatus(null);
        return;
      }

      const message =
        error instanceof Error
          ? error.message
          : "Octalve Smart could not complete the response.";

      if (!streamedText.trim()) {
        replaceAssistantText(message);
      }

      setIsLoading(false);
      setStreamStatus(null);
    } finally {
      if (abortRef.current === requestController) {
        abortRef.current = null;
      }
    }
  }

  async function sendMessage(rawText?: string) {
    await sendMessageInternal(rawText);
  }

  function openChat(prompt?: string) {
    stopGenerating();
    setIsOpen(true);

    const cleanPrompt = prompt?.trim();
    if (!cleanPrompt) return;

    const baseMessages = [...INITIAL_MESSAGES];
    setMessages(baseMessages);
    setSuggestions(DEFAULT_PROMPTS);
    setChatInput("");
    setMode(null);
    setSources([]);
    setCta(null);
    setStreamStatus(null);

    window.setTimeout(() => {
      void sendMessageInternal(cleanPrompt, baseMessages);
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
