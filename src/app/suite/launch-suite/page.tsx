import type { Metadata } from "next";
import LaunchSuitePage from "@/features/models/suite-launch/page";

export const metadata: Metadata = {
  title: "Launch Suite Abuja | Branding + Website + Content Kit for Founders",
  description:
    "Launch Suite helps founders go from idea to market-ready with brand identity, professional website setup, and a launch content kit.",
};

export default function Page() {
  return <LaunchSuitePage />;
}
