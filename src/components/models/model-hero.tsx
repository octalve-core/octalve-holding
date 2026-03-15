import Link from "next/link";
import type { ModelConfig } from "@/types/model";

type ModelHeroProps = {
  model: ModelConfig;
};

export default function ModelHero({ model }: ModelHeroProps) {
  const primaryIsExternal = model.primaryCta.href.startsWith("http");
  const secondaryIsExternal =
    model.secondaryCta?.href.startsWith("http") ?? false;

  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        {model.eyebrow && (
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-600">
            {model.eyebrow}
          </p>
        )}

        <h1 className="mt-4 max-w-[14ch] text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
          {model.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          {model.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={model.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            {...(primaryIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {model.primaryCta.label}
          </Link>

          {model.secondaryCta && (
            <Link
              href={model.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              {...(secondaryIsExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {model.secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
