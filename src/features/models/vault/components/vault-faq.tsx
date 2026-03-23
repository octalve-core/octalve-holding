"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
  accent?: boolean;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What kind of products can I buy on Octalve Vault?",
    answer:
      "Octalve Vault offers practical digital products for businesses, founders, teams, and tech professionals. These can include templates, guides, launch kits, business plans, resource bundles, marketing assets, WordPress tools, and other ready-to-use business materials.",
  },
  {
    id: 2,
    question: "Who are Octalve Vault products designed for?",
    answer:
      "They are built for people who want useful assets they can apply quickly—startup founders, small business owners, creators, consultants, students, operators, and teams looking for faster execution without starting from scratch.",
  },
  {
    id: 3,
    question: "How will I receive my product after payment?",
    answer:
      "Once payment is confirmed, your digital product is delivered for immediate access or download. Vault is positioned around practical digital resources, so customers can purchase and start using what they need without unnecessary delay.",
  },
  {
    id: 4,
    question: "Can I use Vault products for real business work?",
    answer:
      "Yes. The idea behind Octalve Vault is to provide practical business-ready assets, not just decorative files. Many products are meant to help you plan, launch, present, market, organize, or grow more effectively in real execution environments.",
  },
  {
    id: 5,
    question: "Do you offer a 7-day money-back guarantee?",
    answer:
      "Yes. Octalve Vault highlights a 7 days money back guarantee. That makes it easier for buyers to shop with confidence while exploring digital tools, templates, and business resources from the store.",
    accent: true,
  },
  {
    id: 6,
    question:
      "Where can I get help if I have a question before or after purchase?",
    answer:
      "Customers can navigate through Vault’s store flow using pages such as Shop, Cart, Checkout, and Help Center. That gives you a clear path to browse products, complete purchases, and get support when needed.",
  },
];

export default function VaultFaq() {
  const [openId, setOpenId] = useState<number>(5);

  const toggleFaq = (id: number) => {
    setOpenId((current) => (current === id ? 0 : id));
  };

  return (
    // <section className="bg-[#040506] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <section
      id="vault-faq"
      className="bg-[#040506] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#6DA9FF]">
            Help Center
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
            Everything you need to know about shopping digital products on
            Octalve Vault, from what you can buy to delivery, usage, support,
            and our 7-day money-back guarantee.
          </p>
        </div>

        <div className="mt-12 rounded-[28px] border border-white/6 bg-white/[0.015] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-6 lg:mt-14 lg:p-8">
          <div className="divide-y divide-white/8">
            {faqs.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="py-1">
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="flex w-full items-start justify-between gap-6 px-0 py-6 text-left sm:py-7"
                    aria-expanded={isOpen}
                    aria-controls={`vault-faq-${item.id}`}
                  >
                    <span
                      className={`pr-2 text-xl font-medium leading-[1.35] tracking-[-0.03em] sm:text-2xl ${
                        item.accent && isOpen ? "text-[#F0BE35]" : "text-white"
                      }`}
                    >
                      {item.id}. {item.question}
                    </span>

                    <span
                      className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                        isOpen
                          ? "border-[#F0BE35]/20 bg-[#F0BE35]/10 text-[#F0BE35]"
                          : "border-white/10 bg-white/[0.02] text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <div
                    id={`vault-faq-${item.id}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-[92ch] pb-6 pr-2 text-base leading-8 text-white/74 sm:pb-7 sm:text-[1.05rem]">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
