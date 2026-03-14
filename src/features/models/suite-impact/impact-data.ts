import type { StaticImageData } from "next/image";

import impactHeroImage from "@/assets/suite/octalvesuite0impact.png";
import brandingImage from "@/assets/suite/nsee.jpg";
import donationWebsiteImage from "@/assets/suite/safedeen.jpg";

export const IMPACT_COLORS = {
  primary: "#29BE3E",
  primaryHover: "#1EA933",
  text: "#0F172A",
  muted: "#55627A",
  border: "rgba(15, 23, 42, 0.10)",
  softGreen: "#F1FFF4",
  warm: "#F5FFF1",
  light: "#F8FAFC",
};

export const impactAssets = {
  impactHeroImage,
  brandingImage,
  donationWebsiteImage,
  impactAssetsImage: impactHeroImage,
};

export type ImpactStep = {
  phase: string;
  title: string;
  summary: string;
  duration: string;
  items: { title: string; note?: string }[];
  highlight?: boolean;
};

export const impactSteps: ImpactStep[] = [
  {
    phase: "Phase 1",
    title: "Strategy & Planning",
    summary: "Align the mission, donor message, and digital structure.",
    duration: "Day 1–2",
    highlight: true,
    items: [
      {
        title: "Clarify your positioning, audience, and key message",
        note: "what makes your organisation credible and memorable",
      },
      {
        title: "Define website structure",
        note: "pages, sections, and required content blocks",
      },
      {
        title: "Confirm visual direction",
        note: "references, tone, colours, and roadmap",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Brand Identity",
    summary: "Build a strong and consistent identity donors can trust.",
    duration: "3–5 days",
    items: [
      {
        title: "Logo suite",
        note: "primary, alternate, icon, typography, and palette",
      },
      {
        title: "Mini brand guideline",
        note: "rules for consistent brand usage",
      },
      {
        title: "Letterhead + ID card/badge design",
        note: "optional but strong for credibility",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Donation-Friendly Website Development",
    summary:
      "Build a trustworthy, mobile-friendly digital platform for your mission.",
    duration: "6–10 business days",
    items: [
      {
        title: "Website UI design + layout for key pages",
        note: "Home, About, Programs, Impact, Donate, Contact",
      },
      {
        title: "Mobile responsive build + speed and SEO setup",
        note: "structured for discoverability and trust",
      },
      {
        title: "Integrations",
        note: "WhatsApp, forms, embeds, and donation flow support",
      },
      {
        title: "Recurring donation option",
        note: "where supported, plus donor confirmation copy",
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Payment Integration",
    summary: "Make it easy for supporters to donate confidently.",
    duration: "11–13 business days",
    items: [
      {
        title: "Paystack / Flutterwave / PayPal integration",
        note: "cards, transfer, and supported payment channels",
      },
      {
        title: "Bank transfer details + proof-of-payment flow",
        note: "simple and clear donor follow-up structure",
      },
      {
        title: "Donation tracking sheet template",
        note: "Google Sheets or Excel-based workflow",
      },
    ],
  },
  {
    phase: "Phase 5",
    title: "Credibility + Impact Assets",
    summary: "Show stakeholders the impact clearly and professionally.",
    duration: "Final delivery",
    items: [
      {
        title: "Impact report template",
        note: "monthly or quarterly PDF-style layout",
      },
      {
        title: "Volunteer signup form",
        note: "plus basic database capture",
      },
      {
        title: "Newsletter integration",
        note: "Mailchimp / Brevo setup basics",
      },
    ],
  },
];

export type ImpactTab = {
  id: "branding" | "website" | "assets";
  label: string;
  title: string;
  subtitle: string;
  description: string[];
  bullets: string[];
  image: StaticImageData;
};

export const impactTabs: ImpactTab[] = [
  {
    id: "branding",
    label: "Branding",
    title: "A Brand That Commands Respect",
    subtitle:
      "We do not just make a logo. We build a visual system that communicates credibility, clarity, and trust.",
    description: [
      "Your brand is often the first signal of seriousness. We help you present your organisation in a way that strengthens trust with donors, volunteers, and partners.",
    ],
    bullets: [
      "Full identity suite for web, print, and social",
      "Professional colour palette and typography system",
      "Letterhead, badge, and supporting brand assets",
    ],
    image: brandingImage,
  },
  {
    id: "website",
    label: "Donation Website",
    title: "Donation-Ready Website",
    subtitle:
      "A professionally designed website builds trust and converts visitors into supporters.",
    description: [
      "Your website should not just look good. It should explain your mission clearly, build confidence, and make it easy for people to support your work.",
    ],
    bullets: [
      "6-page conversion-ready structure",
      "Mobile-first responsive build",
      "Donation page designed for trust and clarity",
      "Foundational SEO and credibility-first layout",
    ],
    image: donationWebsiteImage,
  },
  {
    id: "assets",
    label: "Impact Assets",
    title: "Credibility + Impact Assets",
    subtitle:
      "The supporting tools you need to communicate outcomes and grow trust over time.",
    description: [
      "Impact Suite includes practical credibility assets that help your organisation present results, collect leads, and build stronger supporter relationships.",
    ],
    bullets: [
      "Impact report template",
      "Volunteer signup workflow",
      "Newsletter integration basics",
    ],
    image: impactHeroImage,
  },
];
