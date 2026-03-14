import type { Metadata } from "next";

import { LeadershipPage } from "@/features/company/leadership/page";

export const metadata: Metadata = {
  title: "Leadership | Octalve",
  description:
    "Meet the people leading strategy, execution, delivery, and growth across Octalve.",
};

export default function LeadershipRoute() {
  return <LeadershipPage />;
}
