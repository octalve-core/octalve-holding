import ModelShell from "@/components/models/shared/model-shell";
import { LeadershipStripNav } from "@/features/company/leadership/shared/leadership-strip-nav";

import { ArowoloHero } from "./sections/hero";
// import { ArowoloAdministration } from "./sections/administration";
// import { ArowoloSupport } from "./sections/support";

export function ArowoloAminatProfilePage() {
  return (
    <ModelShell>
      <div className="bg-[#F5F7F8]">
        <LeadershipStripNav />
        <ArowoloHero />
        {/* <ArowoloAdministration /> */}
        {/* <ArowoloSupport /> */}
      </div>
    </ModelShell>
  );
}
