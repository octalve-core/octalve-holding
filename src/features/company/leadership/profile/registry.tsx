import { notFound } from "next/navigation";

import { OlamideIsmailProfilePage } from "./sections/olamide-ismail/page";
import { AdedotunIdowuProfilePage } from "./sections/adedotun-idowu/page";
import { ArowoloAminatProfilePage } from "./sections/arowolo-aminat/page";

const leadershipProfileRegistry = {
  "olamide-ismail": OlamideIsmailProfilePage,
  "adedotun-idowu": AdedotunIdowuProfilePage,
  "arowolo-aminat": ArowoloAminatProfilePage,
} as const;

type LeadershipProfileSlug = keyof typeof leadershipProfileRegistry;

export function renderLeadershipProfile(slug: string) {
  const ProfilePage = leadershipProfileRegistry[slug as LeadershipProfileSlug];

  if (!ProfilePage) {
    notFound();
  }

  return <ProfilePage />;
}
