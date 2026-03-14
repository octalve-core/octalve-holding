import { leadershipMembers } from "../data";
import { LeadershipCard } from "../components/leadership-card";

export function LeadershipGrid() {
  return (
    <section className="bg-[#F5F7F8] px-5 py-20 pb-24 pt-14 sm:px-6 lg:px-8 lg:pb-32 lg:pt-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto grid max-w-[1180px] gap-x-8 gap-y-14 sm:max-w-[620px] md:max-w-[880px] md:grid-cols-2 md:gap-x-8 md:gap-y-16 xl:max-w-none xl:grid-cols-3 xl:gap-x-7 xl:gap-y-64">
          {leadershipMembers.map((member) => (
            <div
              key={member.slug}
              className="mx-auto w-full max-w-[360px] xl:max-w-none"
            >
              <LeadershipCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
