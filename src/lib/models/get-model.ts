import { MODEL_CONFIGS } from "@/data/models";
import { ModelConfig, ModelSlug } from "@/types/model";

export function isModelSlug(value: string): value is ModelSlug {
  return value in MODEL_CONFIGS;
}

export function getModelConfig(slug: string): ModelConfig | null {
  if (!isModelSlug(slug)) return null;
  return MODEL_CONFIGS[slug];
}
