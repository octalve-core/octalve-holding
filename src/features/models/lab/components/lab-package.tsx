"use client";

import { useMemo, useState, type ElementType } from "react";
import {
  Globe,
  LayoutTemplate,
  MonitorSmartphone,
  Package2,
  Palette,
  PenTool,
  Rocket,
  Sparkles,
  X,
} from "lucide-react";

type LabPackageGroup = "branding" | "website";

type LabPackage = {
  name: string;
  group: LabPackageGroup;
  category: string;
  investment: string;
  delivery: string;
  icon: ElementType;
  badge?: string;
  summary: string;
  benefit: string;
  bestFor: string;
  highlights: string[];
  details: string[];
  featured?: boolean;
};

const BRANDING_PACKAGES: LabPackage[] = [
  {
    name: "Starter Branding Plan",
    group: "branding",
    category: "Brand Identity",
    investment: "₦70,000",
    delivery: "Fast-track delivery available",
    icon: PenTool,
    summary:
      "A clean starter branding package built to give a business a credible visual identity and the essentials needed to start showing up professionally.",
    benefit:
      "Helps early-stage businesses stop looking inconsistent by giving them a proper logo, brand direction, and core branded materials they can begin using immediately.",
    bestFor:
      "New businesses, lean startups, solo founders, side ventures, first-time brand launches",
    highlights: [
      "Logo creation + presentation",
      "Brand voice direction",
      "Brand guide + style guide",
      "Business card + letterhead",
    ],
    details: [
      "Logo Creation",
      "Logo Presentation",
      "Brand Voice",
      "Comprehensive Brand Guide",
      "Style Guide",
      "Typography",
      "High-Resolution Files (JPG and PNG)",
      "Letterhead Design",
      "Business Card Design",
      "3 Mockup Designs",
    ],
  },
  {
    name: "Pro-Biz Branding Plan",
    group: "branding",
    category: "Brand Identity",
    investment: "₦120,000",
    delivery: "Structured brand rollout",
    icon: Sparkles,
    badge: "Most selected",
    featured: true,
    summary:
      "A stronger branding package for businesses that need a more complete visual system across brand, stationery, and social assets.",
    benefit:
      "Moves your business beyond just having a logo into having a clearer brand system that feels more polished, more usable, and more ready for market visibility.",
    bestFor:
      "Growing brands, service businesses, founder-led businesses, businesses preparing for stronger marketing",
    highlights: [
      "Everything in Starter",
      "Social covers + highlights",
      "Email header illustrations",
      "PowerPoint slide template",
    ],
    details: [
      "Logo Creation",
      "Detailed Logo Presentation",
      "Brand Voice",
      "Comprehensive Brand Guide",
      "Style Guide",
      "Typography",
      "High-Resolution Files (JPG, PNG, SVG)",
      "Letterhead Design",
      "Business Card Design",
      "Instagram Highlight Assets",
      "Social Media Page Covers (Facebook, Twitter, WhatsApp)",
      "Email Templates / Header Illustrations",
      "PowerPoint Slide Template",
      "3 Mockup Designs",
    ],
  },
  {
    name: "Advance Branding Plan",
    group: "branding",
    category: "Brand Identity",
    investment: "₦150,000",
    delivery: "Premium brand system build",
    icon: Package2,
    badge: "Full brand suite",
    summary:
      "A premium branding package for businesses that need deeper brand strategy, richer visual applications, and broader brand usage support.",
    benefit:
      "Best for businesses that want a more complete identity system they can apply across digital, print, packaging, partnerships, and wider customer touchpoints.",
    bestFor:
      "Scaling brands, premium businesses, product businesses, businesses preparing for partnerships or serious market expansion",
    highlights: [
      "Everything in Pro-Biz",
      "Soft profile + brand personality",
      "Packaging + brochure layout",
      "Signage + optional logo animation",
    ],
    details: [
      "Logo Creation",
      "Detailed Logo Presentation",
      "Brand Voice",
      "Soft Profile",
      "Comprehensive Brand Personality & Voice",
      "Comprehensive Brand Guide",
      "Style Guide",
      "Typography",
      "High-Resolution Files (JPG, PNG, SVG)",
      "Letterhead Design",
      "Business Card Design",
      "Instagram Highlight Assets",
      "Social Media Page Covers (Facebook, Twitter, WhatsApp)",
      "Website Logo Usage Guide",
      "Partnership Usage Guide",
      "Packaging Design",
      "Email Templates / Header Illustrations",
      "PowerPoint Slide Template",
      "Brochure Grid and Layout",
      "Unique Signage Design",
      "Logo Animation (Optional)",
      "6 Mockup Designs",
    ],
  },
];

const WEBSITE_PACKAGES: LabPackage[] = [
  {
    name: "Starter Website Plan",
    group: "website",
    category: "Sales Website",
    investment: "₦200,500",
    delivery: "3–5 working days",
    icon: LayoutTemplate,
    summary:
      "A fast, clean website package built for businesses that need a solid online presence without overcomplicating the first launch.",
    benefit:
      "Helps a business get online with a clear structure, responsive layout, and core contact tools so customers can find, trust, and reach the business more easily.",
    bestFor:
      "Small businesses, lean teams, service providers, early-stage brands that need a solid first website",
    highlights: [
      "5-page website",
      "Custom domain",
      "Responsive design",
      "Live chat + contact form",
    ],
    details: [
      "5-page Website",
      "Home",
      "About",
      "Services",
      "Contact",
      "Blog",
      "Custom Domain Name",
      "Basic Design and Layout",
      "Mobile-Friendly Responsive Design",
      "Contact Form and Map Locator",
      "1 Email Account",
      "Live Chat Integration",
      "1-month Website Maintenance and Support",
      "Fast Loading Speeds",
      "Delivery Time: 3–5 Working Days",
    ],
  },
  {
    name: "Pro-Biz Website Plan",
    group: "website",
    category: "Sales Website",
    investment: "₦280,000",
    delivery: "7–10 working days",
    icon: Globe,
    badge: "Growth-ready",
    featured: true,
    summary:
      "A more complete business website package for companies that need stronger presentation, more pages, better visibility, and better digital functionality.",
    benefit:
      "Gives your business a more scalable online system with stronger content capacity, SEO support, social integration, and room to communicate your offer better.",
    bestFor:
      "Growing businesses, established service brands, businesses ready to market more actively online",
    highlights: [
      "10-page website",
      "Advanced SEO",
      "10 email accounts",
      "6-month maintenance",
    ],
    details: [
      "10-page Website",
      "Home",
      "About",
      "Services",
      "Contact",
      "Blog",
      "5 Additional Pages",
      "Custom Domain Name",
      "Premium Design and Layout",
      "Mobile-Friendly Responsive Design",
      "Contact Form and Map Locator",
      "10 Email Accounts",
      "Live Chat Integration",
      "6-month Website Maintenance and Support",
      "Advanced SEO (Search Engine Optimization)",
      "Social Media Integration",
      "Galleries",
      "Fast Loading Speeds",
      "Delivery Time: 7–10 Working Days",
    ],
  },
  {
    name: "Advance Website Plan",
    group: "website",
    category: "Sales & AI Website",
    investment: "₦450,000",
    delivery: "14–21 working days",
    icon: MonitorSmartphone,
    badge: "Premium build",
    summary:
      "A high-capacity website package for businesses that need deeper functionality, AI-assisted engagement, e-commerce support, and a more serious digital growth system.",
    benefit:
      "Best for businesses that want their website to work as more than an online brochure by supporting sales, appointments, trust signals, payment, content, and reporting.",
    bestFor:
      "Ambitious businesses, product-based businesses, service brands with complex offers, businesses scaling into stronger online sales",
    highlights: [
      "Custom website build",
      "AI live chat integration",
      "Appointments + trust badges",
      "E-commerce + reports",
    ],
    details: [
      "Custom-Designed Website",
      "Home",
      "About",
      "Services",
      "Contact",
      "Blog / News",
      "Up to 30 Additional Pages",
      "Custom Domain Name",
      "Premium Design and Layout",
      "Mobile-Friendly Responsive Design",
      "Contact Form and Map Locator",
      "Unlimited Email Accounts",
      "AI Live Chat Integration",
      "Meeting or Appointment Schedule",
      "Verified Reviews / Trust Badges Live Update",
      "1-year Website Maintenance and Support",
      "Advanced SEO (Search Engine Optimization)",
      "Social Media Integration",
      "E-commerce Integration (Online Store)",
      "Blogging Capabilities",
      "High-Resolution Galleries",
      "Super-Fast Loading Speeds",
      "Secure Payment Gateway",
      "Monthly Website Performance Reports and Analysis",
      "Delivery Time: 14–21 Working Days",
    ],
  },
];

const ALL_PACKAGES = [...BRANDING_PACKAGES, ...WEBSITE_PACKAGES];

function PackageModal({
  item,
  onClose,
}: {
  item: LabPackage | null;
  onClose: () => void;
}) {
  if (!item) return null;

  const Icon = item.icon;
  const isWebsite = item.group === "website";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020714]/70 px-4 py-6 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-[#E61525]/20 bg-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 transition hover:bg-black/5"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="border-b border-black/8 px-6 py-6 sm:px-8 sm:py-8">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E61525]/10 text-[#E61525]">
            <Icon className="h-7 w-7" />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#E61525]">
                {item.category}
              </p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#0B1220] sm:text-[2.2rem]">
                {item.name}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4B5563] sm:text-base">
                {item.summary}
              </p>
            </div>

            <div className="rounded-2xl bg-[#E61525] px-5 py-3 text-white">
              <div className="text-xs uppercase tracking-[0.12em] text-white/80">
                {isWebsite ? "Website Investment" : "Branding Investment"}
              </div>
              <div className="text-3xl font-semibold tracking-[-0.04em]">
                {item.investment}
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

            <div className="mt-6 rounded-2xl bg-[#FFF6F7] p-5">
              <p className="text-sm font-semibold text-[#0B1220]">Best for</p>
              <p className="mt-2 text-sm leading-7 text-[#4B5563]">
                {item.bestFor}
              </p>
            </div>

            <div className="mt-4 rounded-2xl bg-[#FAFAFA] p-5">
              <p className="text-sm font-semibold text-[#0B1220]">
                Typical turnaround
              </p>
              <p className="mt-2 text-sm leading-7 text-[#4B5563]">
                {item.delivery}
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
                  <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#E61525]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/8 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-xs leading-6 text-[#6B7280]">
            Scope, timeline, and final delivery may vary slightly based on
            business needs, content readiness, and requested functionality.
          </p>

          <a
            href="/start-project"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#E61525] px-6 text-sm font-semibold text-white transition hover:bg-[#c81421]"
          >
            Start with Octalve Lab
          </a>
        </div>
      </div>
    </div>
  );
}

function PackageTabs({
  activeGroup,
  onChange,
}: {
  activeGroup: LabPackageGroup;
  onChange: (group: LabPackageGroup) => void;
}) {
  return (
    <div className="mt-10 flex justify-center">
      <div className="inline-flex w-full max-w-[520px] rounded-full border border-[#E61525]/12 bg-white p-1">
        <button
          type="button"
          onClick={() => onChange("branding")}
          className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold transition ${
            activeGroup === "branding"
              ? "bg-[#E61525] text-white"
              : "text-[#475569] hover:bg-[#FFF5F5]"
          }`}
        >
          Branding Plans
        </button>

        <button
          type="button"
          onClick={() => onChange("website")}
          className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold transition ${
            activeGroup === "website"
              ? "bg-[#E61525] text-white"
              : "text-[#475569] hover:bg-[#FFF5F5]"
          }`}
        >
          Website Plans
        </button>
      </div>
    </div>
  );
}

export default function LabPricingPackages() {
  const [activeGroup, setActiveGroup] = useState<LabPackageGroup>("branding");
  const [activePackage, setActivePackage] = useState<LabPackage | null>(null);

  const visiblePackages = useMemo(
    () => ALL_PACKAGES.filter((item) => item.group === activeGroup),
    [activeGroup],
  );

  return (
    <>
      <section
        id="lab"
        className="bg-[#FBF7F7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#E61525]/20 bg-[#E61525]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E61525]">
              Pricing & Packages
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-[#0B1220] sm:text-5xl">
              Branding and website packages built to help businesses look
              sharper, sell better, and grow with more confidence
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5B6472] sm:text-base sm:leading-8">
              From brand identity systems to sales-ready websites, Octalve Lab
              helps businesses build the visual credibility and digital
              experience needed to attract trust and convert attention.
            </p>
          </div>

          <PackageTabs activeGroup={activeGroup} onChange={setActiveGroup} />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePackages.map((item) => {
              const Icon = item.icon;
              const isBranding = item.group === "branding";

              return (
                <article
                  key={item.name}
                  className={[
                    "group relative flex h-full flex-col overflow-hidden rounded-[30px] border bg-white p-6 transition duration-300 hover:-translate-y-1 sm:p-7",
                    item.featured
                      ? "border-[#E61525]/30 bg-[linear-gradient(180deg,rgba(230,21,37,0.06),rgba(255,255,255,1))]"
                      : "border-black/7",
                  ].join(" ")}
                >
                  {item.badge ? (
                    <div className="absolute right-5 top-5 rounded-full bg-[#E61525] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                      {item.badge}
                    </div>
                  ) : null}

                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E61525]/10 text-[#E61525]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E61525]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#0B1220]">
                      {item.name}
                    </h3>

                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-4xl font-semibold tracking-[-0.06em] text-[#0B1220]">
                        {item.investment}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#8A94A6]">
                      {item.delivery}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#596272]">
                      {item.summary}
                    </p>
                  </div>

                  <div
                    className="mt-6 rounded-2xl p-4"
                    style={{ backgroundColor: "#FFF7F7" }}
                  >
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
                          <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#E61525]" />
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
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#E61525]/20 bg-white px-5 text-sm font-semibold text-[#E61525] transition hover:bg-[#E61525]/6"
                    >
                      See details
                    </button>

                    <a
                      href="/start-project"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#E61525] px-5 text-sm font-semibold text-white transition hover:bg-[#c81421]"
                    >
                      Get started
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-[#7A8290]">
                    {isBranding ? (
                      <>
                        <Palette className="h-4 w-4 text-[#E61525]" />
                        <span>Brand-first creative system</span>
                      </>
                    ) : (
                      <>
                        <Rocket className="h-4 w-4 text-[#E61525]" />
                        <span>Built for conversion and growth</span>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-xs leading-6 text-[#6B7280] sm:text-sm">
              These packages are presented as structured creative and digital
              delivery options. Final scope, timeline, and commercial terms may
              vary based on content volume, approvals, integrations, and
              business goals.
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
