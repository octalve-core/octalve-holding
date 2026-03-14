import ModelShell from "@/components/models/shared/model-shell";
import PricingCalculator from "./components/pricing-calculator";
import PricingCta from "./components/pricing-cta";
import PricingHero from "./components/pricing-hero";
import SuiteSecondaryHeader from "@/components/suite/SuiteSecondaryHeader";

export default function SuitePricingPage() {
  return (
    <ModelShell>
      <SuiteSecondaryHeader />
      <PricingHero />
      <PricingCalculator />
      <PricingCta />
    </ModelShell>
  );
}
