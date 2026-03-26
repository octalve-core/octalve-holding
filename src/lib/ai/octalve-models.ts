export type BusinessContext =
  | "school"
  | "clinic"
  | "ngo"
  | "ecommerce"
  | "real-estate"
  | "agency"
  | null;

export type OctalveModelKey =
  | "group"
  | "node"
  | "consult"
  | "lab"
  | "leap"
  | "suite"
  | "cloud"
  | "vault"
  | "one";

export type OctalveModelLink = {
  label: string;
  url: string;
  keywords?: string[];
};

export type OctalveModelDefinition = {
  key: OctalveModelKey;
  name: string;
  url: string;
  tagline: string;
  summary: string;
  services: string[];
  packages: string[];
  audiences: string[];
  keywords: string[];
  painSignals: string[];
  relatedModels: OctalveModelKey[];
  promptSuggestions: string[];
  businessPromptSuggestions?: Partial<
    Record<Exclude<BusinessContext, null>, string[]>
  >;
  subPages?: OctalveModelLink[];
  ctaLabel: string;
  ctaDescription: string;
};

export type OctalveModelMatch = {
  key: OctalveModelKey;
  name: string;
  url: string;
  score: number;
  reason: string;
  selectedSubPageUrl?: string | null;
};

export const OCTALVE_MODELS: Record<OctalveModelKey, OctalveModelDefinition> = {
  group: {
    key: "group",
    name: "Octalve Group",
    url: "https://octalve.com",
    tagline:
      "A connected ecosystem helping startups, SMEs, NGOs, and institutions launch, grow, and scale.",
    summary:
      "The parent ecosystem connecting strategy, design, technology, infrastructure, products, and workspace support.",
    services: [
      "ecosystem-wide service access",
      "strategic partnerships",
      "bundled solutions",
      "enterprise packages",
    ],
    packages: ["ecosystem-wide service access", "enterprise solution routing"],
    audiences: [
      "startups",
      "SMEs",
      "NGOs",
      "institutions",
      "agencies",
      "founders",
      "partners",
    ],
    keywords: [
      "octalve group",
      "ecosystem",
      "partnership",
      "enterprise",
      "bundled solution",
      "multiple services",
      "group service",
      "parent brand",
    ],
    painSignals: [
      "i need multiple things",
      "we need one team to handle everything",
      "we need a partner not just a vendor",
      "we need an enterprise solution",
    ],
    relatedModels: ["consult", "suite", "lab", "cloud", "one"],
    promptSuggestions: [
      "Which Octalve model fits my business best?",
      "I need more than one Octalve service",
      "Can Octalve handle strategy, design, and technology together?",
      "What is the best Octalve starting point for my business?",
    ],
    ctaLabel: "Explore Octalve ecosystem",
    ctaDescription:
      "Open the main Octalve entry point to explore the most relevant model or combined solution path.",
  },

  node: {
    key: "node",
    name: "Octalve Node",
    url: "https://octalve.com/models/node",
    tagline: "The intersection of innovation and you.",
    summary:
      "Workspace, office support, and innovation hub services for freelancers, startups, teams, and founders.",
    services: [
      "co-working access",
      "private workspace",
      "virtual office",
      "meeting room access",
      "training/event hosting",
      "startup support environment",
    ],
    packages: [
      "Day Pass",
      "Weekly Pass",
      "Monthly Membership",
      "Dedicated Desk Plan",
      "Virtual Office Package",
      "Meeting Room Booking",
      "Event Space Package",
      "Startup Residency Plan",
    ],
    audiences: [
      "freelancers",
      "remote workers",
      "startups",
      "small teams",
      "consultants",
      "creators",
      "founders",
    ],
    keywords: [
      "workspace",
      "co-working",
      "coworking",
      "private office",
      "virtual office",
      "meeting room",
      "event space",
      "desk",
      "office address",
      "startup residency",
      "training venue",
    ],
    painSignals: [
      "i need a workspace",
      "i need a meeting venue",
      "i need a business address",
      "i need a virtual office",
      "we need a place to work",
    ],
    relatedModels: ["consult", "leap"],
    promptSuggestions: [
      "Can I get a virtual office through Octalve Node?",
      "Do you have a meeting room or workspace package?",
      "Which Node package fits a small team?",
      "Can founders use Octalve Node as a startup base?",
    ],
    ctaLabel: "Open Octalve Node",
    ctaDescription:
      "Review Octalve Node if you need workspace, virtual office support, meetings, or founder-friendly office access.",
  },

  consult: {
    key: "consult",
    name: "Octalve Consult",
    url: "https://octalve.com/models/consult",
    tagline:
      "Expert consulting for sustainable growth, innovation, and success.",
    summary:
      "Advisory support for strategy, operations, SOPs, growth, sales, project management, audits, and business clarity.",
    services: [
      "business strategy",
      "operations advisory",
      "SOP/process design",
      "sales advisory",
      "growth strategy",
      "digital transformation consulting",
      "human capital advisory",
      "project management",
      "business audits",
    ],
    packages: [
      "Clarity Session",
      "Business Audit",
      "Operations Audit",
      "SOP Development Package",
      "Sales Growth Advisory",
      "Quarterly Growth Retainer",
      "Leadership Advisory Package",
      "Turnaround Strategy Package",
    ],
    audiences: [
      "SMEs",
      "scaling startups",
      "NGOs",
      "institutions",
      "founders",
      "business owners",
    ],
    keywords: [
      "consult",
      "consulting",
      "advisory",
      "strategy",
      "operations",
      "sop",
      "sales process",
      "growth strategy",
      "audit",
      "business clarity",
      "turnaround",
      "digital transformation",
      "leadership advisory",
    ],
    painSignals: [
      "i am confused about what to do next",
      "my business is messy",
      "our operations are not structured",
      "sales are inconsistent",
      "we need systems before building anything",
      "we need business clarity",
      "i need advice before i start",
    ],
    relatedModels: ["lab", "one", "suite", "leap"],
    promptSuggestions: [
      "I need business clarity before building anything",
      "Can Octalve help me structure my operations?",
      "Do I need strategy before branding and website design?",
      "Can Octalve audit my business systems and growth process?",
    ],
    businessPromptSuggestions: {
      ngo: [
        "Can Octalve help structure our NGO operations and donor readiness?",
        "Do we need strategy support before redesigning our NGO systems?",
        "Can Octalve help us build SOPs for our organization?",
      ],
    },
    ctaLabel: "Open Octalve Consult",
    ctaDescription:
      "Review Octalve Consult if the real issue is clarity, structure, operations, growth planning, or decision-making before execution.",
  },

  lab: {
    key: "lab",
    name: "Octalve Lab",
    url: "https://octalve.com/models/lab",
    tagline: "Experiment. Innovate. Thrive with Octalve Lab.",
    summary:
      "Creative and technology execution for branding, websites, apps, design systems, e-commerce, landing pages, and custom digital builds.",
    services: [
      "brand identity design",
      "logo design",
      "web design",
      "web development",
      "app design",
      "app development",
      "UI/UX design",
      "product design",
      "digital marketing creatives",
      "e-commerce development",
      "landing pages",
      "custom software builds",
    ],
    packages: [
      "Logo Starter Pack",
      "Brand Identity Package",
      "Website Starter Package",
      "Business Website Package",
      "E-commerce Package",
      "UI/UX Sprint",
      "Landing Page Package",
      "Design Retainer",
      "App Prototype Package",
      "Custom Software Package",
    ],
    audiences: [
      "startups",
      "SMEs",
      "NGOs",
      "creators",
      "product founders",
      "personal brands",
      "service businesses",
    ],
    keywords: [
      "website",
      "web design",
      "web development",
      "mobile app",
      "app",
      "ui/ux",
      "brand identity",
      "logo",
      "landing page",
      "e-commerce",
      "ecommerce",
      "product design",
      "custom software build",
      "design retainer",
    ],
    painSignals: [
      "my brand looks unprofessional",
      "i need a website",
      "i need a mobile app",
      "i need a logo and brand identity",
      "we need a landing page",
      "we need a digital product built",
    ],
    relatedModels: ["cloud", "consult", "suite", "one", "leap"],
    promptSuggestions: [
      "Can Octalve design my brand and build my website?",
      "What package fits a business website and identity setup?",
      "Can Octalve build a mobile app or prototype?",
      "Do I need Lab and Cloud together for my website launch?",
    ],
    businessPromptSuggestions: {
      school: [
        "Can Octalve structure and design a modern school website?",
        "What pages should a school website have?",
        "Can Octalve build a school admission-friendly website?",
      ],
      clinic: [
        "Can Octalve structure and design a clinic website?",
        "How should appointment flow work on a clinic website?",
        "Can Octalve build a patient-friendly clinic website?",
      ],
      ngo: [
        "Can Octalve design a stronger NGO brand and website?",
        "How can Octalve improve NGO visibility and trust online?",
        "Can Octalve help an NGO with branding and digital presence?",
      ],
    },
    ctaLabel: "Open Octalve Lab",
    ctaDescription:
      "Review Octalve Lab if you need brand identity, websites, mobile apps, digital products, or execution-ready creative technology support.",
  },

  leap: {
    key: "leap",
    name: "Octalve Leap",
    url: "https://octalve.com/models/leap",
    tagline: "Leap forward. Grow faster with Octalve Leap.",
    summary:
      "Founder enablement, business registration, validation, compliance, business planning, pitch support, and early-stage startup growth support.",
    services: [
      "startup guidance",
      "idea validation",
      "business registration",
      "licensing support",
      "compliance support",
      "business plan development",
      "pitch deck support",
      "funding readiness",
      "lead generation setup",
      "founder training",
      "monetization support",
    ],
    packages: [
      "Startup Launch Kit",
      "CAC Registration Package",
      "Business Registration + Branding Starter",
      "Licensing Support Package",
      "Business Plan Package",
      "Pitch Deck Package",
      "Funding Readiness Package",
      "Founder Support Session",
      "Side Hustle to Business Package",
    ],
    audiences: [
      "early-stage founders",
      "new entrepreneurs",
      "side hustlers",
      "first-time business owners",
      "emerging startups",
    ],
    keywords: [
      "registration",
      "register business",
      "business registration",
      "cac",
      "license",
      "licensing",
      "compliance",
      "founder support",
      "business plan",
      "pitch deck",
      "funding readiness",
      "idea validation",
      "side hustle",
      "monetization",
      "startup launch",
    ],
    painSignals: [
      "i want to register my business",
      "i have an idea but i do not know how to start",
      "i need a business plan",
      "i need licensing support",
      "i need pitch deck support",
      "i want to turn my side hustle into a business",
    ],
    relatedModels: ["lab", "consult", "suite"],
    promptSuggestions: [
      "Can Octalve help me register my business properly?",
      "I need idea validation and founder support",
      "Can Octalve help with business plan and pitch deck?",
      "What Leap package fits a first-time founder?",
    ],
    ctaLabel: "Open Octalve Leap",
    ctaDescription:
      "Review Octalve Leap if you need registration, validation, compliance, founder support, business planning, or startup readiness guidance.",
  },

  suite: {
    key: "suite",
    name: "Octalve Suite",
    url: "https://octalve.com/models/suite",
    tagline: "One platform. Zero stress.",
    summary:
      "An all-in-one production and rollout model for businesses, NGOs, creators, and service brands that need bundled support, not scattered vendors.",
    services: [
      "business launch support",
      "branding rollout",
      "website setup",
      "lead capture",
      "content creation",
      "payment integration",
      "website updates",
      "monthly design support",
      "marketing asset production",
      "donor/visibility support",
    ],
    packages: [
      "Launch Suite",
      "Impact Suite",
      "Growth Suite",
      "Partner Suite",
      "Creator Suite",
      "Service Suite",
      "Retail Suite",
    ],
    audiences: [
      "SMEs",
      "NGOs",
      "creators",
      "agencies",
      "service brands",
      "product-based businesses",
    ],
    keywords: [
      "suite",
      "all in one",
      "done for you",
      "launch support",
      "business launch",
      "rollout",
      "monthly support",
      "package",
      "retainer",
      "visibility support",
      "partner suite",
      "impact suite",
      "launch suite",
    ],
    painSignals: [
      "i need everything handled together",
      "i do not want to manage many vendors",
      "i want a complete rollout",
      "i need a bundled solution",
      "we need launch support and ongoing updates",
    ],
    relatedModels: ["lab", "cloud", "consult", "leap"],
    promptSuggestions: [
      "Which Octalve Suite package fits my business?",
      "What is the difference between Launch Suite and Impact Suite?",
      "Can Octalve handle branding, website, and rollout together?",
      "Do I need Suite instead of separate services?",
    ],
    businessPromptSuggestions: {
      ngo: [
        "Would Impact Suite fit our NGO better than separate services?",
        "Can Octalve handle NGO visibility, assets, and website support together?",
        "Which Suite option fits an NGO rollout?",
      ],
    },
    subPages: [
      {
        label: "Launch Suite",
        url: "https://octalve.com/suite/launch-suite",
        keywords: [
          "launch suite",
          "launch",
          "start my business",
          "business launch",
        ],
      },
      {
        label: "Impact Suite",
        url: "https://octalve.com/suite/impact-suite",
        keywords: ["impact suite", "ngo", "impact", "visibility", "donor"],
      },
      {
        label: "Suite Pricing",
        url: "https://octalve.com/suite/pricing",
        keywords: ["pricing", "cost", "price", "quote", "budget"],
      },
    ],
    ctaLabel: "Open Octalve Suite",
    ctaDescription:
      "Review Octalve Suite if you want an all-in-one rollout instead of handling strategy, design, launch, and support separately.",
  },

  cloud: {
    key: "cloud",
    name: "Octalve Cloud",
    url: "https://octalve.com/models/cloud",
    tagline: "Grow your ideas and business online — faster, smarter, for less.",
    summary:
      "Domains, hosting, email, SSL, maintenance, migration, backups, and managed infrastructure support.",
    services: [
      "domain registration",
      "web hosting",
      "business email setup",
      "SSL/security setup",
      "website migration",
      "backups",
      "maintenance",
      "performance optimization",
      "managed hosting support",
    ],
    packages: [
      "Domain Registration Plan",
      "Starter Hosting Plan",
      "Business Hosting Plan",
      "Premium Hosting Plan",
      "Business Email Package",
      "SSL Package",
      "Website Care Plan",
      "Migration Package",
      "Managed Cloud Plan",
    ],
    audiences: [
      "website owners",
      "startups",
      "SMEs",
      "NGOs",
      "agencies",
      "digital businesses",
      "Lab/Suite clients",
    ],
    keywords: [
      "cloud",
      "hosting",
      "web hosting",
      "domain",
      "domain registration",
      "email setup",
      "business email",
      "ssl",
      "security",
      "migration",
      "server",
      "vps",
      "wordpress hosting",
      "maintenance",
      "backup",
      "performance optimization",
    ],
    painSignals: [
      "my website needs hosting",
      "i need a domain name",
      "i need business email",
      "i need ssl",
      "i need website migration",
      "my website needs maintenance",
      "i need cloud hosting",
    ],
    relatedModels: ["lab", "suite", "one"],
    promptSuggestions: [
      "I need hosting for my website",
      "Can Octalve help me register a domain?",
      "I want business email and SSL setup",
      "Can Octalve migrate my current website?",
    ],
    businessPromptSuggestions: {
      school: [
        "What hosting setup fits a school website?",
        "Do I need SSL and business email for a school website?",
        "Can Octalve host and maintain a school website?",
      ],
      clinic: [
        "What hosting setup fits a clinic website?",
        "Do I need SSL and business email for a clinic website?",
        "Can Octalve host and maintain a clinic website?",
      ],
    },
    subPages: [
      {
        label: "Domain Registration",
        url: "https://octalve.com/cloud/domain-registration",
        keywords: ["domain", "domain registration", "domain name"],
      },
      {
        label: "Web Hosting",
        url: "https://octalve.com/cloud/web-hosting",
        keywords: ["hosting", "web hosting", "host my website"],
      },
      {
        label: "Business Email",
        url: "https://octalve.com/cloud/email",
        keywords: ["email", "business email", "mailbox"],
      },
      {
        label: "SSL & Security",
        url: "https://octalve.com/cloud/ssl-security",
        keywords: ["ssl", "security", "https", "certificate"],
      },
      {
        label: "Server",
        url: "https://octalve.com/cloud/server",
        keywords: ["server", "vps", "dps", "dedicated", "cloud hosting"],
      },
      {
        label: "WordPress Hosting",
        url: "https://octalve.com/cloud/wordpress-hosting",
        keywords: ["wordpress", "wordpress hosting"],
      },
      {
        label: "Migration",
        url: "https://octalve.com/cloud/migration",
        keywords: ["migration", "migrate", "transfer website"],
      },
    ],
    ctaLabel: "Open Octalve Cloud",
    ctaDescription:
      "Review Octalve Cloud if your next step involves domains, hosting, email, SSL, migration, server setup, or website maintenance.",
  },

  vault: {
    key: "vault",
    name: "Octalve Vault",
    url: "https://octalve.com/models/vault",
    tagline: "Lock in with innovation and growth assets.",
    summary:
      "A self-serve marketplace for templates, playbooks, guides, kits, resources, and digital business assets.",
    services: [
      "downloadable templates",
      "learning tools",
      "execution guides",
      "playbooks",
      "digital kits",
      "resource bundles",
    ],
    packages: [
      "Business Plan Templates",
      "Pitch Deck Templates",
      "Proposal Templates",
      "SOP Templates",
      "Invoice Templates",
      "Content Kits",
      "Startup Guides",
      "Sales Scripts",
      "HR Templates",
      "Finance Trackers",
      "Courses",
      "Ebooks",
      "Resource Bundles",
    ],
    audiences: [
      "founders",
      "SMEs",
      "students",
      "freelancers",
      "agencies",
      "professionals",
      "startups on a budget",
    ],
    keywords: [
      "vault",
      "template",
      "templates",
      "download",
      "resource",
      "playbook",
      "guide",
      "ebook",
      "course",
      "bundle",
      "sales script",
      "tracker",
      "invoice template",
      "sop template",
    ],
    painSignals: [
      "i need a template",
      "i need something budget friendly",
      "i need a downloadable resource",
      "i want a self-serve option",
      "i need a guide or playbook",
    ],
    relatedModels: ["consult", "leap", "suite"],
    promptSuggestions: [
      "Can I get templates or resources from Octalve Vault?",
      "What can I find inside the Vault shop?",
      "Does Octalve have business plan or SOP templates?",
      "What if I need a budget-friendly self-serve option?",
    ],
    subPages: [
      {
        label: "Vault Shop",
        url: "https://octalve.com/vault/shop",
        keywords: ["shop", "templates", "resources", "buy template"],
      },
      {
        label: "Vault Cart",
        url: "https://octalve.com/vault/cart",
        keywords: ["cart"],
      },
      {
        label: "Vault Checkout",
        url: "https://octalve.com/vault/checkout",
        keywords: ["checkout", "pay", "purchase"],
      },
    ],
    ctaLabel: "Open Octalve Vault",
    ctaDescription:
      "Review Octalve Vault if you want templates, tools, guides, or budget-friendly self-serve business resources.",
  },

  one: {
    key: "one",
    name: "Octalve One",
    url: "https://octalve.com/models/one",
    tagline: "Building intelligent business solutions for SMEs.",
    summary:
      "Software and workflow tools for invoicing, CRM, leads, bookings, support, analytics, forms, operations, and AI-enabled business systems.",
    services: [
      "business software solutions",
      "workflow automation",
      "invoicing systems",
      "CRM systems",
      "lead management",
      "booking systems",
      "support tools",
      "analytics",
      "AI-enabled business tools",
    ],
    packages: [
      "Octalve Invoice",
      "Octalve CRM",
      "Octalve Leads",
      "Octalve HR",
      "Octalve Projects",
      "Octalve Bookings",
      "Octalve Inventory",
      "Octalve Support Desk",
      "Octalve Forms",
      "Octalve AI Reception",
      "Octalve Analytics Dashboard",
    ],
    audiences: [
      "SMEs",
      "startups",
      "agencies",
      "service businesses",
      "product-based businesses",
      "operational teams",
    ],
    keywords: [
      "software",
      "saas",
      "crm",
      "invoice",
      "lead management",
      "booking system",
      "inventory",
      "support desk",
      "forms",
      "analytics dashboard",
      "workflow automation",
      "automation",
      "ai reception",
      "hr system",
      "projects system",
    ],
    painSignals: [
      "we need a business software solution",
      "our workflow is manual",
      "we need crm",
      "we need invoicing",
      "we need bookings",
      "we need inventory system",
      "we need internal tools",
    ],
    relatedModels: ["consult", "lab", "cloud"],
    promptSuggestions: [
      "Which Octalve One solution fits my workflow?",
      "Can Octalve build or provide software for my business operations?",
      "Do I need Octalve One or a custom build from Lab?",
      "Can Octalve automate my leads, bookings, or invoicing flow?",
    ],
    ctaLabel: "Open Octalve One",
    ctaDescription:
      "Review Octalve One if you need workflow automation, CRM, invoicing, bookings, analytics, or software-led business operations.",
  },
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(normalizeText(term)));
}

function countMatches(text: string, terms: string[]) {
  return terms.reduce((total, term) => {
    const normalized = normalizeText(term);
    return total + (normalized && text.includes(normalized) ? 1 : 0);
  }, 0);
}

export function detectBusinessContext(text: string): BusinessContext {
  const value = text.toLowerCase();

  if (/\b(school|academy|college|university|admission|student)\b/.test(value)) {
    return "school";
  }

  if (
    /\b(clinic|hospital|medical|healthcare|doctor|patient|pharmacy)\b/.test(
      value,
    )
  ) {
    return "clinic";
  }

  if (/\b(ngo|nonprofit|foundation|charity|donation|community)\b/.test(value)) {
    return "ngo";
  }

  if (
    /\b(shop|store|ecommerce|e-commerce|product page|checkout|retail)\b/.test(
      value,
    )
  ) {
    return "ecommerce";
  }

  if (
    /\b(real estate|property|estate|realtor|listing|apartment)\b/.test(value)
  ) {
    return "real-estate";
  }

  if (
    /\b(agency|studio|consulting|consultancy|service business)\b/.test(value)
  ) {
    return "agency";
  }

  return null;
}

function comboBoosts(text: string, key: OctalveModelKey) {
  let score = 0;

  const hasWebsite = includesAny(text, [
    "website",
    "landing page",
    "web design",
    "web development",
  ]);
  const hasHosting = includesAny(text, [
    "hosting",
    "domain",
    "ssl",
    "business email",
    "migration",
  ]);
  const hasRegistration = includesAny(text, [
    "register business",
    "cac",
    "registration",
    "licensing",
    "compliance",
  ]);
  const hasBrand = includesAny(text, [
    "brand identity",
    "branding",
    "logo",
    "rebrand",
  ]);
  const hasSoftware = includesAny(text, [
    "crm",
    "invoice",
    "software",
    "booking system",
    "automation",
    "workflow",
  ]);
  const hasOperations = includesAny(text, [
    "operations",
    "sop",
    "audit",
    "sales process",
    "business clarity",
  ]);
  const hasAllInOne = includesAny(text, [
    "all in one",
    "done for you",
    "complete support",
    "rollout",
    "launch support",
  ]);
  const hasBudget = includesAny(text, [
    "template",
    "download",
    "resource",
    "budget",
    "cheap",
    "affordable",
    "self serve",
  ]);
  const hasWorkspace = includesAny(text, [
    "workspace",
    "virtual office",
    "meeting room",
    "coworking",
    "co-working",
  ]);
  const hasPartnership = includesAny(text, [
    "partnership",
    "enterprise",
    "ecosystem",
    "multiple services",
  ]);

  if (key === "lab" && hasWebsite) score += 8;
  if (key === "cloud" && hasHosting) score += 10;
  if (key === "leap" && hasRegistration) score += 10;
  if (key === "lab" && hasBrand) score += 7;
  if (key === "one" && hasSoftware) score += 10;
  if (key === "consult" && hasOperations) score += 10;
  if (key === "suite" && hasAllInOne) score += 10;
  if (key === "vault" && hasBudget) score += 10;
  if (key === "node" && hasWorkspace) score += 10;
  if (key === "group" && hasPartnership) score += 8;

  if (key === "lab" && hasWebsite && hasHosting) score += 4;
  if (key === "cloud" && hasWebsite && hasHosting) score += 5;

  if (key === "leap" && hasRegistration && hasBrand) score += 5;
  if (key === "lab" && hasRegistration && hasBrand) score += 3;

  if (key === "consult" && hasOperations && hasSoftware) score += 4;
  if (key === "one" && hasOperations && hasSoftware) score += 6;

  if (key === "suite" && (hasBrand || hasWebsite) && hasAllInOne) score += 4;

  return score;
}

function chooseReason(model: OctalveModelDefinition, text: string) {
  const normalized = normalizeText(text);

  const keyword = model.keywords.find((item) =>
    normalized.includes(normalizeText(item)),
  );
  if (keyword) {
    return `Matched ${model.name} because the request points to ${keyword}.`;
  }

  const pain = model.painSignals.find((item) =>
    normalized.includes(normalizeText(item)),
  );
  if (pain) {
    return `Matched ${model.name} because the request reflects a ${model.name.toLowerCase()}-type pain point.`;
  }

  return `${model.name} is a strong fit for this request.`;
}

function chooseSubPage(model: OctalveModelDefinition, text: string) {
  if (!model.subPages || model.subPages.length === 0) return null;

  const normalized = normalizeText(text);

  let best: { url: string; score: number } | null = null;

  for (const subPage of model.subPages) {
    const score = countMatches(normalized, subPage.keywords ?? []);
    if (!best || score > best.score) {
      best = { url: subPage.url, score };
    }
  }

  if (best && best.score > 0) {
    return best.url;
  }

  return null;
}

// export function detectOctalveModels(
//   text: string,
//   businessContext: BusinessContext,
//   maxResults = 3,
// ) {
//   const normalized = normalizeText(text);

//   const matches: OctalveModelMatch[] = Object.values(OCTALVE_MODELS)
//     .map((model) => {
//       let score = 0;

//       score += countMatches(normalized, model.keywords) * 4;
//       score += countMatches(normalized, model.painSignals) * 5;
//       score += comboBoosts(normalized, model.key);

//       if (businessContext === "school" && model.key === "lab") score += 2;
//       if (businessContext === "school" && model.key === "cloud") score += 2;
//       if (businessContext === "clinic" && model.key === "lab") score += 2;
//       if (businessContext === "clinic" && model.key === "cloud") score += 2;
//       if (businessContext === "ngo" && model.key === "suite") score += 2;
//       if (businessContext === "ngo" && model.key === "consult") score += 2;

//       return {
//         key: model.key,
//         name: model.name,
//         url: model.url,
//         score,
//         reason: chooseReason(model, text),
//         selectedSubPageUrl: chooseSubPage(model, text),
//       };
//     })
//     .filter((match) => match.score > 0)
//     .sort((a, b) => b.score - a.score)
//     .slice(0, maxResults);

//   if (matches.length > 0) return matches;

//   if (
//     /^(hello|hi|good morning|good afternoon|good evening|hey)\b/i.test(
//       text.trim(),
//     )
//   ) {
//     return [];
//   }

//   return [
//     {
//       key: "consult",
//       name: OCTALVE_MODELS.consult.name,
//       url: OCTALVE_MODELS.consult.url,
//       score: 1,
//       reason:
//         "Defaulted to Consult because the request suggests advisory guidance before execution.",
//       selectedSubPageUrl: null,
//     },
//   ];
// }

export function detectOctalveModels(
  text: string,
  businessContext: BusinessContext,
  maxResults = 3,
): OctalveModelMatch[] {
  const normalized = normalizeText(text);

  const matches: OctalveModelMatch[] = Object.values(OCTALVE_MODELS)
    .map((model): OctalveModelMatch => {
      let score = 0;

      score += countMatches(normalized, model.keywords) * 4;
      score += countMatches(normalized, model.painSignals) * 5;
      score += comboBoosts(normalized, model.key);

      if (businessContext === "school" && model.key === "lab") score += 2;
      if (businessContext === "school" && model.key === "cloud") score += 2;
      if (businessContext === "clinic" && model.key === "lab") score += 2;
      if (businessContext === "clinic" && model.key === "cloud") score += 2;
      if (businessContext === "ngo" && model.key === "suite") score += 2;
      if (businessContext === "ngo" && model.key === "consult") score += 2;

      return {
        key: model.key,
        name: model.name,
        url: model.url,
        score,
        reason: chooseReason(model, text),
        selectedSubPageUrl: chooseSubPage(model, text),
      };
    })
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  if (matches.length > 0) {
    return matches;
  }

  if (
    /^(hello|hi|good morning|good afternoon|good evening|hey)\b/i.test(
      text.trim(),
    )
  ) {
    return [];
  }

  const consultModel = OCTALVE_MODELS.consult;

  return [
    {
      key: consultModel.key,
      name: consultModel.name,
      url: consultModel.url,
      score: 1,
      reason:
        "Defaulted to Consult because the request suggests advisory guidance before execution.",
      selectedSubPageUrl: null,
    },
  ];
}

export function buildOctalveModelMapSummary() {
  return Object.values(OCTALVE_MODELS)
    .map((model) => `- ${model.name}: ${model.summary} Main page: ${model.url}`)
    .join("\n");
}

export function getPromptSuggestionsFromMatches(
  text: string,
  businessContext: BusinessContext,
  matches: OctalveModelMatch[],
) {
  if (
    /^(hello|hi|good morning|good afternoon|good evening|hey)\b/i.test(
      text.trim(),
    )
  ) {
    return [
      "I need a website for my business",
      "Which Octalve model fits my business?",
      "Can Octalve help me register my business?",
      "What can Octalve help me build?",
    ];
  }

  const primary = matches[0];
  if (!primary) {
    return [
      "Which Octalve model fits my business?",
      "Can Octalve help me launch my business properly?",
      "I need branding, website, and growth support",
      "What is the best Octalve starting point for me?",
    ];
  }

  const model = OCTALVE_MODELS[primary.key];
  const businessSpecific =
    businessContext && model.businessPromptSuggestions
      ? model.businessPromptSuggestions[businessContext]
      : null;

  if (businessSpecific && businessSpecific.length > 0) {
    return businessSpecific.slice(0, 4);
  }

  const suggestions = [...model.promptSuggestions];

  const secondary = matches[1];
  if (primary.key === "leap" && secondary?.key === "lab") {
    return [
      "Can Octalve help me register my business and build the brand too?",
      "What comes first: registration or branding?",
      "Which Leap package fits a founder starting from scratch?",
      "Can Octalve help me move from idea to launch?",
    ];
  }

  if (primary.key === "lab" && secondary?.key === "cloud") {
    return [
      "Can Octalve build my website and also host it?",
      "What do I need before launching a website properly?",
      "Which package fits branding, website, and hosting together?",
      "Do I need Lab and Cloud together for this?",
    ];
  }

  if (primary.key === "consult" && secondary?.key === "one") {
    return [
      "Do I need business strategy first or software first?",
      "Can Octalve help me structure operations and automate them?",
      "Which Octalve One solution fits my workflow?",
      "Can Octalve audit my process before recommending software?",
    ];
  }

  if (primary.key === "suite") {
    return [
      "Which Octalve Suite package fits my business?",
      "Do I need Suite instead of separate services?",
      "What is the difference between Launch Suite and Impact Suite?",
      "Can Octalve handle the full rollout for me?",
    ];
  }

  if (primary.key === "one") {
    return [
      "Which Octalve One solution fits my workflow?",
      "Do I need software or a custom build from Lab?",
      "Can Octalve automate my leads, bookings, or invoicing?",
      "How do I know which system my business needs first?",
    ];
  }

  return suggestions.slice(0, 4);
}
