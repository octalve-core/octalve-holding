import Image from "next/image";
import careerBg from "@/assets/trends/explore.jpg";

export default function CareerHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={careerBg}
          alt="Octalve Career"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-[1280px] items-center justify-center px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-white/85 backdrop-blur-sm">
            Career
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Build what matters with Octalve.
          </h1>

          <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
            Join a growing ecosystem where strategy, design, systems, and
            execution come together to help brands, founders, and businesses
            move forward with clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
