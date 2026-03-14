type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type GenerateAnswerInput = {
  messages: ChatMessage[];
  context: string;
  strongMatch: boolean;
};

function buildSystemPrompt(context: string, strongMatch: boolean) {
  return `
You are Octalve Smart, the website assistant for Octalve Holding.

Your priority:
1. Use the supplied website context first.
2. Answer in a way that is tailored to Octalve services and solutions.
3. If the user asks about branding, strategy, websites, systems, AI support, SaaS, or Octalve models, keep the answer business-focused and solution-oriented.
4. If the website context fully answers the question, stay grounded in it and do not invent details.
5. If the website context is partial, use it first, then supplement carefully with general professional guidance.
6. If the user asks something outside Octalve services, answer briefly and redirect toward how Octalve can help.
7. Keep responses clear, useful, and natural.
8. End with one short next-step suggestion.
9. Never claim you accessed pages or features that are not present in the provided context.

Website match strength: ${strongMatch ? "strong" : "weak"}
Website context:
${context || "No strong website context found."}
`.trim();
}

function messagesToPlainText(messages: ChatMessage[]) {
  return messages
    .slice(-8)
    .map((message) => `${message.role.toUpperCase()}: ${message.content}`)
    .join("\n");
}

async function generateWithOpenAI(input: GenerateAnswerInput) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL;

  if (!apiKey || !model) {
    throw new Error("Missing OPENAI_API_KEY or OPENAI_MODEL");
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content: buildSystemPrompt(input.context, input.strongMatch),
        },
        {
          role: "user",
          content: messagesToPlainText(input.messages),
        },
      ],
      temperature: 0.3,
      max_output_tokens: 500,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI error: ${errorText}`);
  }

  const data = await response.json();
  return data.output_text as string;
}

async function generateWithGemini(input: GenerateAnswerInput) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL;

  if (!apiKey || !model) {
    throw new Error("Missing GEMINI_API_KEY or GEMINI_MODEL");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
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
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 500,
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini error: ${errorText}`);
  }

  const data = await response.json();
  return (
    data?.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text ?? "")
      .join("") ?? ""
  );
}

export async function generateAnswer(input: GenerateAnswerInput) {
  const primary = process.env.AI_PROVIDER ?? "openai";
  const fallback = process.env.AI_FALLBACK_PROVIDER ?? "gemini";

  try {
    if (primary === "gemini") return await generateWithGemini(input);
    return await generateWithOpenAI(input);
  } catch (error) {
    if (fallback === primary) throw error;

    if (fallback === "gemini") return await generateWithGemini(input);
    return await generateWithOpenAI(input);
  }
}
