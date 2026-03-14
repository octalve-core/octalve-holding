export type ServerVaultCatalogItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: number;
  currency: "NGN";
  fileKey: string;
};

export const serverVaultCatalog: ServerVaultCatalogItem[] = [
  {
    id: "vp_001",
    slug: "business-plan-templates",
    title: "Business Plan Templates",
    category: "Business & Startup",
    price: 15000,
    currency: "NGN",
    fileKey: "business-plan-templates.zip",
  },
  {
    id: "vp_002",
    slug: "pitch-deck-templates",
    title: "Pitch Deck Templates",
    category: "Business & Startup",
    price: 12000,
    currency: "NGN",
    fileKey: "pitch-deck-templates.zip",
  },
  {
    id: "vp_003",
    slug: "proposal-templates",
    title: "Proposal Templates",
    category: "Business & Startup",
    price: 10000,
    currency: "NGN",
    fileKey: "proposal-templates.zip",
  },
  {
    id: "vp_004",
    slug: "invoice-templates",
    title: "Invoice Templates",
    category: "Operations & Admin",
    price: 8000,
    currency: "NGN",
    fileKey: "invoice-templates.zip",
  },
  {
    id: "vp_005",
    slug: "wordpress-launchpad-kit",
    title: "Wordpress Launchpad Kit",
    category: "Website & Launch",
    price: 30000,
    currency: "NGN",
    fileKey: "wordpress-launchpad-kit.zip",
  },
  {
    id: "vp_006",
    slug: "wordpress-premium-kit",
    title: "Wordpress Premium Kit",
    category: "Website & Launch",
    price: 55000,
    currency: "NGN",
    fileKey: "wordpress-premium-kit.zip",
  },
  {
    id: "vp_007",
    slug: "startup-guides",
    title: "Startup Guides",
    category: "Business & Startup",
    price: 9000,
    currency: "NGN",
    fileKey: "startup-guides.zip",
  },
  {
    id: "vp_008",
    slug: "sales-scripts",
    title: "Sales Scripts",
    category: "Business & Startup",
    price: 7500,
    currency: "NGN",
    fileKey: "sales-scripts.zip",
  },
  {
    id: "vp_009",
    slug: "hr-templates",
    title: "HR Templates",
    category: "Operations & Admin",
    price: 11000,
    currency: "NGN",
    fileKey: "hr-templates.zip",
  },
  {
    id: "vp_010",
    slug: "finance-trackers",
    title: "Finance Trackers",
    category: "Operations & Admin",
    price: 9500,
    currency: "NGN",
    fileKey: "finance-trackers.zip",
  },
  {
    id: "vp_011",
    slug: "resource-bundles",
    title: "Resource Bundles",
    category: "Bundles",
    price: 20000,
    currency: "NGN",
    fileKey: "resource-bundles.zip",
  },
];

export function getServerVaultProductById(productId: string) {
  return serverVaultCatalog.find((product) => product.id === productId);
}
