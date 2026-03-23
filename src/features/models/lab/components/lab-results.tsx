"use client";

import { useEffect, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
} from "lucide-react";

import portfolio1 from "@/assets/suite/portfolio/octalveportfolio1.png";
import portfolio2 from "@/assets/suite/portfolio/octalveportfolio2.png";
import portfolio3 from "@/assets/suite/portfolio/octalveportfolio3.png";
import portfolio4 from "@/assets/suite/portfolio/octalveportfolio4.png";

type PortfolioItem = {
  id: string;
  image: StaticImageData;
  kicker: string;
  title: string;
  description: string;
  cta: string;
};

const heroServices = [
  "Logo",
  "Brand Design",
  "Brand Profile",
  "Website",
  "Mobile App",
  "Software",
];

function buildStrategicHeadline(services: string[]) {
  const priorityServices = [
    services[0],
    services[1],
    services[3],
    services[4],
    services[5],
  ].map((item) => item.toLowerCase());

  const lastItem = priorityServices[priorityServices.length - 1];
  const firstItems = priorityServices.slice(0, -1).join(", ");

  return `Explore ${firstItems}, and ${lastItem} concepts built to win users and impress investors.`;
}

const sectionContent = {
  eyebrow: "Lab Showcase",
  title: buildStrategicHeadline(heroServices),
  description:
    "Swipe through Octalve Lab experiments across identity, brand systems, websites, apps, and digital products—designed to turn promising ideas into stronger market-ready experiences.",
};

const portfolioItems: PortfolioItem[] = [
  {
    id: "identity-systems",
    image: portfolio1,
    kicker: "Identity Direction",
    title: "Logo & brand identity concepts",
    description:
      "Explore visual directions that help ambitious brands stand out quickly, look credible, and create stronger first impressions across digital touchpoints.",
    cta: "View concept",
  },
  {
    id: "brand-profile",
    image: portfolio2,
    kicker: "Brand Positioning",
    title: "Brand profile & presentation systems",
    description:
      "See how Octalve structures brand profiles, communication assets, and presentation-ready systems that make businesses easier to trust, pitch, and remember.",
    cta: "See profile",
  },
  {
    id: "website-experience",
    image: portfolio3,
    kicker: "Digital Experience",
    title: "Website concepts that convert attention",
    description:
      "Review web experience explorations built to communicate value clearly, guide users smoothly, and support stronger demand generation for modern brands.",
    cta: "Open website",
  },
  {
    id: "product-systems",
    image: portfolio4,
    kicker: "Product Innovation",
    title: "App & software product experiments",
    description:
      "Discover interface directions for mobile apps and software products shaped to improve usability, sharpen product thinking, and attract serious growth opportunities.",
    cta: "Preview product",
  },
];

export default function LabResults() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalItems = portfolioItems.length;

  useEffect(() => {
    if (totalItems <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, 3150);

    return () => clearInterval(interval);
  }, [totalItems]);

  const activeItem = portfolioItems[activeIndex];

  const desktopItems = useMemo(() => {
    if (totalItems <= 1) return [portfolioItems[0]];

    const leftIndex = (activeIndex - 1 + totalItems) % totalItems;
    const rightIndex = (activeIndex + 1) % totalItems;

    return [
      portfolioItems[leftIndex],
      portfolioItems[activeIndex],
      portfolioItems[rightIndex],
    ];
  }, [activeIndex, totalItems]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  return (
    <section className="bg-[#F3F4F6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[920px] text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <FlaskConical className="h-6 w-6" strokeWidth={2.1} />
          </div>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            {sectionContent.eyebrow}
          </p>

          <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-5xl">
            {sectionContent.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {sectionContent.description}
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goToPrev}
            className="absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.10)] transition hover:scale-[1.03] lg:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-20 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.10)] transition hover:scale-[1.03] lg:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="hidden items-stretch gap-5 lg:flex">
            {desktopItems.map((item) => {
              const isActive = item.id === activeItem.id;
              const originalIndex = portfolioItems.findIndex(
                (portfolioItem) => portfolioItem.id === item.id,
              );

              return (
                <article
                  key={item.id}
                  className={`group relative overflow-hidden rounded-[32px] transition-all duration-300 ${
                    isActive
                      ? "flex-[1.9] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
                      : "flex-1 cursor-pointer bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] hover:-translate-y-1"
                  }`}
                  onClick={() => !isActive && setActiveIndex(originalIndex)}
                >
                  {isActive ? (
                    <div className="grid h-full min-h-[540px] grid-cols-[42%_58%]">
                      <div className="relative h-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 36vw, 100vw"
                          priority={originalIndex === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                      </div>

                      <div className="flex flex-col justify-center px-8 py-10 xl:px-10">
                        <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                          {item.kicker}
                        </p>

                        <h3 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-slate-950 xl:text-[3.05rem] xl:leading-[1.02]">
                          {item.title}
                        </h3>

                        <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
                          {item.description}
                        </p>

                        <div className="mt-8">
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full bg-[#0064E0] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_32px_rgba(0,100,224,0.22)] transition hover:translate-y-[-1px]"
                          >
                            {item.cta}
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-[540px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 18vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/5 to-transparent" />
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="lg:hidden">
            <div className="relative mx-auto max-w-[760px] overflow-hidden rounded-[28px] bg-white shadow-[0_20px_70px_rgba(15,23,42,0.10)]">
              <div className="relative h-[300px] sm:h-[360px]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent" />

                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/85 text-slate-950 shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/85 text-slate-950 shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="px-6 py-7 sm:px-8 sm:py-8">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                  {activeItem.kicker}
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-slate-950 sm:text-[2.2rem]">
                  {activeItem.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {activeItem.description}
                </p>

                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0064E0] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_32px_rgba(0,100,224,0.22)]"
                  >
                    {activeItem.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2.5">
            {portfolioItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to ${item.title}`}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all ${
                    isActive
                      ? "h-2.5 w-2.5 bg-slate-900"
                      : "h-2.5 w-2.5 border border-slate-400 bg-white"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
