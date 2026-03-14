import ModelShell from "@/components/models/shared/model-shell";

import { LeadershipStripNav } from "./shared/leadership-strip-nav";
import { LeadershipHero } from "./sections/leadership-hero";
import { LeadershipGrid } from "./sections/leadership-grid";

export function LeadershipPage() {
  return (
    <ModelShell>
      <div className="bg-[#F5F7F8]">
        <LeadershipStripNav />
        <LeadershipHero />
        <LeadershipGrid />
      </div>
    </ModelShell>
  );
}
