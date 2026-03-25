"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpenText,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardList,
  FileSpreadsheet,
  FolderKanban,
  Headphones,
  Receipt,
  Users,
} from "lucide-react";

const brand = {
  red: "#E61525",
  blue: "#0064E0",
  green: "#29BE3E",
  orange: "#FC7E24",
};

type Product = {
  name: string;
  icon: LucideIcon;
  color: string;
};

const products: Product[] = [
  { name: "Octalve Invoice", icon: Receipt, color: brand.red },
  { name: "Octalve CRM", icon: Users, color: brand.blue },
  { name: "Octalve Leads", icon: BriefcaseBusiness, color: brand.green },
  { name: "Octalve HR", icon: ClipboardList, color: brand.orange },
  { name: "Octalve Projects", icon: FolderKanban, color: brand.blue },
  { name: "Octalve Bookings", icon: CalendarDays, color: brand.green },
  { name: "Octalve Inventory", icon: BookOpenText, color: brand.red },
  { name: "Octalve Support Desk", icon: Headphones, color: brand.orange },
  { name: "Octalve Forms", icon: FileSpreadsheet, color: brand.blue },
  { name: "Octalve AI Reception", icon: Bot, color: brand.red },
  { name: "Octalve Analytics Dashboard", icon: BarChart3, color: brand.green },
];

export default function OneHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050816] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(252,126,36,0.32) 0%, rgba(252,126,36,0.14) 18%, transparent 42%),
            radial-gradient(circle at 0% 20%, rgba(230,21,37,0.20) 0%, transparent 35%),
            radial-gradient(circle at 100% 15%, rgba(0,100,224,0.24) 0%, transparent 38%),
            radial-gradient(circle at 50% 100%, rgba(41,190,62,0.16) 0%, transparent 34%),
            linear-gradient(135deg, #130411 0%, #1A0B1F 18%, #20120F 38%, #0B1C3F 72%, #050816 100%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1360px]">
        <div className="mx-auto max-w-[860px] text-center">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/82 backdrop-blur-md sm:text-xs">
            Octalve One
          </span>

          <h1 className="mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.8rem]">
            Business solutions
            <span className="block">built for modern SMEs</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg sm:leading-9">
            Building intelligent business solutions for SMEs.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#products"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore Products
            </Link>

            <Link
              href="/start-project"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Octalve
            </Link>
          </div>
        </div>

        <div
          id="products"
          className="mx-auto mt-14 max-w-[1220px] rounded-[32px] border border-white/10 bg-black/18 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-5 lg:mt-16 lg:rounded-[36px] lg:p-6"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.name}
                  className="group flex min-h-[168px] flex-col items-center justify-center rounded-[24px] border border-white/8 bg-[#0A0D14]/92 px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-[#0E1320]"
                >
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border"
                    style={{
                      borderColor: `${product.color}33`,
                      background: `${product.color}12`,
                      boxShadow: `0 0 0 1px ${product.color}10 inset`,
                    }}
                  >
                    <Icon
                      className="h-7 w-7 transition duration-300 group-hover:scale-105"
                      style={{ color: product.color }}
                    />
                  </div>

                  <h3 className="max-w-[180px] text-base font-semibold leading-snug tracking-[-0.02em] text-white sm:text-[1.05rem]">
                    {product.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
