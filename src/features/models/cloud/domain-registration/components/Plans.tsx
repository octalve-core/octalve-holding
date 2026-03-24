"use client";

import Link from "next/link";

const LINKS = {
  register: "#",
};

/**
 * ADD MORE DOMAIN ROWS HERE
 * Just keep adding new objects to this array.
 */
const DOMAIN_EXTENSIONS = [
  {
    extension: ".com.ng",
    category: "Nigeria Business",
    register: "₦5,500",
    transfer: "₦4,500",
    renewal: "₦5,500",
    href: LINKS.register,
  },
  {
    extension: ".ng",
    category: "Premium Nigeria",
    register: "₦15,000",
    transfer: "₦12,000",
    renewal: "₦15,000",
    href: LINKS.register,
  },
  {
    extension: ".org.ng",
    category: "Nonprofit / Community",
    register: "₦8,500",
    transfer: "₦7,000",
    renewal: "₦8,500",
    href: LINKS.register,
  },
  {
    extension: ".edu.ng",
    category: "Education",
    register: "₦12,000",
    transfer: "₦10,000",
    renewal: "₦12,000",
    href: LINKS.register,
  },
  {
    extension: ".com",
    category: "Global Business",
    register: "₦19,500",
    transfer: "₦18,000",
    renewal: "₦19,500",
    href: LINKS.register,
  },
  {
    extension: ".net",
    category: "Technology",
    register: "₦22,000",
    transfer: "₦20,000",
    renewal: "₦22,000",
    href: LINKS.register,
  },
  {
    extension: ".org",
    category: "Organization",
    register: "₦18,500",
    transfer: "₦17,000",
    renewal: "₦18,500",
    href: LINKS.register,
  },
  {
    extension: ".online",
    category: "Digital Brand",
    register: "₦28,000",
    transfer: "₦26,000",
    renewal: "₦28,000",
    href: LINKS.register,
  },
];

export default function Plans() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Browse Domain Extensions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore popular domain extensions for businesses, brands,
            organizations, and ideas ready to grow online with Octalve Cloud.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full border-collapse">
              <thead>
                <tr className="bg-[#EEF4FA] text-left">
                  <th className="px-7 py-6 text-sm font-medium text-slate-900 sm:text-base">
                    <div>Domain Extension</div>
                    <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                      TLD (Top-Level Domain)
                    </div>
                  </th>
                  <th className="px-7 py-6 text-sm font-medium text-slate-900 sm:text-base">
                    Category
                  </th>
                  <th className="px-7 py-6 text-sm font-medium text-slate-900 sm:text-base">
                    <div>Register</div>
                    <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                      per year
                    </div>
                  </th>
                  <th className="px-7 py-6 text-sm font-medium text-slate-900 sm:text-base">
                    <div>Transfer</div>
                    <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                      once off
                    </div>
                  </th>
                  <th className="px-7 py-6 text-sm font-medium text-slate-900 sm:text-base">
                    <div>Renewal</div>
                    <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                      per year
                    </div>
                  </th>
                  <th className="px-7 py-6 text-sm font-medium text-slate-900 sm:text-base">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {DOMAIN_EXTENSIONS.map((item, index) => (
                  <tr
                    key={`${item.extension}-${index}`}
                    className="border-t border-slate-200"
                  >
                    <td className="px-7 py-6 align-middle">
                      <span className="text-[1.65rem] font-medium tracking-[-0.03em] text-slate-950">
                        {item.extension}
                      </span>
                    </td>

                    <td className="px-7 py-6 align-middle text-base font-medium text-slate-600">
                      {item.category}
                    </td>

                    <td className="px-7 py-6 align-middle text-base font-medium text-slate-900">
                      {item.register}
                    </td>

                    <td className="px-7 py-6 align-middle text-base font-medium text-slate-600">
                      {item.transfer}
                    </td>

                    <td className="px-7 py-6 align-middle text-base font-medium text-slate-600">
                      {item.renewal}
                    </td>

                    <td className="px-7 py-6 align-middle">
                      <Link
                        href={item.href}
                        className="inline-flex min-w-[170px] items-center justify-center rounded-xl bg-[#0064E0] px-5 py-3 text-sm font-bold !text-white !opacity-100 transition hover:bg-[#0052B8] active:scale-[0.98]"
                      >
                        Register Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
