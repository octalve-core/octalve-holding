"use client";

import Link from "next/link";

const LINKS = {
  domainSearch: "#",
  domainRegistration: "#",
  webHosting: "#",
  email: "#",
  sslSecurity: "#",
  migration: "#",
};

export default function Overview() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
              Domains + Hosting
            </span>

            <h3 className="mt-6 max-w-[560px] text-3xl font-medium leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
              Launch your business online with the essentials already aligned.
            </h3>

            <p className="mt-5 max-w-[560px] text-base leading-7 text-slate-600 sm:text-lg">
              Search your domain, connect hosting, and set up the foundation
              your website needs to go live with clarity and confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={LINKS.domainSearch || LINKS.domainRegistration}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 active:scale-[0.98] sm:px-6"
              >
                Search a domain
              </Link>

              <Link
                href={LINKS.webHosting}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold !text-[#000000] !opacity-100 transition hover:bg-slate-50 active:scale-[0.98] sm:px-6"
              >
                Explore hosting
              </Link>
            </div>
          </article>

          <article className="rounded-[32px] border border-black bg-black p-8 shadow-[0_18px_45px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-white/65">
              Email + Security
            </span>

            <h3 className="mt-6 max-w-[560px] text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.8rem]">
              Build trust with branded email and stronger protection from day
              one.
            </h3>

            <p className="mt-5 max-w-[560px] text-base leading-7 text-white/70 sm:text-lg">
              Give your business a more professional identity with secure email,
              SSL coverage, and infrastructure that is ready to scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={LINKS.email}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold !text-[#000000] !opacity-100 transition hover:bg-slate-100 active:scale-[0.98] sm:px-6"
              >
                Set up email
              </Link>

              <Link
                href={LINKS.sslSecurity}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5 active:scale-[0.98] sm:px-6"
              >
                Secure your site
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-[720px]">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
              Overview
            </span>

            <h2 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Build your online presence with infrastructure that feels simple,
              clear, and ready for growth.
            </h2>
          </div>

          <div className="max-w-[620px]">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              From registering your domain and launching hosting to setting up
              business email, SSL, servers, and migration support, Octalve Cloud
              helps you move from idea to live infrastructure without the usual
              confusion.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={LINKS.webHosting}
                className="inline-flex items-center justify-center rounded-full bg-[#0064E0] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0056C3] active:scale-[0.98]"
              >
                Explore Octalve Cloud
              </Link>

              <Link
                href={LINKS.migration}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold !text-[#000000] !opacity-100 transition hover:bg-slate-50 active:scale-[0.98]"
              >
                Need migration help?
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Domain registration",
                "Web hosting",
                "Business email",
                "SSL / Security",
                "Servers",
                "Migration support",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
