import ModelShell from "@/components/models/shared/model-shell";

import PrivacyPolicyHero from "./components/hero";
import PrivacyPolicyContent from "./components/content";

export default function PrivacyPolicyPage() {
  return (
    <ModelShell>
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </ModelShell>
  );
}
