// "use client";

// import type { CSSProperties } from "react";
// import { useMemo, useState } from "react";

// const proofImages = [
//   "/images/leap-proof/01.jpg",
//   "/images/leap-proof/02.jpg",
//   "/images/leap-proof/03.jpg",
//   "/images/leap-proof/04.jpg",
//   "/images/leap-proof/05.jpg",
//   "/images/leap-proof/06.jpg",
//   "/images/leap-proof/07.jpg",
//   "/images/leap-proof/08.jpg",
//   "/images/leap-proof/09.jpg",
//   "/images/leap-proof/10.jpg",
//   "/images/leap-proof/11.jpg",
//   "/images/leap-proof/12.jpg",
// ];

// const hoverZones = 9;
// const centerZone = Math.ceil(hoverZones / 2);

// export default function LeapProofGallery() {
//   const [activePicture, setActivePicture] = useState<number | null>(null);
//   const [activeZone, setActiveZone] = useState(centerZone);

//   const navStyle = useMemo(
//     () =>
//       ({
//         ["--max-p" as string]: proofImages.length,
//         ["--max-z" as string]: hoverZones,
//         ["--p" as string]: activePicture ?? 1,
//         ["--z" as string]: activeZone,
//       }) as CSSProperties,
//     [activePicture, activeZone],
//   );

//   const resetInteraction = () => {
//     setActivePicture(null);
//     setActiveZone(centerZone);
//   };

//   return (
//     <section className="overflow-hidden bg-[#06110A] py-16 sm:py-20 lg:py-24">
//       <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
//         <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#29BE3E]">Traction</p>

//         <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
//           Real results. Real documents. Real business progress.
//         </h2>

//         <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">A visual record of the registrations, approvals, and business documentation outcomes we have helped founders and growing businesses secure through Octalve Leap.</p>
//       </div>

//       <div className="mt-12 sm:mt-14 lg:mt-16">
//         <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-2 sm:px-3 lg:px-4">
//           <nav
//             className="leap-proof-nav"
//             style={navStyle}
//             data-engaged={activePicture !== null}
//             aria-label="Octalve Leap proof gallery"
//             onMouseLeave={resetInteraction}
//           >
//             {proofImages.map((src, index) => {
//               const pictureNumber = index + 1;

//               return (
//                 <button
//                   key={src}
//                   type="button"
//                   className="proof-panel"
//                   data-active={activePicture === pictureNumber}
//                   style={
//                     {
//                       ["--i" as string]: index,
//                     } as CSSProperties
//                   }
//                   aria-label={`Proof image ${pictureNumber}`}
//                   onMouseEnter={() => {
//                     setActivePicture(pictureNumber);
//                     setActiveZone(centerZone);
//                   }}
//                   onFocus={() => {
//                     setActivePicture(pictureNumber);
//                     setActiveZone(centerZone);
//                   }}
//                 >
//                   <div
//                     className="proof-image"
//                     style={
//                       {
//                         ["--img" as string]: `url("${src}")`,
//                       } as CSSProperties
//                     }
//                   />

//                   <aside className="hover-zone" aria-hidden="true">
//                     {Array.from({ length: hoverZones }).map((_, zoneIndex) => (
//                       <i
//                         key={`${src}-${zoneIndex}`}
//                         onMouseEnter={() => {
//                           setActivePicture(pictureNumber);
//                           setActiveZone(zoneIndex + 1);
//                         }}
//                       />
//                     ))}
//                   </aside>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>
//       </div>

//       <style jsx>{`
//         .leap-proof-nav {
//           --clr-bg: #06110a;
//           --clr-text: #ffffff;
//           --hover-intensity: 8rem;
//           --hover-smoothness: 70ms;
//           --fall-smoothness: 250ms;
//           --perspective: 2000px;
//           --dir: 0deg;

//           --r: calc(var(--max-z) * (var(--p) - 1) + var(--z));
//           --r-n: calc((var(--r) - 1) / (var(--max-z) * var(--max-p) - 1));

//           block-size: clamp(17rem, 34vw, 29rem);
//           inline-size: min(100%, 110rem);

//           display: flex;
//           align-items: flex-end;
//           position: relative;
//           margin-inline: auto;

//           perspective: var(--perspective);
//           transform-style: preserve-3d;
//           overflow: visible;
//         }

//         .proof-panel {
//           flex: 1;
//           block-size: 100%;
//           position: relative;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           appearance: none;
//           border: none;
//           background: transparent;
//           padding: 0;
//           cursor: pointer;
//           transform-style: preserve-3d;
//           outline: none;

//           --p-n: calc(var(--i) / (var(--max-p) - 1));
//           --diff: calc(var(--p-n) - var(--r-n));
//           --u: calc(abs(var(--diff)) / var(--w));
//           --w: 0.4;
//           --falloff: clamp(
//             calc(0.5 * (1 + cos(min(var(--u), 1) * 180deg))),
//             0,
//             1
//           );

//           --tilt: calc(clamp(-1, var(--diff) * 5, 1) * var(--falloff) * 70deg);

//           --ts: calc(
//             var(--hover-smoothness) * var(--falloff) +
//               var(--fall-smoothness) * (1 - var(--falloff))
//           );

//           --fs: calc(0.1s * var(--falloff, 0) + 0.8s * (1 - var(--falloff, 0)));

//           transition:
//             filter var(--fs),
//             transform var(--ts, var(--fall-smoothness)),
//             flex 0.3s ease;
//         }

//         .proof-image {
//           width: 100%;
//           height: 100%;
//           margin-inline: 0.12rem;
//           border-radius: 1.2rem;
//           background-image: var(--img);
//           background-color: rgba(255, 255, 255, 0.1);
//           background-size: cover;
//           background-position: center;
//           box-shadow:
//             0 18px 40px rgba(0, 0, 0, 0.18),
//             inset 0 0 0 1px rgba(255, 255, 255, 0.08);
//         }

//         .hover-zone {
//           position: absolute;
//           inset: 0;
//           inset-inline: -3px;
//           display: flex;
//           z-index: 5;
//         }

//         .hover-zone > i {
//           flex: 1;
//           display: block;
//         }

//         .leap-proof-nav[data-engaged="false"] .proof-panel {
//           transform: none;
//           filter: brightness(0.92) saturate(0.92);
//         }

//         .leap-proof-nav[data-engaged="true"] .proof-panel {
//           transform:
//             translateZ(calc(var(--falloff) * var(--hover-intensity)))
//             rotateY(calc(var(--tilt) * cos(var(--dir))))
//             rotateX(calc(var(--tilt) * sin(var(--dir))));
//           filter:
//             brightness(max(0.56, var(--falloff, 0) * 1.18))
//             saturate(calc(0.45 + var(--falloff, 0) * 0.85));
//         }

//         .proof-panel[data-active="true"] {
//           flex: 4;
//         }

//         .proof-panel:focus-visible .proof-image {
//           box-shadow:
//             0 18px 40px rgba(0, 0, 0, 0.18),
//             inset 0 0 0 1px rgba(255, 255, 255, 0.08),
//             0 0 0 2px rgba(41, 190, 62, 0.7);
//         }

//         @media (max-width: 1024px) {
//           .leap-proof-nav {
//             block-size: clamp(15rem, 42vw, 22rem);
//           }

//           .proof-panel[data-active="true"] {
//             flex: 3.2;
//           }

//           .proof-image {
//             border-radius: 1rem;
//           }
//         }

//         @media (max-width: 640px) {
//           .leap-proof-nav {
//             block-size: clamp(13rem, 52vw, 17rem);
//           }

//           .proof-panel {
//             --hover-intensity: 4rem;
//           }

//           .proof-panel[data-active="true"] {
//             flex: 2.8;
//           }

//           .proof-image {
//             margin-inline: 0.08rem;
//             border-radius: 0.85rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import type { SyntheticEvent } from "react";
import { useEffect, useState } from "react";

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

export default function LeapProofGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const preventImageActions = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <section
        className="overflow-hidden bg-[#06110A] py-16 sm:py-20 lg:py-24"
        onContextMenu={preventImageActions}
        onDragStart={preventImageActions}
      >
        {/* Heading */}
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#29BE3E]">
            Traction
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Real results. Real documents. Real business progress.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            A visual record of the registrations, approvals, and business
            documentation outcomes we have helped founders and growing
            businesses secure through Octalve Leap.
          </p>
        </div>

        {/* Infinite carousel */}
        <div className="gallery-shell mt-12 sm:mt-14 lg:mt-16">
          <div className="gallery-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="gallery-group"
                aria-hidden={groupIndex === 1 ? "true" : undefined}
              >
                {proofImages.map((src, index) => (
                  <button
                    key={`${groupIndex}-${src}`}
                    type="button"
                    className="proof-card"
                    aria-label={`Open proof image ${index + 1}`}
                    tabIndex={groupIndex === 1 ? -1 : 0}
                    onClick={() => setSelectedImage(src)}
                    onContextMenu={preventImageActions}
                    onDragStart={preventImageActions}
                  >
                    <div className="proof-media">
                      <Image
                        src={src}
                        alt={`Octalve Leap proof ${index + 1}`}
                        fill
                        priority={groupIndex === 0 && index < 4}
                        draggable={false}
                        sizes="(max-width: 640px) 88vw, (max-width: 900px) 44vw, 24vw"
                        className="proof-image"
                      />

                      {/* Prevent direct interaction with actual image */}
                      <span className="image-guard" aria-hidden="true" />

                      {/* Hover viewer */}
                      <span className="proof-overlay" aria-hidden="true">
                        <span className="view-pill">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.5 12C4.8 7.7 8 5.5 12 5.5S19.2 7.7 21.5 12C19.2 16.3 16 18.5 12 18.5S4.8 16.3 2.5 12Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="3"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />
                          </svg>
                          View
                        </span>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image popup / lightbox */}
      {selectedImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Proof image preview"
          onClick={() => setSelectedImage(null)}
          onContextMenu={preventImageActions}
          onDragStart={preventImageActions}
        >
          {/* Close button */}
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Large image */}
          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Octalve Leap proof document"
              fill
              priority
              draggable={false}
              sizes="95vw"
              className="lightbox-image"
            />

            <span className="image-guard" aria-hidden="true" />
          </div>

          <p className="lightbox-hint">Click outside the image to close</p>
        </div>
      )}

      <style jsx>{`
        /* ======================================================
           INFINITE GALLERY
        ====================================================== */

        .gallery-shell {
          --gap: 14px;
          --side: 16px;

          width: 100vw;
          overflow: hidden;

          padding-inline: var(--side);

          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }

        .gallery-track {
          display: flex;

          width: max-content;

          gap: var(--gap);

          will-change: transform;

          /*
           * Increase the seconds = slower.
           * Reduce the seconds = faster.
           */
          animation: proof-scroll 46s linear infinite;
        }

        /*
         * We create TWO identical groups.
         *
         * 01 02 03 ... 12
         * 01 02 03 ... 12
         *
         * This gives us a genuinely seamless reset.
         */
        .gallery-group {
          display: flex;

          flex-shrink: 0;

          gap: var(--gap);
        }

        /* ======================================================
           PROOF CARD
        ====================================================== */

        .proof-card {
          /*
           * Exactly four cards visible on desktop.
           */
          flex: 0 0 calc((100vw - (var(--side) * 2) - (var(--gap) * 3)) / 4);

          width: calc((100vw - (var(--side) * 2) - (var(--gap) * 3)) / 4);

          appearance: none;

          border: 0;
          padding: 0;

          background: transparent;

          cursor: zoom-in;

          outline: none;
        }

        .proof-media {
          position: relative;

          width: 100%;

          aspect-ratio: 4 / 5;

          overflow: hidden;

          border-radius: 1.2rem;

          background: #0b170e;

          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.22),
            inset 0 0 0 1px rgba(255, 255, 255, 0.08);

          transform: translateZ(0);

          transition:
            transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 350ms ease;
        }

        :global(.proof-image) {
          object-fit: cover;

          pointer-events: none;

          user-select: none;
          -webkit-user-select: none;
          -webkit-user-drag: none;

          transition:
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 300ms ease;
        }

        /*
         * Invisible layer sitting above image.
         * Makes direct interaction with <img> more difficult.
         */
        .image-guard {
          position: absolute;

          inset: 0;

          z-index: 2;
        }

        /* ======================================================
           HOVER OVERLAY
        ====================================================== */

        .proof-overlay {
          position: absolute;

          inset: 0;

          z-index: 3;

          display: grid;

          place-items: center;

          background: rgba(0, 8, 3, 0.08);

          opacity: 0;

          transition:
            opacity 260ms ease,
            background 260ms ease;
        }

        .view-pill {
          display: inline-flex;

          align-items: center;

          gap: 0.45rem;

          padding: 0.65rem 0.95rem;

          border: 1px solid rgba(255, 255, 255, 0.18);

          border-radius: 999px;

          background: rgba(3, 14, 7, 0.78);

          color: #ffffff;

          font-size: 0.8rem;

          font-weight: 600;

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          transform: translateY(8px) scale(0.96);

          transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .proof-card:hover .proof-media {
          transform: translateY(-5px);

          box-shadow:
            0 25px 58px rgba(0, 0, 0, 0.32),
            inset 0 0 0 1px rgba(41, 190, 62, 0.3);
        }

        .proof-card:hover :global(.proof-image) {
          transform: scale(1.045);

          filter: brightness(0.78);
        }

        .proof-card:hover .proof-overlay,
        .proof-card:focus-visible .proof-overlay {
          opacity: 1;

          background: rgba(0, 8, 3, 0.24);
        }

        .proof-card:hover .view-pill,
        .proof-card:focus-visible .view-pill {
          transform: translateY(0) scale(1);
        }

        .proof-card:focus-visible .proof-media {
          box-shadow:
            0 25px 58px rgba(0, 0, 0, 0.32),
            0 0 0 2px #29be3e;
        }

        /* ======================================================
           LIGHTBOX
        ====================================================== */

        .lightbox {
          position: fixed;

          inset: 0;

          z-index: 9999;

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 24px;

          background: rgba(0, 5, 2, 0.94);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          animation: lightbox-fade 220ms ease both;

          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }

        .lightbox-content {
          position: relative;

          width: min(92vw, 1100px);

          height: min(86vh, 900px);

          overflow: hidden;

          border-radius: 1.25rem;

          background: #08140b;

          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.65),
            0 0 0 1px rgba(255, 255, 255, 0.09);

          animation: lightbox-scale 300ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        :global(.lightbox-image) {
          object-fit: contain;

          pointer-events: none;

          user-select: none;
          -webkit-user-select: none;
          -webkit-user-drag: none;
        }

        /* ======================================================
           CLOSE BUTTON
        ====================================================== */

        .lightbox-close {
          position: fixed;

          top: 22px;
          right: 22px;

          z-index: 10001;

          display: grid;

          width: 46px;
          height: 46px;

          place-items: center;

          border: 1px solid rgba(255, 255, 255, 0.14);

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.08);

          color: #ffffff;

          cursor: pointer;

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          transition:
            background 180ms ease,
            transform 180ms ease;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.15);

          transform: scale(1.06);
        }

        .lightbox-hint {
          position: fixed;

          bottom: 18px;
          left: 50%;

          margin: 0;

          transform: translateX(-50%);

          color: rgba(255, 255, 255, 0.48);

          font-size: 0.75rem;

          pointer-events: none;

          white-space: nowrap;
        }

        /* ======================================================
           INFINITE LOOP
        ====================================================== */

        @keyframes proof-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            /*
             * Because there are two identical groups,
             * this ends exactly at the start of group 2.
             *
             * When animation restarts at group 1,
             * both positions look identical.
             */
            transform: translate3d(calc(-50% - (var(--gap) / 2)), 0, 0);
          }
        }

        /* ======================================================
           LIGHTBOX ANIMATIONS
        ====================================================== */

        @keyframes lightbox-fade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes lightbox-scale {
          from {
            opacity: 0;

            transform: scale(0.95);
          }

          to {
            opacity: 1;

            transform: scale(1);
          }
        }

        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .gallery-shell {
            --gap: 12px;
            --side: 14px;
          }

          .gallery-track {
            animation-duration: 42s;
          }

          /*
           * Exactly 2 cards visible.
           */
          .proof-card {
            flex-basis: calc((100vw - (var(--side) * 2) - var(--gap)) / 2);

            width: calc((100vw - (var(--side) * 2) - var(--gap)) / 2);
          }

          .proof-media {
            border-radius: 1rem;
          }
        }

        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 640px) {
          .gallery-shell {
            --gap: 10px;
            --side: 12px;
          }

          .gallery-track {
            animation-duration: 38s;
          }

          /*
           * Exactly 1 card visible.
           */
          .proof-card {
            flex-basis: calc(100vw - (var(--side) * 2));

            width: calc(100vw - (var(--side) * 2));
          }

          .proof-media {
            border-radius: 0.9rem;
          }

          .lightbox {
            padding: 12px;
          }

          .lightbox-content {
            width: 96vw;

            height: 82vh;

            border-radius: 0.9rem;
          }

          .lightbox-close {
            top: 14px;
            right: 14px;

            width: 42px;
            height: 42px;
          }

          .lightbox-hint {
            bottom: 12px;
          }
        }
      `}</style>
    </>
  );
}
