import Link from "next/link";
import { cloudConsoleLinks } from "../../cloud-console-links";

export default function CTA() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-[#2563EB] px-6 py-12 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Set up professional email for your brand and team
            </h2>
            <p className="mt-4 text-base leading-7 text-blue-50/90">
              Create your account, choose your email path, and give your
              business a more trusted communication identity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={cloudConsoleLinks.emailHosting}
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Explore email
              </Link>

              <Link
                href={cloudConsoleLinks.signUp}
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
