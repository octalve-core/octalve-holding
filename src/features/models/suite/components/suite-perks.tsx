import Image from "next/image";
import Link from "next/link";
import { perks, suiteAssets } from "../suite-data";

export default function SuitePerks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-sm font-medium text-black/60">
              <div className="relative h-5 w-[110px]">
                <Image
                  src={suiteAssets.suiteLogo}
                  alt="Octalve Suite Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Perks and Rewards</span>
            </div>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl text-black">
              To help you scale your
              <br className="hidden sm:block" />
              agency without the overhead.
            </h2>

            <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
              White-label production, referral commissions, and priority
              support.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Get In Touch
                <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>

          <div className="w-full max-w-[620px] lg:justify-self-end">
            <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex items-center gap-4 rounded-3xl bg-black/5 p-5 transition hover:bg-black/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-medium">
                    O
                  </div>
                  <div className="leading-tight">
                    <div className="font-medium text-black">{perk.title}</div>
                    <div className="text-sm text-black/30">{perk.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
