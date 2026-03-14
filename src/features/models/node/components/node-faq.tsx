const faqs = [
  {
    question: "What is Octalve Node?",
    answer:
      "Octalve Node is a workspace, innovation hub, and office services model built to support modern work, collaboration, and startup activity.",
  },
  {
    question: "Who is Octalve Node for?",
    answer:
      "It is designed for freelancers, remote workers, startups, small teams, consultants, creators, and founders.",
  },
  {
    question: "What services can Node include?",
    answer:
      "Node can include co-working access, private workspace, virtual office, meeting room access, training or event hosting, community networking, and startup support services.",
  },
  {
    question: "Does Node only offer physical desk space?",
    answer:
      "No. It can also provide virtual office options, meeting room booking, event space access, and a wider support environment for business activity.",
  },
];

export default function NodeFaq() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Common questions about Node.
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
