import type { StaticImageData } from "next/image";

import gravitasImage from "@/assets/suite/portfolio/octalveportfolio1.png";
import ihhcImage from "@/assets/suite/portfolio/octalveportfolio2.png";
import helioxImage from "@/assets/suite/portfolio/octalveportfolio3.png";
import safedeenhqBrandImage from "@/assets/suite/portfolio/octalveportfolio4.png";
import arinImage from "@/assets/suite/portfolio/octalveportfolio5.png";
import emprofitBrandImage from "@/assets/suite/portfolio/octalveportfolio6.png";

export const portfolioFilters = ["all", "Website", "Branding"] as const;

export type PortfolioFilter = (typeof portfolioFilters)[number];

export type WebsiteProject = {
  id: string;
  name: string;
  href: string;
  videoSrc: string;
  buttonLabel: string;
  ariaLabel: string;
};

export type BrandingProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: "Business" | "Branding" | "NGO";
  image: StaticImageData;
  brand: string;
};

export const websiteProjectIds = [
  "dsfinc",
  "emprofit",
  "gotooeasy",
  "mayport",
  "mobileeducator",
  "nspee",
  "safedeenhq",
] as const;

export type WebsiteProjectId = (typeof websiteProjectIds)[number];

export const websiteProjectsById: Record<WebsiteProjectId, WebsiteProject> = {
  dsfinc: {
    id: "dsfinc",
    name: "DSF Inc Org",
    href: "https://dsfinc.org/",
    videoSrc: "/videos/lab/dsfinc.webm",
    buttonLabel: "Visit Website",
    ariaLabel: "Visit DSF Inc website",
  },
  emprofit: {
    id: "emprofit",
    name: "Emprofit",
    href: "https://emprofitsolution.com/",
    videoSrc: "/videos/lab/emprofit.webm",
    buttonLabel: "Visit Website",
    ariaLabel: "Visit Emprofit website",
  },
  gotooeasy: {
    id: "gotooeasy",
    name: "Gotooeasy",
    href: "https://ghotat.com/",
    videoSrc: "/videos/lab/gotooeasy.webm",
    buttonLabel: "Visit Website",
    ariaLabel: "Visit Gotooeasy website",
  },
  mayport: {
    id: "mayport",
    name: "Mayport Oil & Gas",
    href: "https://mayportoilandgas.com/",
    videoSrc: "/videos/lab/mayport.webm",
    buttonLabel: "Visit Website",
    ariaLabel: "Visit Mayport Oil & Gas website",
  },
  mobileeducator: {
    id: "mobileeducator",
    name: "Mobile Educator",
    href: "https://thenigerianmobileeducator.com/",
    videoSrc: "/videos/lab/mobileeducator.webm",
    buttonLabel: "Visit Website",
    ariaLabel: "Visit Mobile Educator website",
  },
  nspee: {
    id: "nspee",
    name: "NSPEE Org.",
    href: "https://nspee.org/",
    videoSrc: "/videos/lab/nspee.webm",
    buttonLabel: "Visit Website",
    ariaLabel: "Visit NSPEE website",
  },
  safedeenhq: {
    id: "safedeenhq",
    name: "Safedeen HQ",
    href: "https://safedeenhq.com/",
    videoSrc: "/videos/lab/safedeenhq.webm",
    buttonLabel: "Visit Website",
    ariaLabel: "Visit Safedeen HQ website",
  },

  // Sample for future website addition:
  // newwebsite: {
  //   id: "newwebsite",
  //   name: "New Website",
  //   href: "https://example.com/",
  //   videoSrc: "/videos/lab/newwebsite.webm",
  //   buttonLabel: "Visit Website",
  //   ariaLabel: "Visit New Website",
  // },
};

export const websiteProjects: WebsiteProject[] = websiteProjectIds.map(
  (id) => websiteProjectsById[id],
);

export const brandingProjectIds = [
  "gravitas",
  "ihhc",
  "heliox",
  "safedeenhq-brand",
  "arin",
  "emprofit-brand",
] as const;

export type BrandingProjectId = (typeof brandingProjectIds)[number];

export const brandingProjectsById: Record<BrandingProjectId, BrandingProject> =
  {
    gravitas: {
      id: "gravitas",
      title: "Gravitas",
      subtitle: "Asset Security Company",
      description:
        "They are brokers who help clients manage funds and invest in the right assets while they focus on business growth.",
      tags: ["Logo", "Branding", "Components", "Finance"],
      type: "Branding",
      image: gravitasImage,
      brand: "Gravitas",
    },
    ihhc: {
      id: "ihhc",
      title: "IHHC",
      subtitle: "Business Consulting Firm",
      description:
        "IHHC provides expert guidance and strategic business solutions to help businesses thrive in a competitive market.",
      tags: ["Logo", "Branding", "Consulting"],
      type: "Branding",
      image: ihhcImage,
      brand: "IHHC",
    },
    heliox: {
      id: "heliox",
      title: "Heliox",
      subtitle: "Security and Renewable Energy",
      description:
        "Where sustainable energy meets smart security, providing the backbone for growth through solar and surveillance systems.",
      tags: ["Logo", "Branding", "Energy"],
      type: "Branding",
      image: helioxImage,
      brand: "Heliox",
    },
    "safedeenhq-brand": {
      id: "safedeenhq-brand",
      title: "SafeDeenHQ",
      subtitle: "Cybersecurity for Muslim Kids",
      description:
        "An interactive learning platform that helps Muslim children navigate the digital world through relatable, engaging lessons.",
      tags: ["Logo", "Branding", "Islamic"],
      type: "NGO",
      image: safedeenhqBrandImage,
      brand: "SafeDeenHQ",
    },
    arin: {
      id: "arin",
      title: "Arin Jewellery",
      subtitle: "Jewellery and Royal Accessories Brand",
      description:
        "A luxury brand combining timeless craftsmanship with modern elegance across gold, diamonds, and premium accessories.",
      tags: ["Logo", "Branding", "Jewellery"],
      type: "Business",
      image: arinImage,
      brand: "Arin",
    },
    "emprofit-brand": {
      id: "emprofit-brand",
      title: "Emprofit Solutions",
      subtitle: "Digital Agency",
      description:
        "A digital agency focused on compelling brand identities and seamless user experiences for ambitious businesses.",
      tags: ["Logo", "Branding", "Agency"],
      type: "Business",
      image: emprofitBrandImage,
      brand: "Emprofit",
    },

    // Sample for future branding addition:
    // "new-brand": {
    //   id: "new-brand",
    //   title: "New Brand",
    //   subtitle: "Industry / Category",
    //   description: "Short project description goes here.",
    //   tags: ["Logo", "Branding"],
    //   type: "Branding",
    //   image: newBrandImage,
    //   brand: "New Brand",
    // },
  };

export const brandingProjects: BrandingProject[] = brandingProjectIds.map(
  (id) => brandingProjectsById[id],
);
