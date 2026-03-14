import ModelShell from "@/components/models/shared/model-shell";
import LabFaq from "./components/lab-faq";
import LabHero from "./components/lab-hero";
import LabOverview from "./components/lab-overview";
import LabResults from "./components/lab-results";
import LabTestimonial from "./components/lab-testimonial";
import LabWhy from "./components/lab-why";

export default function LabPage() {
  return (
    <ModelShell>
      <LabHero />
      <LabOverview />
      <LabWhy />
      <LabResults />
      <LabTestimonial />
      <LabFaq />
    </ModelShell>
  );
}
