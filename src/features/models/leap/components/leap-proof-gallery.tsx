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
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);

  /*
   * We only create the portal after the client has mounted.
   * This prevents document/body access during SSR.
   */
  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * Lightbox behaviour:
   * - lock page scrolling
   * - ESC closes
   * - restore scrolling when closed
   */
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

  /*
   * The popup is rendered directly into document.body.
   *
   * This is important because it keeps the popup outside
   * any parent overflow, transform or stacking context.
   */
  const lightbox =
    mounted && selectedImage
      ? createPortal(
          <div
            className="leap-proof-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Proof image preview"
            onClick={() => setSelectedImage(null)}
            onContextMenu={(event) => event.preventDefault()}
            onDragStart={(event) => event.preventDefault()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="leap-proof-lightbox-close"
              aria-label="Close image preview"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* IMAGE AREA */}
            <div
              className="leap-proof-lightbox-content"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Octalve Leap proof document"
                width={1400}
                height={1800}
                quality={90}
                draggable={false}
                className="leap-proof-lightbox-image"
                onContextMenu={(event) => event.preventDefault()}
                onDragStart={(event) => event.preventDefault()}
              />

              {/* Protection layer */}
              <span className="leap-proof-image-guard" aria-hidden="true" />
            </div>

            <p className="leap-proof-lightbox-hint">
              Click outside the document to close
            </p>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <section
        className="leap-proof-section"
        onContextMenu={(event) => event.preventDefault()}
        onDragStart={(event) => event.preventDefault()}
      >
        {/* ====================================================
            HEADING
        ==================================================== */}

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

        {/* ====================================================
            GALLERY
        ==================================================== */}

        <div className="leap-proof-viewport">
          <div className="leap-proof-track">
            {/*
             * Two completely identical groups.
             *
             * GROUP 1
             * 01 02 03 ... 12
             *
             * GROUP 2
             * 01 02 03 ... 12
             *
             * When group 1 finishes, group 2 is already
             * occupying exactly the same visual position.
             */}
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="leap-proof-group"
                aria-hidden={groupIndex === 1}
              >
                {proofImages.map((src, index) => (
                  <button
                    key={`${groupIndex}-${src}`}
                    type="button"
                    className="leap-proof-card"
                    aria-label={`View proof image ${index + 1}`}
                    tabIndex={groupIndex === 1 ? -1 : 0}
                    onClick={() => setSelectedImage(src)}
                    onContextMenu={(event) => event.preventDefault()}
                    onDragStart={(event) => event.preventDefault()}
                  >
                    <div className="leap-proof-media">
                      {/*
                       * IMPORTANT:
                       *
                       * No `fill`.
                       *
                       * The image now has real dimensions.
                       * This prevents absolute-positioned images
                       * from collapsing/stacking at the top.
                       */}
                      <Image
                        src={src}
                        alt={`Octalve Leap proof ${index + 1}`}
                        width={900}
                        height={1125}
                        quality={76}
                        draggable={false}
                        loading={
                          groupIndex === 0 && index < 4 ? "eager" : "lazy"
                        }
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 900px) 50vw,
                          25vw
                        "
                        className="leap-proof-image"
                      />

                      {/* Prevent direct image interaction */}
                      <span
                        className="leap-proof-image-guard"
                        aria-hidden="true"
                      />

                      {/* Hover overlay */}
                      <span className="leap-proof-overlay" aria-hidden="true">
                        <span className="leap-proof-view-pill">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
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

      {lightbox}

      {/*
       * Deliberately using a normal style element,
       * NOT styled-jsx.
       *
       * Class names are unique to this component.
       */}
      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .leap-proof-section {
          width: 100%;
          overflow: hidden;
          background: #06110a;
          padding-top: 4rem;
          padding-bottom: 4rem;

          -webkit-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
        }

        /* =====================================================
           VIEWPORT
        ===================================================== */

        .leap-proof-viewport {
          --leap-gap: 14px;
          --leap-half-gap: 7px;

          width: 100%;
          overflow: hidden;

          margin-top: 3rem;
          padding-inline: 16px;

          box-sizing: border-box;
        }

        /* =====================================================
           MOVING TRACK
        ===================================================== */

        .leap-proof-track {
          display: flex;

          width: max-content;

          gap: var(--leap-gap);

          transform: translate3d(0, 0, 0);

          /*
           * Only the track is continuously animated.
           * This is much cheaper than animating each image.
           */
          animation:
            leap-proof-scroll
            48s
            linear
            infinite;

          will-change: transform;
        }

        .leap-proof-group {
          display: flex;

          flex-shrink: 0;

          gap: var(--leap-gap);
        }

        /* =====================================================
           CARD
        ===================================================== */

        .leap-proof-card {
          /*
           * Desktop:
           * 4 images visible.
           *
           * viewport padding = 32px
           * 3 internal gaps = 42px
           *
           * 32 + 42 = 74px
           */
          width: calc((100vw - 74px) / 4);

          flex: 0 0 calc((100vw - 74px) / 4);

          appearance: none;

          border: 0;
          outline: none;

          margin: 0;
          padding: 0;

          background: transparent;

          cursor: zoom-in;

          -webkit-user-select: none;
          user-select: none;
        }

        .leap-proof-media {
          position: relative;

          width: 100%;

          aspect-ratio: 4 / 5;

          overflow: hidden;

          border-radius: 20px;

          background: #0a160d;

          box-shadow:
            0 16px 40px rgba(0, 0, 0, 0.22),
            inset 0 0 0 1px rgba(255, 255, 255, 0.07);

          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .leap-proof-image {
          display: block;

          width: 100% !important;
          height: 100% !important;

          object-fit: cover;

          pointer-events: none;

          -webkit-user-select: none;
          user-select: none;

          -webkit-user-drag: none;

          transition:
            transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 300ms ease;
        }

        .leap-proof-image-guard {
          position: absolute;

          inset: 0;

          z-index: 2;

          -webkit-user-select: none;
          user-select: none;
        }

        /* =====================================================
           HOVER
        ===================================================== */

        .leap-proof-overlay {
          position: absolute;

          inset: 0;

          z-index: 3;

          display: flex;

          align-items: center;
          justify-content: center;

          background: rgba(0, 7, 3, 0.05);

          opacity: 0;

          transition:
            opacity 250ms ease,
            background 250ms ease;
        }

        .leap-proof-view-pill {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          padding: 10px 15px;

          border: 1px solid rgba(255, 255, 255, 0.2);

          border-radius: 999px;

          background: rgba(4, 15, 7, 0.9);

          color: #ffffff;

          font-size: 13px;

          font-weight: 600;

          transform: translateY(8px) scale(0.96);

          transition:
            transform
            260ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .leap-proof-card:hover .leap-proof-media {
          transform: translateY(-4px);

          box-shadow:
            0 22px 50px rgba(0, 0, 0, 0.3),
            inset 0 0 0 1px rgba(41, 190, 62, 0.3);
        }

        .leap-proof-card:hover .leap-proof-image {
          transform: scale(1.035);

          filter: brightness(0.8);
        }

        .leap-proof-card:hover .leap-proof-overlay,
        .leap-proof-card:focus-visible .leap-proof-overlay {
          opacity: 1;

          background: rgba(0, 7, 3, 0.22);
        }

        .leap-proof-card:hover .leap-proof-view-pill,
        .leap-proof-card:focus-visible .leap-proof-view-pill {
          transform: translateY(0) scale(1);
        }

        .leap-proof-card:focus-visible .leap-proof-media {
          outline: 2px solid #29be3e;

          outline-offset: 3px;
        }

        /* =====================================================
           TRUE INFINITE LOOP
        ===================================================== */

        @keyframes leap-proof-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            /*
             * Move one complete group plus the
             * gap between group 1 and group 2.
             *
             * The visual frame at the end is identical
             * to the visual frame at the beginning.
             */
            transform: translate3d(
              calc(-50% - var(--leap-half-gap)),
              0,
              0
            );
          }
        }

        /* =====================================================
           LIGHTBOX
        ===================================================== */

        .leap-proof-lightbox {
          position: fixed;

          inset: 0;

          z-index: 2147483000;

          display: flex;

          align-items: center;
          justify-content: center;

          width: 100vw;
          height: 100dvh;

          padding: 24px;

          box-sizing: border-box;

          overflow: hidden;

          background: rgba(0, 5, 2, 0.95);

          -webkit-user-select: none;
          user-select: none;

          -webkit-touch-callout: none;

          animation:
            leap-proof-lightbox-in
            180ms
            ease
            both;
        }

        .leap-proof-lightbox-content {
          position: relative;

          z-index: 2;

          display: flex;

          align-items: center;
          justify-content: center;

          width: min(92vw, 1100px);
          height: min(86dvh, 900px);

          padding: 12px;

          box-sizing: border-box;

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 18px;

          background: #08120a;

          box-shadow:
            0 35px 100px rgba(0, 0, 0, 0.55);

          animation:
            leap-proof-lightbox-content-in
            250ms
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .leap-proof-lightbox-image {
          display: block;

          width: auto !important;
          height: auto !important;

          max-width: 100% !important;
          max-height: 100% !important;

          object-fit: contain;

          pointer-events: none;

          -webkit-user-select: none;
          user-select: none;

          -webkit-user-drag: none;
        }

        /* =====================================================
           CLOSE BUTTON
        ===================================================== */

        .leap-proof-lightbox-close {
          position: fixed;

          top: 20px;
          right: 20px;

          z-index: 2147483002;

          display: flex;

          align-items: center;
          justify-content: center;

          width: 46px;
          height: 46px;

          padding: 0;

          border: 1px solid rgba(255, 255, 255, 0.15);

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.09);

          color: #ffffff;

          cursor: pointer;

          transition:
            background 180ms ease,
            transform 180ms ease;
        }

        .leap-proof-lightbox-close:hover {
          background: rgba(255, 255, 255, 0.17);

          transform: scale(1.06);
        }

        .leap-proof-lightbox-hint {
          position: fixed;

          bottom: 17px;
          left: 50%;

          z-index: 2147483002;

          margin: 0;

          transform: translateX(-50%);

          color: rgba(255, 255, 255, 0.48);

          font-size: 12px;

          white-space: nowrap;

          pointer-events: none;
        }

        /* =====================================================
           LIGHTBOX ANIMATIONS
        ===================================================== */

        @keyframes leap-proof-lightbox-in {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes leap-proof-lightbox-content-in {
          from {
            opacity: 0;

            transform: scale(0.97);
          }

          to {
            opacity: 1;

            transform: scale(1);
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .leap-proof-viewport {
            --leap-gap: 12px;
            --leap-half-gap: 6px;

            padding-inline: 14px;
          }

          /*
           * 2 visible.
           *
           * side padding = 28px
           * gap = 12px
           * total = 40px
           */
          .leap-proof-card {
            width: calc((100vw - 40px) / 2);

            flex-basis: calc((100vw - 40px) / 2);
          }

          .leap-proof-track {
            animation-duration: 44s;
          }

          .leap-proof-media {
            border-radius: 17px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .leap-proof-section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }

          .leap-proof-viewport {
            --leap-gap: 10px;
            --leap-half-gap: 5px;

            margin-top: 2.5rem;

            padding-inline: 12px;
          }

          /*
           * One image visible.
           */
          .leap-proof-card {
            width: calc(100vw - 24px);

            flex-basis: calc(100vw - 24px);
          }

          .leap-proof-track {
            animation-duration: 40s;
          }

          .leap-proof-media {
            border-radius: 15px;
          }

          .leap-proof-lightbox {
            padding: 12px;
          }

          .leap-proof-lightbox-content {
            width: 96vw;
            height: 84dvh;

            padding: 8px;

            border-radius: 14px;
          }

          .leap-proof-lightbox-close {
            top: 12px;
            right: 12px;

            width: 42px;
            height: 42px;
          }

          .leap-proof-lightbox-hint {
            bottom: 10px;
          }
        }
      `}</style>
    </>
  );
}
