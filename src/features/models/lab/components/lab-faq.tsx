const faqs = [
  {
    question: "What is Octalve Lab designed for?",
    answer:
      "It is designed for experimentation, product exploration, prototyping, concept refinement, and innovation work before full-scale rollout.",
  },
  {
    question: "Is Lab only for software products?",
    answer:
      "No. Lab can support digital products, service ideas, workflow innovation, internal tools, and broader concept development.",
  },
  {
    question: "When should a team use Lab?",
    answer:
      "Lab is most useful when an idea is still forming, when a product direction needs validation, or when experimentation is needed before scale.",
  },
  {
    question: "Can Lab connect with other Octalve models?",
    answer:
      "Yes. Lab can naturally feed into Consult for strategy, Suite for productization, Leap for growth execution, and Cloud for deployment.",
  },
];

export default function LabFaq() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Common questions about Lab.
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
