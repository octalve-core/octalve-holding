"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

const suiteNavItems = [
  { label: "Model Suite", href: "/models/suite" },
  { label: "Launch Suite", href: "/suite/launch-suite" },
  { label: "Impact Suite", href: "/suite/impact-suite" },
  { label: "Pricing", href: "/suite/pricing" },
];

const SUITE_NAV_COLORS = {
  bg: "#F8FAFC",
  border: "#E2E8F0",
  text: "#64748B",
  textHover: "#0F172A",
  textActive: "#000A16",
  activeLine: "#0A84FF",
};

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SuiteSecondaryHeader() {
  const pathname = usePathname();

  const isSuitePage = useMemo(() => {
    return (
      pathname?.startsWith("/models/suite") || pathname?.startsWith("/suite/")
    );
  }, [pathname]);

  if (!isSuitePage) return null;

  return (
    <>
      <div
        className="border-y"
        style={{
          backgroundColor: SUITE_NAV_COLORS.bg,
          borderColor: SUITE_NAV_COLORS.border,
        }}
      >
        <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">
          <div className="suite-subnav-scroll overflow-x-auto">
            <nav className="flex min-w-max items-center gap-6 py-2 md:justify-center md:gap-8 lg:gap-10">
              {suiteNavItems.map((item) => {
                const isActive = isPathActive(pathname, item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative shrink-0 px-1 py-3 text-[13px] font-medium tracking-[-0.01em] transition sm:text-sm"
                    style={{
                      color: isActive
                        ? SUITE_NAV_COLORS.textActive
                        : SUITE_NAV_COLORS.text,
                    }}
                  >
                    <span
                      className="transition-colors duration-200"
                      style={{
                        color: isActive
                          ? SUITE_NAV_COLORS.textActive
                          : undefined,
                      }}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-200 ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                      style={{ backgroundColor: SUITE_NAV_COLORS.activeLine }}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        .suite-subnav-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .suite-subnav-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
