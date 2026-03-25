"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const LINKS = {
  brandIdentity: "#",
  logoDesign: "#",
  webDesign: "#",
  webDevelopment: "#",
  appDesign: "#",
  appDevelopment: "#",
  uiuxDesign: "#",
  productDesign: "#",
  marketingCreatives: "#",
  ecommerce: "#",
  landingPages: "#",
  customSoftware: "#",
  contact: "/start-a-project",
};

function FaqLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-[#C24B5A]/35 bg-[#C24B5A]/10 px-3 py-1 text-sm font-medium text-[#F6B4BE] transition hover:border-[#C24B5A]/50 hover:bg-[#C24B5A]/15 hover:text-white"
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
    question: "What is Octalve Lab?",
    answer: (
      <div className="space-y-4">
        <p>
          Octalve Lab is Octalve’s design and product execution arm for brands,
          websites, apps, interfaces, digital assets, and custom product
          experiences. It helps businesses move from scattered ideas and weak
          presentation to clear, modern, conversion-focused digital execution.
        </p>

        <FaqLinksRow
          items={[
            { label: "Brand Identity", href: LINKS.brandIdentity },
            { label: "Web Design", href: LINKS.webDesign },
            { label: "Web Development", href: LINKS.webDevelopment },
            { label: "UI/UX Design", href: LINKS.uiuxDesign },
            { label: "Custom Software", href: LINKS.customSoftware },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Who is Octalve Lab for?",
    answer: (
      <div className="space-y-4">
        <p>
          Octalve Lab is built for founders, SMEs, startups, organizations, and
          growing brands that need stronger digital presentation, better user
          experience, and more effective execution across web, app, and product
          touchpoints.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-white/80 marker:text-white/70">
          <li>Businesses launching a new brand or digital product</li>
          <li>Brands with outdated websites or weak online presentation</li>
          <li>Teams that need better user experience and clearer journeys</li>
          <li>
            Organizations looking to improve trust, conversion, and usability
          </li>
        </ul>

        <FaqLinksRow
          items={[
            { label: "Start a Project", href: LINKS.contact },
            { label: "Brand Identity", href: LINKS.brandIdentity },
            { label: "Product Design", href: LINKS.productDesign },
          ]}
        />
      </div>
    ),
  },
  {
    question:
      "Can Octalve Lab help if my brand looks inconsistent or outdated?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. One of the biggest reasons businesses struggle to gain trust
          online is inconsistent branding. Octalve Lab helps refine your visual
          identity so your brand looks clearer, more credible, and more aligned
          across logo, colors, design direction, and digital assets.
        </p>

        <FaqLinksRow
          items={[
            { label: "Brand Identity Design", href: LINKS.brandIdentity },
            { label: "Logo Design", href: LINKS.logoDesign },
            { label: "Marketing Creatives", href: LINKS.marketingCreatives },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Do you only design websites, or do you also build them?",
    answer: (
      <div className="space-y-4">
        <p>
          Octalve Lab can support both design and development. That means we do
          not stop at visuals alone. We can structure the experience, design the
          pages, and build the website so the final output is usable, modern,
          responsive, and ready for real business use.
        </p>

        <FaqLinksRow
          items={[
            { label: "Web Design", href: LINKS.webDesign },
            { label: "Web Development", href: LINKS.webDevelopment },
            { label: "Landing Pages", href: LINKS.landingPages },
          ]}
        />
      </div>
    ),
  },
  {
    question:
      "Can you redesign my current website or app instead of starting from scratch?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. If your current website or app already exists but feels weak,
          outdated, confusing, or underperforming, Octalve Lab can redesign the
          experience and improve the structure without forcing you to throw away
          the whole idea. The goal is to remove friction and improve how users
          interact with your business.
        </p>

        <FaqLinksRow
          items={[
            { label: "UI/UX Design", href: LINKS.uiuxDesign },
            { label: "Web Design", href: LINKS.webDesign },
            { label: "App Design", href: LINKS.appDesign },
          ]}
        />
      </div>
    ),
  },
  {
    question: "What kind of app and product work does Octalve Lab handle?",
    answer: (
      <div className="space-y-4">
        <p>
          Octalve Lab supports app design, app development, UI/UX design, and
          broader product design work. This is useful for businesses building a
          mobile app, digital platform, SaaS flow, client portal, internal tool,
          or product interface that must feel intuitive and commercially sound.
        </p>

        <FaqLinksRow
          items={[
            { label: "App Design", href: LINKS.appDesign },
            { label: "App Development", href: LINKS.appDevelopment },
            { label: "Product Design", href: LINKS.productDesign },
            { label: "Custom Software", href: LINKS.customSoftware },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Can Octalve Lab help improve conversion, leads, or sales?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Good design is not only about beauty. It is about clarity, trust,
          user flow, and decision-making. Octalve Lab helps businesses reduce
          confusion, improve presentation, and guide visitors more effectively
          toward enquiry, signup, booking, or purchase.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-white/80 marker:text-white/70">
          <li>Sharper brand perception and stronger first impressions</li>
          <li>Clearer user journeys and reduced drop-off</li>
          <li>Landing pages built for focused campaign conversion</li>
          <li>E-commerce experiences that support smoother buying decisions</li>
        </ul>

        <FaqLinksRow
          items={[
            { label: "Landing Pages", href: LINKS.landingPages },
            { label: "E-commerce Development", href: LINKS.ecommerce },
            { label: "Web Design", href: LINKS.webDesign },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Do you create digital marketing creatives too?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Octalve Lab also supports digital marketing creatives for
          campaigns, social promotions, launch assets, and branded visual
          communication. This helps your marketing look stronger, more cohesive,
          and better positioned to stop attention and communicate value fast.
        </p>

        <FaqLinksRow
          items={[
            { label: "Marketing Creatives", href: LINKS.marketingCreatives },
            { label: "Brand Identity", href: LINKS.brandIdentity },
            { label: "Landing Pages", href: LINKS.landingPages },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Can Octalve Lab build online stores and custom digital systems?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Octalve Lab can support e-commerce development and custom
          software builds for businesses that need more than a simple brochure
          site. This is useful when your operations, sales process, product
          flow, or internal workflow need a more tailored digital experience.
        </p>

        <FaqLinksRow
          items={[
            { label: "E-commerce Development", href: LINKS.ecommerce },
            { label: "Custom Software", href: LINKS.customSoftware },
            { label: "Web Development", href: LINKS.webDevelopment },
          ]}
        />
      </div>
    ),
  },
  {
    question: "How do I get started with Octalve Lab?",
    answer: (
      <div className="space-y-4">
        <p>
          Start by identifying the clearest need in your business right now:
          brand identity, logo, website, landing page, app, UI/UX improvement,
          e-commerce, or custom product work. From there, Octalve Lab can help
          shape the right direction and move the project into structured
          execution.
        </p>

        <FaqLinksRow
          items={[
            { label: "Start a Project", href: LINKS.contact },
            { label: "Brand Identity", href: LINKS.brandIdentity },
            { label: "Web Design", href: LINKS.webDesign },
            { label: "Custom Software", href: LINKS.customSoftware },
          ]}
        />
      </div>
    ),
  },
];

export default function LabFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#22070B] text-white">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/65 sm:text-lg">
            Everything you need to know about branding, websites, apps, UI/UX,
            digital creatives, e-commerce, and product execution on Octalve Lab.
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
