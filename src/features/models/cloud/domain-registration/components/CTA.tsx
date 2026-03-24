import Link from "next/link";

const LINKS = {
  primary: "#",
  secondary: "#",
};

const BRAND = {
  red: "#E61525",
  blue: "#0064E0",
  green: "#29BE3E",
  yellow: "#F4B400",
  text: "#111827",
  bg: "#F5F7FB",
  border: "#D9DEE8",
};

export default function CTA() {
  return (
    <section className="bg-[var(--cta-bg)] pt-[2px] [--cta-bg:#F5F7FB]">
      <div className="h-[2px] w-full bg-[#3B82F6]" />

      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <h2 className="max-w-5xl text-balance text-4xl font-medium tracking-[-0.04em] text-[#111827] sm:text-5xl lg:text-6xl xl:text-[4.6rem] xl:leading-[0.95]">
            <span style={{ color: BRAND.blue }}>Let’s start building</span>{" "}
            <span className="text-[#111827]">your tomorrow, today</span>
          </h2>
          <h6 className="mt-6 max-w-3xl text-lg leading-8 text-[#4B5563] sm:text-xl">
            Create an account, search your domain, and prepare your business for
            hosting, email, security, and future scale.
          </h6>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              href={LINKS.primary}
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full px-8 text-base font-medium text-white shadow-sm transition hover:opacity-95 active:scale-[0.98] sm:w-auto sm:px-10"
              style={{ backgroundColor: "#0B63E6" }}
            >
              Get started for free
            </Link>

            <Link
              href={LINKS.secondary}
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full border px-8 text-base font-medium transition hover:bg-white active:scale-[0.98] sm:w-auto sm:px-10"
              style={{
                borderColor: BRAND.border,
                color: "#0B63E6",
                backgroundColor: "transparent",
              }}
            >
              Contact sales
            </Link>
          </div>

          <div className="mt-12 w-full sm:mt-14 lg:mt-16">
            <div className="mx-auto flex h-2.5 w-full max-w-6xl overflow-hidden sm:h-3">
              <span
                className="block h-full w-[30%]"
                style={{ backgroundColor: BRAND.red }}
              />
              <span
                className="block h-full w-[40%]"
                style={{ backgroundColor: BRAND.blue }}
              />
              <span
                className="block h-full w-[10%]"
                style={{ backgroundColor: BRAND.green }}
              />
              <span
                className="block h-full w-[20%]"
                style={{ backgroundColor: BRAND.yellow }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
