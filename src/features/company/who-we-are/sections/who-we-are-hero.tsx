import Link from "next/link";

export function WhoWeAreHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#000A16] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.48)_100%)]" />

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/75 sm:text-[15px]">
            Who We Are
          </p>

          <h1 className="mx-auto mt-6 max-w-[980px] text-4xl font-medium leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-[5.2rem] lg:leading-[0.96]">
            We’re advancing business for greater growth.
          </h1>

          <p className="mx-auto mt-7 max-w-[760px] text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
            Octalve helps brands, founders, and institutions build stronger
            digital presence, better systems, and clearer paths to growth
            through strategy, design, technology, and execution.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/start-project"
              className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
