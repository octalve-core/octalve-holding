import type { ModelConfig } from "@/types/model";

export function getModelTitle(model: ModelConfig) {
  return model.title ?? model.heroTitle ?? model.name;
}

export function getModelDescription(model: ModelConfig) {
  return model.description ?? model.heroDescription ?? "";
}

export function getModelSeoTitle(model: ModelConfig) {
  return model.seoTitle ?? getModelTitle(model);
}

export function getModelSeoDescription(model: ModelConfig) {
  return model.seoDescription ?? getModelDescription(model);
}

export function getModelPrimaryCta(model: ModelConfig) {
  return {
    label: model.cta?.primaryLabel ?? model.primaryCta?.label ?? "Get Started",
    href: model.cta?.primaryHref ?? model.primaryCta?.href ?? "/contact",
  };
}

export function getModelSecondaryCta(model: ModelConfig) {
  const href = model.cta?.secondaryHref ?? model.secondaryCta?.href;
  const label = model.cta?.secondaryLabel ?? model.secondaryCta?.label;

  if (!href || !label) return null;

  return { label, href };
}
