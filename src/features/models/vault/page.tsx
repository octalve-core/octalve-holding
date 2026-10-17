// OCTALVE LEGACY VAULT SOURCE - PRESERVED AS COMMENTS
// import Link from "next/link";
//
// import ModelShell from "@/components/models/shared/model-shell";
// import VaultHero from "./components/vault-hero";
// // import VaultFaq from "./components/vault-faq";
//
// import VaultProductCard from "./components/vault-product-card";
// import { VaultStripNav } from "./components/vault-strip-nav";
// import { vaultProducts } from "./data/vault-products";
// import { vaultUi } from "./lib/vault-ui";
// import VaultFaq from "./components/vault-faq";
// import { i } from "framer-motion/client";
//
// export default function VaultPage() {
//   const featuredProducts = vaultProducts
//     .filter((item) => item.featured)
//     .slice(0, 6);
//
//   return (
//     <ModelShell>
//       <VaultStripNav />
//       <VaultHero />
//       {/* <section className="px-4 py-16 sm:px-6 md:py-20">
//         <div className="mx-auto max-w-[1200px]">
//           <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-600">
//             Digital Products / Templates / Resources
//           </p>
//
//           <h1 className="mt-4 max-w-[12ch] text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
//             Vault for practical business resources and digital downloads.
//           </h1>
//
//           <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
//             Octalve Vault gives businesses, founders, and teams access to useful
//             digital products they can purchase and use immediately, from
//             templates and guides to launch kits and resource bundles.
//           </p>
//         </div>
//       </section> */}
//
//       <section className="px-4 pt-16 pb-16 sm:px-6">
//         <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2 xl:grid-cols-4">
//           {[
//             "Business Plan Templates",
//             "Pitch Deck Templates",
//             "Proposal Templates",
//             "Invoice Templates",
//             "Wordpress Launchpad Kit",
//             "Wordpress Premium Kit",
//             "Startup Guides",
//             "Sales Scripts",
//             "HR Templates",
//             "Finance Trackers",
//             "Resource Bundles",
//           ].map((item) => (
//             <div
//               key={item}
//               className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </section>
//
//       <section className="px-4 py-16 sm:px-6">
//         <div className="mx-auto max-w-[1200px]">
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
//                 Featured Products
//               </p>
//               <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
//                 Start with the most useful resources.
//               </h2>
//             </div>
//
//             <Link href="/vault/shop" className={vaultUi.primaryButton}>
//               Visit Shop
//             </Link>
//           </div>
//
//           <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//             {featuredProducts.map((product) => (
//               <VaultProductCard
//                 key={product.id}
//                 product={product}
//                 action={{
//                   type: "link",
//                   href: "/vault/shop",
//                   label: "View in Shop",
//                   className: vaultUi.secondaryButton,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//       <VaultFaq />
//     </ModelShell>
//   );
// }
//

// OCTALVE HOLDING VAULT GATEWAY ACTIVE BELOW
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import ModelShell from "@/components/models/shared/model-shell";

const VAULT_SITE = "https://vault.octalve.com";

/**
 * Octalve Holding Vault gateway.
 * The plain background artwork is supplied independently at:
 * public/images/octalve-vault-gateway-bg.webp
 * This intentionally does not import legacy Vault catalogue, cart or payments.
 */
export default function VaultTransitionPage() {
  return (
    <ModelShell>
      <main className="bg-[#060708]">
        <section
          aria-labelledby="octalve-vault-heading"
          className="relative isolate flex min-h-[calc(100svh-124px)] items-center justify-center overflow-hidden bg-[#060708] px-5 py-20 text-center sm:px-6 sm:py-24 lg:min-h-[calc(100svh-124px)]"
        >
          {/* Use an artwork-only image with no baked-in icon, text, or button. */}
          <div
            className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center"
            aria-hidden="true"
            style={{
              backgroundImage: "url('/images/octalve-vault-gateway-bg.webp')",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,8,10,0.14),rgba(0,0,0,0.17))]"
            aria-hidden="true"
          />

          <div className="mx-auto flex w-full max-w-[680px] flex-col items-center">
            <ShieldCheck
              className="mb-7 h-[52px] w-[52px] text-white sm:mb-8 sm:h-[58px] sm:w-[58px]"
              strokeWidth={1.2}
              aria-hidden="true"
            />
            <h1
              id="octalve-vault-heading"
              className="max-w-[630px] text-balance text-[clamp(2rem,4.2vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.055em] text-white"
            >
              Lock in with innovation and growth assets.
            </h1>
            <p className="mt-6 max-w-[640px] text-pretty text-[15px] leading-[1.75] text-white/92 sm:text-[18px]">
              Octalve Vault gives founders, businesses, and teams practical
              digital resources they can purchase securely and access through
              their private Vault after verified payment.
            </p>
            <Link
              href={VAULT_SITE}
              className="mt-7 inline-flex min-h-[45px] items-center justify-center gap-2 rounded-[10px] bg-[#2878EB] px-6 py-3 text-[13px] font-medium text-white transition hover:bg-[#0064E0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              vault.octalve.com
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </section>
      </main>
    </ModelShell>
  );
}
