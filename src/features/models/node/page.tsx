import ModelShell from "@/components/models/shared/model-shell";
import NodeFaq from "./components/node-faq";
import NodeHero from "./components/node-hero";
import NodeOverview from "./components/node-overview";
import NodeResults from "./components/node-results";
import NodeTestimonial from "./components/node-testimonial";
import NodeWhy from "./components/node-why";

export default function NodePage() {
  return (
    <ModelShell>
      <NodeHero />
      <NodeOverview />
      <NodeWhy />
      <NodeResults />
      <NodeTestimonial />
      <NodeFaq />
    </ModelShell>
  );
}
