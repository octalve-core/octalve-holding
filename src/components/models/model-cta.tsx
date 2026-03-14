import Link from "next/link";
import { ModelConfig } from "@/types/model";

type ModelCTAProps = {
  model: ModelConfig;
};

export default function ModelCTA({ model }: ModelCTAProps) {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-slate-950 px-8 py-10 text-white sm:px-10 sm:py-12">
        <h2 className="max-w-[16ch] text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
          Ready to move forward with {model.name}?
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
          Let’s help you choose the right structure, service path, or delivery
          layer for your business goals.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={model.cta.primaryHref}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
          >
            {model.cta.primaryLabel}
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
          >
            Contact Octalve
          </Link>
        </div>
      </div>
    </section>
  );
}
