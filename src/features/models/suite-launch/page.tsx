import ModelShell from "@/components/models/shared/model-shell";
import LaunchCta from "./components/launch-cta";
import LaunchEngineTabs from "./components/launch-engine-tabs";
import LaunchHero from "./components/launch-hero";
import LaunchTimeline from "./components/launch-timeline";
import SuiteSecondaryHeader from "@/components/suite/SuiteSecondaryHeader";

export default function LaunchSuitePage() {
  return (
    <ModelShell>
      <SuiteSecondaryHeader />
      <LaunchHero />
      <LaunchTimeline />
      <LaunchCta />
      <LaunchEngineTabs />
    </ModelShell>
  );
}
