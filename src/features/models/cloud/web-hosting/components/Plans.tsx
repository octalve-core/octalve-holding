import Link from "next/link";
import { cloudConsoleLinks } from "../../cloud-console-links";

export default function Plans() {
  const plans = [
    {
      title: "Starter Hosting",
      description:
        "For portfolios, landing pages, and small business websites getting online.",
      cta: "Start now",
      href: cloudConsoleLinks.signUp,
    },
    {
      title: "Business Hosting",
      description:
        "For serious business websites that need more confidence, flexibility, and support.",
      cta: "View hosting",
      href: cloudConsoleLinks.webHosting,
      featured: true,
    },
    {
      title: "Managed Hosting",
      description:
        "For brands that want stronger performance and easier long-term management.",
      cta: "Explore options",
      href: cloudConsoleLinks.webHosting,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Hosting plans for different stages of business
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Choose the level that fits where you are now, then expand as your
            website and operations become more demanding.
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
                <li>• Easy onboarding</li>
                <li>• Better website stability</li>
                <li>• Flexible upgrade path</li>
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
