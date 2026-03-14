import vp001image from "@/assets/products/vp001image.png";
import vp002image from "@/assets/products/vp002image.png";
import vp003image from "@/assets/products/vp003image.png";
import vp004image from "@/assets/products/vp004image.png";
import vp005image from "@/assets/products/vp005image.png";
import vp006image from "@/assets/products/vp006image.png";
import vp007image from "@/assets/products/vp007image.png";
import vp008image from "@/assets/products/vp008image.png";
import vp009image from "@/assets/products/vp009image.png";
import vp010image from "@/assets/products/vp010image.png";
import vp011image from "@/assets/products/vp011image.png";

import type { VaultProduct } from "../lib/vault-types";

export const vaultProducts: VaultProduct[] = [
  {
    id: "vp_001",
    slug: "business-plan-templates",
    title: "Business Plan Templates",
    category: "Business & Startup",
    shortDescription: "Editable business plan templates for startups and SMEs.",
    price: 15000,
    currency: "NGN",
    featured: true,
    deliveryType: "digital",
    fileKey: "business-plan-templates.zip",
    image: vp001image,
    rating: 5,
    reviewCount: 42,
    details: {
      summary:
        "This product gives you structured business plan formats that help you present your business clearly to investors, partners, grant bodies, or internal teams.",
      businessBenefits: [
        "Helps you define your business model, target market, revenue logic, and growth plan with more confidence.",
        "Improves how professionally your business idea is presented to investors, funders, and strategic partners.",
        "Makes it easier to organize your financial assumptions and execution roadmap in one document.",
      ],
      productivityBenefits: [
        "Saves hours of formatting and document structuring from scratch.",
        "Reduces confusion by giving you a ready-made flow for writing and refining your plan.",
        "Helps teams move faster when preparing applications, proposals, or internal planning documents.",
      ],
    },
  },
  {
    id: "vp_002",
    slug: "pitch-deck-templates",
    title: "Pitch Deck Templates",
    category: "Business & Startup",
    shortDescription:
      "Investor-ready pitch deck templates for fundraising and presentations.",
    price: 12000,
    currency: "NGN",
    featured: true,
    deliveryType: "digital",
    fileKey: "pitch-deck-templates.zip",
    image: vp002image,
    rating: 5,
    reviewCount: 38,
    details: {
      summary:
        "These pitch deck templates are designed to help founders and businesses communicate their value clearly in investor, partnership, and growth conversations.",
      businessBenefits: [
        "Strengthens how you present your opportunity, traction, market, and business model.",
        "Helps your business appear more prepared and investment-ready during fundraising or expansion discussions.",
        "Supports stronger storytelling when introducing your company to partners, clients, or stakeholders.",
      ],
      productivityBenefits: [
        "Cuts down the time needed to structure a professional presentation from scratch.",
        "Gives you a faster path to preparing for demos, meetings, and investor calls.",
        "Reduces presentation stress by giving you a clean deck framework to work from.",
      ],
    },
  },
  {
    id: "vp_003",
    slug: "proposal-templates",
    title: "Proposal Templates",
    category: "Business & Startup",
    shortDescription:
      "Professional proposal templates for services, partnerships, and projects.",
    price: 10000,
    currency: "NGN",
    deliveryType: "digital",
    fileKey: "proposal-templates.zip",
    image: vp003image,
    rating: 5,
    reviewCount: 31,
    details: {
      summary:
        "This proposal pack helps you prepare structured, persuasive documents for client services, collaborations, projects, and business opportunities.",
      businessBenefits: [
        "Improves how you communicate your offer, deliverables, pricing, and terms.",
        "Supports better conversion when pitching services or presenting project solutions.",
        "Helps your business maintain a more polished and professional front in negotiations.",
      ],
      productivityBenefits: [
        "Eliminates repeated proposal formatting work for every new client or project.",
        "Makes document turnaround faster when responding to opportunities.",
        "Creates a more reusable system for your sales and business development workflow.",
      ],
    },
  },
  {
    id: "vp_004",
    slug: "invoice-templates",
    title: "Invoice Templates",
    category: "Operations & Admin",
    shortDescription:
      "Branded invoice templates for businesses and freelancers.",
    price: 8000,
    currency: "NGN",
    deliveryType: "digital",
    fileKey: "invoice-templates.zip",
    image: vp004image,
    rating: 5,
    reviewCount: 56,
    details: {
      summary:
        "These invoice templates help you bill customers with a cleaner, more professional format that supports trust and payment clarity.",
      businessBenefits: [
        "Improves how your business presents charges, payment terms, and service records.",
        "Strengthens brand professionalism in client-facing financial communication.",
        "Supports better payment follow-up by making invoices easier to understand.",
      ],
      productivityBenefits: [
        "Reduces time spent preparing invoices manually.",
        "Creates a consistent invoicing system that staff or freelancers can reuse quickly.",
        "Helps you track billing with less formatting friction and fewer mistakes.",
      ],
    },
  },
  {
    id: "vp_005",
    slug: "wordpress-launchpad-kit",
    title: "Wordpress Launchpad Kit",
    category: "Website & Launch",
    shortDescription:
      "A quick-start kit for launching practical WordPress business websites.",
    price: 30000,
    currency: "NGN",
    featured: true,
    deliveryType: "digital",
    fileKey: "wordpress-launchpad-kit.zip",
    image: vp005image,
    rating: 5,
    reviewCount: 27,
    details: {
      summary:
        "This kit is built to help businesses launch a practical WordPress website faster with less technical confusion and fewer setup delays.",
      businessBenefits: [
        "Gives your business a stronger digital presence and more launch readiness.",
        "Helps you move faster from idea to a visible, functional website foundation.",
        "Supports a cleaner setup for service businesses, startups, and operational brands.",
      ],
      productivityBenefits: [
        "Saves time on repetitive setup and early launch decisions.",
        "Reduces the guesswork around what pages, assets, and launch pieces you need first.",
        "Helps founders and teams move faster without rebuilding the same launch structure repeatedly.",
      ],
    },
  },
  {
    id: "vp_006",
    slug: "wordpress-premium-kit",
    title: "Wordpress Premium Kit",
    category: "Website & Launch",
    shortDescription:
      "A more advanced WordPress kit for premium business websites.",
    price: 55000,
    currency: "NGN",
    featured: true,
    deliveryType: "digital",
    fileKey: "wordpress-premium-kit.zip",
    image: vp006image,
    rating: 5,
    reviewCount: 19,
    details: {
      summary:
        "This premium kit is for brands that want a more polished, higher-value WordPress setup with stronger presentation and business readiness.",
      businessBenefits: [
        "Helps your business communicate premium value more effectively online.",
        "Supports better conversion, credibility, and presentation for more serious offers.",
        "Gives you a stronger foundation for a refined brand experience and professional growth.",
      ],
      productivityBenefits: [
        "Speeds up premium website planning with a more advanced starting point.",
        "Reduces trial-and-error when building a higher-quality website presence.",
        "Allows your team to focus more on launch execution than on repetitive setup work.",
      ],
    },
  },
  {
    id: "vp_007",
    slug: "startup-guides",
    title: "Startup Guides",
    category: "Business & Startup",
    shortDescription:
      "Practical startup guidance documents for founders and teams.",
    price: 9000,
    currency: "NGN",
    deliveryType: "digital",
    fileKey: "startup-guides.zip",
    image: vp007image,
    rating: 5,
    reviewCount: 44,
    details: {
      summary:
        "These startup guides help founders make clearer early decisions across setup, growth, structure, and execution.",
      businessBenefits: [
        "Supports better thinking around launch readiness, systems, and business direction.",
        "Helps reduce avoidable startup mistakes through clearer guidance and frameworks.",
        "Improves how founders structure priorities, offers, and early growth decisions.",
      ],
      productivityBenefits: [
        "Saves research time by giving you organized startup knowledge in one place.",
        "Helps founders move faster through decision stages that usually cause delays.",
        "Creates a clearer operating path for early-stage execution.",
      ],
    },
  },
  {
    id: "vp_008",
    slug: "sales-scripts",
    title: "Sales Scripts",
    category: "Business & Startup",
    shortDescription:
      "Sales-ready scripts to improve outreach and conversion conversations.",
    price: 7500,
    currency: "NGN",
    deliveryType: "digital",
    fileKey: "sales-scripts.zip",
    image: vp008image,
    rating: 5,
    reviewCount: 34,
    details: {
      summary:
        "This sales script pack helps businesses improve how they start conversations, handle objections, and move prospects toward conversion.",
      businessBenefits: [
        "Improves the quality and consistency of your sales communication.",
        "Supports better lead conversion by giving your team stronger talking points.",
        "Helps service teams, founders, and sales reps sound clearer and more confident.",
      ],
      productivityBenefits: [
        "Reduces time spent thinking through what to say in recurring sales situations.",
        "Makes onboarding easier for new sales or support staff.",
        "Creates a reusable communication asset that speeds up outreach and follow-up.",
      ],
    },
  },
  {
    id: "vp_009",
    slug: "hr-templates",
    title: "HR Templates",
    category: "Operations & Admin",
    shortDescription:
      "Useful HR documents for team management and internal operations.",
    price: 11000,
    currency: "NGN",
    deliveryType: "digital",
    fileKey: "hr-templates.zip",
    image: vp009image,
    rating: 5,
    reviewCount: 23,
    details: {
      summary:
        "This HR template pack helps businesses manage internal team documentation more professionally and consistently.",
      businessBenefits: [
        "Supports cleaner employee communication and operational documentation.",
        "Improves professionalism in onboarding, expectations, and internal team processes.",
        "Helps businesses stay more organized as team structure grows.",
      ],
      productivityBenefits: [
        "Reduces the need to create recurring HR documents from scratch.",
        "Makes internal administration faster and more repeatable.",
        "Helps operations teams handle documentation with less back-and-forth.",
      ],
    },
  },
  {
    id: "vp_010",
    slug: "finance-trackers",
    title: "Finance Trackers",
    category: "Operations & Admin",
    shortDescription:
      "Trackers for expenses, income, cash flow, and financial visibility.",
    price: 9500,
    currency: "NGN",
    deliveryType: "digital",
    fileKey: "finance-trackers.zip",
    image: vp010image,
    rating: 5,
    reviewCount: 29,
    details: {
      summary:
        "These finance trackers help businesses monitor cash movement, income, expenses, and visibility with more structure.",
      businessBenefits: [
        "Improves financial awareness and day-to-day money management.",
        "Supports better business decisions through cleaner financial records.",
        "Helps teams maintain stronger operational control over expenses and revenue tracking.",
      ],
      productivityBenefits: [
        "Cuts down manual tracking confusion across multiple transactions.",
        "Gives you faster access to useful numbers during reporting or review.",
        "Makes finance monitoring more consistent and less stressful for small teams.",
      ],
    },
  },
  {
    id: "vp_011",
    slug: "resource-bundles",
    title: "Resource Bundles",
    category: "Bundles",
    shortDescription:
      "Curated bundles of business resources for speed and convenience.",
    price: 20000,
    currency: "NGN",
    featured: true,
    deliveryType: "digital",
    fileKey: "resource-bundles.zip",
    image: vp011image,
    rating: 5,
    reviewCount: 47,
    details: {
      summary:
        "This bundle combines useful business resources into one faster-access package for teams that want more value and convenience at once.",
      businessBenefits: [
        "Gives your business access to multiple useful assets without buying them one by one.",
        "Supports broader execution across planning, operations, communication, and launch needs.",
        "Creates better value for teams that need several tools working together.",
      ],
      productivityBenefits: [
        "Saves time by reducing the need to search for separate business resources.",
        "Improves speed because your team gets multiple useful files in one package.",
        "Helps founders and operators move faster with a more complete business toolkit.",
      ],
    },
  },
];

export function getVaultProductById(productId: string) {
  return vaultProducts.find((product) => product.id === productId);
}
