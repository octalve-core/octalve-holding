import type { Metadata } from "next";

import { WhoWeArePage } from "@/features/company/who-we-are/page";

export const metadata: Metadata = {
  title: "Who We Are | Octalve",
  description:
    "Learn about Octalve, our story, values, leadership, and the vision driving our work in branding, digital infrastructure, business growth, and innovation across Africa.",
  keywords: [
    "Octalve",
    "Who We Are",
    "About Octalve",
    "Octalve company",
    "Octalve leadership",
    "branding company in Nigeria",
    "digital innovation Africa",
    "business growth company",
    "web development company Nigeria",
    "technology and branding company",
  ],
  alternates: {
    canonical: "/who-we-are",
  },
  openGraph: {
    title: "Who We Are | Octalve",
    description:
      "Discover Octalve’s story, values, and mission to help brands and businesses grow through strategy, technology, and execution.",
    url: "/who-we-are",
    siteName: "Octalve",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Octalve",
    description:
      "Discover Octalve’s story, values, and mission to help brands and businesses grow through strategy, technology, and execution.",
  },
};

export default function WhoWeAreRoute() {
  return <WhoWeArePage />;
}
