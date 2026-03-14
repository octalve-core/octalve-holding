import type { LeadershipMember } from "../data";

import { LeadershipProfileHero } from "./sections/leadership-profile-hero";
import { LeadershipProfileBody } from "./sections/leadership-profile-body";

type LeadershipProfilePageProps = {
  member: LeadershipMember;
};

export function LeadershipProfilePage({ member }: LeadershipProfilePageProps) {
  return (
    <main className="bg-[#F8FAFC]">
      <LeadershipProfileHero member={member} />
      <LeadershipProfileBody member={member} />
    </main>
  );
}
