import ModelShell from "@/components/models/shared/model-shell";
import { CloudStripNav } from "../components/cloud-strip-nav";

import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Plans from "./components/Plans";
import Review from "./components/Review";
import Benefit from "./components/Benefit";
import CTA from "./components/CTA";

export default function WordPressHostingPage() {
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
