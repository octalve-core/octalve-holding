import ModelShell from "@/components/models/shared/model-shell";

import { WhoWeAreHero } from "./sections/who-we-are-hero";
import { WhoWeAreStory } from "./sections/who-we-are-story";
import { WhoWeAreValues } from "./sections/who-we-are-values";
import Partners from "@/components/sections/partners";

export function WhoWeArePage() {
  return (
    <ModelShell>
      <div className="bg-[#F5F7F8]">
        <WhoWeAreHero />
        <WhoWeAreStory />
        <WhoWeAreValues />
        <Partners />
      </div>
    </ModelShell>
  );
}
