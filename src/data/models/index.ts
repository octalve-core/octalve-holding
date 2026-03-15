import type { LegacyModelConfig, ModelConfig, ModelSlug } from "@/types/model";
import { normalizeModelConfigRecord } from "@/lib/models/normalize-model";

const RAW_MODEL_CONFIGS: Record<ModelSlug, LegacyModelConfig> = {
  node: {
    slug: "node",
    name: "Octalve Node",
    shortName: "Node",
    eyebrow: "Workspace & Business Access",
    heroTitle: "Workspace, access, and startup support built for execution.",
    heroDescription:
      "Octalve Node provides the practical environment for businesses and founders that need co-working access, private workspace, virtual office services, meeting rooms, events, and startup support.",
    seoTitle: "Octalve Node | Workspace and startup support",
    seoDescription:
      "Explore Octalve Node for co-working access, virtual office support, meeting rooms, training events, and startup execution environment.",
    sections: [
      {
        title: "What Node covers",
        description:
          "Node is designed for businesses and founders that need a physical and operational base for work, meetings, training, and collaboration.",
        items: [
          "Co-working access",
          "Private workspace",
          "Virtual office",
          "Meeting room access",
          "Training and event hosting",
          "Community networking",
          "Startup support environment",
        ],
      },
      {
        title: "Who it is for",
        description:
          "Node works best for founders, small teams, remote operators, consultants, and organizations that need flexible but credible business infrastructure.",
      },
    ],
    cta: {
      primaryLabel: "Start with Node",
      primaryHref: "/start-project",
      secondaryLabel: "Talk to Us",
      secondaryHref: "/contact",
    },
  },

  consult: {
    slug: "consult",
    name: "Octalve Consult",
    shortName: "Consult",
    eyebrow: "Strategy & Advisory",
    heroTitle: "Business strategy and advisory that supports clear execution.",
    heroDescription:
      "Octalve Consult helps organizations clarify direction, improve structure, strengthen operations, and build systems that support sustainable growth.",
    seoTitle: "Octalve Consult | Business strategy and advisory",
    seoDescription:
      "Explore Octalve Consult for strategy, operations advisory, process design, audits, digital transformation, and growth support.",
    sections: [
      {
        title: "What Consult covers",
        description:
          "Consult focuses on strategic and operational support for growing businesses and organizations.",
        items: [
          "Business strategy",
          "Operations advisory",
          "SOP and process design",
          "Sales advisory",
          "Growth strategy",
          "Digital transformation consulting",
          "Human capital advisory",
          "Project management",
          "Business audits",
        ],
      },
      {
        title: "What makes it useful",
        description:
          "Consult is built for leaders who need clarity, structure, and disciplined execution instead of random advice.",
      },
    ],
    cta: {
      primaryLabel: "Book a Strategy Session",
      primaryHref: "/start-project",
      secondaryLabel: "Contact Consult",
      secondaryHref: "/contact",
    },
  },

  lab: {
    slug: "lab",
    name: "Octalve Lab",
    shortName: "Lab",
    eyebrow: "Design & Product Execution",
    heroTitle: "Branding, websites, products, and software built with clarity.",
    heroDescription:
      "Octalve Lab is the execution layer for design, development, digital products, websites, software systems, and high-quality creative delivery.",
    seoTitle: "Octalve Lab | Branding, websites, and product delivery",
    seoDescription:
      "Explore Octalve Lab for brand identity, web design, web development, UI/UX, app design, custom software, and digital product execution.",
    sections: [
      {
        title: "What Lab covers",
        description:
          "Lab handles the visual, digital, and product-facing side of business growth.",
        items: [
          "Brand identity design",
          "Logo design",
          "Web design",
          "Web development",
          "App design",
          "App development",
          "UI/UX design",
          "Product design",
          "Digital marketing creatives",
          "E-commerce development",
          "Landing pages",
          "Custom software builds",
        ],
      },
      {
        title: "Why Lab matters",
        description:
          "Lab turns business ideas into tangible digital assets that people can see, use, trust, and convert through.",
      },
    ],
    cta: {
      primaryLabel: "Build with Lab",
      primaryHref: "/start-project",
      secondaryLabel: "See Projects",
      secondaryHref: "/portfolio",
    },
  },

  leap: {
    slug: "leap",
    name: "Octalve Leap",
    shortName: "Leap",
    eyebrow: "Startup Growth Enablement",
    heroTitle: "From idea to market readiness with better startup support.",
    heroDescription:
      "Octalve Leap supports founders and early-stage ventures with idea validation, business setup, readiness documentation, compliance guidance, and growth support.",
    seoTitle: "Octalve Leap | Startup guidance and launch readiness",
    seoDescription:
      "Explore Octalve Leap for startup guidance, registration, compliance support, business plans, pitch decks, founder training, and monetization support.",
    sections: [
      {
        title: "What Leap covers",
        description:
          "Leap is designed for entrepreneurs who need practical support moving from concept to execution.",
        items: [
          "Startup guidance",
          "Idea validation",
          "Business registration",
          "Licensing support",
          "Compliance support",
          "Business plan development",
          "Pitch deck support",
          "Funding readiness",
          "Lead generation setup",
          "Founder training",
          "Monetization support",
        ],
      },
      {
        title: "What it unlocks",
        description:
          "Leap helps founders avoid guesswork and move into the market with stronger structure and clearer direction.",
      },
    ],
    cta: {
      primaryLabel: "Launch with Leap",
      primaryHref: "/start-project",
      secondaryLabel: "Talk to Us",
      secondaryHref: "/contact",
    },
  },

  suite: {
    slug: "suite",
    name: "Octalve Suite",
    shortName: "Suite",
    eyebrow: "Launch & Growth Support",
    heroTitle:
      "Structured launch support for brands, websites, and visibility.",
    heroDescription:
      "Octalve Suite helps businesses roll out their launch presence with branding support, websites, content, integrations, updates, and growth-facing assets.",
    seoTitle: "Octalve Suite | Launch support and growth systems",
    seoDescription:
      "Explore Octalve Suite for business launch support, branding rollout, website setup, content, integrations, and ongoing growth support.",
    subdomain: "suite.octalve.com",
    sections: [
      {
        title: "What Suite covers",
        description:
          "Suite is designed as a practical support layer for launch, visibility, and growth readiness.",
        items: [
          "Business launch support",
          "Branding rollout",
          "Website setup",
          "Lead capture",
          "Content creation",
          "Payment integration",
          "Website updates",
          "Monthly design support",
          "Marketing asset production",
          "Donor and visibility support",
        ],
      },
      {
        title: "Why businesses use Suite",
        description:
          "Suite gives businesses a cleaner way to move from setup to visibility without piecing together scattered solutions.",
      },
    ],
    cta: {
      primaryLabel: "Explore Octalve Suite",
      primaryHref: "https://suite.octalve.com",
      secondaryLabel: "Start a Project",
      secondaryHref: "/start-project",
    },
  },

  cloud: {
    slug: "cloud",
    name: "Octalve Cloud",
    shortName: "Cloud",
    eyebrow: "Hosting & Technical Infrastructure",
    heroTitle:
      "Reliable domains, hosting, and technical support for modern businesses.",
    heroDescription:
      "Octalve Cloud provides the infrastructure layer behind business websites and digital systems, including hosting, domains, migration, maintenance, and security support.",
    seoTitle: "Octalve Cloud | Hosting, domains, and technical infrastructure",
    seoDescription:
      "Explore Octalve Cloud for domain registration, hosting, SSL setup, backups, migrations, maintenance, and performance optimization.",
    subdomain: "octalve.cloud",
    sections: [
      {
        title: "What Cloud covers",
        description:
          "Cloud manages the backend operational environment needed to keep digital platforms running well.",
        items: [
          "Domain registration",
          "Web hosting",
          "Business email setup",
          "SSL and security setup",
          "Website migration",
          "Backups",
          "Maintenance",
          "Performance optimization",
          "Managed hosting support",
        ],
      },
      {
        title: "Why Cloud matters",
        description:
          "Cloud helps businesses avoid weak infrastructure, downtime, and fragile delivery environments.",
      },
    ],
    cta: {
      primaryLabel: "Explore Cloud",
      primaryHref: "/models/cloud",
      secondaryLabel: "Talk to Us",
      secondaryHref: "/contact",
    },
  },

  vault: {
    slug: "vault",
    name: "Octalve Vault",
    shortName: "Vault",
    eyebrow: "Resources & Templates",
    heroTitle:
      "Templates, playbooks, and business resources you can actually use.",
    heroDescription:
      "Octalve Vault is the self-serve layer of the Octalve ecosystem, built for founders, teams, and organizations that need practical resources and execution tools.",
    seoTitle: "Octalve Vault | Templates, tools, and business resources",
    seoDescription:
      "Explore Octalve Vault for downloadable templates, playbooks, learning tools, guides, and digital resource kits.",
    subdomain: "vault.octalve.com",
    sections: [
      {
        title: "What Vault covers",
        description:
          "Vault helps people access business-ready tools without waiting for full custom delivery.",
        items: [
          "Self-serve business resources",
          "Downloadable templates",
          "Learning tools",
          "Execution guides",
          "Playbooks",
          "Digital kits",
        ],
      },
      {
        title: "Who it is for",
        description:
          "Vault is ideal for founders, teams, consultants, and operators who want tools they can use immediately.",
      },
    ],
    cta: {
      primaryLabel: "Explore Vault",
      primaryHref: "/models/vault",
      secondaryLabel: "Browse Resources",
      secondaryHref: "/resources",
    },
  },

  one: {
    slug: "one",
    name: "Octalve One",
    shortName: "One",
    eyebrow: "Business Systems & Automation",
    heroTitle: "Business software and automation built to unify operations.",
    heroDescription:
      "Octalve One is the systems layer for businesses that need software, workflow automation, invoicing, CRM, analytics, booking systems, and AI-enabled tools.",
    seoTitle: "Octalve One | Business systems and workflow automation",
    seoDescription:
      "Explore Octalve One for invoicing systems, CRM, workflow automation, booking systems, analytics, and AI-enabled business tools.",
    sections: [
      {
        title: "What One covers",
        description:
          "One is built for business operations that need scalable internal systems.",
        items: [
          "Business software solutions",
          "Workflow automation",
          "Invoicing systems",
          "CRM systems",
          "Lead management",
          "Booking systems",
          "Support tools",
          "Analytics",
          "AI-enabled business tools",
        ],
      },
      {
        title: "Why One matters",
        description:
          "One helps organizations reduce manual work, unify processes, and build better internal control.",
      },
    ],
    cta: {
      primaryLabel: "Build with One",
      primaryHref: "/start-project",
      secondaryLabel: "Talk to Us",
      secondaryHref: "/contact",
    },
  },
};

export const MODEL_CONFIGS: Record<ModelSlug, ModelConfig> =
  normalizeModelConfigRecord(RAW_MODEL_CONFIGS);

export const MODEL_ORDER: ModelSlug[] = [
  "node",
  "consult",
  "lab",
  "leap",
  "suite",
  "cloud",
  "vault",
  "one",
];
