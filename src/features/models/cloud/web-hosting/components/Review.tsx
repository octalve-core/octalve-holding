export default function Review() {
  const reviews = [
    {
      name: "Tobi",
      text: "The hosting journey feels simple enough for small businesses that just want to get online fast.",
    },
    {
      name: "Mariam",
      text: "It gives a clear idea of where a customer should start and where they can grow next.",
    },
    {
      name: "David",
      text: "This is a solid demo structure that can later become a stronger product experience.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Built to feel clear from the start
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Hosting should not feel confusing. This structure helps users move
            from interest to action with less uncertainty.
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
