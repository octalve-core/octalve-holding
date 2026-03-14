const faqs = [
  {
    question: "What is Octalve One?",
    answer:
      "Octalve One is a business solutions ecosystem focused on software, SaaS tools, workflow systems, and AI-enabled operations for SMEs.",
  },
  {
    question: "Who is Octalve One built for?",
    answer:
      "It is built for SMEs, startups, agencies, service businesses, product-based businesses, and internal operational teams.",
  },
  {
    question: "What kinds of tools can sit inside One?",
    answer:
      "Tools can include invoicing systems, CRM, lead management, HR tools, project tools, bookings, inventory, support desk systems, forms, AI reception, and analytics dashboards.",
  },
  {
    question: "Is Octalve One a single product or a product ecosystem?",
    answer:
      "It is better understood as a connected product ecosystem that can contain multiple business tools under one operating model.",
  },
];

export default function OneFaq() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Common questions about One.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
          {faqs.map((item) => (
            <div key={item.question} className="px-6 py-6 md:px-8">
              <h3 className="text-lg font-medium text-slate-950">
                {item.question}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
