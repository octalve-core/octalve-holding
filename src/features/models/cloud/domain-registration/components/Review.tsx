export default function Review() {
  const reviews = [
    {
      name: "Ridwan",
      text: "The journey from idea to checking a real domain feels very straightforward.",
    },
    {
      name: "Aminah",
      text: "It helps new founders understand the importance of getting their name secured early.",
    },
    {
      name: "Daniel",
      text: "It feels structured enough for now and easy to improve later.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            A simple start for domain buyers
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The structure is designed to keep users clear, focused, and ready to
            act.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <p className="text-sm leading-6 text-slate-600">
                “{review.text}”
              </p>
              <p className="mt-5 text-sm font-semibold text-slate-950">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
