"use client";

import { useState, type ElementType } from "react";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  FileText,
  Landmark,
  ShieldCheck,
  X,
} from "lucide-react";

type LeapPackage = {
  name: string;
  category: string;
  price: string;
  icon: ElementType;
  badge?: string;
  summary: string;
  benefit: string;
  bestFor: string;
  highlights: string[];
  details: string[];
  featured?: boolean;
};

const PACKAGES: LeapPackage[] = [
  {
    name: "Basic",
    category: "BN / Enterprise",
    price: "₦40,500",
    icon: FileText,
    summary:
      "A simple entry package to get your business properly registered and tax-ready.",
    benefit:
      "Helps early founders secure core registration documents fast, so they can begin operations with more legitimacy and less delay.",
    bestFor:
      "Small starters, side hustles, solo founders, first-time entrepreneurs",
    highlights: [
      "CAC Certificate",
      "Status Report",
      "TIN Registration",
      "Soft copies only",
    ],
    details: [
      "CAC Certificate",
      "Status Report",
      "TIN Registration",
      "Soft copies only",
    ],
  },
  {
    name: "CEO Package",
    category: "BN / Enterprise",
    price: "₦68,000",
    icon: BadgeCheck,
    summary:
      "A stronger business starter pack that adds identity and operational support.",
    benefit:
      "Gives a founder more than registration alone by adding documents and presentation tools that improve credibility when dealing with clients, partners, and banks.",
    bestFor:
      "Business owners who want a more presentable and business-ready setup",
    highlights: [
      "CAC Certificate + TIN",
      "Letterhead Papers",
      "ID Card + CAC Frame",
      "Employer–Employee Documents",
    ],
    details: [
      "CAC Certificate",
      "Status Report",
      "TIN Registration",
      "Letter Head Papers (5)",
      "ID Card",
      "CAC Frame",
      "Employer-Employee Documents",
      "Bank Contacts for Account Opening",
      "Free Nationwide Delivery",
    ],
  },
  {
    name: "Start-Up Package",
    category: "BN / Enterprise",
    price: "₦87,500",
    icon: Briefcase,
    badge: "Popular for founders",
    featured: true,
    summary:
      "A practical startup launch package for founders who want to start and sell properly.",
    benefit:
      "Moves the business beyond registration into early market readiness with tools that support branding, sales, and operational confidence.",
    bestFor:
      "Startups preparing to launch, test offers, and begin customer acquisition",
    highlights: [
      "CAC Certificate + TIN",
      "Letterhead + ID Card",
      "Business Cards (100 copies)",
      "Sales Record Book",
    ],
    details: [
      "CAC Certificate",
      "Status Report",
      "TIN Registration",
      "Letter Head Papers (5)",
      "ID Card",
      "CAC Frame",
      "Glittering Business Cards (100 Copies)",
      "Sales Record Book",
      "Employer-Employee Documents",
      "Bank Contacts for Account Opening",
      "Free Nationwide Delivery",
    ],
  },
  {
    name: "Tax Compliance Package",
    category: "Tax / VAT Setup",
    price: "₦55,000",
    icon: ShieldCheck,
    summary:
      "A focused package for businesses that need tax identity and VAT compliance setup.",
    benefit:
      "Useful for businesses that want to work more confidently with structured clients, improve invoicing readiness, and reduce friction in compliance-related requests.",
    bestFor: "Registered businesses needing VAT and tax setup support",
    highlights: [
      "Validated FIRS TIN",
      "TaxPro Max Registration",
      "VAT Number",
      "VAT Certificate",
    ],
    details: [
      "Validated FIRS TIN",
      "Registration on TaxPro Max",
      "VAT Number",
      "VAT Certificate",
      "Promo pricing package",
    ],
  },
  {
    name: "Account Opening Package",
    category: "RC / LTD / LLC",
    price: "₦99,500",
    icon: Landmark,
    summary:
      "Built for companies that want the right documentation flow for bank account opening support.",
    benefit:
      "Helps formal companies appear more complete and better prepared for bank-facing processes and basic corporate documentation needs.",
    bestFor: "Registered companies preparing for structured banking setup",
    highlights: [
      "CAC Certificate + MEMART",
      "TIN Registration",
      "Company Seal",
      "Bank Opening Support Documents",
    ],
    details: [
      "CAC Certificate",
      "Status Report",
      "MEMART",
      "TIN Registration",
      "Letter Head Papers (5 Copies)",
      "Iron Company Seal",
      "Business Bank Contacts",
      "Board Resolution Template",
      "Reference Letter to banks",
      "Offer Letter",
      "Memo of Acceptance",
      "Free Nationwide Delivery",
    ],
  },
  {
    name: "Premium Package",
    category: "RC / LTD / LLC",
    price: "₦123,500",
    icon: Building2,
    summary:
      "A more complete company package for founders who want compliance and presentation tools together.",
    benefit:
      "Combines registration essentials with materials that support business operations, documentation, and early trust-building.",
    bestFor: "Growing companies that want to look structured from day one",
    highlights: [
      "CAC Certificate + MEMART",
      "TIN Registration",
      "Company Seal + Frame",
      "HR + Bank Support Documents",
    ],
    details: [
      "CAC Certificate",
      "Status Report",
      "MEMART",
      "TIN Registration",
      "Sales Record Book",
      "ID Card",
      "Letter Head Papers (5 Copies)",
      "CAC Frame",
      "Iron Company Seal",
      "Business Bank Contacts",
      "Employer-Employee Documents",
      "Free Nationwide Delivery",
    ],
  },
  {
    name: "Best Package",
    category: "RC / LTD / LLC",
    price: "₦250,500",
    icon: ShieldCheck,
    badge: "Complete coverage",
    summary:
      "A fuller business setup package covering company registration, tax, trademark, and branding support.",
    benefit:
      "Best for founders who want broader legal, compliance, and brand readiness in one move, especially when building for growth, visibility, and stronger market confidence.",
    bestFor:
      "Ambitious founders building a more complete, scalable company structure",
    highlights: [
      "CAC + MEMART + TIN",
      "Trademark Support",
      "VAT Number + VAT Certificate",
      "Logo + Business Cards",
    ],
    details: [
      "CAC Certificate",
      "Status Report",
      "MEMART",
      "Trademark Acknowledgement",
      "Trademark Acceptance",
      "TIN Registration",
      "Letter Head Papers (5 Copies)",
      "VAT Number",
      "VAT Certificate",
      "ID Card",
      "CAC Frame",
      "Iron Company Seal",
      "Company Logo",
      "Sales Record Book",
      "100 Business Cards",
      "Business Bank Contacts",
      "Employer-Employee Documents",
      "Free Nationwide Delivery",
    ],
  },
];

function PackageModal({
  item,
  onClose,
}: {
  item: LeapPackage | null;
  onClose: () => void;
}) {
  if (!item) return null;

  const Icon = item.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020714]/70 px-4 py-6 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-[#29BE3E]/20 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 transition hover:bg-black/5"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="border-b border-black/8 px-6 py-6 sm:px-8 sm:py-8">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#29BE3E]/10 text-[#29BE3E]">
            <Icon className="h-7 w-7" />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#29BE3E]">
                {item.category}
              </p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#0B1220] sm:text-[2.2rem]">
                {item.name}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4B5563] sm:text-base">
                {item.summary}
              </p>
            </div>

            <div className="rounded-2xl bg-[#29BE3E] px-5 py-3 text-white shadow-[0_14px_30px_rgba(41,190,62,0.22)]">
              <div className="text-xs uppercase tracking-[0.12em] text-white/80">
                Package Fee
              </div>
              <div className="text-3xl font-semibold tracking-[-0.04em]">
                {item.price}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h4 className="text-lg font-semibold text-[#0B1220]">
              What this package helps you achieve
            </h4>
            <p className="mt-3 text-sm leading-7 text-[#4B5563] sm:text-base">
              {item.benefit}
            </p>

            <div className="mt-6 rounded-2xl bg-[#F7FAF7] p-5">
              <p className="text-sm font-semibold text-[#0B1220]">Best for</p>
              <p className="mt-2 text-sm leading-7 text-[#4B5563]">
                {item.bestFor}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#0B1220]">
              Full package details
            </h4>
            <ul className="mt-4 space-y-3">
              {item.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm text-[#374151]"
                >
                  <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#29BE3E]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/8 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-xs leading-6 text-[#6B7280]">
            Package scope may vary based on business type, regulator
            requirements, or documentation needed.
          </p>

          <a
            href="/start-project"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#29BE3E] px-6 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:shadow-[0_14px_28px_rgba(41,190,62,0.22)]"
          >
            Start with Octalve Leap
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LeapPricingPackages() {
  const [activePackage, setActivePackage] = useState<LeapPackage | null>(null);

  return (
    <>
      <section
        id="leap"
        className="bg-[#F5F8F6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#29BE3E]/20 bg-[#29BE3E]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#29BE3E]">
              Pricing & Packages
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-[#0B1220] sm:text-5xl">
              Startup, registration, tax, and founder support packages built for
              serious growth
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5B6472] sm:text-base sm:leading-8">
              From business name registration to company setup, VAT readiness,
              bank-facing documents, and founder launch support, Octalve Leap
              helps businesses move from idea to structure with more clarity.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PACKAGES.map((item, index) => {
              const Icon = item.icon;
              const isLastOddCard = index === PACKAGES.length - 1;

              return (
                <article
                  key={item.name}
                  className={[
                    "group relative flex h-full flex-col overflow-hidden rounded-[30px] border bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-7",
                    item.featured
                      ? "border-[#29BE3E]/35 bg-[linear-gradient(180deg,rgba(41,190,62,0.07),rgba(255,255,255,1))]"
                      : "border-black/7",
                    isLastOddCard
                      ? "md:col-span-2 md:mx-auto md:max-w-[480px] xl:col-span-1 xl:col-start-2 xl:max-w-none"
                      : "",
                  ].join(" ")}
                >
                  {item.badge ? (
                    <div className="absolute right-5 top-5 rounded-full bg-[#29BE3E] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                      {item.badge}
                    </div>
                  ) : null}

                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#29BE3E]/10 text-[#29BE3E]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#29BE3E]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#0B1220]">
                      {item.name}
                    </h3>

                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-4xl font-semibold tracking-[-0.06em] text-[#0B1220]">
                        {item.price}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#596272]">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#F8FAF8] p-4">
                    <p className="text-sm font-semibold text-[#0B1220]">
                      Why it matters
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5B6472]">
                      {item.benefit}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold text-[#0B1220]">
                      Key inclusions
                    </p>

                    <ul className="mt-4 space-y-3">
                      {item.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-[#374151]"
                        >
                          <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#29BE3E]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-black/7 pt-5">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7A8290]">
                      Best for
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#596272]">
                      {item.bestFor}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={() => setActivePackage(item)}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#29BE3E]/20 bg-white px-5 text-sm font-semibold text-[#29BE3E] transition hover:bg-[#29BE3E]/6"
                    >
                      See details
                    </button>

                    <a
                      href="/start-project"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#29BE3E] px-5 text-sm font-semibold text-white transition hover:shadow-[0_14px_28px_rgba(41,190,62,0.22)]"
                    >
                      Get started
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-xs leading-6 text-[#6B7280] sm:text-sm">
              These packages are presented as structured business support
              options. Final requirements, regulator processes, and timelines
              may depend on the nature of the business, available documents, and
              applicable compliance needs.
            </p>
          </div>
        </div>
      </section>

      <PackageModal
        item={activePackage}
        onClose={() => setActivePackage(null)}
      />
    </>
  );
}
