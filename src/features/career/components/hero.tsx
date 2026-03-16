import Link from "next/link";

export default function CareerHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-[#0064E0]">
            Career
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
            Join us to build brands, products, and digital systems that move
            ideas forward.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We are creating space for thoughtful builders, designers,
            strategists, developers, operators, and creatives who want to work
            on meaningful digital projects inside the Octalve ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#career-application-form"
              className="inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
            >
              Apply now
            </a>

            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:border-slate-400"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
