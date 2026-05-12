"use client";

import { useMemo, useState } from "react";
import type { StaticImageData } from "next/image";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import nodeImage from "@/assets/portfolio/models/node.png";
import consultImage from "@/assets/portfolio/models/consult.png";
import labImage from "@/assets/portfolio/models/lab.png";
import leapImage from "@/assets/portfolio/models/leap.png";
import suiteImage from "@/assets/portfolio/models/suite.png";
import cloudImage from "@/assets/portfolio/models/cloud.png";
import vaultImage from "@/assets/portfolio/models/vault.png";
import oneImage from "@/assets/portfolio/models/one.png";

import ModelsHero from "./components/models-hero";
import ModelsGrid, { type ModelIndexItem } from "./components/models-grid";
import ModelsCta from "./components/models-cta";

/**
 * ADD MORE MODELS, PRODUCTS, OR SERVICES HERE IN FUTURE.
 * The search, A-Z filter, result count, and grid will update automatically.
 */
const modelIndexItems: ModelIndexItem[] = [
  {
    name: "Consult",
    title: "Octalve Consult",
    href: "/models/consult",
    image: consultImage as StaticImageData,
    label: "Strategy",
    labelTone: "strategy",
    type: "Model",
    summary: "Business clarity, structure, advisory, and growth direction.",
    description:
      "For founders, SMEs, and organizations that need clearer strategy, operational structure, offer clarity, sales direction, and business improvement support.",
    tags: ["strategy", "advisory", "business clarity", "operations", "growth"],
  },
  {
    name: "Lab",
    title: "Octalve Lab",
    href: "/models/lab",
    image: labImage as StaticImageData,
    label: "Build",
    labelTone: "build",
    type: "Model",
    summary: "Branding, websites, apps, software, and product execution.",
    description:
      "For businesses that need design, development, digital product execution, brand identity, websites, apps, UI/UX, and custom software systems.",
    tags: ["branding", "website", "software", "app", "ui ux", "development"],
  },
  {
    name: "Leap",
    title: "Octalve Leap",
    href: "/models/leap",
    image: leapImage as StaticImageData,
    label: "Growth",
    labelTone: "growth",
    type: "Model",
    summary: "Startup setup, founder readiness, and business launch support.",
    description:
      "For early-stage founders who need validation, registration support, business planning, pitch readiness, setup guidance, and launch preparation.",
    tags: ["startup", "registration", "business plan", "founders", "launch"],
  },
  {
    name: "Suite",
    title: "Octalve Suite",
    href: "/models/suite",
    image: suiteImage as StaticImageData,
    label: "Popular",
    labelTone: "popular",
    type: "Model",
    summary: "Packaged launch systems for visibility, trust, and growth.",
    description:
      "For founders, NGOs, and SMEs that need brand rollout, website setup, lead capture, content support, digital structure, and growth-ready execution.",
    tags: ["launch", "ngo", "website", "content", "visibility", "growth"],
  },
  {
    name: "Cloud",
    title: "Octalve Cloud",
    href: "/models/cloud",
    image: cloudImage as StaticImageData,
    label: "Cloud",
    labelTone: "cloud",
    type: "Model",
    summary:
      "Domains, hosting, security, email, migration, and infrastructure.",
    description:
      "For businesses that need domain registration, web hosting, business email, SSL, website migration, server support, backups, and managed infrastructure.",
    tags: ["domain", "hosting", "email", "ssl", "server", "migration"],
  },
  {
    name: "Vault",
    title: "Octalve Vault",
    href: "/models/vault",
    image: vaultImage as StaticImageData,
    label: "Assets",
    labelTone: "assets",
    type: "Product",
    summary: "Templates, playbooks, digital kits, and execution resources.",
    description:
      "For founders and businesses that want ready-to-use templates, downloadable resources, business tools, playbooks, guides, and execution support assets.",
    tags: ["templates", "resources", "downloads", "playbooks", "tools"],
  },
  {
    name: "One",
    title: "Octalve One",
    href: "/models/one",
    image: oneImage as StaticImageData,
    label: "AI",
    labelTone: "ai",
    type: "Model",
    summary: "Business software, automation, CRM, analytics, and AI systems.",
    description:
      "For teams that need smarter operations through business software, workflow automation, CRM systems, invoicing, analytics, booking tools, and AI-enabled systems.",
    tags: ["software", "automation", "crm", "ai", "analytics", "workflow"],
  },
  {
    name: "Node",
    title: "Octalve Node",
    href: "/models/node",
    image: nodeImage as StaticImageData,
    label: "Workspace",
    labelTone: "workspace",
    type: "Model",
    summary: "Workspace, virtual office, training, and startup environment.",
    description:
      "For founders, professionals, and startups that need workspace access, virtual office support, meeting rooms, events, training, and a focused business environment.",
    tags: ["workspace", "virtual office", "training", "startup", "community"],
  },
];

function getFirstLetter(value: string) {
  return value.trim().charAt(0).toUpperCase();
}

export default function ModelsIndexPage() {
  const [activeLetter, setActiveLetter] = useState<string>("-");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return modelIndexItems.filter((item) => {
      const letterMatch =
        activeLetter === "-" || getFirstLetter(item.name) === activeLetter;

      const searchableText = [
        item.name,
        item.title,
        item.type,
        item.label,
        item.summary,
        item.description,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      const searchMatch =
        normalizedSearch.length === 0 ||
        searchableText.includes(normalizedSearch);

      return letterMatch && searchMatch;
    });
  }, [activeLetter, searchQuery]);

  function clearFilters() {
    setActiveLetter("-");
    setSearchQuery("");
  }

  return (
    <>
      <Header />

      <main className="bg-[#F7F9FF]">
        <ModelsHero
          activeLetter={activeLetter}
          onLetterChange={setActiveLetter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultCount={filteredItems.length}
          totalCount={modelIndexItems.length}
        />

        <ModelsGrid items={filteredItems} onClearFilters={clearFilters} />

        <ModelsCta />
      </main>

      <Footer />
    </>
  );
}
