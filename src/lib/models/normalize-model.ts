// import type { ModelConfig } from "@/types/model";

// export function getModelTitle(model: ModelConfig) {
//   return model.title ?? model.heroTitle ?? model.name;
// }

// export function getModelDescription(model: ModelConfig) {
//   return model.description ?? model.heroDescription ?? "";
// }

// export function getModelSeoTitle(model: ModelConfig) {
//   return model.seoTitle ?? getModelTitle(model);
// }

// export function getModelSeoDescription(model: ModelConfig) {
//   return model.seoDescription ?? getModelDescription(model);
// }

// export function getModelPrimaryCta(model: ModelConfig) {
//   return {
//     label: model.cta?.primaryLabel ?? model.primaryCta?.label ?? "Get Started",
//     href: model.cta?.primaryHref ?? model.primaryCta?.href ?? "/contact",
//   };
// }

// export function getModelSecondaryCta(model: ModelConfig) {
//   const href = model.cta?.secondaryHref ?? model.secondaryCta?.href;
//   const label = model.cta?.secondaryLabel ?? model.secondaryCta?.label;

//   if (!href || !label) return null;

//   return { label, href };
// }

import type {
  LegacyModelConfig,
  LegacyModelSection,
  LegacyModelSectionItem,
  ModelConfig,
  ModelCTA,
  ModelSection,
  ModelSectionItem,
  ModelSlug,
} from "@/types/model";

function normalizeSectionItem(item: LegacyModelSectionItem): ModelSectionItem {
  if (typeof item === "string") {
    return { title: item };
  }

  return {
    title: item.title ?? item.label ?? "Item",
    description: item.description,
    label: item.label,
    href: item.href,
  };
}

function normalizeSection(section: LegacyModelSection): ModelSection {
  return {
    ...section,
    title: section.title ?? section.eyebrow ?? "Section",
    description: section.description,
    content: section.content,
    items: section.items?.map(normalizeSectionItem) ?? [],
    primaryCta: section.primaryCta,
    secondaryCta: section.secondaryCta,
  };
}

function getPrimaryCta(raw: LegacyModelConfig): ModelCTA {
  return {
    label: raw.cta?.primaryLabel ?? raw.primaryCta?.label ?? "Get Started",
    href: raw.cta?.primaryHref ?? raw.primaryCta?.href ?? "/contact",
  };
}

function getSecondaryCta(raw: LegacyModelConfig): ModelCTA | undefined {
  const label = raw.cta?.secondaryLabel ?? raw.secondaryCta?.label;
  const href = raw.cta?.secondaryHref ?? raw.secondaryCta?.href;

  if (!label || !href) return undefined;

  return { label, href };
}

export function normalizeModelConfig(raw: LegacyModelConfig): ModelConfig {
  const title = raw.title ?? raw.heroTitle ?? raw.name;
  const description = raw.description ?? raw.heroDescription ?? "";
  const seoTitle = raw.seoTitle ?? title;
  const seoDescription = raw.seoDescription ?? description;

  return {
    ...raw,
    title,
    description,
    seoTitle,
    seoDescription,
    primaryCta: getPrimaryCta(raw),
    secondaryCta: getSecondaryCta(raw),
    sections: raw.sections?.map(normalizeSection) ?? [],
  };
}

export function normalizeModelConfigRecord(
  record: Record<ModelSlug, LegacyModelConfig>,
): Record<ModelSlug, ModelConfig> {
  return Object.fromEntries(
    Object.entries(record).map(([slug, config]) => [
      slug,
      normalizeModelConfig(config),
    ]),
  ) as Record<ModelSlug, ModelConfig>;
}
