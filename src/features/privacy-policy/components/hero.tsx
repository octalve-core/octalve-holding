import Link from "next/link";

export default function PrivacyPolicyHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-[#0064E0]">
            Privacy Policy
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
            How we collect, use, and protect information across the Octalve
            experience.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            This page explains the basic principles around personal information,
            usage data, communication, cookies, and how your interaction with
            Octalve services may be handled.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#privacy-policy-content"
              className="inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
            >
              Read policy
            </a>

            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:border-slate-400"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
