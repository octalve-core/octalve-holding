const faqs = [
  {
    question: "What is Octalve Leap for?",
    answer:
      "Octalve Leap is built for businesses that need stronger growth execution, market traction, expansion support, and clearer action systems.",
  },
  {
    question: "When should a business use Leap?",
    answer:
      "Leap is most useful when a business already has direction or readiness but needs structured support to execute, grow, and scale effectively.",
  },
  {
    question: "Does Leap only focus on marketing?",
    answer:
      "No. Leap can support broader growth execution, including customer traction, rollout planning, expansion direction, delivery alignment, and business momentum.",
  },
  {
    question: "Can Leap connect with other Octalve models?",
    answer:
      "Yes. Leap works naturally with Consult for strategic clarity, Lab for experimentation, Suite for product systems, and Cloud for scalable deployment.",
  },
];

export default function LeapFaq() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Common questions about Leap.
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
