import ModelShell from "@/components/models/shared/model-shell";
import ImpactCta from "./components/impact-cta";
import ImpactEngineTabs from "./components/impact-engine-tabs";
import ImpactHero from "./components/impact-hero";
import ImpactTimeline from "./components/impact-timeline";
import SuiteSecondaryHeader from "@/components/suite/SuiteSecondaryHeader";

export default function ImpactSuitePage() {
  return (
    <ModelShell>
      <SuiteSecondaryHeader />
      <ImpactHero />
      <ImpactTimeline />
      <ImpactCta />
      <ImpactEngineTabs />
    </ModelShell>
  );
}
