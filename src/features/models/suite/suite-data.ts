import type { StaticImageData } from "next/image";

import suiteHeroImage from "@/assets/suite/octalvesuiteihero.png";
import suiteGrowthImage from "@/assets/suite/octalvesuitgrowth.png";
import suitePartnerImage from "@/assets/suite/octalvesuitpartner.png";
import suiteLaunchImage from "@/assets/suite/octalvesuitlaunch.png";
import suiteNgoImage from "@/assets/suite/octalvesuitngo.png";
import suiteSocialImage from "@/assets/suite/octalvesuitsocial.png";

import suiteLogo from "@/assets/suite/logo/Octalve Suite.png";
import cloudLogo from "@/assets/suite/logo/Octalve Cloud Logo.png";
import consultLogo from "@/assets/suite/logo/Octalve Consult.png";
import labLogo from "@/assets/suite/logo/Octalve Lab.png";
import vaultLogo from "@/assets/suite/logo/Octalve Vault Logo.png";

import clientRonke from "@/assets/suite/client/drronkenow.png";
import clientHaleemah from "@/assets/suite/client/halimah.png";
import clientSarah from "@/assets/suite/client/sarah.png";

import portfolio1 from "@/assets/suite/portfolio/octalveportfolio1.png";
import portfolio2 from "@/assets/suite/portfolio/octalveportfolio2.png";
import portfolio3 from "@/assets/suite/portfolio/octalveportfolio3.png";
import portfolio4 from "@/assets/suite/portfolio/octalveportfolio4.png";
import portfolio5 from "@/assets/suite/portfolio/octalveportfolio5.png";
import portfolio6 from "@/assets/suite/portfolio/octalveportfolio6.png";

export const SUITE_COLORS = {
  primary: "#0064E0",
  heroBg: "#000A16",
  text: "#0B1220",
  muted: "#55627A",
  border: "rgba(15, 23, 42, 0.12)",
};

export type OverviewCard = {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  cta: string;
};

export type Testimonial = {
  id: string;
  name: string;
  rolePrefix: string;
  company: string;
  location?: string;
  quote: string;
  image: StaticImageData;
  accentBg: string;
};

export type PortfolioProject = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: "Business" | "Branding" | "NGO";
  image: StaticImageData;
  brand: string;
};

export type LiveProject = {
  title: string;
  url: string;
  subtitle: string;
  tags: string[];
};

export const suiteAssets = {
  suiteHeroImage,
  suiteGrowthImage,
  suitePartnerImage,
  suiteLaunchImage,
  suiteNgoImage,
  suiteSocialImage,
  suiteLogo,
};

export const backedByLogos = [
  { name: "Octalve Cloud", image: cloudLogo },
  { name: "Octalve Consult", image: consultLogo },
  { name: "Octalve Lab", image: labLogo },
  { name: "Octalve Vault", image: vaultLogo },
];

export const overviewCards: OverviewCard[] = [
  {
    title: "Launch Suite (The Start-Up Launch Pack)",
    description:
      "The goal: get your business professional and open for business in 14 days. Includes brand identity, a responsive website, and a 14-day social media starter kit.",
    image: suiteLaunchImage,
    href: "/suite/launch-suite",
    cta: "Learn More",
  },
  {
    title: "Impact Suite (The NGO Impact Kit)",
    description:
      "The goal: build trust and streamline donor contributions. Includes credibility-focused branding, a donation-ready website, and impact-reporting templates.",
    image: suiteNgoImage,
    href: "/suite/impact-suite",
    cta: "Learn More",
  },
  {
    title: "Growth Suite (SME Growth Subscription)",
    description:
      "The goal: constant visibility and sales funnel optimisation. Includes monthly design support, website updates, and lead-capture management.",
    image: suiteSocialImage,
    href: "/suite/pricing",
    cta: "Check Pricing",
  },
];

export const perks = [
  { title: "For Lawyer", subtitle: "CAC Lawyer" },
  { title: "For Accounting Firm", subtitle: "Chartered Accountant" },
  { title: "Cyber Café", subtitle: "Computer Centers" },
  { title: "Tech-Hub", subtitle: "Workspaces" },
];

export const testimonials: Testimonial[] = [
  {
    id: "ronke",
    name: "Dr. Aderonke Akerele",
    rolePrefix: "Founder,",
    company: "Sapphire Quest Travels",
    location: "Abuja",
    quote:
      "Octalve helped us refine our brand presence and deliver a clean, professional branding that actually supports enquiries. The process was structured, communication was clear, and they paid attention to details that matter for customer trust. Since launching, our online presentation looks more credible and easier for clients to interact with.",
    image: clientRonke,
    accentBg: "#E9FBFF",
  },
  {
    id: "haleemah",
    name: "Haleemah Abdul Azeez",
    rolePrefix: "CEO at",
    company: "SafedeenHQ",
    location: "Lagos",
    quote:
      "Octalve helped us build a strong digital foundation—branding, website structure, and technical setup. Their delivery was thoughtful and detail-oriented, and they made the process easy even when we had multiple moving parts. We’re satisfied with the quality and professionalism.",
    image: clientHaleemah,
    accentBg: "#F3EDE4",
  },
  {
    id: "sarah",
    name: "Sarah A.",
    rolePrefix: "Founder of",
    company: "IHHCounsulting",
    location: "Canada",
    quote:
      "Octalve brought clarity and quality to our brand logo and identity delivery. The logo is clean, aesthetic, and well organised, and their support approach is professional. I appreciated the speed, documentation, and how they made the entire process easy.",
    image: clientSarah,
    accentBg: "#FDE2D7",
  },
];

export const faqs = [
  {
    q: "What is Octalve Suite?",
    a: "Octalve Suite is our all-in-one production house designed to take you from idea to market-ready. Whether you are a solo founder, a growing NGO, or an agency looking for a reliable production partner, our specialised suites provide the foundation you need.",
  },
  {
    q: "How quickly can I realistically launch my brand with the Launch Suite?",
    a: "Our typical timeline is 7–14 days. Speed depends on how quickly you provide the core information we need such as business details, services, and media assets.",
  },
  {
    q: "I already have a logo; can I still get the Start-Up or NGO kit?",
    a: "Yes. We can do a brand refresh, optimise your existing identity, and build the rest of your site and content system around it.",
  },
  {
    q: "I don’t have content.",
    a: "We can help structure the content and use clean placeholders or stock assets while your content is being finalised.",
  },
  {
    q: "Do the website packages include domain names and hosting?",
    a: "We handle setup, design, optimisation, and guidance. Domain and hosting fees are usually paid directly by the client, but we guide the process end to end.",
  },
  {
    q: "How does the donation-friendly system work for NGOs?",
    a: "We integrate reliable payment gateways such as Paystack or Flutterwave and set up a flow that helps your team collect and track donations more efficiently.",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Gravitas",
    subtitle: "Asset Security Company",
    description:
      "They are brokers who help clients manage funds and invest in the right assets while they focus on business growth.",
    tags: ["Logo", "Branding", "Components", "Finance"],
    type: "Branding",
    image: portfolio1,
    brand: "Gravitas",
  },
  {
    title: "IHHC",
    subtitle: "Business Consulting Firm",
    description:
      "IHHC provides expert guidance and strategic business solutions to help businesses thrive in a competitive market.",
    tags: ["Logo", "Branding", "Consulting"],
    type: "Branding",
    image: portfolio2,
    brand: "IHHC",
  },
  {
    title: "Heliox",
    subtitle: "Security and Renewable Energy",
    description:
      "Where sustainable energy meets smart security, providing the backbone for growth through solar and surveillance systems.",
    tags: ["Logo", "Branding", "Energy"],
    type: "Branding",
    image: portfolio3,
    brand: "Heliox",
  },
  {
    title: "SafeDeenHQ",
    subtitle: "Cybersecurity for Muslim Kids",
    description:
      "An interactive learning platform that helps Muslim children navigate the digital world through relatable, engaging lessons.",
    tags: ["Logo", "Branding", "Islamic"],
    type: "NGO",
    image: portfolio4,
    brand: "SafeDeenHQ",
  },
  {
    title: "Arin Jewellery",
    subtitle: "Jewellery and Royal Accessories Brand",
    description:
      "A luxury brand combining timeless craftsmanship with modern elegance across gold, diamonds, and premium accessories.",
    tags: ["Logo", "Branding", "Jewellery"],
    type: "Business",
    image: portfolio5,
    brand: "Arin",
  },
  {
    title: "Emprofit Solutions",
    subtitle: "Digital Agency",
    description:
      "A digital agency focused on compelling brand identities and seamless user experiences for ambitious businesses.",
    tags: ["Logo", "Branding", "Agency"],
    type: "Business",
    image: portfolio6,
    brand: "Emprofit",
  },
];

export const liveProjects: LiveProject[] = [
  {
    title: "DSF Inc",
    url: "https://dsfinc.org",
    subtitle: "Corporate Website",
    tags: ["Website", "Corporate", "UI"],
  },
  {
    title: "Mayport Oil & Gas",
    url: "https://mayportoilandgas.com",
    subtitle: "Energy & Industrial",
    tags: ["Website", "Brand", "Business"],
  },
  {
    title: "Gotooeasy Homes/Travels & Tours",
    url: "https://ghotat.com",
    subtitle: "Real Estate / Travels",
    tags: ["Website", "Listings", "Tours"],
  },
  {
    title: "Network of Space–Earth Environmentalists",
    url: "https://nspee.org",
    subtitle: "Nonprofit / Environmental Network",
    tags: ["Website", "NGO", "Community"],
  },
];
