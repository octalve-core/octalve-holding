import NodePage from "@/features/models/node/page";
import ConsultPage from "@/features/models/consult/page";
import SuitePage from "@/features/models/suite/page";
import LabPage from "@/features/models/lab/page";
import LeapPage from "@/features/models/leap/page";
import OnePage from "@/features/models/one/page";
import VaultPage from "@/features/models/vault/page";

export function renderModelPage(model: string) {
  switch (model) {
    case "node":
      return <NodePage />;
    case "consult":
      return <ConsultPage />;
    case "suite":
      return <SuitePage />;

    case "lab":
      return <LabPage />;
    case "leap":
      return <LeapPage />;
    case "one":
      return <OnePage />;
    case "vault":
      return <VaultPage />;
    default:
      return null;
  }
}
