import ModelShell from "@/components/models/shared/model-shell";
import { LeadershipStripNav } from "@/features/company/leadership/shared/leadership-strip-nav";

import { OlamideHero } from "./sections/hero";
import { OlamideStory } from "./sections/story";
import { OlamideFocus } from "./sections/focus";

export function OlamideIsmailProfilePage() {
  return (
    <ModelShell>
      <div className="bg-[#F5F7F8]">
        <LeadershipStripNav />
        <OlamideHero />
        <OlamideStory />
        <OlamideFocus />
      </div>
    </ModelShell>
  );
}
