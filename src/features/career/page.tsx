import ModelShell from "@/components/models/shared/model-shell";

import CareerHero from "./components/hero";
import CareerApplicationForm from "./components/applicationform";

export default function CareerPage() {
  return (
    <ModelShell>
      <CareerHero />
      <CareerApplicationForm />
    </ModelShell>
  );
}
