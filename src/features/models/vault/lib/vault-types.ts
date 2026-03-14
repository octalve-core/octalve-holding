import type { StaticImageData } from "next/image";

export type VaultProductCategory =
  | "Business & Startup"
  | "Operations & Admin"
  | "Website & Launch"
  | "Bundles";

export type VaultProduct = {
  id: string;
  slug: string;
  title: string;
  category: VaultProductCategory;
  shortDescription: string;
  price: number;
  currency: "NGN";
  featured?: boolean;
  deliveryType: "digital";
  fileKey: string;
  image: StaticImageData;
  rating: number;
  reviewCount: number;
  details: {
    summary: string;
    businessBenefits: string[];
    productivityBenefits: string[];
  };
};
