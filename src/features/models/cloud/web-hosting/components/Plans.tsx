"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cloudConsoleLinks } from "../../cloud-console-links";

type BillingCycle = "monthly" | "annual";

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  monthlySuffix: string;
  annualSuffix: string;
  saveLabel?: string;
  featured?: boolean;
  badge?: string;
  href: string;
  features: string[];
};

const COLORS = {
  bg: "#F8FAFC",
  surface: "#FFFFFF",
  border: "#E2E8F0",
  borderStrong: "#CBD5E1",
  text: "#0F172A",
  slate: "#475569",
  slateSoft: "#64748B",
  blue: "#0064E0",
  blueDeep: "#0B1F63",
  blueSoft: "#EAF2FF",
  pinkSoft: "#FDECEC",
  pinkText: "#F97373",
  ribbonFrom: "#FF7A7A",
  ribbonTo: "#FF2E74",
  dot: "#C9D7FF",
};

const DEFAULT_VISIBLE_FEATURES = 5;

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter Shared",
    subtitle: "Hosting",
    description:
      "Packed with great features like one-click installs, reliable uptime, and 24/7 support.",
    monthlyPrice: "₦400",
    annualPrice: "₦4,700",
    monthlySuffix: "/month",
    annualSuffix: "/year",
    saveLabel: "Save 40%",
    href: `${cloudConsoleLinks.signUp ?? "/cloud/signup"}?plan=starter-shared`,
    features: [
      "1.5GB NVMe Storage",
      "Unlimited Bandwidth",
      "3 Email Accounts",
      "2 Databases",
      "2 FTP Accounts",
      "1 Sub Domain",
      "1 Parked Domain",
      "1 Hosted Domain",
      "Free Let's Encrypt SSL Certificate",
      "24/7 Support",
      "Your own cPanel",
      "Uptime: 99.999%",
      "Free Script Installer – Softaculous Apps",
      "All CMS – Joomla, WordPress, Drupal, Magento",
      "Latest PHP, Perl, MySQL, PostgreSQL Database",
      "CPU Speed: 0.3 Core",
      "Physical Memory: 256MB",
      "IOPS: 500",
      "I/O Usage: 512KB/s",
      "EP - Entry Processes: 6",
      "NPROC - Number of Processes: 20",
      "File Usage: 50,000",
    ],
  },
  {
    id: "hyena",
    name: "Hyena Shared",
    subtitle: "Cloud Hosting",
    description:
      "Packed with great features like one-click installs, stronger resources, and 24/7 support.",
    monthlyPrice: "₦2,600",
    annualPrice: "₦26,000",
    monthlySuffix: "/month",
    annualSuffix: "/year",
    saveLabel: "Save 40%",
    featured: true,
    badge: "Most Popular",
    href: `${cloudConsoleLinks.webHosting ?? "/cloud/web-hosting"}?plan=hyena-shared-cloud`,
    features: [
      "Free .com.ng Domain",
      "55GB NVMe Storage",
      "Unlimited Bandwidth",
      "Unlimited Email Accounts",
      "Unlimited Databases",
      "Unlimited FTP Accounts",
      "Unlimited Sub Domains",
      "10 Hosted Domains",
      "SSH Access",
      "Free Let's Encrypt SSL Certificate",
      "24/7 Support",
      "Your own cPanel",
      "Uptime: 99.999%",
      "Free Script Installer – Softaculous Apps",
      "All CMS – Joomla, WordPress, Drupal, Magento",
      "Latest PHP, Perl, MySQL, PostgreSQL Database",
      "CPU Speed: 1 Core",
      "Physical Memory: 1.5GB",
      "IOPS: 2000",
      "I/O Usage: 2MB/s",
      "EP - Entry Processes: 20",
      "NPROC - Number of Processes: 80",
      "File Usage: 250,000",
    ],
  },
  {
    id: "shark",
    name: "Shark Unlimited Shared",
    subtitle: "Cloud Hosting",
    description:
      "Packed with great features like one-click installs, advanced performance, and 24/7 support.",
    monthlyPrice: "₦10,900",
    annualPrice: "₦126,000",
    monthlySuffix: "/month",
    annualSuffix: "/year",
    href: `${cloudConsoleLinks.server ?? "/cloud/server"}?plan=shark-unlimited-shared-cloud`,
    features: [
      "Free .com.ng Domain",
      "Unlimited NVMe Storage",
      "Unlimited Bandwidth",
      "Unlimited Email Accounts",
      "Unlimited Databases",
      "Unlimited FTP Accounts",
      "Unlimited Sub Domains",
      "Unlimited Hosted Domains",
      "SSH Access",
      "Free Let's Encrypt SSL Certificate",
      "24/7 Support",
      "Your own cPanel",
      "Uptime: 99.999%",
      "Free Script Installer – Softaculous Apps",
      "All CMS – Joomla, WordPress, Drupal, Magento",
      "Latest PHP, Perl, MySQL, PostgreSQL Database",
      "CPU Speed: 2.5 Core",
      "Physical Memory: 3.5GB",
      "IOPS: 4000",
      "I/O Usage: 5MB/s",
      "EP - Entry Processes: 35",
      "NPROC - Number of Processes: 170",
      "File Usage: 350,000",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-1 h-5 w-5 flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M5 10.5L8.2 13.7L15 6.9"
        stroke={COLORS.blue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="M5 8L10 13L15 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BillingToggle({
  value,
  onChange,
}: {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`relative inline-flex min-w-[132px] items-center justify-center rounded-full px-5 py-3 text-sm transition sm:text-base ${
          value === "monthly"
            ? "text-slate-950"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        {value === "monthly" && (
          <span className="absolute inset-0 rounded-full bg-slate-950" />
        )}
        <span
          className={`relative z-10 font-medium ${
            value === "monthly" ? "text-white" : ""
          }`}
        >
          Monthly
        </span>
      </button>

      <button
        type="button"
        onClick={() => onChange("annual")}
        className={`relative inline-flex min-w-[132px] items-center justify-center rounded-full px-5 py-3 text-sm transition sm:text-base ${
          value === "annual"
            ? "text-slate-950"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        {value === "annual" && (
          <span className="absolute inset-0 rounded-full bg-slate-950" />
        )}
        <span
          className={`relative z-10 font-medium ${
            value === "annual" ? "text-white" : ""
          }`}
        >
          Annual
        </span>
      </button>
    </div>
  );
}

export default function Plans() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    starter: false,
    hyena: false,
    shark: false,
  });

  const visiblePlans = useMemo(() => plans, []);

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Hosting Plans
          </span>

          <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
            Hosting plans built for every stage of your growth
          </h2>

          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-500 sm:text-lg">
            Choose a plan that fits where you are now, then expand only when you
            need more power, speed, and flexibility.
          </p>

          <div className="mt-8 sm:mt-10">
            <BillingToggle value={billing} onChange={setBilling} />
          </div>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="pointer-events-none absolute left-4 top-6 hidden xl:block">
            <div className="grid grid-cols-7 gap-3">
              {Array.from({ length: 49 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: COLORS.dot }}
                />
              ))}
            </div>
          </div>

          <div className="mx-auto grid max-w-[1220px] gap-6 lg:grid-cols-3 xl:gap-7">
            {visiblePlans.map((plan) => {
              const isExpanded = expanded[plan.id];
              const displayedFeatures = isExpanded
                ? plan.features
                : plan.features.slice(0, DEFAULT_VISIBLE_FEATURES);

              const price =
                billing === "monthly" ? plan.monthlyPrice : plan.annualPrice;

              const suffix =
                billing === "monthly" ? plan.monthlySuffix : plan.annualSuffix;

              return (
                <article
                  key={plan.id}
                  className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.08)] sm:p-8 ${
                    plan.featured ? "border-slate-300" : "border-slate-200"
                  }`}
                >
                  {plan.featured && (
                    <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 overflow-hidden">
                      <div
                        className="absolute right-[-42px] top-[18px] w-[180px] rotate-45 py-3 text-center text-sm font-medium text-white"
                        style={{
                          background: `linear-gradient(90deg, ${COLORS.ribbonFrom}, ${COLORS.ribbonTo})`,
                        }}
                      >
                        {plan.badge}
                      </div>
                      <div
                        className="absolute right-[10px] top-[11px] rotate-45 text-xs font-medium"
                        style={{ color: "#F59C9C" }}
                      >
                        {plan.saveLabel}
                      </div>
                    </div>
                  )}

                  {!plan.featured && plan.saveLabel && (
                    <div className="absolute right-6 top-6">
                      <span
                        className="inline-flex rounded-xl px-4 py-2 text-sm font-medium"
                        style={{
                          backgroundColor: COLORS.pinkSoft,
                          color: COLORS.pinkText,
                        }}
                      >
                        {plan.saveLabel}
                      </span>
                    </div>
                  )}

                  <div className="flex h-full flex-col">
                    <div>
                      <h3 className="max-w-[270px] text-[1.95rem] font-medium leading-tight text-slate-950">
                        {plan.name}
                        <br />
                        {plan.subtitle}
                      </h3>

                      <p className="mt-8 text-lg font-medium text-[#0064E0]">
                        From only
                      </p>

                      <div className="mt-3 flex flex-wrap items-end gap-x-2 gap-y-1">
                        <span className="text-5xl font-medium tracking-[-0.04em] text-slate-950 sm:text-6xl">
                          {price}
                        </span>
                        <span className="pb-2 text-xl font-medium text-slate-700 sm:text-2xl">
                          {suffix}
                        </span>
                      </div>

                      <p className="mt-7 max-w-md text-lg font-medium leading-8 text-slate-500">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mt-8 flex-1">
                      <ul className="space-y-4">
                        {displayedFeatures.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-[1.02rem] font-medium leading-7 text-slate-500"
                          >
                            <CheckIcon />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        onClick={() => toggleExpanded(plan.id)}
                        className="mt-6 inline-flex items-center gap-3 text-left text-base font-medium text-slate-900 transition hover:text-slate-700"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                          <ChevronIcon open={isExpanded} />
                        </span>
                        {isExpanded ? "Show less" : "Expand features"}
                      </button>
                    </div>

                    <div className="mt-8 pt-2">
                      <Link
                        href={plan.href}
                        className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-center text-lg font-medium text-white transition hover:opacity-95 active:scale-[0.99]"
                        style={{
                          background: plan.featured
                            ? "linear-gradient(90deg, #1987F5 0%, #2D46F5 100%)"
                            : COLORS.blueDeep,
                        }}
                      >
                        Purchase Plan
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
