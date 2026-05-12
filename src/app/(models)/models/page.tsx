import type { Metadata } from "next";
import ModelsIndexPage from "@/features/models/index/page";

export const metadata: Metadata = {
  title: "Models | Octalve",
  description:
    "Explore Octalve models, services, products, and growth systems across strategy, launch, software, cloud, workspace, assets, and automation.",
};

export default function ModelsRoute() {
  return <ModelsIndexPage />;
}
