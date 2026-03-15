import Link from "next/link";
import type { ModelConfig } from "@/types/model";

type ModelCTAProps = {
  model: ModelConfig;
};

export default function ModelCTA({ model }: ModelCTAProps) {
  const primaryHref =
    model.cta?.primaryHref ?? model.primaryCta?.href ?? "/contact";
  const primaryLabel =
    model.cta?.primaryLabel ?? model.primaryCta?.label ?? "Get Started";

  const secondaryHref =
    model.cta?.secondaryHref ?? model.secondaryCta?.href ?? "/contact";
  const secondaryLabel =
    model.cta?.secondaryLabel ?? model.secondaryCta?.label ?? "Talk to Us";

  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-slate-950 px-6 py-10 text-white sm:px-8 md:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-400">
            Ready to move forward?
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            Let’s build the right next step for your business.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Explore how this model fits into your growth, operations, and
            digital direction.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
          >
            {primaryLabel}
          </Link>

          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
