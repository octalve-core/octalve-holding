import Link from "next/link";
import { cloudConsoleLinks } from "../../cloud-console-links";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-[#2563EB]">
            Octalve Cloud
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
            Grow your ideas and business online — faster, smarter, for less.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Launch and scale with dependable hosting, domain registration,
            branded email, SSL security, servers, WordPress hosting, and
            migration support built for modern businesses.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={cloudConsoleLinks.signUp}
              className="inline-flex rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Get started
            </Link>

            <Link
              href={cloudConsoleLinks.domainSearch}
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
            >
              Search domain
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
