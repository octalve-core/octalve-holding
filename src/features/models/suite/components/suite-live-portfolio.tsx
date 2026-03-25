"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type PortfolioItem = {
  id: string;
  label: string;
  href: string;
  videoSrc: string;
};

const SLIDE_DURATION = 30_000;

const items: PortfolioItem[] = [
  {
    id: "dsfinc",
    label: "DSF Inc Org",
    href: "https://dsfinc.org/",
    videoSrc: "/videos/lab/dsfinc.webm",
  },
  {
    id: "emprofit",
    label: "Emprofit",
    href: "https://emprofitsolution.com/",
    videoSrc: "/videos/lab/emprofit.webm",
  },
  {
    id: "gotooeasy",
    label: "Gotooeasy",
    href: "https://ghotat.com/",
    videoSrc: "/videos/lab/gotooeasy.webm",
  },
  {
    id: "mayport",
    label: "Mayport Oil & Gas",
    href: "https://mayportoilandgas.com/",
    videoSrc: "/videos/lab/mayport.webm",
  },
  {
    id: "mobileeducator",
    label: "Mobile Educator",
    href: "https://thenigerianmobileeducator.com/",
    videoSrc: "/videos/lab/mobileeducator.webm",
  },
  {
    id: "nspee",
    label: "NSPEE Org.",
    href: "https://nspee.org/",
    videoSrc: "/videos/lab/nspee.webm",
  },
  {
    id: "safedeenhq",
    label: "Safedeen HQ",
    href: "https://safedeenhq.com/",
    videoSrc: "/videos/lab/safedeenhq.webm",
  },
];

export default function LivePreviewCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentItem = useMemo(() => items[currentIndex], [currentIndex]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused || items.length <= 1) return;

    const timer = setTimeout(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();

    const playVideo = async () => {
      try {
        video.currentTime = 0;
        await video.play();
      } catch {
        // browser may delay autoplay until media is ready
      }
    };

    playVideo();
  }, [currentIndex]);

  const togglePause = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPaused) {
      setIsPaused(false);
      try {
        await video.play();
      } catch {}
    } else {
      setIsPaused(true);
      video.pause();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches[0]?.clientX ?? 0;
    const diff = touchStartX.current - endX;

    if (diff > 50) goNext();
    if (diff < -50) goPrev();

    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-[#ffffff] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
            Lab / Web
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#0f172a] sm:text-4xl lg:text-6xl">
            Explore websites we’ve designed and built
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#475569] sm:text-base">
            Clean design, smart structure, and conversion-focused web
            experiences built for modern businesses.
          </p>
        </div>

        <div
          className="relative mx-auto max-w-6xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden rounded-[24px] bg-[#000000] shadow-[0_20px_80px_rgba(15,23,42,0.16)] sm:rounded-[30px]">
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/9] lg:aspect-[16/7]">
              <video
                key={currentItem.id}
                ref={videoRef}
                className="h-full w-full object-cover"
                muted
                playsInline
                autoPlay
                preload="auto"
                onEnded={goNext}
              >
                <source src={currentItem.videoSrc} type="video/webm" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/5" />

              <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
                <div className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                  {currentItem.label}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6">
                <a
                  href={currentItem.href}
                  rel="nofollow"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-700"
                >
                  Visit website
                </a>
              </div>

              <button
                type="button"
                onClick={togglePause}
                aria-label={isPaused ? "Play video" : "Pause video"}
                className="absolute bottom-4 right-4 z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-md transition hover:bg-black/30 sm:bottom-6 sm:right-6"
              >
                {isPaused ? (
                  <span className="ml-0.5 text-lg">▶</span>
                ) : (
                  <span className="text-lg">❚❚</span>
                )}
              </button>

              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous project"
                className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/35 sm:flex"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/35 sm:flex"
              >
                ›
              </button>

              <div className="absolute left-0 right-0 top-0 z-10 flex gap-2 p-3 sm:p-4">
                {items.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Go to ${item.label}`}
                    onClick={() => goTo(index)}
                    className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20"
                  >
                    <span
                      className={`absolute inset-y-0 left-0 rounded-full bg-white transition-all duration-300 ${
                        index === currentIndex ? "w-full" : "w-0"
                      }`}
                      style={{
                        animation:
                          index === currentIndex && !isPaused
                            ? `labWebProgress ${SLIDE_DURATION}ms linear forwards`
                            : "none",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
                  index === currentIndex
                    ? "bg-[#2563eb] text-white"
                    : "bg-white text-[#475569] ring-1 ring-[#e2e8f0]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes labWebProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
