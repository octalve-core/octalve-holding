import { NextRequest, NextResponse } from "next/server";
import { generateAnswer } from "@/lib/ai/answer";
import { retrieveWebsiteContext } from "@/lib/ai/retrieve";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SMART_PROMPTS = [
  "I need a business website for my company",
  "Which Octalve model fits my business?",
  "Tell me about Octalve Suite",
  "Can Octalve build an AI chatbot for my website?",
  "I need branding and website design",
];

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = body.messages ?? [];
    const latestUserMessage = [...messages]
      .reverse()
      .find((m) => m.role === "user");

    if (!latestUserMessage?.content?.trim()) {
      return NextResponse.json(
        { error: "A user message is required." },
        { status: 400 },
      );
    }

    const retrieval = await retrieveWebsiteContext(latestUserMessage.content);
    const answer = await generateAnswer({
      messages,
      context: retrieval.context,
      strongMatch: retrieval.strongMatch,
    });

    return NextResponse.json({
      answer,
      sources: retrieval.sources,
      mode: retrieval.strongMatch ? "website-first" : "fallback-guided",
      prompts: SMART_PROMPTS,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        answer:
          "I’m having trouble reaching the knowledge layer right now. You can still ask about branding, websites, systems, business strategy, or Octalve services.",
        sources: [],
        mode: "fallback-guided",
        prompts: [
          "I need a business website for my company",
          "Tell me about Octalve Suite",
          "Can Octalve build an AI chatbot for my website?",
        ],
      },
      { status: 200 },
    );
  }
}
