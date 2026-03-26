import type { RetrievedSource } from "./retrieve";
import {
  detectOctalveModels,
  OCTALVE_MODELS,
  type BusinessContext,
  type OctalveModelMatch,
} from "./octalve-models";

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

const STATIC_LINKS: OctalveLink[] = [
  {
    label: "Octalve Home",
    url: "https://octalve.com",
    description: "Explore Octalve’s ecosystem and model entry points.",
    category: "general",
  },
  {
    label: "Contact Octalve",
    url: "https://octalve.com/contact",
    description: "Reach Octalve for a direct project or business discussion.",
    category: "contact",
  },
  {
    label: "Who We Are",
    url: "https://octalve.com/who-we-are",
    description: "Learn about Octalve’s positioning and story.",
    category: "about",
  },
  {
    label: "Leadership",
    url: "https://octalve.com/leadership",
    description: "Visit the Octalve leadership page.",
    category: "leadership",
  },
  {
    label: "Career",
    url: "https://octalve.com/career",
    description: "Visit the Octalve career page.",
    category: "careers",
  },
];

function getModelLinks() {
  return Object.values(OCTALVE_MODELS).flatMap((model) => {
    const base: OctalveLink[] = [
      {
        label: model.name,
        url: model.url,
        description: model.summary,
        category: model.key === "cloud" ? "cloud" : "model",
      },
    ];

    const subPages =
      model.subPages?.map<OctalveLink>((subPage) => ({
        label: `${model.name} — ${subPage.label}`,
        url: subPage.url,
        description: `${subPage.label} page`,
        category: model.key === "cloud" ? "cloud" : "model",
      })) ?? [];

    return [...base, ...subPages];
  });
}

export function buildApprovedLinks(sources?: RetrievedSource[]) {
  const sourceLinks: OctalveLink[] =
    sources?.map((source) => ({
      label: `${source.site} — ${source.title}`,
      url: normalizeUrl(source.url),
      description: `Relevant page: ${source.title}`,
      category: "source",
    })) ?? [];

  return uniqueByUrl(
    [...STATIC_LINKS, ...getModelLinks(), ...sourceLinks].filter(
      (item) => !!item.url,
    ),
  ).slice(0, 40);
}

function findSourceByUrl(sources: RetrievedSource[] | undefined, url: string) {
  return sources?.find((source) => source.url === url) ?? null;
}

function buildCtaFromMatch(
  match: OctalveModelMatch,
  sources?: RetrievedSource[],
): OctalveCta {
  const model = OCTALVE_MODELS[match.key];
  const preferredUrl = match.selectedSubPageUrl || match.url;
  const matchedSource = findSourceByUrl(sources, preferredUrl);

  return {
    label: model.ctaLabel,
    url: matchedSource?.url || preferredUrl,
    description: model.ctaDescription,
  };
}

export function selectPrimaryCta(params: {
  text: string;
  businessContext: BusinessContext;
  recommendedModels?: OctalveModelMatch[];
  sources?: RetrievedSource[];
}) {
  const { text, businessContext, recommendedModels, sources } = params;

  const matches =
    recommendedModels && recommendedModels.length > 0
      ? recommendedModels
      : detectOctalveModels(text, businessContext, 3);

  const primary = matches[0];
  if (primary) {
    return buildCtaFromMatch(primary, sources);
  }

  return {
    label: "Explore Octalve",
    url: "https://octalve.com",
    description:
      "Open Octalve’s main website to continue from the most relevant starting point.",
  };
}
