"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { testimonials } from "../suite-data";

export default function SuiteTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1200) setItemsPerView(2);
      else setItemsPerView(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  const visibleItems = useMemo(() => {
    const list = [];
    for (let i = 0; i < itemsPerView; i += 1) {
      list.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return list;
  }, [activeIndex, itemsPerView]);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="text-center">
          <div className="text-sm font-medium tracking-wide text-black/60">
            100+ Founders
          </div>
          <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] md:text-5xl text-black">
            Built for Founders. Made for Impacts.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3 md:grid-cols-2">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[36px] border border-slate-200 shadow-sm"
              style={{ background: item.accentBg }}
            >
              <div className="p-6 md:p-8">
                <div className="relative h-[260px] w-full overflow-hidden rounded-[28px] border border-black/10 bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-8">
                  <div className="text-5xl leading-none text-sky-600">“</div>
                  <p className="mt-4 text-lg leading-8 text-black/85">
                    {item.quote}
                  </p>

                  <div className="mt-8">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-black/60">
                      {item.rolePrefix} {item.company}
                    </div>
                    {item.location ? (
                      <div className="text-black/60">{item.location}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-black/80" : "w-2.5 bg-black/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
