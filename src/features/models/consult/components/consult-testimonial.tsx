"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const BRAND = {
  blue: "#0064E0",
  red: "#E61525",
  green: "#29BE3E",
  orange: "#FC7E24",
  lilac: "#E8DFF6",
  lilacCard: "#E4D8F4",
  lilacSoft: "#F4EEFC",
  ink: "#0F172A",
  text: "#475569",
  border: "#DCD3EA",
  purple: "#5C3E93",
  purpleDeep: "#3F1D86",
};

type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Octalve Consult helped me move from scattered ideas to a clearer personal brand and business direction. I stopped overthinking every step and started making decisions with more confidence.",
    name: "Amina Yusuf",
    role: "Personal Brand Strategy Client",
  },
  {
    quote:
      "What stood out for me was the clarity. My offer became easier to explain, my sales conversations improved, and I finally understood how to package what I do in a way people could actually buy.",
    name: "David Eze",
    role: "Offer & Sales Blueprint Client",
  },
  {
    quote:
      "Before working with Octalve Consult, the business felt too dependent on me. The structure and workflow guidance made things more organized and easier to manage without constant confusion.",
    name: "Esther Michael",
    role: "Business Structure Setup Client",
  },
  {
    quote:
      "I had the idea, but I did not know how to start properly. The launch roadmap gave me practical direction, helped me focus on what mattered first, and removed a lot of uncertainty.",
    name: "Daniel Okoro",
    role: "Startup Launch Roadmap Client",
  },
];

export default function ConsultTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = TESTIMONIALS[activeIndex];

  const initials = useMemo(() => {
    return activeItem.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, [activeItem.name]);

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? TESTIMONIALS.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      current === TESTIMONIALS.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: BRAND.lilac,
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
        backgroundSize: "100px 100px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div
          className="mx-auto max-w-5xl rounded-[30px] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14"
          style={{
            backgroundColor: "rgba(255,255,255,0.16)",
            boxShadow: "0 24px 70px rgba(15, 23, 42, 0.05)",
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[1.25rem]">
              Stories from people we have helped get clearer and move better
            </h2>
          </div>

          <div className="mt-7 flex justify-center gap-2 sm:mt-8 sm:justify-end">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md transition hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(63,29,134,0.16)",
                color: "#FFFFFF",
              }}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md transition hover:-translate-y-0.5"
              style={{
                backgroundColor: BRAND.purpleDeep,
                color: "#FFFFFF",
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div
            className="mt-6 rounded-[28px] px-6 py-7 sm:px-8 sm:py-9 lg:mt-7 lg:px-12 lg:py-11"
            style={{ backgroundColor: BRAND.lilacCard }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-10">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative flex h-[148px] w-[148px] items-center justify-center rounded-[28px] bg-white/70 shadow-[0_16px_36px_rgba(15,23,42,0.06)] sm:h-[164px] sm:w-[164px]">
                  <div
                    className="absolute inset-x-4 inset-y-4 rounded-[24px]"
                    style={{ backgroundColor: BRAND.lilacSoft }}
                  />
                  <div
                    className="absolute flex h-24 w-24 items-center justify-center rounded-full text-2xl font-semibold sm:h-28 sm:w-28 sm:text-[1.9rem]"
                    style={{ backgroundColor: BRAND.orange, color: BRAND.ink }}
                  >
                    {initials}
                  </div>
                  <Quote
                    className="absolute left-3 top-3 h-5 w-5"
                    style={{ color: BRAND.purple }}
                  />
                  <Quote
                    className="absolute bottom-3 right-3 h-5 w-5 rotate-180"
                    style={{ color: BRAND.purple }}
                  />
                </div>

                <div className="mt-5 max-w-[220px] lg:mt-6">
                  <div
                    className="text-xl font-medium tracking-tight sm:text-[1.4rem]"
                    style={{ color: BRAND.purple }}
                  >
                    {activeItem.name}
                  </div>
                  <div
                    className="mt-2 text-base leading-7"
                    style={{ color: BRAND.ink }}
                  >
                    {activeItem.role}
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-10">
                <div
                  className="absolute left-0 top-1 hidden h-[210px] w-px lg:block"
                  style={{ backgroundColor: "rgba(63,29,134,0.45)" }}
                />
                <div className="absolute -left-[17px] top-[76px] hidden lg:block">
                  <svg width="24" height="84" viewBox="0 0 24 84" fill="none">
                    <path
                      d="M22 1V37L8 53V83"
                      stroke="#5C3E93"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div
                  key={activeIndex}
                  className="animate-[testimonialFade_.45s_ease]"
                >
                  <p className="text-[1.5rem] font-normal leading-[1.9] tracking-[-0.01em] text-slate-950 sm:text-[1.9rem] lg:text-[1.15rem]">
                    “{activeItem.quote}”
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
                  {TESTIMONIALS.map((_, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: isActive ? 24 : 8,
                          height: 8,
                          backgroundColor: isActive
                            ? BRAND.purpleDeep
                            : "rgba(63,29,134,0.18)",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonialFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
