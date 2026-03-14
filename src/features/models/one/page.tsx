import ModelShell from "@/components/models/shared/model-shell";
import OneFaq from "./components/one-faq";
import OneHero from "./components/one-hero";
import OneOverview from "./components/one-overview";
import OneResults from "./components/one-results";
import OneTestimonial from "./components/one-testimonial";
import OneWhy from "./components/one-why";

export default function OnePage() {
  return (
    <ModelShell>
      <OneHero />
      <OneOverview />
      <OneWhy />
      <OneResults />
      <OneTestimonial />
      <OneFaq />
    </ModelShell>
  );
}
