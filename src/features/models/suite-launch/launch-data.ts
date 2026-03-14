import type { StaticImageData } from "next/image";

import launchHeroImage from "@/assets/suite/octalvesuite0.png";
import brandingImage from "@/assets/suite/dsfinc.jpg";
import websiteImage from "@/assets/suite/mayport.jpg";

export const LAUNCH_COLORS = {
  primary: "#E61525",
  primaryHover: "#C91422",
  text: "#0F172A",
  muted: "#55627A",
  border: "rgba(15, 23, 42, 0.10)",
  softRed: "#FFF4F4",
  warm: "#FFF6D9",
  light: "#F8FAFC",
};

export const launchAssets = {
  launchHeroImage,
  brandingImage,
  websiteImage,
  mediaKitImage: launchHeroImage,
};

export type LaunchStep = {
  phase: string;
  title: string;
  summary: string;
  duration: string;
  items: { title: string; note?: string }[];
  highlight?: boolean;
};

export const launchSteps: LaunchStep[] = [
  {
    phase: "Phase 1",
    title: "Discovery & Strategy",
    summary: "Align the vision, offer, and launch plan.",
    duration: "Day 1–2",
    highlight: true,
    items: [
      {
        title: "Clarify your positioning, audience, and key message",
        note: "what makes you different",
      },
      {
        title: "Define website structure",
        note: "pages, sections, and content requirements",
      },
      {
        title: "Confirm visual direction",
        note: "references, tone, colors, and project roadmap",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Brand Identity",
    summary: "Build a consistent brand system that looks credible everywhere.",
    duration: "3–5 days",
    items: [
      {
        title: "Logo suite",
        note: "primary, alternate, and icon-only marks",
      },
      {
        title: "Mini brand guideline",
        note: "usage rules for consistency",
      },
      {
        title: "Social profile kit",
        note: "profile and banner-ready assets",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Website Design",
    summary: "Design and build a conversion-ready website.",
    duration: "6–10 business days",
    items: [
      {
        title: "Website UI design + layout for key pages",
        note: "Home, About, Services, Projects, Contact",
      },
      {
        title: "Mobile responsive build + speed and basic SEO setup",
        note: "structured for search visibility",
      },
      {
        title: "Integrations",
        note: "WhatsApp chat, contact forms, and embeds where needed",
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Media Kit",
    summary:
      "Prepare your first 14 days of content so you can market immediately.",
    duration: "11–13 business days",
    items: [
      {
        title: "14 branded post designs",
        note: "launch, offer, value, and social proof placeholders",
      },
      {
        title: "5 story templates + 2 ad-ready creatives",
      },
      {
        title: "Caption prompts + simple posting plan",
        note: "what to post and when",
      },
    ],
  },
  {
    phase: "Phase 5",
    title: "Launch & Handoff",
    summary: "Go live with confidence and receive everything neatly packaged.",
    duration: "Final delivery",
    items: [
      {
        title: "Final QA checklist",
        note: "mobile, links, forms, speed, and consistency",
      },
      {
        title: "Go-live support",
        note: "plus basic tracking guidance",
      },
      {
        title: "Full handoff",
        note: "design files, brand assets, and usage guide",
      },
    ],
  },
];

export type LaunchTab = {
  id: "branding" | "website" | "mediakit";
  label: string;
  title: string;
  subtitle: string;
  description: string[];
  bullets: string[];
  image: StaticImageData;
};

export const launchTabs: LaunchTab[] = [
  {
    id: "branding",
    label: "Branding",
    title: "A Brand That Commands Respect",
    subtitle:
      "We don’t just make a logo. We build a visual language that communicates trust and quality from the first click.",
    description: [
      "Your brand is your business’s first impression. Our designers craft logos and branding that resonate with your audience and establish professionalism.",
    ],
    bullets: [
      "Full identity suite: primary, horizontal, and icon-only marks",
      "Strategic styling: professional colors and typography",
      "Social media kit: profile and banner-ready assets",
    ],
    image: brandingImage,
  },
  {
    id: "website",
    label: "Website",
    title: "Your High-Performance Digital Storefront",
    subtitle:
      "A professionally designed website builds trust and converts visitors into customers.",
    description: [
      "Your website is often the first interaction potential customers have with your brand. We build clean, responsive websites designed for clarity and conversion.",
    ],
    bullets: [
      "5-page conversion design",
      "Mobile-first engineering",
      "Built-in trust: WhatsApp, map, forms, and SSL-ready setup",
      "Search-ready foundational SEO",
    ],
    image: websiteImage,
  },
  {
    id: "mediakit",
    label: "Media Kit",
    title: "The 14-Day Hype Content Kit",
    subtitle:
      "Everything you need to launch your social media presence and start building momentum.",
    description: [
      "Launch Suite’s Media Kit gives you professionally designed templates and content prompts to kickstart your first 14 days online.",
    ],
    bullets: [
      "14 custom posts for launch, offers, and value content",
      "5 stories and 2 ad-ready creative formats",
      "Caption prompts that reduce posting friction",
    ],
    image: launchHeroImage,
  },
];
