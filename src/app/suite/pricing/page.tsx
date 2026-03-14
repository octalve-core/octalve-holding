import type { Metadata } from "next";
import SuitePricingPage from "@/features/models/suite-pricing/page";

export const metadata: Metadata = {
  title: "Pricing | Octalve Suite Abuja",
  description:
    "Compare Launch Suite, Impact Suite, and Growth Suite. Build an instant quote, view bundle discounts, and choose the best setup for your business or organisation.",
};

export default function Page() {
  return <SuitePricingPage />;
}
