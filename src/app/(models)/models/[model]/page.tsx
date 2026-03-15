import { notFound } from "next/navigation";

import { MODEL_CONFIGS } from "@/data/models";
import { renderModelPage } from "@/lib/models/render-model-page";
import {
  getModelSeoDescription,
  getModelSeoTitle,
} from "@/lib/models/normalize-model";
import type { ModelSlug } from "@/types/model";

type ModelPageProps = {
  params: Promise<{
    model: string;
  }>;
};

export async function generateMetadata({ params }: ModelPageProps) {
  const { model } = await params;
  const config = MODEL_CONFIGS[model as ModelSlug];

  if (!config) {
    return {
      title: "Model Not Found",
      description: "The requested model could not be found.",
    };
  }

  return {
    title: getModelSeoTitle(config),
    description: getModelSeoDescription(config),
  };
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { model } = await params;
  const config = MODEL_CONFIGS[model as ModelSlug];

  if (!config) {
    notFound();
  }

  return renderModelPage(model as ModelSlug);
}
