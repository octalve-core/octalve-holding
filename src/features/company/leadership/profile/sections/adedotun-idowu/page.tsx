import ModelShell from "@/components/models/shared/model-shell";
import { LeadershipStripNav } from "@/features/company/leadership/shared/leadership-strip-nav";

import { AdedotunHero } from "./sections/hero";
// import { AdedotunDelivery } from "./sections/delivery";
// import { AdedotunTimeline } from "./sections/timeline";

export function AdedotunIdowuProfilePage() {
  return (
    <ModelShell>
      <div className="bg-[#F5F7F8]">
        <LeadershipStripNav />
        <AdedotunHero />
        {/* <AdedotunDelivery /> */}
        {/* <AdedotunTimeline /> */}
      </div>
    </ModelShell>
  );
}
