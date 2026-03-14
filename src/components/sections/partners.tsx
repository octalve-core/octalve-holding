"use client";

import Image, { StaticImageData } from "next/image";

import c1 from "@/assets/clients/c1.png";
import c2 from "@/assets/clients/c2.png";
import c3 from "@/assets/clients/c3.png";
import c4 from "@/assets/clients/c4.png";
// continue:
// import c5 from "@/assets/clients/c5.png";
// import c6 from "@/assets/clients/c6.png";

const SECTION_COLORS = {
  pageBg: "#ECEEF2",
};

type Partner = {
  id: number;
  name: string;
  logo: StaticImageData;
};

const partners: Partner[] = [
  { id: 1, name: "Client 1", logo: c1 },
  { id: 2, name: "Client 2", logo: c2 },
  { id: 3, name: "Client 3", logo: c3 },
  { id: 4, name: "Client 4", logo: c4 },
  // add more here
];

function PartnerLogo({ item }: { item: Partner }) {
  return (
    <div className="relative h-[70px] w-[160px] shrink-0 sm:h-[80px] sm:w-[190px] md:h-[90px] md:w-[220px] lg:h-[100px] lg:w-[250px]">
      <Image
        src={item.logo}
        alt={item.name}
        fill
        className="object-contain"
        sizes="(min-width: 1024px) 250px, (min-width: 768px) 220px, (min-width: 640px) 190px, 160px"
      />
    </div>
  );
}

export default function Partners() {
  const duration = Math.max(20, partners.length * 5);

  return (
    <section
      className="overflow-hidden py-8 sm:py-10 md:py-12"
      style={{ backgroundColor: SECTION_COLORS.pageBg }}
    >
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#ECEEF2] to-transparent sm:w-16 md:w-24" />

        <div
          className="partners-track flex w-max flex-nowrap items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16"
          style={{ animationDuration: `${duration}s` }}
        >
          {[...partners, ...partners].map((item, index) => (
            <PartnerLogo key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .partners-track {
          animation-name: marqueeX;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .partners-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeX {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
