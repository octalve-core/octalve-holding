import Link from "next/link";

export default function ModelsCta() {
  return (
    <section className="bg-[#F7F9FF] px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-[36px] bg-[#000A16] px-6 py-12 text-white shadow-[0_28px_80px_rgba(0,10,22,0.22)] sm:px-10 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-120px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#0064E0]/40 blur-3xl" />
            <div className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#29BE3E]/20 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7DB5FF]">
                Not sure where to start?
              </p>

              <h2 className="mt-4 text-4xl font-medium leading-[1.04] tracking-[-0.05em] !text-white sm:text-5xl">
                Let Octalve help you choose the right model for your next move.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 !text-white/70 sm:text-lg">
                Whether you need clarity, a launch package, a website, software,
                hosting, workspace, or execution resources, we can map the right
                path and help you start with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/start-project"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#0064E0] px-7 text-sm font-semibold !text-white transition hover:-translate-y-0.5 hover:bg-[#0052B8]"
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#0064E0",
                }}
              >
                Start a Project
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white px-7 text-sm font-semibold !text-[#000A16] transition hover:-translate-y-0.5 hover:bg-white/90"
                style={{
                  color: "#000A16",
                  backgroundColor: "#FFFFFF",
                }}
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
