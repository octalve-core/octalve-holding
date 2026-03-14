import Image from "next/image";
import Link from "next/link";
import { overviewCards } from "../suite-data";

export default function SuiteOverview() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-14 md:py-16">
        <div className="text-center">
          <div className="text-sm font-medium tracking-wide text-black/60">
            Overview
          </div>
          <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] md:text-5xl text-black">
            Octalve Suite, Launchpad For Do’ers
          </h2>
          <p className="mt-4 text-base text-black/60 md:text-lg">
            Powerful suite and package to help you scale smarter and faster.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {overviewCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[36px] border border-slate-200 bg-[#f3f3f3] shadow-sm transition duration-300 hover:-translate-y-1"
            >
              <div className="p-6 md:p-7">
                <div className="overflow-hidden rounded-[28px] bg-white">
                  <div className="relative h-[220px] w-full md:h-[240px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-7 md:px-7 md:pb-8">
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] md:text-[28px] text-black">
                  {card.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-black/70 md:text-lg">
                  {card.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={card.href}
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium transition hover:bg-black/10"
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
