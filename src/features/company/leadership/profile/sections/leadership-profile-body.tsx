import type { LeadershipMember } from "@/features/company/leadership/data";

type LeadershipProfileBodyProps = {
  member: LeadershipMember;
};

export function LeadershipProfileBody({ member }: LeadershipProfileBodyProps) {
  const responsibilities = member.responsibilities ?? [];

  return (
    <section className="bg-[#F5F7F8] px-5 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-10">
          <h2 className="text-2xl font-medium tracking-[-0.03em] text-slate-950">
            Profile Overview
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            {member.shortBio ?? ""}
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            {member.intro ?? ""}
          </p>
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-10">
          <h2 className="text-2xl font-medium tracking-[-0.03em] text-slate-950">
            Core Responsibilities
          </h2>

          {responsibilities.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-7 text-slate-700"
                >
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#2563EB] text-white">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-base leading-8 text-slate-600">
              Responsibilities will be updated soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
