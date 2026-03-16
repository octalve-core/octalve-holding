export default function Review() {
  const reviews = [
    {
      name: "Aisha",
      text: "It feels easier to understand what to buy first and where to scale later.",
    },
    {
      name: "Daniel",
      text: "The setup is clean and the journey from interest to action is very straightforward.",
    },
    {
      name: "Mariam",
      text: "Having domains, hosting, email, and security under one cloud flow makes sense.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Early impressions that matter
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Clear structure and simple product flow help users feel confident
            when setting up online infrastructure.
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
