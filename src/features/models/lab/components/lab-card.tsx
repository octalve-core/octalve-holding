"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SECTION_COLORS = {
  pageBg: "#F8FAFC",
  overlay:
    "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.42) 100%)",
  primaryBtn: "#E61525",
  primaryBtnText: "#FFFFFF",
  controlBg: "rgba(15, 23, 42, 0.32)",
  controlBorder: "rgba(255,255,255,0.45)",
  controlText: "#FFFFFF",
};

type ShowcaseCard = {
  id: number;
  href: string;
  videoSrc: string;
  buttonLabel: string;
  ariaLabel: string;
};

const brandingCards: ShowcaseCard[] = [
  //   {
  //     id: 1,
  //     href: "https://dsfinc.org/",
  //     videoSrc: "/videos/lab/dsfinc.webm",
  //     buttonLabel: "Visit Website",
  //     ariaLabel: "Visit DSF Inc website",
  //   },
  //   {
  //     id: 2,
  //     href: "https://mayportoilandgas.com/",
  //     videoSrc: "/videos/lab/mayport.webm",
  //     buttonLabel: "Visit Website",
  //     ariaLabel: "Visit Mayport website",
  //   },
  //   {
  //     id: 3,
  //     href: "#",
  //     videoSrc: "/videos/lab/gotooeasy.webm",
  //     buttonLabel: "Visit Website",
  //     ariaLabel: "Visit Gotooeasy website",
  //   },
  //   {
  //     id: 4,
  //     href: "#",
  //     videoSrc: "/videos/lab/emprofit.webm",
  //     buttonLabel: "Visit Website",
  //     ariaLabel: "Visit Emprofit website",
  //   },
  {
    id: 5,
    href: "#",
    videoSrc: "/videos/lab/mobileeducator.webm",
    buttonLabel: "Visit Website",
    ariaLabel: "Visit Mobile Educator website",
  },
  //   {
  //     id: 6,
  //     href: "#",
  //     videoSrc: "/videos/lab/nspee.webm",
  //     buttonLabel: "Visit Website",
  //     ariaLabel: "Visit NSPEE website",
  //   },
  //   {
  //     id: 7,
  //     href: "#",
  //     videoSrc: "/videos/lab/safedeenhq.webm",
  //     buttonLabel: "Visit Website",
  //     ariaLabel: "Visit Safedeen HQ website",
  //   },
  {
    id: 8,
    href: "#",
    videoSrc: "/videos/lab/dagex.webm",
    buttonLabel: "Visit Website",
    ariaLabel: "Visit Safedeen HQ website",
  },
];

function PauseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 6.5V17.5M16 6.5V17.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8.5 6.8C8.5 6.04 9.33 5.56 10 5.97L18.35 11.17C18.98 11.56 18.98 12.44 18.35 12.83L10 18.03C9.33 18.44 8.5 17.96 8.5 17.2V6.8Z" />
    </svg>
  );
}

function BrandingCard({ item }: { item: ShowcaseCard }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
        setIsPaused(false);
      } catch {
        setIsPaused(true);
      }
    };

    tryPlay();
  }, []);

  const handleTogglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPaused(false);
      } catch {
        setIsPaused(true);
      }
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <article className="group relative h-[260px] overflow-hidden rounded-[28px] sm:h-[340px] lg:h-[420px]">
      <video
        ref={videoRef}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={item.videoSrc} type="video/webm" />
      </video>

      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: SECTION_COLORS.overlay }}
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6 md:p-7">
        <Link
          href={item.href}
          aria-label={item.ariaLabel}
          rel="nofollow"
          className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition hover:opacity-90"
          style={{
            backgroundColor: SECTION_COLORS.primaryBtn,
            color: SECTION_COLORS.primaryBtnText,
          }}
        >
          {item.buttonLabel}
        </Link>

        <button
          type="button"
          onClick={handleTogglePlayback}
          aria-label={isPaused ? "Play video" : "Pause video"}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md transition hover:scale-105"
          style={{
            backgroundColor: SECTION_COLORS.controlBg,
            borderColor: SECTION_COLORS.controlBorder,
            color: SECTION_COLORS.controlText,
          }}
        >
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>
    </article>
  );
}

export default function BrandingShowcase() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-20"
      style={{ backgroundColor: SECTION_COLORS.pageBg }}
    >
      <div className="mx-auto max-w-[1560px]">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {brandingCards.map((item) => (
            <BrandingCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
