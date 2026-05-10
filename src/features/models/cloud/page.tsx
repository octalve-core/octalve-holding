import ModelShell from "@/components/models/shared/model-shell";
// import { CloudStripNav } from "./components/cloud-strip-nav";

// import Hero from "./home/components/Hero";
// import Overview from "./home/components/Overview";
// import Plans from "./home/components/Plans";
// import Review from "./home/components/Review";
// // import Benefit from "./home/components/Benefit";
// import CTA from "./home/components/CTA";
// import CloudFaq from "./home/components/Faqs";
// // import EmailCard from "@/components/EmailCard";
// import EmailShowcase from "./home/components/EmailCard";
// import MigrationCta from "./home/components/Migrationcta";

// export default function CloudPage() {
//   return (
//     <ModelShell>
//       <CloudStripNav />
//       <Hero />
//       <Overview />
//       <Review />
//       <EmailShowcase />
//       <MigrationCta />
//       {/* <Benefit /> */}
//       <Plans />
//       <CloudFaq />
//       <CTA />
//     </ModelShell>
//   );
// }

import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Globe2,
  LockKeyhole,
  Server,
} from "lucide-react";

const OCTALVE_CLOUD_URL = "https://octalve.cloud";
const OCTALVE_CLOUD_CONSOLE_URL = "https://console.octalve.cloud";

const cloudPoints = [
  "Domains, hosting, business email, and cloud support",
  "A dedicated platform for online infrastructure services",
  "Built for founders, SMEs, startups, and growing businesses",
];

const cloudServices = [
  {
    title: "Hosting",
    description:
      "Reliable hosting solutions for business websites and digital platforms.",
    icon: Server,
  },
  {
    title: "Domains",
    description:
      "Search, register, and manage your business domain from one place.",
    icon: Globe2,
  },
  {
    title: "Business Email",
    description: "Set up professional email addresses for your brand and team.",
    icon: LockKeyhole,
  },
];

export default function OctalveCloudTransitionPage() {
  return (
    <ModelShell>
      <main className="bg-[radial-gradient(circle_at_top,#EAF4FF_0%,#F8FAFC_42%,#FFFFFF_100%)]">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#0064E0]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-28 top-40 h-[260px] w-[260px] rounded-full bg-[#29BE3E]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 top-52 h-[260px] w-[260px] rounded-full bg-[#FC7E24]/10 blur-3xl" />

          <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-[1280px] items-center px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto w-full max-w-5xl">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0064E0]/15 bg-white/80 px-4 py-2 text-sm font-medium text-[#0064E0] shadow-sm backdrop-blur">
                  <Cloud className="h-4 w-4" strokeWidth={1.9} />
                  Octalve Cloud has moved
                </span>

                <h1 className="mt-7 text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-7xl">
                  Continue to the new home of Octalve Cloud.
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-7 text-slate-600 sm:text-lg">
                  We are moving our cloud, hosting, domain, and business email
                  services into a dedicated experience built for speed, clarity,
                  and better service management.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={OCTALVE_CLOUD_URL}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0064E0] px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_rgba(0,100,224,0.22)] transition hover:bg-[#0052B8] focus:outline-none focus:ring-4 focus:ring-[#0064E0]/15"
                  >
                    Go to octalve.cloud
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </a>

                  <a
                    href={OCTALVE_CLOUD_CONSOLE_URL}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#0064E0",
                      backgroundColor: "#FFFFFF",
                      borderColor: "rgba(0, 100, 224, 0.2)",
                    }}
                    className="inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-medium !text-[#0064E0] !no-underline shadow-sm transition hover:!border-[#0064E0]/35 hover:!bg-[#0064E0]/5 focus:outline-none focus:ring-4 focus:ring-[#0064E0]/10"
                  >
                    <span
                      style={{ color: "#0064E0" }}
                      className="!text-[#0064E0]"
                    >
                      Open Cloud Console
                    </span>
                  </a>
                </div>
              </div>

              <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3">
                {cloudPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#0064E0]"
                        strokeWidth={1.9}
                      />

                      <p className="text-sm font-normal leading-6 text-slate-700">
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-6 grid max-w-4xl gap-4 md:grid-cols-3">
                {cloudServices.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="group rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[#0064E0]/20 hover:shadow-[0_24px_70px_rgba(0,100,224,0.09)]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0064E0]/10 text-[#0064E0]">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </div>

                      <h2 className="mt-5 text-lg font-medium tracking-[-0.02em] text-slate-950">
                        {service.title}
                      </h2>

                      <p className="mt-2 text-sm font-normal leading-6 text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mx-auto mt-8 max-w-4xl rounded-[30px] border border-[#0064E0]/10 bg-[#0064E0]/5 p-5 text-center sm:p-6">
                <p className="text-sm font-normal leading-6 text-slate-700">
                  You are currently on the Octalve Holding website. For hosting,
                  domains, servers, business email, migration, and cloud-related
                  services, continue to the dedicated Octalve Cloud platform.
                  Existing users can access their services through the Octalve
                  Cloud Console.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ModelShell>
  );
}
