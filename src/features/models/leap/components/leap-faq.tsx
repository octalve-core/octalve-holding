"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const LINKS = {
  startupSupport: "#",
  ideaValidation: "#",
  registration: "#",
  licensing: "#",
  compliance: "#",
  businessPlan: "#",
  pitchDeck: "#",
  fundingReadiness: "#",
  leadGeneration: "#",
  founderTraining: "#",
  monetization: "#",
  contact: "/start-a-project",
};

function FaqLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-[#29BE3E]/35 bg-[#29BE3E]/10 px-3 py-1 text-sm font-medium text-[#A7F3B2] transition hover:border-[#29BE3E]/55 hover:bg-[#29BE3E]/15 hover:text-white"
    >
      {children}
    </Link>
  );
}

function FaqLinksRow({
  items,
}: {
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-2.5">
      {items.map((item) => (
        <FaqLink key={item.label} href={item.href}>
          {item.label}
        </FaqLink>
      ))}
    </div>
  );
}

const faqs: FaqItem[] = [
  {
    question: "What is Octalve Leap?",
    answer: (
      <div className="space-y-4">
        <p>
          Octalve Leap is Octalve’s startup support, registration, licensing,
          and founder enablement arm. It helps founders and growing businesses
          move from confusion, delay, and weak structure to clearer setup,
          stronger compliance, and better readiness for growth.
        </p>

        <FaqLinksRow
          items={[
            { label: "Startup Support", href: LINKS.startupSupport },
            { label: "Registration", href: LINKS.registration },
            { label: "Licensing", href: LINKS.licensing },
            { label: "Compliance Support", href: LINKS.compliance },
            { label: "Founder Training", href: LINKS.founderTraining },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Who is Octalve Leap for?",
    answer: (
      <div className="space-y-4">
        <p>
          Octalve Leap is built for aspiring founders, early-stage startups,
          SMEs, business owners, and teams that need practical support to start,
          register, structure, and grow their business more confidently.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-white/80 marker:text-white/70">
          <li>People trying to turn an idea into a real business</li>
          <li>Founders who need business registration or licensing support</li>
          <li>Businesses trying to become more compliant and credible</li>
          <li>Startups preparing for funding, sales, or formal growth</li>
        </ul>

        <FaqLinksRow
          items={[
            { label: "Start a Project", href: LINKS.contact },
            { label: "Idea Validation", href: LINKS.ideaValidation },
            { label: "Funding Readiness", href: LINKS.fundingReadiness },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Can Octalve Leap help if I only have a business idea for now?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Octalve Leap can help you clarify the idea, test its direction,
          identify its commercial potential, and shape the next practical steps
          before you spend money in the wrong places. This is useful when you
          know you want to start, but you are not yet sure how to structure it.
        </p>

        <FaqLinksRow
          items={[
            { label: "Idea Validation", href: LINKS.ideaValidation },
            { label: "Startup Support", href: LINKS.startupSupport },
            { label: "Monetization Support", href: LINKS.monetization },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Do you help with business registration in Nigeria?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Octalve Leap supports founders and businesses that need guidance
          through registration and setup processes in Nigeria. The goal is to
          help you move with more clarity, reduce avoidable delay, and position
          your business more credibly for operations, banking, and growth.
        </p>

        <FaqLinksRow
          items={[
            { label: "Registration", href: LINKS.registration },
            { label: "Compliance Support", href: LINKS.compliance },
            { label: "Licensing", href: LINKS.licensing },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Can Octalve Leap help with licensing and compliance too?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Registration is only one part of starting well. Octalve Leap also
          helps businesses understand the wider compliance and licensing needs
          that may affect how they operate, present themselves, or prepare for
          opportunities.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-white/80 marker:text-white/70">
          <li>Licensing support where relevant</li>
          <li>Compliance guidance for more credible business setup</li>
          <li>Better readiness for partnerships, formal clients, and growth</li>
        </ul>

        <FaqLinksRow
          items={[
            { label: "Licensing", href: LINKS.licensing },
            { label: "Compliance Support", href: LINKS.compliance },
            { label: "Startup Support", href: LINKS.startupSupport },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Do you help founders prepare business plans and pitch decks?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Octalve Leap can support business plan development and pitch deck
          support for founders who need to communicate their idea more clearly,
          present their business more professionally, and improve readiness for
          funding or strategic conversations.
        </p>

        <FaqLinksRow
          items={[
            { label: "Business Plan", href: LINKS.businessPlan },
            { label: "Pitch Deck Support", href: LINKS.pitchDeck },
            { label: "Funding Readiness", href: LINKS.fundingReadiness },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Can Octalve Leap help me become funding-ready?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Funding readiness is not only about asking for money. It is about
          showing structure, clarity, commercial logic, and a business that
          looks serious enough to be considered. Octalve Leap helps founders get
          better prepared before they step into those conversations.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-white/80 marker:text-white/70">
          <li>Sharper business positioning</li>
          <li>Clearer documentation and founder communication</li>
          <li>Better readiness for investor or partner conversations</li>
          <li>Stronger business credibility and planning direction</li>
        </ul>

        <FaqLinksRow
          items={[
            { label: "Funding Readiness", href: LINKS.fundingReadiness },
            { label: "Pitch Deck Support", href: LINKS.pitchDeck },
            { label: "Business Plan", href: LINKS.businessPlan },
          ]}
        />
      </div>
    ),
  },
  {
    question:
      "Does Octalve Leap support lead generation and monetization setup?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Starting a business is not only about documents. Octalve Leap can
          also help founders think through monetization support and lead
          generation setup, so the business is not only registered, but also
          positioned to attract attention, generate enquiries, and move toward
          revenue.
        </p>

        <FaqLinksRow
          items={[
            { label: "Lead Generation Setup", href: LINKS.leadGeneration },
            { label: "Monetization Support", href: LINKS.monetization },
            { label: "Founder Training", href: LINKS.founderTraining },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Can Octalve Leap train or guide me as a founder?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Founder enablement is a core part of Octalve Leap. We help
          founders gain more clarity around business direction, structure,
          readiness, and growth decisions so they can move with less confusion
          and more intention.
        </p>

        <FaqLinksRow
          items={[
            { label: "Founder Training", href: LINKS.founderTraining },
            { label: "Startup Support", href: LINKS.startupSupport },
            { label: "Idea Validation", href: LINKS.ideaValidation },
          ]}
        />
      </div>
    ),
  },
  {
    question: "How do I get started with Octalve Leap?",
    answer: (
      <div className="space-y-4">
        <p>
          Start with the clearest need you have right now. That may be idea
          validation, registration, licensing, compliance support, business
          planning, funding readiness, lead generation setup, or founder
          guidance. From there, Octalve Leap can help shape the right path
          forward.
        </p>

        <FaqLinksRow
          items={[
            { label: "Start a Project", href: LINKS.contact },
            { label: "Registration", href: LINKS.registration },
            { label: "Business Plan", href: LINKS.businessPlan },
            { label: "Founder Training", href: LINKS.founderTraining },
          ]}
        />
      </div>
    ),
  },
];

export default function LeapFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#0A2411] text-white">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/65 sm:text-lg">
            Everything you need to know about startup support, idea validation,
            registration, licensing, compliance, founder enablement, and growth
            readiness on Octalve Leap.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl sm:mt-14 lg:mt-16">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border-t border-white/10 last:border-b"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 py-6 text-left sm:items-center sm:py-7"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-xl font-medium leading-snug text-white sm:text-2xl">
                    {index + 1}. {item.question}
                  </span>

                  <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center text-3xl font-light leading-none text-white/90 sm:mt-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pr-2 sm:pb-10">
                      <div className="max-w-4xl text-base leading-8 text-white/80 sm:text-lg">
                        {item.answer}
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
