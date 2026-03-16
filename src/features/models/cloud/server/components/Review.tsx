export default function Review() {
  const reviews = [
    {
      name: "Ismail",
      text: "This makes servers feel easier to understand for founders who are growing into more technical needs.",
    },
    {
      name: "Tomiwa",
      text: "The structure clearly separates simple hosting from more serious infrastructure options.",
    },
    {
      name: "Maryam",
      text: "It is clean enough for now and gives room for a more advanced server experience later.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            A simpler way to position server infrastructure
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Server products often feel too technical too early. This page helps
            users understand the business value before the deeper technical
            layer.
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
