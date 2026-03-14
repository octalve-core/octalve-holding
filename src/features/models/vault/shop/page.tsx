"use client";

import Link from "next/link";

import ModelShell from "@/components/models/shared/model-shell";

import VaultProductCard from "../components/vault-product-card";
import { VaultStripNav } from "../components/vault-strip-nav";
import { vaultProducts } from "../data/vault-products";
import { useVaultCart } from "../hooks/use-vault-cart";
import { vaultUi } from "../lib/vault-ui";

export default function VaultShopPage() {
  const { addItem, hasItem, itemCount } = useVaultCart();

  return (
    <ModelShell>
      <VaultStripNav />

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-600">
                Shop
              </p>

              <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
                Digital resources built for modern businesses.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Browse templates, guides, kits, and business-ready resources
                inside Octalve Vault.
              </p>
            </div>

            <Link href="/vault/cart" className={vaultUi.secondaryButton}>
              View Cart {itemCount > 0 ? `(${itemCount})` : ""}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2 xl:grid-cols-3">
          {vaultProducts.map((product) => {
            const alreadyAdded = hasItem(product.id);

            return (
              <VaultProductCard
                key={product.id}
                product={product}
                action={
                  alreadyAdded
                    ? {
                        type: "link",
                        href: "/vault/cart",
                        label: "Added to Cart",
                        className: vaultUi.activeButton,
                      }
                    : {
                        type: "button",
                        label: "Add to Cart",
                        onClick: () => addItem(product.id),
                        className: vaultUi.primaryButton,
                      }
                }
              />
            );
          })}
        </div>
      </section>
    </ModelShell>
  );
}
