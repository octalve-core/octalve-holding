"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

const proofImages = [
  "/images/leap-proof/01.jpg",
  "/images/leap-proof/02.jpg",
  "/images/leap-proof/03.jpg",
  "/images/leap-proof/04.jpg",
  "/images/leap-proof/05.jpg",
  "/images/leap-proof/06.jpg",
  "/images/leap-proof/07.jpg",
  "/images/leap-proof/08.jpg",
  "/images/leap-proof/09.jpg",
  "/images/leap-proof/10.jpg",
  "/images/leap-proof/11.jpg",
  "/images/leap-proof/12.jpg",
];

const hoverZones = 9;
const centerZone = Math.ceil(hoverZones / 2);

export default function LeapProofGallery() {
  const [activePicture, setActivePicture] = useState<number | null>(null);
  const [activeZone, setActiveZone] = useState(centerZone);

  const navStyle = useMemo(
    () =>
      ({
        ["--max-p" as string]: proofImages.length,
        ["--max-z" as string]: hoverZones,
        ["--p" as string]: activePicture ?? 1,
        ["--z" as string]: activeZone,
      }) as CSSProperties,
    [activePicture, activeZone],
  );

  const resetInteraction = () => {
    setActivePicture(null);
    setActiveZone(centerZone);
  };

  return (
    <section className="overflow-hidden bg-[#06110A] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#29BE3E]">Traction</p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
          Real results. Real documents. Real business progress.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">A visual record of the registrations, approvals, and business documentation outcomes we have helped founders and growing businesses secure through Octalve Leap.</p>
      </div>

      <div className="mt-12 sm:mt-14 lg:mt-16">
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-2 sm:px-3 lg:px-4">
          <nav
            className="leap-proof-nav"
            style={navStyle}
            data-engaged={activePicture !== null}
            aria-label="Octalve Leap proof gallery"
            onMouseLeave={resetInteraction}
          >
            {proofImages.map((src, index) => {
              const pictureNumber = index + 1;

              return (
                <button
                  key={src}
                  type="button"
                  className="proof-panel"
                  data-active={activePicture === pictureNumber}
                  style={
                    {
                      ["--i" as string]: index,
                    } as CSSProperties
                  }
                  aria-label={`Proof image ${pictureNumber}`}
                  onMouseEnter={() => {
                    setActivePicture(pictureNumber);
                    setActiveZone(centerZone);
                  }}
                  onFocus={() => {
                    setActivePicture(pictureNumber);
                    setActiveZone(centerZone);
                  }}
                >
                  <div
                    className="proof-image"
                    style={
                      {
                        ["--img" as string]: `url("${src}")`,
                      } as CSSProperties
                    }
                  />

                  <aside className="hover-zone" aria-hidden="true">
                    {Array.from({ length: hoverZones }).map((_, zoneIndex) => (
                      <i
                        key={`${src}-${zoneIndex}`}
                        onMouseEnter={() => {
                          setActivePicture(pictureNumber);
                          setActiveZone(zoneIndex + 1);
                        }}
                      />
                    ))}
                  </aside>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <style jsx>{`
        .leap-proof-nav {
          --clr-bg: #06110a;
          --clr-text: #ffffff;
          --hover-intensity: 8rem;
          --hover-smoothness: 70ms;
          --fall-smoothness: 250ms;
          --perspective: 2000px;
          --dir: 0deg;

          --r: calc(var(--max-z) * (var(--p) - 1) + var(--z));
          --r-n: calc((var(--r) - 1) / (var(--max-z) * var(--max-p) - 1));

          block-size: clamp(17rem, 34vw, 29rem);
          inline-size: min(100%, 110rem);

          display: flex;
          align-items: flex-end;
          position: relative;
          margin-inline: auto;

          perspective: var(--perspective);
          transform-style: preserve-3d;
          overflow: visible;
        }

        .proof-panel {
          flex: 1;
          block-size: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          appearance: none;
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          transform-style: preserve-3d;
          outline: none;

          --p-n: calc(var(--i) / (var(--max-p) - 1));
          --diff: calc(var(--p-n) - var(--r-n));
          --u: calc(abs(var(--diff)) / var(--w));
          --w: 0.4;
          --falloff: clamp(
            calc(0.5 * (1 + cos(min(var(--u), 1) * 180deg))),
            0,
            1
          );

          --tilt: calc(clamp(-1, var(--diff) * 5, 1) * var(--falloff) * 70deg);

          --ts: calc(
            var(--hover-smoothness) * var(--falloff) +
              var(--fall-smoothness) * (1 - var(--falloff))
          );

          --fs: calc(0.1s * var(--falloff, 0) + 0.8s * (1 - var(--falloff, 0)));

          transition:
            filter var(--fs),
            transform var(--ts, var(--fall-smoothness)),
            flex 0.3s ease;
        }

        .proof-image {
          width: 100%;
          height: 100%;
          margin-inline: 0.12rem;
          border-radius: 1.2rem;
          background-image: var(--img);
          background-color: rgba(255, 255, 255, 0.1);
          background-size: cover;
          background-position: center;
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.18),
            inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .hover-zone {
          position: absolute;
          inset: 0;
          inset-inline: -3px;
          display: flex;
          z-index: 5;
        }

        .hover-zone > i {
          flex: 1;
          display: block;
        }

        .leap-proof-nav[data-engaged="false"] .proof-panel {
          transform: none;
          filter: brightness(0.92) saturate(0.92);
        }

        .leap-proof-nav[data-engaged="true"] .proof-panel {
          transform:
            translateZ(calc(var(--falloff) * var(--hover-intensity)))
            rotateY(calc(var(--tilt) * cos(var(--dir))))
            rotateX(calc(var(--tilt) * sin(var(--dir))));
          filter:
            brightness(max(0.56, var(--falloff, 0) * 1.18))
            saturate(calc(0.45 + var(--falloff, 0) * 0.85));
        }

        .proof-panel[data-active="true"] {
          flex: 4;
        }

        .proof-panel:focus-visible .proof-image {
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.18),
            inset 0 0 0 1px rgba(255, 255, 255, 0.08),
            0 0 0 2px rgba(41, 190, 62, 0.7);
        }

        @media (max-width: 1024px) {
          .leap-proof-nav {
            block-size: clamp(15rem, 42vw, 22rem);
          }

          .proof-panel[data-active="true"] {
            flex: 3.2;
          }

          .proof-image {
            border-radius: 1rem;
          }
        }

        @media (max-width: 640px) {
          .leap-proof-nav {
            block-size: clamp(13rem, 52vw, 17rem);
          }

          .proof-panel {
            --hover-intensity: 4rem;
          }

          .proof-panel[data-active="true"] {
            flex: 2.8;
          }

          .proof-image {
            margin-inline: 0.08rem;
            border-radius: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}

