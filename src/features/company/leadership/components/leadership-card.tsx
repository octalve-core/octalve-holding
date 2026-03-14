import Image from "next/image";
import Link from "next/link";

import type { LeadershipMember } from "../data";

const CARD_STYLES = {
  button: "#2563EB",
  buttonHover: "#1D4ED8",
};

type LeadershipCardProps = {
  member: LeadershipMember;
};

export function LeadershipCard({ member }: LeadershipCardProps) {
  return (
    <article className="group">
      <div className="relative mx-auto w-full max-w-[420px]">
        <div className="relative h-[420px] overflow-hidden bg-[#D9DEE3] sm:h-[460px] lg:h-[500px]">
          <Image
            src={member.image}
            alt={member.name}
            width={member.image.width}
            height={member.image.height}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            priority
          />

          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/32" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
            <Link
              href={`/leadership/${member.slug}`}
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-medium text-white shadow-[0_18px_40px_rgba(37,99,235,0.30)] transition hover:scale-[1.02]"
              style={{ backgroundColor: CARD_STYLES.button }}
            >
              View Profile
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M9 7H17V15"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative z-10 -mt-12 px-9 pb-1">
          <div className="bg-white px-6 py-6 text-center shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
            <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-slate-500">
              {member.role}
            </p>

            <h3 className="mt-4 text-[24px] font-medium leading-tight tracking-[-0.03em] text-slate-950 sm:text-[26px]">
              {member.name}
            </h3>
          </div>
        </div>
      </div>
    </article>
  );
}
