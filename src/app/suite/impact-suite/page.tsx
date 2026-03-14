import type { Metadata } from "next";
import ImpactSuitePage from "@/features/models/suite-impact/page";

export const metadata: Metadata = {
  title:
    "Impact Suite Abuja | NGO Branding + Donation Website + Impact Reporting",
  description:
    "Impact Suite helps NGOs and mission-driven organisations present credibility, build donor trust, and launch donation-ready digital platforms.",
};

export default function Page() {
  return <ImpactSuitePage />;
}
