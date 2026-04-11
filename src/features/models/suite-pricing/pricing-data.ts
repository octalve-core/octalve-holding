export type PlanKey = "launch" | "impact" | "growth";
export type FxMode = "NONE" | "USD" | "EUR";

export type Plan = {
  key: PlanKey;
  name: string;
  price: number;
  periodLabel: string;
  cta: string;
  buttonClass: string;
  dotClass: string;
  badge?: string;
  shortDescription: string;
};

export type PricingRow = {
  label: string;
  launch: boolean;
  impact: boolean;
  growth: boolean;
};

export type PricingSection = {
  title: string;
  rows: PricingRow[];
};

export const PRICING_COLORS = {
  text: "#0F172A",
  muted: "#55627A",
  border: "rgba(15, 23, 42, 0.08)",
  light: "#F8FAFC",
  card: "#FFFFFF",
  soft: "#F8FAFC",
} as const;

const WHATSAPP_NUMBER = "2348073459090";

const createWhatsAppLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const plans: Record<PlanKey, Plan> = {
  launch: {
    key: "launch",
    name: "Launch Suite",
    price: 300000,
    periodLabel: "one-time",
    cta: createWhatsAppLink(
      "Hello Octalve, I want to discuss Launch Suite and how you can help me launch with a strong brand, website, and digital presence.",
    ),
    buttonClass: "bg-red-600 hover:bg-red-700",
    dotClass: "bg-red-600",
    badge: "For businesses",
    shortDescription:
      "Brand identity, website setup, and launch-ready content for businesses starting strong.",
  },
  impact: {
    key: "impact",
    name: "Impact Suite",
    price: 320000,
    periodLabel: "one-time",
    cta: createWhatsAppLink(
      "Hello Octalve, I want to discuss Impact Suite and how you can help us build donor trust, clarity, and a stronger digital presence.",
    ),
    buttonClass: "bg-green-600 hover:bg-green-700",
    dotClass: "bg-green-600",
    badge: "Best for NGOs",
    shortDescription:
      "Credibility-focused branding, donation-ready website, and support assets for impact organisations.",
  },
  growth: {
    key: "growth",
    name: "Growth Suite",
    price: 120000,
    periodLabel: "monthly",
    cta: createWhatsAppLink(
      "Hello Octalve, I want to discuss Growth Suite and how you can help us improve visibility, manage our funnel, and support business growth.",
    ),
    buttonClass: "bg-blue-600 hover:bg-blue-700",
    dotClass: "bg-blue-600",
    badge: "Monthly support",
    shortDescription:
      "Ongoing monthly design, update, support, and performance guidance for growing brands.",
  },
};

export const planOrder: PlanKey[] = ["launch", "impact", "growth"];

export const pricingSections: PricingSection[] = [
  {
    title: "Strategy & Brand",
    rows: [
      {
        label: "Discovery / Strategy",
        launch: true,
        impact: true,
        growth: true,
      },
      {
        label: "Brand Identity System",
        launch: true,
        impact: true,
        growth: true,
      },
      {
        label: "Mini Brand Guideline",
        launch: true,
        impact: true,
        growth: true,
      },
      {
        label: "Social Profile Kit",
        launch: true,
        impact: false,
        growth: true,
      },
      {
        label: "Letterhead + ID / Badge Assets",
        launch: false,
        impact: true,
        growth: false,
      },
    ],
  },
  {
    title: "Website & Integrations",
    rows: [
      {
        label: "Website Design & Build",
        launch: true,
        impact: true,
        growth: true,
      },
      {
        label: "Basic SEO + Speed Setup",
        launch: true,
        impact: true,
        growth: true,
      },
      {
        label: "WhatsApp + Forms + Map Integrations",
        launch: true,
        impact: true,
        growth: true,
      },
      {
        label: "Donation-Friendly Website Structure",
        launch: false,
        impact: true,
        growth: false,
      },
      {
        label: "Recurring Donation Option",
        launch: false,
        impact: true,
        growth: false,
      },
    ],
  },
  {
    title: "Content & Launch Support",
    rows: [
      {
        label: "14 Branded Starter Post Designs",
        launch: true,
        impact: false,
        growth: false,
      },
      {
        label: "Stories + Ad-Ready Creatives",
        launch: true,
        impact: false,
        growth: false,
      },
      {
        label: "Caption Prompts + Posting Direction",
        launch: true,
        impact: false,
        growth: true,
      },
      {
        label: "Go-Live Support",
        launch: true,
        impact: true,
        growth: true,
      },
      {
        label: "Asset Handoff + Usage Guide",
        launch: true,
        impact: true,
        growth: true,
      },
    ],
  },
  {
    title: "Payments & Impact",
    rows: [
      {
        label: "Payment Gateway Integration",
        launch: false,
        impact: true,
        growth: true,
      },
      {
        label: "Proof-of-Payment Flow",
        launch: false,
        impact: true,
        growth: true,
      },
      {
        label: "Donation Tracking Sheet",
        launch: false,
        impact: true,
        growth: true,
      },
      {
        label: "Impact Report Template",
        launch: false,
        impact: true,
        growth: false,
      },
      {
        label: "Volunteer Signup Workflow",
        launch: false,
        impact: true,
        growth: true,
      },
      {
        label: "Newsletter Integration Basics",
        launch: false,
        impact: true,
        growth: true,
      },
    ],
  },
  {
    title: "Growth Subscription",
    rows: [
      {
        label: "Monthly Design Delivery",
        launch: false,
        impact: false,
        growth: true,
      },
      {
        label: "Monthly Strategy Call",
        launch: false,
        impact: false,
        growth: true,
      },
      {
        label: "Monthly Website Updates",
        launch: false,
        impact: false,
        growth: true,
      },
      {
        label: "Monthly Performance Snapshot",
        launch: false,
        impact: false,
        growth: true,
      },
      {
        label: "Ads Add-On Support",
        launch: false,
        impact: false,
        growth: true,
      },
    ],
  },
];

export const fxFallback = {
  USD: 1 / 1500,
  EUR: 1 / 1650,
};
