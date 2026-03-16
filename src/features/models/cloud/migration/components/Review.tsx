export default function Review() {
  const reviews = [
    {
      name: "Adebayo",
      text: "This makes migration feel less intimidating and more like a structured business decision.",
    },
    {
      name: "Mubarak",
      text: "The page helps explain why migration matters without making it feel too technical too early.",
    },
    {
      name: "Hauwa",
      text: "It is simple for now and gives enough room for a more advanced support flow later.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            A clearer way to position migration services
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Migration can feel risky. This structure helps users see it as a
            supported transition into a better digital setup.
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
