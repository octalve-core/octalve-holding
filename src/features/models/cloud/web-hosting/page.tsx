import ModelShell from "@/components/models/shared/model-shell";
import { CloudStripNav } from "../components/cloud-strip-nav";

import Hero from "./components/Hero";
// import Overview from "./components/Overview";
import Plans from "./components/Plans";
// import Review from "./components/Review";
// import Benefit from "./components/Benefit";
import CTA from "./components/CTA";
import HostingFaq from "./components/hosting-faq";

export default function WebHostingPage() {
  return (
    <ModelShell>
      <CloudStripNav />
      <Hero />
      {/* <Overview /> */}
      <Plans />
      {/* <Review /> */}
      {/* <Benefit /> */}
      <HostingFaq />
      <CTA />
    </ModelShell>
  );
}
