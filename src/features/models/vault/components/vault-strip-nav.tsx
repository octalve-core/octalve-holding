"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useVaultCart } from "../hooks/use-vault-cart";
import { vaultStripLinks } from "./vault-strip-links";

export function VaultStripNav() {
  const pathname = usePathname();
  const { itemCount } = useVaultCart();

  return (
    <>
      <section className="border-y border-slate-200 bg-[#F1F3F4]">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <div className="vault-strip-scroll">
            <nav className="mx-auto flex min-w-max items-center justify-center gap-8 text-black/60 sm:gap-10 lg:gap-14">
              {vaultStripLinks.map((item) => {
                const isActive = pathname === item.href;
                const label =
                  item.href === "/vault/cart" && itemCount > 0
                    ? `Cart (${itemCount})`
                    : item.label;

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
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      <style jsx>{`
        .vault-strip-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .vault-strip-scroll::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>
    </>
  );
}
