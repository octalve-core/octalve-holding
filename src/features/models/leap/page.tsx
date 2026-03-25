import ModelShell from "@/components/models/shared/model-shell";
import LeapFaq from "./components/leap-faq";
import LeapHero from "./components/leap-hero";
import LeapOverview from "./components/leap-overview";
// import LeapResults from "./components/leap-results";
import LeapTestimonial from "./components/leap-testimonial";
import LeapWhy from "./components/leap-why";
import LeapPricing from "./components/leap-pricing";
import LeapCta from "./components/leap-cta";

export default function LeapPage() {
  return (
    <ModelShell>
      <LeapHero />
      <LeapOverview />
      <LeapWhy />
      <LeapPricing />
      {/* <LeapResults /> */}
      <LeapTestimonial />
      <LeapCta />
      <LeapFaq />
    </ModelShell>
  );
}
