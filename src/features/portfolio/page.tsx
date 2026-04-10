import ModelShell from "@/components/models/shared/model-shell";

import PortfolioHero from "././components/hero";
import PortfolioShowcase from "././components/showcase";

export default function PortfolioPage() {
  return (
    <ModelShell>
      <PortfolioHero />
      <PortfolioShowcase />
    </ModelShell>
  );
}
