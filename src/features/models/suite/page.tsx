import ModelShell from "@/components/models/shared/model-shell";
import SuiteFaq from "./components/suite-faq";
import SuiteHero from "./components/suite-hero";
import SuiteLivePortfolio from "./components/suite-live-portfolio";
import SuiteOverview from "./components/suite-overview";
import SuitePerks from "./components/suite-perks";
import SuitePortfolio from "./components/suite-portfolio";
import SuiteTestimonials from "./components/suite-testimonials";
import SuiteWhy from "./components/suite-why";
import SuiteSecondaryHeader from "@/components/suite/SuiteSecondaryHeader";

export default function SuitePage() {
  return (
    <ModelShell>
      <SuiteSecondaryHeader />
      <SuiteHero />
      <SuiteWhy />
      <SuiteOverview />
      <SuitePerks />
      <SuiteTestimonials />
      <SuiteFaq />
      <SuitePortfolio />
      <SuiteLivePortfolio />
    </ModelShell>
  );
}
