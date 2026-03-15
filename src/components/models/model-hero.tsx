import Link from "next/link";
import type { ModelConfig } from "@/types/model";
import {
  getModelDescription,
  getModelPrimaryCta,
  getModelSecondaryCta,
  getModelTitle,
} from "@/lib/models/normalize-model";

type ModelHeroProps = {
  model: ModelConfig;
};

export default function ModelHero({ model }: ModelHeroProps) {
  const title = getModelTitle(model);
  const description = getModelDescription(model);
  const primaryCta = getModelPrimaryCta(model);
  const secondaryCta = getModelSecondaryCta(model);

  const primaryIsExternal = primaryCta.href.startsWith("http");
  const secondaryIsExternal = secondaryCta?.href.startsWith("http") ?? false;

  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        {model.eyebrow && (
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-600">
            {model.eyebrow}
          </p>
        )}

        <h1 className="mt-4 max-w-[14ch] text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            {...(primaryIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {primaryCta.label}
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              {...(secondaryIsExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
