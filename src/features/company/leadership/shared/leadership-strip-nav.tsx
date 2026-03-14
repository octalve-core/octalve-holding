"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { leadershipStripLinks } from "./leadership-strip-links";

export function LeadershipStripNav() {
  const pathname = usePathname();

  return (
    <section className="border-y border-slate-200 bg-[#F1F3F4]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="no-scrollbar overflow-x-auto">
          <nav className="mx-auto flex min-w-max items-center justify-center text-black/60 gap-8 sm:gap-10 lg:gap-14">
            {leadershipStripLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative inline-flex items-center justify-center whitespace-nowrap border-b-2 px-1 pb-4 pt-4 text-sm font-medium tracking-[-0.01em] transition-colors duration-200",
                    isActive
                      ? "border-[#2563EB] text-slate-950"
                      : "border-transparent text-slate-500 hover:text-slate-800",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
