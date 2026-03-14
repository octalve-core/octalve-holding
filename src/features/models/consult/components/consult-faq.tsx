const faqs = [
  {
    question: "Who is Octalve Consult for?",
    answer:
      "It is built for founders, businesses, teams, and organizations that need clearer strategy, structure, and execution support.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Support can include business positioning, service design, strategic direction, workflow clarity, and execution planning.",
  },
  {
    question: "Is this only for large companies?",
    answer:
      "No. Octalve Consult can support early-stage founders, growing businesses, and established organizations.",
  },
  {
    question: "Can Consult work with other Octalve models?",
    answer:
      "Yes. Consult can connect naturally with Suite, Lab, Leap, Cloud, and other Octalve models depending on the need.",
  },
];

export default function ConsultFaq() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Common questions about Consult.
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
