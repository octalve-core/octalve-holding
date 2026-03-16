import Link from "next/link";
import { cloudConsoleLinks } from "../../cloud-console-links";

export default function Plans() {
  const plans = [
    {
      title: "Basic SSL",
      description:
        "For websites that need essential protection and a safer visitor experience.",
      cta: "Get started",
      href: cloudConsoleLinks.signUp,
    },
    {
      title: "Business SSL",
      description:
        "For businesses that want stronger trust signals and better protection for important pages.",
      cta: "Secure your site",
      href: cloudConsoleLinks.sslSecurity,
      featured: true,
    },
    {
      title: "Advanced Protection",
      description:
        "For growing brands that want more confidence, flexibility, and future security options.",
      cta: "Explore options",
      href: cloudConsoleLinks.sslSecurity,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Security options for different business needs
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Start with essential SSL or move into stronger protection as your
            website, audience, and business demands grow.
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
                <li>• Safer website experience</li>
                <li>• Better trust signals</li>
                <li>• Flexible security growth</li>
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
