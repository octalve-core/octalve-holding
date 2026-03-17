import type { RetrievedSource } from "./retrieve";
import { buildApprovedLinks } from "./octalve-links";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type GenerateAnswerInput = {
  messages: ChatMessage[];
  context: string;
  strongMatch: boolean;
  sources?: RetrievedSource[];
};

type ProviderName = "openai" | "gemini";

type OpenAIStreamEvent = {
  type?: string;
  delta?: string;
  text?: string;
  error?: {
    message?: string;
  };
  response?: {
    error?: {
      message?: string;
    };
    incomplete_details?: {
      reason?: string;
    };
  };
};

type GeminiPart = {
  text?: string;
};

type GeminiCandidate = {
  content?: {
    parts?: GeminiPart[];
  };
  finishReason?: string;
};

type GeminiStreamEvent = {
  candidates?: GeminiCandidate[];
  promptFeedback?: {
    blockReason?: string;
  };
};

type SseEvent = {
  event: string | null;
  data: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function getOptionalNumberEnv(name: string) {
  const raw = process.env[name]?.trim();
  if (!raw) return undefined;

  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function getOptionalBooleanEnv(name: string) {
  const raw = process.env[name]?.trim().toLowerCase();
  if (!raw) return undefined;
  return raw === "true";
}

function getProviderTimeoutMs() {
  return getOptionalNumberEnv("AI_PROVIDER_TIMEOUT_MS") ?? 9000;
}

function cleanText(value: string) {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function buildSystemPrompt(
  context: string,
  strongMatch: boolean,
  sources?: RetrievedSource[],
) {
  const approvedLinks = buildApprovedLinks(sources)
    .map((item) => `- ${item.label}: ${item.url}`)
    .join("\n");

  return cleanText(`
You are Octalve Smart, the AI receptionist for Octalve.

You should sound like a polished consultant and product advisor, not a rigid template.
The answer should feel natural, thoughtful, and helpful — similar to a strong ChatGPT-style advisory response.

Core behaviour:
- Understand the likely business pain point behind the user’s message.
- Explain the problem clearly in practical terms.
- Connect the issue to the right Octalve solution, model, page, or next step.
- Help the user understand the likely result or business improvement.
- Give a concrete next move without sounding repetitive or formulaic.

Writing style:
- Prefer natural prose over a fixed pattern.
- Vary the structure from answer to answer.
- Use bold only when it improves clarity.
- Use short paragraphs.
- Use bullets only when they genuinely help.
- Avoid robotic formulas and do not force the same headings every time.
- Stay professional, clear, and modern.

Grounding rules:
- Use the supplied website context first.
- If the context is strong, stay grounded in it.
- If the context is partial, combine it with careful business reasoning.
- Do not invent Octalve offers, pages, routes, or promises that are not supported by the context or approved links.

Linking rules:
- When relevant, embed 1 or 2 inline markdown links to approved Octalve pages.
- Example: [Octalve Cloud](https://octalve.cloud)
- Do not output raw URLs outside markdown links.
- Never invent URLs outside the approved links list.

Approved links:
${approvedLinks || "- Contact Octalve: https://octalve.com/contact"}

Goal:
- Make the user feel understood.
- Show the business consequence of the issue.
- Point them to the best Octalve route or page.
- Leave them with a clear and useful next action.

Website match strength: ${strongMatch ? "strong" : "weak"}

Website context:
${context || "No strong website context found."}
  `);
}

function messagesToPlainText(messages: ChatMessage[]) {
  const normalized = messages
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: cleanText(message.content).slice(0, 4000),
    }))
    .filter((message) => message.content.length > 0);

  const latestUserMessage =
    [...normalized].reverse().find((message) => message.role === "user")
      ?.content ?? "";

  const transcript = normalized
    .map((message) => `${message.role.toUpperCase()}: ${message.content}`)
    .join("\n\n");

  return cleanText(`
Current user request:
${latestUserMessage}

Recent conversation:
${transcript}
  `);
}

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

async function* readSseEvents(response: Response): AsyncGenerator<SseEvent> {
  if (!response.body) {
    throw new Error("Streaming response body is missing");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();

    buffer += decoder.decode(value ?? new Uint8Array(), { stream: !done });
    buffer = buffer.replace(/\r\n/g, "\n");

    let boundaryIndex = buffer.indexOf("\n\n");

    while (boundaryIndex !== -1) {
      const block = buffer.slice(0, boundaryIndex).trim();
      buffer = buffer.slice(boundaryIndex + 2);

      if (block) {
        const event = parseSseBlock(block);
        if (event) {
          yield event;
        }
      }

      boundaryIndex = buffer.indexOf("\n\n");
    }

    if (done) {
      const finalBlock = buffer.trim();
      if (finalBlock) {
        const event = parseSseBlock(finalBlock);
        if (event) {
          yield event;
        }
      }
      break;
    }
  }
}

function extractGeminiTextChunk(event: GeminiStreamEvent) {
  const text =
    event.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("") ?? "";

  return text;
}

async function* streamWithOpenAI(
  input: GenerateAnswerInput,
): AsyncGenerator<string> {
  const apiKey = getRequiredEnv("OPENAI_API_KEY");
  const model = getRequiredEnv("OPENAI_MODEL");
  const maxOutputTokens =
    getOptionalNumberEnv("OPENAI_MAX_OUTPUT_TOKENS") ?? 450;
  const temperature = getOptionalNumberEnv("OPENAI_TEMPERATURE");

  const payload: {
    model: string;
    instructions: string;
    input: string;
    max_output_tokens: number;
    stream: true;
    text: {
      format: {
        type: "text";
      };
    };
    temperature?: number;
  } = {
    model,
    instructions: buildSystemPrompt(
      input.context,
      input.strongMatch,
      input.sources,
    ),
    input: messagesToPlainText(input.messages),
    max_output_tokens: maxOutputTokens,
    stream: true,
    text: {
      format: {
        type: "text",
      },
    },
  };

  if (typeof temperature === "number") {
    payload.temperature = temperature;
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    signal: AbortSignal.timeout(getProviderTimeoutMs()),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "text/event-stream",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI error: ${errorText}`);
  }

  for await (const sseEvent of readSseEvents(response)) {
    if (sseEvent.data === "[DONE]") {
      break;
    }

    let parsed: OpenAIStreamEvent;
    try {
      parsed = JSON.parse(sseEvent.data) as OpenAIStreamEvent;
    } catch {
      continue;
    }

    const type = parsed.type ?? sseEvent.event ?? "";

    if (
      type === "response.output_text.delta" &&
      typeof parsed.delta === "string"
    ) {
      yield parsed.delta;
      continue;
    }

    if (type === "response.failed") {
      throw new Error(
        parsed.response?.error?.message ||
          "OpenAI failed to generate a response",
      );
    }

    if (type === "response.incomplete") {
      throw new Error(
        parsed.response?.incomplete_details?.reason ||
          "OpenAI returned an incomplete response",
      );
    }

    if (type === "error") {
      throw new Error(parsed.error?.message || "OpenAI streaming error");
    }
  }
}

async function* streamWithGemini(
  input: GenerateAnswerInput,
): AsyncGenerator<string> {
  const apiKey = getRequiredEnv("GEMINI_API_KEY");
  const model = getRequiredEnv("GEMINI_MODEL");
  const maxOutputTokens =
    getOptionalNumberEnv("GEMINI_MAX_OUTPUT_TOKENS") ?? 450;
  const temperature = getOptionalNumberEnv("GEMINI_TEMPERATURE");

  const generationConfig: {
    maxOutputTokens: number;
    temperature?: number;
  } = {
    maxOutputTokens,
  };

  if (typeof temperature === "number") {
    generationConfig.temperature = temperature;
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse`,
    {
      method: "POST",
      signal: AbortSignal.timeout(getProviderTimeoutMs()),
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [
            {
              text: buildSystemPrompt(
                input.context,
                input.strongMatch,
                input.sources,
              ),
            },
          ],
        },
        contents: [
          {
            role: "user",
            parts: [
              {
                text: messagesToPlainText(input.messages),
              },
            ],
          },
        ],
        generationConfig,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini error: ${errorText}`);
  }

  for await (const sseEvent of readSseEvents(response)) {
    if (sseEvent.data === "[DONE]") {
      break;
    }

    let parsed: GeminiStreamEvent;
    try {
      parsed = JSON.parse(sseEvent.data) as GeminiStreamEvent;
    } catch {
      continue;
    }

    if (parsed.promptFeedback?.blockReason) {
      throw new Error(
        `Gemini blocked the prompt: ${parsed.promptFeedback.blockReason}`,
      );
    }

    const textChunk = extractGeminiTextChunk(parsed);
    if (textChunk) {
      yield textChunk;
    }
  }
}

function getProviderHandler(name: string) {
  const normalized = name.trim().toLowerCase() as ProviderName;

  switch (normalized) {
    case "openai":
      return streamWithOpenAI;
    case "gemini":
      return streamWithGemini;
    default:
      throw new Error(`Unsupported AI provider "${name}"`);
  }
}

export async function* generateAnswerStream(
  input: GenerateAnswerInput,
): AsyncGenerator<string> {
  const primary = (process.env.AI_PROVIDER ?? "openai").trim().toLowerCase();
  const fallback = (process.env.AI_FALLBACK_PROVIDER ?? "gemini")
    .trim()
    .toLowerCase();
  const enableFallback = getOptionalBooleanEnv("AI_ENABLE_FALLBACK") ?? false;

  let yielded = false;

  try {
    for await (const chunk of getProviderHandler(primary)(input)) {
      yielded = true;
      yield chunk;
    }
    return;
  } catch (primaryError) {
    if (yielded || !enableFallback || fallback === primary) {
      throw primaryError;
    }

    for await (const chunk of getProviderHandler(fallback)(input)) {
      yield chunk;
    }
  }
}

export async function generateAnswer(input: GenerateAnswerInput) {
  let output = "";

  for await (const chunk of generateAnswerStream(input)) {
    output += chunk;
  }

  return cleanText(output);
}
