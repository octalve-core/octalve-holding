import Link from "next/link";
import { cloudConsoleLinks } from "../../cloud-console-links";

export default function Plans() {
  const plans = [
    {
      title: "Launch VPS",
      description:
        "For products and websites moving beyond entry-level hosting into stronger infrastructure.",
      cta: "Get started",
      href: cloudConsoleLinks.signUp,
    },
    {
      title: "Growth VPS",
      description:
        "For growing teams that need more resources, more flexibility, and better performance.",
      cta: "Explore servers",
      href: cloudConsoleLinks.server,
      featured: true,
    },
    {
      title: "Dedicated Compute",
      description:
        "For serious businesses and platforms that need stronger server capacity and future scale.",
      cta: "View options",
      href: cloudConsoleLinks.server,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Server plans for stronger infrastructure needs
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Choose the right level of server power for your product, platform,
            or business operations today, then scale upward when needed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={[
                "rounded-3xl border p-8",
                plan.featured
                  ? "border-[#2563EB] bg-blue-50"
                  : "border-slate-200 bg-white",
              ].join(" ")}
            >
              <h3 className="text-2xl font-semibold text-slate-950">
                {plan.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• More performance flexibility</li>
                <li>• Better room for scale</li>
                <li>• Cleaner infrastructure path</li>
              </ul>

              <Link
                href={plan.href}
                className="mt-8 inline-flex rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
