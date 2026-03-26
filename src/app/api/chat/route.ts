import { NextRequest, NextResponse } from "next/server";
import { generateAnswerStream } from "@/lib/ai/answer";
import { retrieveWebsiteContext } from "@/lib/ai/retrieve";
import { selectPrimaryCta } from "@/lib/ai/octalve-links";
import {
  detectBusinessContext,
  detectOctalveModels,
  getPromptSuggestionsFromMatches,
} from "@/lib/ai/octalve-models";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

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
    const businessContext = detectBusinessContext(latestUserMessage.content);
    const recommendedModels = detectOctalveModels(
      latestUserMessage.content,
      businessContext,
      3,
    );
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
            prompts: getPromptSuggestionsFromMatches(
              latestUserMessage.content,
              businessContext,
              recommendedModels,
            ),
            cta: selectPrimaryCta({
              text: latestUserMessage.content,
              businessContext,
              recommendedModels,
              sources: retrieval.sources,
            }),
          });

          send("status", { phase: "generating" });

          let wroteAnyText = false;

          for await (const chunk of generateAnswerStream({
            messages,
            context: retrieval.context,
            strongMatch: retrieval.strongMatch,
            sources: retrieval.sources,
            recommendedModels,
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
