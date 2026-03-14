import Image from "next/image";
import Link from "next/link";

import type { LeadershipMember } from "@/features/company/leadership/data";

type LeadershipProfileHeroProps = {
  member: LeadershipMember;
};

export function LeadershipProfileHero({ member }: LeadershipProfileHeroProps) {
  return (
    <section className="bg-[#F5F7F8] px-5 pt-12 sm:px-6 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-[1320px]">
        <Link
          href="/leadership"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Leadership
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
            <div className="relative aspect-[0.86]">
              <Image
                src={member.image}
                alt={`${member.name} portrait`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
              Octalve Leadership
            </p>

            <h1 className="mt-4 text-4xl font-medium leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
              {member.name}
            </h1>

            <p className="mt-4 text-lg font-semibold text-slate-700">
              {member.role}
            </p>

            <p className="mt-6 max-w-[760px] text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              {member.intro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
