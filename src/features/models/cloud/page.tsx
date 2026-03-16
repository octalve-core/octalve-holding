import ModelShell from "@/components/models/shared/model-shell";
import { CloudStripNav } from "./components/cloud-strip-nav";

import Hero from "./home/components/Hero";
import Overview from "./home/components/Overview";
import Plans from "./home/components/Plans";
import Review from "./home/components/Review";
import Benefit from "./home/components/Benefit";
import CTA from "./home/components/CTA";

export default function CloudPage() {
  return (
    <ModelShell>
      <CloudStripNav />
      <Hero />
      <Overview />
      <Plans />
      <Review />
      <Benefit />
      <CTA />
    </ModelShell>
  );
}
