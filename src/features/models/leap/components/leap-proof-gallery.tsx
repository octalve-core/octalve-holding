"use client";

import Image from "next/image";

type ProofItem = {
  id: number;
  tag: string;
  title: string;
  src: string;
};

const proofItems: ProofItem[] = [
  {
    id: 1,
    tag: "CAC",
    title: "Business Registration Approval",
    src: "/images/leap-proof/certificate-01.jpg",
  },
  {
    id: 2,
    tag: "Compliance",
    title: "Startup Documentation Support",
    src: "/images/leap-proof/certificate-02.jpg",
  },
  {
    id: 3,
    tag: "Licensing",
    title: "Regulatory Processing Evidence",
    src: "/images/leap-proof/certificate-03.jpg",
  },
  {
    id: 4,
    tag: "Founder Support",
    title: "Business Setup Completion",
    src: "/images/leap-proof/certificate-04.jpg",
  },
  {
    id: 5,
    tag: "Registration",
    title: "Company Formation Success",
    src: "/images/leap-proof/certificate-05.jpg",
  },
  {
    id: 6,
    tag: "Tax & Setup",
    title: "Operational Readiness Evidence",
    src: "/images/leap-proof/certificate-06.jpg",
  },
  {
    id: 7,
    tag: "Delivery",
    title: "Client Approval Outcome",
    src: "/images/leap-proof/certificate-07.jpg",
  },
];

const arcClasses = [
  "translate-y-8 -rotate-[10deg] sm:translate-y-10 lg:translate-y-12 lg:-rotate-[11deg]",
  "translate-y-2 -rotate-[6deg] sm:translate-y-3 lg:translate-y-4 lg:-rotate-[7deg]",
  "-translate-y-2 -rotate-[3deg] sm:-translate-y-3 lg:-translate-y-4 lg:-rotate-[4deg]",
  "-translate-y-5 rotate-0 sm:-translate-y-6 lg:-translate-y-8",
  "-translate-y-2 rotate-[3deg] sm:-translate-y-3 lg:-translate-y-4 lg:rotate-[4deg]",
  "translate-y-2 rotate-[6deg] sm:translate-y-3 lg:translate-y-4 lg:rotate-[7deg]",
  "translate-y-8 rotate-[10deg] sm:translate-y-10 lg:translate-y-12 lg:rotate-[11deg]",
];

const frameClasses = [
  "h-[250px] w-[170px] sm:h-[290px] sm:w-[190px] lg:h-[370px] lg:w-[250px]",
  "h-[200px] w-[145px] sm:h-[225px] sm:w-[155px] lg:h-[265px] lg:w-[185px]",
  "h-[190px] w-[138px] sm:h-[210px] sm:w-[148px] lg:h-[245px] lg:w-[175px]",
  "h-[205px] w-[145px] sm:h-[225px] sm:w-[155px] lg:h-[260px] lg:w-[182px]",
  "h-[190px] w-[138px] sm:h-[210px] sm:w-[148px] lg:h-[245px] lg:w-[175px]",
  "h-[200px] w-[145px] sm:h-[225px] sm:w-[155px] lg:h-[265px] lg:w-[185px]",
  "h-[250px] w-[170px] sm:h-[290px] sm:w-[190px] lg:h-[370px] lg:w-[250px]",
];

const marqueeItems = [...proofItems, ...proofItems];

export default function LeapProofGallery() {
  const duration = `${Math.max(proofItems.length * 5, 32)}s`;

  return (
    <section className="bg-[#F7FBF8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1380px]">
        <div className="overflow-hidden rounded-[34px] border border-[#DCEBDD] bg-white px-5 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:px-8 sm:py-12 lg:rounded-[40px] lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#29BE3E]">
              Proof & Evidence
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#0F172A] sm:text-5xl lg:text-6xl">
              Real certificates, approvals, and outcomes we have helped clients
              secure
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#5B6472] sm:text-base sm:leading-8">
              This gallery keeps growing as we help more founders and businesses
              move through registration, compliance, licensing, and structured
              setup. Add as many proof items as you want — the loop continues
              seamlessly.
            </p>
          </div>

          <div className="mt-12 sm:mt-14 lg:mt-16">
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              }}
            >
              <div
                className="leap-proof-track flex w-max items-end gap-3 sm:gap-4 lg:gap-5"
                style={{ animationDuration: duration }}
              >
                {marqueeItems.map((item, index) => {
                  const arcClass = arcClasses[index % arcClasses.length];
                  const frameClass = frameClasses[index % frameClasses.length];

                  return (
                    <article
                      key={`${item.id}-${index}`}
                      className={`group shrink-0 ${arcClass} transition-transform duration-500 hover:-translate-y-1`}
                    >
                      <div
                        className={`relative overflow-hidden rounded-[26px] border border-[#E1ECE3] bg-[#F5FAF6] shadow-[0_18px_35px_rgba(15,23,42,0.08)] ${frameClass}`}
                      >
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 170px, (max-width: 1024px) 220px, 260px"
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        />

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-4 pb-4 pt-10">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C6F6CE]">
                            {item.tag}
                          </p>
                          <p className="mt-1 text-sm font-medium leading-6 text-white sm:text-[15px]">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs leading-6 text-[#6B7280] sm:text-sm">
              Add more proof items anytime by extending the{" "}
              <span className="font-semibold text-[#111827]">proofItems</span>{" "}
              array. The gallery will continue sliding infinitely without
              breaking the loop.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .leap-proof-track {
          animation-name: leapProofMarquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .leap-proof-track:hover {
          animation-play-state: paused;
        }

        @keyframes leapProofMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
