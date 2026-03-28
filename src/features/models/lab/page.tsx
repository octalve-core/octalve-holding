import ModelShell from "@/components/models/shared/model-shell";
import LabFaq from "./components/lab-faq";
import LabHero from "./components/lab-hero";
import LabOverview from "./components/lab-overview";
// import LabResults from "./components/lab-results";
import LabTestimonial from "./components/lab-testimonial";
import LabWhy from "./components/lab-why";
// import LabWeb from "./components/lab-web";
import BrandingCard from "./components/lab-card";
import LabServicesStack from "./components/lab-services-stack";
import LabBranding from "./components/lab-branding";
import LabCta from "./components/lab-cta";
import LabPricingPackages from "./components/lab-package";

export default function LabPage() {
  return (
    <ModelShell>
      <LabHero />
      <LabOverview />
      <LabServicesStack />
      <LabWhy />
      {/* <LabResults /> */}
      <LabBranding />
      <BrandingCard />
      {/* <LabWeb /> */}
      <LabPricingPackages />
      <LabTestimonial />
      <LabCta />
      <LabFaq />
    </ModelShell>
  );
}
