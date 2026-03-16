import Link from "next/link";
import { cloudConsoleLinks } from "../../cloud-console-links";

export default function CTA() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-[#2563EB] px-6 py-12 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Move into Octalve Cloud with a migration path that feels simpler
            </h2>
            <p className="mt-4 text-base leading-7 text-blue-50/90">
              Request migration, create your account, and prepare your website
              or business systems for a smoother transition.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={cloudConsoleLinks.migration}
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Request migration
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
