import Image from "next/image";
import exploreBg from "@/assets/trends/explore.jpg";

export default function TrendsHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={exploreBg}
          alt="Octalve Trends"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-[1280px] items-center justify-center px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-18">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-white/85 backdrop-blur-sm">
            Trends
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Ideas shaping modern brands.
          </h1>

          <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
            Explore sharp insights on strategy, branding, websites, systems, and
            digital shifts influencing how businesses grow.
          </p>
        </div>
      </div>
    </section>
  );
}
