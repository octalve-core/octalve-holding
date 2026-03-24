"use client";

import Link from "next/link";

const LINKS = {
  primary: "#",
  secondary: "#",
};

function Spark({
  className,
  color = "#F59E0B",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2v6M12 16v6M2 12h6M16 12h6M5.5 5.5l4.2 4.2M14.3 14.3l4.2 4.2M18.5 5.5l-4.2 4.2M9.7 14.3l-4.2 4.2"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <rect
        x="5"
        y="4"
        width="14"
        height="5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="5"
        y="10"
        width="14"
        height="5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="5"
        y="16"
        width="14"
        height="4"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="9" cy="6.5" r="0.9" fill="currentColor" />
      <circle cx="9" cy="12.5" r="0.9" fill="currentColor" />
      <circle cx="9" cy="18" r="0.9" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path
        d="M12 3l7 2.8v5.7c0 4.6-3 7.8-7 9.5-4-1.7-7-4.9-7-9.5V5.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2l1.8 1.8 3.8-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DomainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.8 9h14.4M4.8 15h14.4M12 4c2.4 2.2 3.8 5 3.8 8S14.4 17.8 12 20M12 4c-2.4 2.2-3.8 5-3.8 8s1.4 5.8 3.8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MigrationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path
        d="M4 8h9M10 4l4 4-4 4M20 16h-9M14 12l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FloatingTile({
  children,
  className,
  bgClass,
}: {
  children: React.ReactNode;
  className?: string;
  bgClass: string;
}) {
  return (
    <div
      className={`absolute flex h-20 w-20 items-center justify-center rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.28)] ${bgClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_82%,rgba(0,100,224,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.10),transparent_36%)]" />

        <div className="absolute inset-x-0 bottom-0 h-52 bg-[radial-gradient(circle_at_50%_100%,rgba(239,68,68,0.08),transparent_42%)]" />

        <Spark
          className="absolute left-[12%] top-[30%] h-6 w-6"
          color="#F59E0B"
        />
        <Spark
          className="absolute left-[25%] top-[43%] h-5 w-5"
          color="#0EA5E9"
        />
        <Spark
          className="absolute left-[35%] top-[17%] h-6 w-6"
          color="#F59E0B"
        />
        <Spark
          className="absolute right-[22%] top-[23%] h-5 w-5"
          color="#A855F7"
        />
        <Spark
          className="absolute right-[7%] top-[31%] h-4 w-4"
          color="#0EA5E9"
        />
        <Spark
          className="absolute right-[11%] top-[48%] h-4 w-4"
          color="#F59E0B"
        />

        <FloatingTile
          bgClass="bg-[#1140FF] text-white"
          className="left-[12%] top-[58%] hidden md:flex"
        >
          <ServerIcon />
        </FloatingTile>

        <FloatingTile
          bgClass="bg-[#FF7A00] text-white"
          className="right-[14%] top-[29%] hidden md:flex"
        >
          <MigrationIcon />
        </FloatingTile>

        <FloatingTile
          bgClass="border border-white/10 bg-white/5 text-white backdrop-blur-sm"
          className="left-[18%] top-[20%] hidden lg:flex"
        >
          <DomainIcon />
        </FloatingTile>

        <FloatingTile
          bgClass="border border-[#0064E0]/30 bg-[#0064E0]/10 text-[#8CC4FF]"
          className="right-[22%] top-[64%] hidden lg:flex"
        >
          <ShieldIcon />
        </FloatingTile>
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-[1280px] items-center justify-center px-5 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70">
            Octalve Cloud
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[6.5rem]">
            Websites shouldn’t wait
            <br className="hidden sm:block" />
            on weak infrastructure
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#FF2D2D] via-[#FF7A45] to-[#FFB347] bg-clip-text text-transparent">
              Meet Octalve Cloud
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
            Domains, hosting, email, SSL, servers, and migration support —
            everything you need to launch faster and grow with confidence.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={LINKS.primary}
              className="inline-flex min-h-[58px] items-center justify-center rounded-xl bg-[#FF3131] px-8 py-3 text-sm font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-[#E22A2A] active:scale-[0.98] sm:text-base"
            >
              Explore Octalve Cloud
            </Link>

            <Link
              href={LINKS.secondary}
              className="inline-flex min-h-[58px] items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 active:scale-[0.98] sm:text-base"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
