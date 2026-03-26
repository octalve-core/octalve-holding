import Image from "next/image";
import Link from "next/link";
import bixpodBg from "@/assets/trends/explore.jpg";

export default function BixpodHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={bixpodBg}
          alt="Bixpod"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-[1280px] items-center justify-center px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-white/85 backdrop-blur-sm">
            Bixpod
          </span>
          {/* 
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Connect with Bix-Clan for growth.
          </h1>

          <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
            Bixpod is the digital home of Bix-Clan — a vibrant community where
            curious minds come together to explore fresh perspectives, challenge
            ideas, spark meaningful conversations, and grow through connection.
          </p> */}

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            A community for curious minds to connect and grow.
          </h1>

          <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
            Bixpod brings Bix-Clan to life as a vibrant space for fresh
            perspectives, bold conversations, shared learning, and meaningful
            connections that support personal growth and collective progress.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <Link
              href="https://chat.whatsapp.com/HNjv8sDxn8kGVxIXTPjVxL"
              className="inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
            >
              Join us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
