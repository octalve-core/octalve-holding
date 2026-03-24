"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const LINKS = {
  domain: "#",
  webHosting: "#",
  email: "#",
  sslSecurity: "#",
  server: "#",
  migration: "#",
  wordpressHosting: "#",
};

function FaqLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-[#0064E0]/30 bg-[#0064E0]/10 px-3 py-1 text-sm font-medium text-[#7DB5FF] transition hover:border-[#0064E0]/50 hover:bg-[#0064E0]/15 hover:text-white"
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
    question: "What is Octalve Cloud?",
    answer: (
      <div className="space-y-4">
        <p>
          Octalve Cloud is Octalve’s digital infrastructure platform for domain
          registration, web hosting, business email, SSL/security, server
          solutions, WordPress hosting, and migration support. It helps
          businesses launch faster, operate more professionally, and scale with
          confidence.
        </p>

        <FaqLinksRow
          items={[
            { label: "Domain Registration", href: LINKS.domain },
            { label: "Web Hosting", href: LINKS.webHosting },
            { label: "Email", href: LINKS.email },
            { label: "SSL / Security", href: LINKS.sslSecurity },
            { label: "Server", href: LINKS.server },
            { label: "Migration", href: LINKS.migration },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Can I register a new domain through Octalve Cloud?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. You can search for available domain names, register a new domain,
          and secure the right online identity for your brand or project through
          Octalve Cloud.
        </p>

        <FaqLinksRow
          items={[
            { label: "Search / Register Domain", href: LINKS.domain },
            { label: "Add Web Hosting", href: LINKS.webHosting },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Can you help me transfer my existing domain or website?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Octalve Cloud can help you move your domain, website, or both
          from another provider with minimal disruption.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-white/80 marker:text-white/70">
          <li>Domain transfer support from your current registrar</li>
          <li>Website migration to a new hosting environment</li>
          <li>Email and DNS guidance during the move</li>
          <li>Reduced downtime planning for live businesses</li>
        </ul>

        <FaqLinksRow
          items={[
            { label: "Migration Support", href: LINKS.migration },
            { label: "Transfer Domain", href: LINKS.domain },
            { label: "Choose Hosting", href: LINKS.webHosting },
          ]}
        />
      </div>
    ),
  },
  {
    question: "What hosting options are available on Octalve Cloud?",
    answer: (
      <div className="space-y-4">
        <p>Octalve Cloud supports different hosting needs, including:</p>

        <ul className="list-disc space-y-2 pl-5 text-white/80 marker:text-white/70">
          <li>Shared hosting for simple business websites</li>
          <li>WordPress hosting for content-driven sites</li>
          <li>Business hosting for growing brands and SMEs</li>
          <li>Server solutions for advanced or high-demand projects</li>
        </ul>

        <FaqLinksRow
          items={[
            { label: "Web Hosting", href: LINKS.webHosting },
            { label: "WordPress Hosting", href: LINKS.wordpressHosting },
            { label: "Server", href: LINKS.server },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Do I need a professional email for my business?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. A professional email address strengthens your business image and
          makes communication more trustworthy.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-white/80 marker:text-white/70">
          <li>
            <strong className="text-white">Credibility:</strong> Looks more
            professional than a generic free email
          </li>
          <li>
            <strong className="text-white">Branding:</strong> Reinforces your
            business identity with every message
          </li>
          <li>
            <strong className="text-white">Security:</strong> Better control and
            protection for company communication
          </li>
          <li>
            <strong className="text-white">Consistency:</strong> Keeps your team
            and business communication organized
          </li>
        </ul>

        <FaqLinksRow
          items={[
            { label: "Business Email", href: LINKS.email },
            { label: "Secure with SSL", href: LINKS.sslSecurity },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Does Octalve Cloud provide SSL and website security?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Octalve Cloud supports SSL and security solutions that help
          protect your site, encrypt visitor data, and improve trust. This is
          especially important for business websites, online forms, payments,
          and customer portals.
        </p>

        <FaqLinksRow
          items={[
            { label: "SSL / Security", href: LINKS.sslSecurity },
            { label: "Protect Your Hosting", href: LINKS.webHosting },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Can I host my WordPress website on Octalve Cloud?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Octalve Cloud supports WordPress hosting for businesses, blogs,
          portfolios, and company websites. It is suitable for users who want a
          reliable and easier-to-manage setup for WordPress.
        </p>

        <FaqLinksRow
          items={[
            { label: "WordPress Hosting", href: LINKS.wordpressHosting },
            { label: "Domain Registration", href: LINKS.domain },
          ]}
        />
      </div>
    ),
  },
  {
    question:
      "Can Octalve Cloud support growing businesses and high-traffic projects?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. As your business grows, Octalve Cloud can support you with
          stronger infrastructure options, better performance, added security,
          and more scalable server resources depending on your project needs.
        </p>

        <FaqLinksRow
          items={[
            { label: "Server Solutions", href: LINKS.server },
            { label: "Scale Hosting", href: LINKS.webHosting },
            { label: "Improve Security", href: LINKS.sslSecurity },
          ]}
        />
      </div>
    ),
  },
  {
    question: "Do you offer migration, setup, and technical support?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Octalve Cloud can assist with onboarding, setup guidance, domain
          connection, hosting deployment, and migration-related support so you
          can move faster without unnecessary technical stress.
        </p>

        <FaqLinksRow
          items={[
            { label: "Migration", href: LINKS.migration },
            { label: "Connect Domain", href: LINKS.domain },
            { label: "Launch Hosting", href: LINKS.webHosting },
          ]}
        />
      </div>
    ),
  },
  {
    question: "How do I get started with Octalve Cloud?",
    answer: (
      <div className="space-y-4">
        <p>
          Start by choosing what you need first: a domain, hosting plan,
          business email, SSL/security, server, or migration support. From
          there, you can set up your infrastructure step by step and grow into
          additional services as your business expands.
        </p>

        <FaqLinksRow
          items={[
            { label: "Start with a Domain", href: LINKS.domain },
            { label: "Choose Hosting", href: LINKS.webHosting },
            { label: "Set Up Email", href: LINKS.email },
            { label: "Need Migration?", href: LINKS.migration },
          ]}
        />
      </div>
    ),
  },
];

export default function CloudFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#000A16] text-white">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/65 sm:text-lg">
            Everything you need to know about domains, hosting, email, security,
            servers, WordPress, and migration on Octalve Cloud.
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
