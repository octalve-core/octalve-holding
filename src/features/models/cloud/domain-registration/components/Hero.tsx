import Link from "next/link";
import { cloudConsoleLinks } from "../../cloud-console-links";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-[#2563EB]">
            Domain Registration
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
            Secure the right domain for your brand, business, or next idea.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Find available domain names, protect your brand identity, and move
            faster from idea to launch with a simple domain registration flow.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={cloudConsoleLinks.domainSearch}
              className="inline-flex rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Search domain
            </Link>

            <Link
              href={cloudConsoleLinks.signUp}
              className="inline-flex text-black rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-black transition hover:border-slate-950 hover:text-slate-950"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
