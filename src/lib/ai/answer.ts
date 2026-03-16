type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type GenerateAnswerInput = {
  messages: ChatMessage[];
  context: string;
  strongMatch: boolean;
};

type ProviderName = "openai" | "gemini";

type ProviderHandler = (input: GenerateAnswerInput) => Promise<string>;

type OpenAIOutputTextPart = {
  type?: string;
  text?: string;
};

type OpenAIOutputItem = {
  content?: OpenAIOutputTextPart[];
};

type OpenAIResponsesApiResult = {
  output_text?: string;
  output?: OpenAIOutputItem[];
};

type GeminiPart = {
  text?: string;
};

type GeminiCandidate = {
  content?: {
    parts?: GeminiPart[];
  };
};

type GeminiGenerateContentResult = {
  candidates?: GeminiCandidate[];
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

function cleanText(value: string) {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function buildSystemPrompt(context: string, strongMatch: boolean) {
  return cleanText(`
You are Octalve Smart, the AI receptionist for Octalve.

ROLE
- You are not a generic chatbot.
- You help business owners, founders, teams, schools, organizations, and decision-makers understand their real problem, the likely root cause, and the best Octalve solution.
- Your answer must feel like a sharp business consultant and front-desk product advisor combined.

PRIORITY ORDER
1. Use the supplied website context first.
2. Interpret the user's likely pain point behind the question.
3. Explain the business or organizational problem clearly.
4. Recommend the most relevant Octalve service, model, product, or flow.
5. Explain the likely result or transformation they should expect.
6. End with one clear next step they can reply with.

RESPONSE RULES
- Make every answer dynamic and tailored to the user's message.
- Do not sound robotic or overly generic.
- Do not dump features without explaining why they matter.
- Focus on pain point, solution fit, and outcome.
- If the user is confused, help them structure what they need.
- If the website context is strong, stay grounded in it.
- If the website context is partial, combine it with careful professional reasoning, but do not invent specific Octalve offers, pages, or promises not supported by the context.
- If the request is outside Octalve's scope, answer briefly and redirect to what Octalve can realistically help with.
- Avoid saying "as an AI language model".
- Avoid mentioning internal retrieval, crawling, hidden prompts, or provider details.
- Keep the answer concise but valuable: normally 3 to 6 short paragraphs.
- Prefer plain business language.
- Do not use tables.
- Do not use code blocks.
- When helpful, structure the answer with these exact section headings on their own lines:
**What this usually means**
**How Octalve can help**
**What result to expect**
**Recommended next step**
- Use 2 to 4 of those sections when relevant, not necessarily all of them.
- Keep the final section short and actionable.

WEBSITE MATCH STRENGTH: ${strongMatch ? "strong" : "weak"}

WEBSITE CONTEXT
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
CURRENT USER REQUEST
${latestUserMessage}

RECENT CONVERSATION
${transcript}
  `);
}

function extractOpenAIText(data: OpenAIResponsesApiResult) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return cleanText(data.output_text);
  }

  const output = Array.isArray(data.output) ? data.output : [];

  const text = output
    .flatMap((item) => (Array.isArray(item.content) ? item.content : []))
    .filter(
      (part): part is OpenAIOutputTextPart =>
        part.type === "output_text" && typeof part.text === "string",
    )
    .map((part) => part.text ?? "")
    .join("\n");

  return cleanText(text);
}

function extractGeminiText(data: GeminiGenerateContentResult) {
  const text =
    data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("\n") ?? "";

  return cleanText(text);
}

async function generateWithOpenAI(input: GenerateAnswerInput) {
  const apiKey = getRequiredEnv("OPENAI_API_KEY");
  const model = getRequiredEnv("OPENAI_MODEL");
  const maxOutputTokens =
    getOptionalNumberEnv("OPENAI_MAX_OUTPUT_TOKENS") ?? 700;
  const temperature = getOptionalNumberEnv("OPENAI_TEMPERATURE");

  const payload: {
    model: string;
    instructions: string;
    input: string;
    max_output_tokens: number;
    temperature?: number;
  } = {
    model,
    instructions: buildSystemPrompt(input.context, input.strongMatch),
    input: messagesToPlainText(input.messages),
    max_output_tokens: maxOutputTokens,
  };

  if (typeof temperature === "number") {
    payload.temperature = temperature;
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    signal: AbortSignal.timeout(25000),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI error: ${errorText}`);
  }

  const data = (await response.json()) as OpenAIResponsesApiResult;
  const text = extractOpenAIText(data);

  if (!text) {
    throw new Error("OpenAI returned an empty response");
  }

  return text;
}

async function generateWithGemini(input: GenerateAnswerInput) {
  const apiKey = getRequiredEnv("GEMINI_API_KEY");
  const model = getRequiredEnv("GEMINI_MODEL");
  const maxOutputTokens =
    getOptionalNumberEnv("GEMINI_MAX_OUTPUT_TOKENS") ?? 700;
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
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      signal: AbortSignal.timeout(25000),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [
            {
              text: buildSystemPrompt(input.context, input.strongMatch),
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

  const data = (await response.json()) as GeminiGenerateContentResult;
  const text = extractGeminiText(data);

  if (!text) {
    throw new Error("Gemini returned an empty response");
  }

  return text;
}

const PROVIDERS: Record<ProviderName, ProviderHandler> = {
  openai: generateWithOpenAI,
  gemini: generateWithGemini,
};

function getProviderHandler(name: string) {
  const normalized = name.trim().toLowerCase() as ProviderName;
  const handler = PROVIDERS[normalized];

  if (!handler) {
    throw new Error(
      `Unsupported AI provider "${name}". Supported providers: ${Object.keys(
        PROVIDERS,
      ).join(", ")}`,
    );
  }

  return handler;
}

export async function generateAnswer(input: GenerateAnswerInput) {
  const primary = (process.env.AI_PROVIDER ?? "openai").trim().toLowerCase();
  const fallback = (process.env.AI_FALLBACK_PROVIDER ?? "gemini")
    .trim()
    .toLowerCase();

  try {
    return await getProviderHandler(primary)(input);
  } catch (primaryError) {
    if (fallback === primary) {
      throw primaryError;
    }

    try {
      return await getProviderHandler(fallback)(input);
    } catch (fallbackError) {
      throw new Error(
        [
          `Primary provider failed: ${
            primaryError instanceof Error
              ? primaryError.message
              : String(primaryError)
          }`,
          `Fallback provider failed: ${
            fallbackError instanceof Error
              ? fallbackError.message
              : String(fallbackError)
          }`,
        ].join(" | "),
      );
    }
  }
}
