import ModelShell from "@/components/models/shared/model-shell";
import ConsultFaq from "./components/consult-faq";
import ConsultHero from "./components/consult-hero";
import ConsultOverview from "./components/consult-overview";
// import ConsultResults from "./components/consult-results";
import ConsultTestimonial from "./components/consult-testimonial";
// import ConsultWhy from "./components/consult-why";
import ConsultSteps from "./components/consult-steps";
import ConsultPackages from "./components/consult-package";
import ConsultCta from "./components/consult-cta";

export default function ConsultPage() {
  return (
    <ModelShell>
      <ConsultHero />
      <ConsultOverview />
      <ConsultSteps />
      <ConsultPackages />
      <ConsultCta />
      {/* <ConsultWhy /> */}
      {/* <ConsultResults /> */}
      <ConsultTestimonial />
      <ConsultFaq />
    </ModelShell>
  );
}
