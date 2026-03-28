"use client";

import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Blocks,
  Brush,
  Code2,
  Globe,
  LayoutGrid,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";

type ServiceCard = {
  id: number;
  title: string;
  content: string;
  icon: LucideIcon;
  bg: string;
  text: string;
  softText: string;
};

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Brand identity design",
    content:
      "When a business looks inconsistent, trust drops and recall becomes weak. We create brand identity systems that bring clarity, consistency, and stronger market presence, helping your business look credible, memorable, and ready for growth.",
    icon: Palette,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 2,
    title: "Logo design",
    content:
      "A weak logo can make even a strong business feel unfinished. We design clear, distinctive logos that improve first impressions, strengthen recognition, and give your brand a professional visual anchor across every touchpoint.",
    icon: Sparkles,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 3,
    title: "Web design",
    content:
      "Many websites lose attention because they feel cluttered, outdated, or unclear. We design modern, conversion-aware websites that communicate value quickly, guide visitors properly, and make your business look trustworthy online.",
    icon: Globe,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 4,
    title: "Web development",
    content:
      "A website should not only look good — it should perform smoothly and scale with your business. We build fast, responsive, production-ready websites that support better user experience, stronger performance, and long-term reliability.",
    icon: Code2,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 5,
    title: "App design",
    content:
      "Users quickly abandon apps that feel confusing or hard to navigate. We design app interfaces that reduce friction, improve usability, and make your product feel polished, intuitive, and easier for people to adopt.",
    icon: Smartphone,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 6,
    title: "App development",
    content:
      "Good app ideas often fail in execution, not ambition. We develop functional app experiences with clean implementation and practical user flows, helping you move from concept to usable product with stronger speed and structure.",
    icon: AppWindow,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 7,
    title: "UI/UX design",
    content:
      "Poor user journeys quietly reduce engagement and conversion. We design interfaces and flows that make products easier to use, easier to understand, and more effective at turning attention into action.",
    icon: LayoutGrid,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 8,
    title: "Product design",
    content:
      "Without structure, products become feature-heavy but value-light. We shape product experiences around real user needs and business goals so what you build feels purposeful, usable, and commercially stronger.",
    icon: Blocks,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 9,
    title: "Digital marketing creatives",
    content:
      "Weak creatives often waste good marketing budgets. We create sharp, campaign-ready visuals that communicate faster, look more premium, and help your promotions attract stronger attention and better response.",
    icon: Brush,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 10,
    title: "E-commerce development",
    content:
      "Online stores lose revenue when shopping feels stressful or untrustworthy. We build e-commerce experiences that make products easier to browse, purchase, and trust, helping you improve conversion and customer confidence.",
    icon: ShoppingBag,
    bg: "#FEE5D9",
    text: "#0F172A",
    softText: "#475569",
  },
  {
    id: 11,
    title: "Landing pages",
    content:
      "Campaign traffic is expensive, so every click should have a clear destination. We build focused landing pages that align offer, message, and action, helping you capture more leads and improve campaign performance.",
    icon: MousePointerClick,
    bg: "#200908",
    text: "#FFFFFF",
    softText: "#A4A4A4",
  },
  {
    id: 12,
    title: "Custom software builds",
    content:
      "Generic tools often create more friction than efficiency. We help design and build custom digital systems around your workflow so your operations become more aligned, more efficient, and easier to scale.",
    icon: MonitorSmartphone,
    bg: "#E61525",
    text: "#FFFFFF",
    softText: "#FFFFFF",
  },
];

function ServiceIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="flex h-18 w-18 items-center justify-center rounded-[22px] bg-white sm:h-20 sm:w-20 lg:h-24 lg:w-24">
      <Icon className="h-9 w-9 text-[#E61525] sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
    </div>
  );
}

export default function LabServicesStack() {
  return (
    <section
      id="lab"
      className="bg-[#F8FAFC] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E61525] sm:text-sm">
            Octalve Lab Services
          </p>

          <h2 className="mt-3 text-3xl font-medium leading-[1.02] tracking-[-0.05em] text-[#0F172A] sm:text-5xl lg:text-6xl">
            Design and development services
            <span className="block text-[#E61525]">
              built to drive real business value
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
            We help businesses look sharper, work smarter, and convert better
            through focused digital design and product execution.
          </p>
        </div>

        <div className="mt-24 space-y-5 sm:mt-24 sm:space-y-6 lg:mt-28">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="sticky top-44 rounded-[26px] border sm:top-40 sm:rounded-[28px] lg:top-48"
                style={{
                  backgroundColor: service.bg,
                  borderColor: "rgba(15,23,42,0.06)",
                  zIndex: index + 1,
                }}
              >
                <div className="grid items-center gap-7 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.45fr_0.55fr] lg:gap-10 lg:px-10 lg:py-10">
                  <div className="max-w-[640px]">
                    <div className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Service {String(service.id).padStart(2, "0")}
                    </div>

                    <h3
                      className="mt-4 text-2xl font-semibold leading-[1.04] tracking-[-0.04em] sm:mt-5 sm:text-3xl lg:text-4xl"
                      style={{ color: service.text }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="mt-4 text-sm leading-7 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg"
                      style={{ color: service.softText }}
                    >
                      {service.content}
                    </p>
                  </div>

                  <div className="flex justify-start lg:justify-center">
                    <ServiceIcon Icon={Icon} />
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
