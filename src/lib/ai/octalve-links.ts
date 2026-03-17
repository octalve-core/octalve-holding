import type { RetrievedSource } from "./retrieve";

export type OctalveLink = {
  label: string;
  url: string;
  description?: string;
  category:
    | "general"
    | "contact"
    | "about"
    | "careers"
    | "leadership"
    | "model"
    | "cloud"
    | "source";
};

export type OctalveCta = {
  label: string;
  url: string;
  description: string;
};

function uniqueByUrl<T extends { url: string }>(items: T[]) {
  const seen = new Set<string>();
  const output: T[] = [];

  for (const item of items) {
    if (!item.url || seen.has(item.url)) continue;
    seen.add(item.url);
    output.push(item);
  }

  return output;
}

function normalizeUrl(url: string) {
  try {
    return new URL(url).toString();
  } catch {
    return "";
  }
}

function sourceLooksLike(source: RetrievedSource, pattern: RegExp) {
  const value = `${source.site} ${source.title} ${source.path}`.toLowerCase();
  return pattern.test(value);
}

const STATIC_LINKS: OctalveLink[] = [
  {
    label: "Octalve Home",
    url: "https://octalve.com",
    description: "Explore Octalve’s core website and solution entry points.",
    category: "general",
  },
  {
    label: "Contact Octalve",
    url: "https://octalve.com/contact",
    description: "Reach Octalve for a project discussion or direct enquiry.",
    category: "contact",
  },
  {
    label: "Who We Are",
    url: "https://octalve.com/who-we-are",
    description: "Learn more about Octalve’s positioning and story.",
    category: "about",
  },
  {
    label: "Leadership",
    url: "https://octalve.com/leadership",
    description: "See the leadership page.",
    category: "leadership",
  },
  {
    label: "Career",
    url: "https://octalve.com/career",
    description: "Visit Octalve’s career page.",
    category: "careers",
  },
  {
    label: "Octalve Vault",
    url: "https://octalve.com/models/vault",
    description: "Open the Vault model page.",
    category: "model",
  },
  {
    label: "Octalve Cloud",
    url: "https://octalve.cloud",
    description: "Explore Octalve Cloud and infrastructure-related services.",
    category: "cloud",
  },
];

export function buildApprovedLinks(sources?: RetrievedSource[]) {
  const sourceLinks: OctalveLink[] =
    sources?.map((source) => ({
      label: `${source.site} — ${source.title}`,
      url: normalizeUrl(source.url),
      description: `Relevant page: ${source.title}`,
      category: "source",
    })) ?? [];

  return uniqueByUrl(
    [...STATIC_LINKS, ...sourceLinks].filter((item) => !!item.url),
  ).slice(0, 16);
}

function firstMatchingSource(
  sources: RetrievedSource[] | undefined,
  pattern: RegExp,
) {
  return sources?.find((source) => sourceLooksLike(source, pattern)) ?? null;
}

function sourceToCta(
  source: RetrievedSource,
  label: string,
  description: string,
): OctalveCta {
  return {
    label,
    url: source.url,
    description,
  };
}

export function selectPrimaryCta(params: {
  intent: string;
  sources?: RetrievedSource[];
}) {
  const { intent, sources } = params;

  if (intent === "cloud") {
    const source =
      firstMatchingSource(
        sources,
        /\b(cloud|hosting|domain|ssl|email|server|migration|security)\b/,
      ) ?? firstMatchingSource(sources, /.*/);

    if (source) {
      return sourceToCta(
        source,
        "Open recommended infrastructure page",
        "Review the most relevant Octalve Cloud page and continue with the right infrastructure next step.",
      );
    }

    return {
      label: "Explore Octalve Cloud",
      url: "https://octalve.cloud",
      description:
        "Open Octalve Cloud to continue with hosting, domains, email, SSL, or migration.",
    };
  }

  if (intent === "chatbot") {
    const source =
      firstMatchingSource(
        sources,
        /\b(chatbot|assistant|automation|ai|workflow)\b/,
      ) ?? firstMatchingSource(sources, /.*/);

    if (source) {
      return sourceToCta(
        source,
        "Open recommended automation page",
        "Review the most relevant Octalve page for AI, chatbot, or automation work.",
      );
    }

    return {
      label: "Start a project discussion",
      url: "https://octalve.com/contact",
      description:
        "Use the contact page to discuss your chatbot, automation, or AI receptionist project.",
    };
  }

  if (intent === "website") {
    const source =
      firstMatchingSource(
        sources,
        /\b(website|web|landing|design|frontend|redesign)\b/,
      ) ?? firstMatchingSource(sources, /.*/);

    if (source) {
      return sourceToCta(
        source,
        "Open recommended website page",
        "Review the most relevant Octalve page for your website or landing-page direction.",
      );
    }

    return {
      label: "Discuss your website project",
      url: "https://octalve.com/contact",
      description:
        "Continue to a direct project conversation about your website, landing page, or redesign needs.",
    };
  }

  if (intent === "branding") {
    const source =
      firstMatchingSource(
        sources,
        /\b(brand|branding|identity|logo|visual)\b/,
      ) ?? firstMatchingSource(sources, /.*/);

    if (source) {
      return sourceToCta(
        source,
        "Open recommended brand page",
        "Review the most relevant Octalve page for your branding direction.",
      );
    }

    return {
      label: "Discuss your brand direction",
      url: "https://octalve.com/contact",
      description:
        "Open a direct discussion about your brand identity, positioning, or design direction.",
    };
  }

  if (intent === "suite") {
    const source =
      firstMatchingSource(sources, /\b(vault|suite|model|system|workflow)\b/) ??
      firstMatchingSource(sources, /.*/);

    if (source) {
      return sourceToCta(
        source,
        "Open recommended model page",
        "Review the most relevant Octalve model or systems page for your use case.",
      );
    }

    return {
      label: "View the Vault model",
      url: "https://octalve.com/models/vault",
      description:
        "Open the Vault model page to continue exploring Octalve’s model structure.",
    };
  }

  if (intent === "strategy") {
    const source = firstMatchingSource(sources, /.*/);

    if (source) {
      return sourceToCta(
        source,
        "Open recommended solution page",
        "Review the most relevant Octalve page connected to the solution discussed above.",
      );
    }

    return {
      label: "Start a strategic conversation",
      url: "https://octalve.com/contact",
      description:
        "Continue to a direct conversation about strategy, offer clarity, or business direction.",
    };
  }

  const genericSource = firstMatchingSource(sources, /.*/);
  if (genericSource) {
    return sourceToCta(
      genericSource,
      "Open recommended page",
      "Continue with the most relevant Octalve page connected to this answer.",
    );
  }

  return {
    label: "Explore Octalve",
    url: "https://octalve.com",
    description:
      "Open Octalve’s main website to continue from the most relevant starting point.",
  };
}
