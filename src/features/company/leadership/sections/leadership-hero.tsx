import { leadershipPageContent } from "../data";

export function LeadershipHero() {
  return (
    <section className="bg-[#F5F7F8] px-5 pt-16 sm:px-6 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#2563EB] sm:text-[15px]">
          {leadershipPageContent.eyebrow}
        </p>

        <h1 className="mx-auto mt-6 max-w-[860px] text-4xl font-medium leading-[1.02] tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4.4rem] lg:leading-[0.98]">
          {leadershipPageContent.title}
        </h1>

        <p className="mx-auto mt-8 max-w-[700px] text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
          {leadershipPageContent.subtitle}
        </p>
      </div>
    </section>
  );
}
