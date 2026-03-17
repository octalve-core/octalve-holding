import { NextRequest, NextResponse } from "next/server";
import { generateAnswerStream } from "@/lib/ai/answer";
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

function toSseFrame(event: string, payload: unknown) {
  return `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`;
}

function userFacingErrorMessage() {
  return "Octalve Smart could not complete the live AI response right now. Please try again in a moment.";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { messages?: unknown };
    const messages = normalizeMessages(body.messages);

    const latestUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === "user");

    if (!latestUserMessage?.content) {
      return NextResponse.json(
        { error: "A user message is required." },
        { status: 400 },
      );
    }

    const retrievalQuery = buildRetrievalQuery(messages);
    const encoder = new TextEncoder();

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        const send = (event: string, payload: unknown) => {
          controller.enqueue(encoder.encode(toSseFrame(event, payload)));
        };

        const close = () => {
          try {
            controller.close();
          } catch {
            // ignore close errors
          }
        };

        let retrieval = {
          context: "",
          sources: [] as Awaited<
            ReturnType<typeof retrieveWebsiteContext>
          >["sources"],
          strongMatch: false,
        };

        try {
          send("status", { phase: "retrieving" });

          try {
            retrieval = await retrieveWebsiteContext(retrievalQuery);
          } catch (retrievalError) {
            console.error("[api/chat] retrieval error:", retrievalError);
          }

          send("meta", {
            sources: retrieval.sources,
            mode: retrieval.strongMatch ? "website-first" : "fallback-guided",
            prompts: getSmartPrompts(latestUserMessage.content),
          });

          send("status", { phase: "generating" });

          let wroteAnyText = false;

          for await (const chunk of generateAnswerStream({
            messages,
            context: retrieval.context,
            strongMatch: retrieval.strongMatch,
          })) {
            if (!chunk) continue;

            wroteAnyText = true;
            send("delta", { text: chunk });
          }

          if (!wroteAnyText) {
            send("error", {
              message:
                "Octalve Smart finished without returning text. Please try again.",
            });
          }

          send("done", { ok: true });
          close();
        } catch (error) {
          console.error("[api/chat] POST stream error:", error);

          send("error", {
            message: userFacingErrorMessage(),
          });
          send("done", { ok: false });
          close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("[api/chat] POST setup error:", error);

    return NextResponse.json(
      {
        error: "Unable to start Octalve Smart.",
      },
      { status: 500 },
    );
  }
}
