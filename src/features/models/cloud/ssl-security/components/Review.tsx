export default function Review() {
  const reviews = [
    {
      name: "Fatimah",
      text: "Security is easier to understand here because it is presented as part of brand trust, not just technical setup.",
    },
    {
      name: "Sodiq",
      text: "This makes SSL feel like a real business need instead of something hidden in the background.",
    },
    {
      name: "Micheal",
      text: "The structure is clean and ready for a future dashboard-driven purchase flow.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            A clearer way to present website security
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            When users understand that security builds trust, they are more
            likely to take the right step for their website.
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
