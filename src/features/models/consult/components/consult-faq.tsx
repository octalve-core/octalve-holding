"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleMore } from "lucide-react";

const BRAND = {
  blue: "#0064E0",
  red: "#E61525",
  green: "#29BE3E",
  orange: "#FC7E24",
  text: "#334155",
  ink: "#0F172A",
  border: "#E6EAF2",
  lilac: "#E8DFF6",
};

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "What is Octalve Consult?",
    answer:
      "Octalve Consult is the strategy and advisory arm of Octalve built to help founders, professionals, and growing businesses gain clarity, organize their ideas, and move forward with more confidence. It is designed around real business needs like positioning, offer clarity, structure, launch direction, and growth planning.",
  },
  {
    question: "Who is Octalve Consult for?",
    answer:
      "Octalve Consult is for professionals building their personal brand, final-year students and first-time founders trying to start well, service businesses refining what they sell, and small businesses that need better structure, workflow, and direction for growth.",
  },
  {
    question: "What services can I get from Octalve Consult?",
    answer:
      "The core consulting offers include Personal Brand Strategy, Startup Launch Roadmap, Offer & Sales Blueprint, and Business Structure Setup. Each one is designed to solve a different kind of confusion, from weak positioning and unclear offers to messy business systems and uncertain next steps.",
  },
  {
    question: "How do I know which package is right for me?",
    answer:
      "That depends on the kind of challenge you are facing. If people do not understand what you do, Personal Brand Strategy is usually the right fit. If you want to start a business but feel confused, Startup Launch Roadmap is stronger. If you are struggling to sell clearly, Offer & Sales Blueprint fits better. If the business feels scattered, Business Structure Setup is usually the better option.",
  },
  {
    question: "Will I get practical steps or just advice?",
    answer:
      "You will get practical direction, not just broad ideas. Octalve Consult is built to give you clearer decisions, structured next steps, and guidance you can actually use to improve how you position, launch, sell, or organize your business.",
  },
  {
    question: "Can Octalve Consult help if I am just starting out?",
    answer:
      "Yes. In fact, it is especially useful for people at the early stage who want to avoid moving in the wrong direction. It helps you get clearer on your business idea, audience, offer, and launch path before you waste too much time or effort.",
  },
  {
    question: "Can Octalve also support implementation after consulting?",
    answer:
      "Yes. After consulting, there can be natural next steps into branding, websites, product presentation, systems, or digital execution depending on what your business needs. That makes it easier to move from strategy into actual implementation when needed.",
  },
  {
    question: "How do I get started with Octalve Consult?",
    answer:
      "The best starting point is to book a Clarity Session. That gives you a focused entry into the process so your current challenge can be reviewed properly and matched with the right consulting direction or package.",
  },
];

export default function ConsultFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700">
            <MessageCircleMore className="h-6 w-6" />
          </div>

          <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: BRAND.text }}
          >
            Clear answers to common questions about how Octalve Consult works,
            who it is for, and how to get started.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[18px] border bg-white transition-all duration-300"
                style={{
                  borderColor: isOpen ? `${BRAND.blue}55` : BRAND.border,
                  boxShadow: isOpen
                    ? "0 18px 48px rgba(0, 100, 224, 0.08)"
                    : "0 8px 24px rgba(15, 23, 42, 0.04)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                >
                  <div className="pr-4">
                    <div
                      className="text-lg font-medium leading-7 sm:text-[1.35rem]"
                      style={{ color: isOpen ? BRAND.blue : BRAND.ink }}
                    >
                      {index + 1}. {item.question}
                    </div>
                  </div>

                  <span
                    className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300"
                    style={{
                      borderColor: isOpen ? `${BRAND.blue}30` : BRAND.border,
                      backgroundColor: isOpen ? `${BRAND.blue}12` : "#FFFFFF",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown
                      className="h-4 w-4"
                      style={{ color: isOpen ? BRAND.blue : BRAND.ink }}
                    />
                  </span>
                </button>

                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <div
                        className="rounded-[16px] border px-4 py-4 sm:px-5"
                        style={{
                          borderColor: `${BRAND.blue}18`,
                          background:
                            "linear-gradient(180deg, rgba(0,100,224,0.03) 0%, rgba(255,255,255,1) 100%)",
                        }}
                      >
                        <p
                          className="text-sm leading-7 sm:text-base"
                          style={{ color: BRAND.text }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
