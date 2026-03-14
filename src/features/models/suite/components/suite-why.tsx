import Image from "next/image";
import Link from "next/link";
import { suiteAssets } from "../suite-data";

function ArrowRight() {
  return <span aria-hidden="true">›</span>;
}

export default function SuiteWhy() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-14 md:py-16">
        <div className="text-center">
          <div className="text-sm font-medium tracking-wide text-black/60">
            Resources
          </div>
          <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] md:text-5xl text-black">
            Why Octalve Suite?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-black/60 md:text-lg">
            We don’t just set up your business, we set you up for success.
            <br className="hidden md:block" />
            See how Octalve Suite stacks up against the competition.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-[#0064E0] shadow-sm">
            <div className="relative h-[420px] overflow-hidden md:h-[520px]">
              <Image
                src={suiteAssets.suiteGrowthImage}
                alt="Do it with Octalve Suite"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-yellow-300/35 mix-blend-multiply" />
              <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0064E0] via-[#0064E0]/90 to-transparent" />
            </div>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-white/90 md:text-3xl">
                Do It With Octalve Suite
              </h3>
              <p className="mt-2 text-base text-white/70 md:text-lg">
                Build your dream. We’ll handle the rest.
              </p>

              <div className="mt-6">
                <Link
                  href="/start-project"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition group-hover:opacity-90"
                >
                  Start Today
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-[#000A16] shadow-sm">
            <div className="relative h-[420px] overflow-hidden md:h-[520px]">
              <Image
                src={suiteAssets.suitePartnerImage}
                alt="Partner for growth"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-[#000A16]/55" />
              <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#000A16] via-[#000A16]/60 to-transparent" />
            </div>

            <div className="p-8 text-white md:p-10">
              <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                Partner for growth
              </h3>
              <p className="mt-2 text-base text-white/80 md:text-lg">
                Going solo? See how we compare.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-black px-6 py-3 text-sm font-medium text-black transition group-hover:bg-white/40"
                >
                  Contact Us
                  <span aria-hidden="true">›</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
