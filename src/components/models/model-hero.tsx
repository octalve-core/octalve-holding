import Link from "next/link";
import { ModelConfig } from "@/types/model";

type ModelHeroProps = {
  model: ModelConfig;
};

export default function ModelHero({ model }: ModelHeroProps) {
  const primaryIsExternal = model.cta.primaryHref.startsWith("http");
  const secondaryIsExternal = model.cta.secondaryHref?.startsWith("http");

  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px] rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10 md:p-14">
        <p className="text-sm font-medium tracking-[0.16em] uppercase text-blue-600">
          {model.eyebrow}
        </p>

        <h1 className="mt-4 max-w-[14ch] text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
          {model.heroTitle}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          {model.heroDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={model.cta.primaryHref}
            {...(primaryIsExternal
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            {model.cta.primaryLabel}
          </Link>

          {model.cta.secondaryLabel && model.cta.secondaryHref ? (
            <Link
              href={model.cta.secondaryHref}
              {...(secondaryIsExternal
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              {model.cta.secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
