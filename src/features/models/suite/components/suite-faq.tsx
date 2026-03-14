"use client";

import { useState } from "react";
import { faqs } from "../suite-data";

export default function SuiteFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <div className="text-center">
          <div className="text-sm font-medium tracking-wide text-black/60">
            FAQS
          </div>
          <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] md:text-5xl text-black">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-black/10">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.q}
                className={
                  index !== faqs.length - 1 ? "border-b border-black/10" : ""
                }
              >
                <button
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-xl font-medium md:text-2xl text-black/70">
                    {item.q}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-black/60 rounded-full hover:bg-black">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen ? (
                  <div className="px-6 pb-7 md:px-8">
                    <p className="leading-8 text-black/70">{item.a}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
