import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MODEL_ORDER, MODEL_CONFIGS } from "@/data/models";
import { renderModelPage } from "@/lib/models/render-model-page";
import { getModelConfig } from "@/lib/models/get-model";

type PageProps = {
  params: Promise<{
    model: string;
  }>;
};

export async function generateStaticParams() {
  return MODEL_ORDER.map((model) => ({ model }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { model } = await params;
  const config = getModelConfig(model);

  if (!config) {
    return {
      title: "Model Not Found | Octalve",
    };
  }

  return {
    title: config.seoTitle ?? config.title,
    description: config.seoDescription ?? config.description,
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { model } = await params;

  if (!(model in MODEL_CONFIGS)) {
    notFound();
  }

  const page = renderModelPage(model);

  if (!page) {
    notFound();
  }

  return page;
}
