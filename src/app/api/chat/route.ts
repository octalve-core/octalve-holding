import { NextRequest, NextResponse } from "next/server";
import { generateAnswer } from "@/lib/ai/answer";
import { retrieveWebsiteContext } from "@/lib/ai/retrieve";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const DEFAULT_PROMPTS = [
  "I need a business website for my company",
  "Which Octalve model fits my business?",
  "Tell me about Octalve Suite",
  "Can Octalve build an AI chatbot for my website?",
  "I need branding and website design",
];

const WEBSITE_PROMPTS = [
  "I need a business website for my company",
  "What pages should my website have?",
  "Can Octalve redesign my current website?",
  "I want a landing page that converts",
  "What do I need before starting a website project?",
];

const BRANDING_PROMPTS = [
  "I need branding and website design",
  "Can Octalve help with brand identity?",
  "I need logo, colors, and brand direction",
  "My brand looks unprofessional, what should I fix?",
  "What branding package fits a startup?",
];

const CHATBOT_PROMPTS = [
  "Can Octalve build an AI chatbot for my website?",
  "I want an AI receptionist for my business",
  "Can the chatbot qualify leads automatically?",
  "How can AI answer customer questions on my website?",
  "Can Octalve connect chatbot to WhatsApp or forms?",
];

const CLOUD_PROMPTS = [
  "Tell me about Octalve Cloud",
  "I need hosting for my website",
  "Can Octalve help me register a domain?",
  "I want business email and SSL setup",
  "Can Octalve migrate my current hosting?",
];

const SUITE_PROMPTS = [
  "Tell me about Octalve Suite",
  "Which Octalve model fits my business?",
  "What is the difference between Octalve models?",
  "I need systems to run my business better",
  "Can Octalve help me structure my operations?",
];

const STRATEGY_PROMPTS = [
  "Which Octalve model fits my business?",
  "I need help structuring my business offer",
  "How do I know what service I need first?",
  "Can Octalve help me create a growth plan?",
  "I need strategy before branding and website design",
];

function jsonResponse(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}

function normalizeMessages(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return [];

  return input
    .filter(
      (item): item is ChatMessage =>
        !!item &&
        typeof item === "object" &&
        (item as ChatMessage).role !== undefined &&
        (item as ChatMessage).content !== undefined,
    )
    .filter(
      (item) =>
        (item.role === "user" || item.role === "assistant") &&
        typeof item.content === "string",
    )
    .map((item) => ({
      role: item.role,
      content: item.content.trim().replace(/\s+\n/g, "\n").slice(0, 3000),
    }))
    .filter((item) => item.content.length > 0)
    .slice(-12);
}

function buildRetrievalQuery(messages: ChatMessage[]) {
  const recentUserMessages = messages
    .filter((message) => message.role === "user")
    .slice(-3)
    .map((message) => message.content);

  return recentUserMessages.join(" \n ");
}

function detectIntent(text: string) {
  const value = text.toLowerCase();

  if (
    /\b(chatbot|ai receptionist|assistant|support bot|live chat|automation)\b/.test(
      value,
    )
  ) {
    return "chatbot";
  }

  if (
    /\b(cloud|hosting|server|domain|ssl|email|migration|infrastructure)\b/.test(
      value,
    )
  ) {
    return "cloud";
  }

  if (
    /\b(website|web design|landing page|site|ui|frontend|redesign)\b/.test(
      value,
    )
  ) {
    return "website";
  }

  if (
    /\b(brand|branding|logo|identity|visual identity|rebrand)\b/.test(value)
  ) {
    return "branding";
  }

  if (
    /\b(suite|model|models|system|workflow|operations|crm|process)\b/.test(
      value,
    )
  ) {
    return "suite";
  }

  if (
    /\b(strategy|positioning|offer|growth|sales|business plan|structure)\b/.test(
      value,
    )
  ) {
    return "strategy";
  }

  return "default";
}

function getSmartPrompts(text: string) {
  switch (detectIntent(text)) {
    case "chatbot":
      return CHATBOT_PROMPTS;
    case "cloud":
      return CLOUD_PROMPTS;
    case "website":
      return WEBSITE_PROMPTS;
    case "branding":
      return BRANDING_PROMPTS;
    case "suite":
      return SUITE_PROMPTS;
    case "strategy":
      return STRATEGY_PROMPTS;
    default:
      return DEFAULT_PROMPTS;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { messages?: unknown };
    const messages = normalizeMessages(body.messages);

    const latestUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === "user");

    if (!latestUserMessage?.content) {
      return jsonResponse({ error: "A user message is required." }, 400);
    }

    const retrievalQuery = buildRetrievalQuery(messages);

    const retrieval = await retrieveWebsiteContext(retrievalQuery);
    const answer = await generateAnswer({
      messages,
      context: retrieval.context,
      strongMatch: retrieval.strongMatch,
    });

    return jsonResponse({
      answer:
        answer?.trim() ||
        "I can help you identify the right Octalve service, model, or solution for your business needs.",
      sources: retrieval.sources,
      mode: retrieval.strongMatch ? "website-first" : "fallback-guided",
      prompts: getSmartPrompts(latestUserMessage.content),
    });
  } catch (error) {
    console.error("[api/chat] POST error:", error);

    return jsonResponse({
      answer:
        "I’m having trouble reaching Octalve Smart right now. I can still help you with branding, websites, systems, cloud infrastructure, AI chatbots, and business strategy.",
      sources: [],
      mode: "fallback-guided",
      prompts: DEFAULT_PROMPTS,
    });
  }
}
