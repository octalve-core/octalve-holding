export default function Review() {
  const reviews = [
    {
      name: "Habeeb",
      text: "This makes WordPress hosting feel easier to understand for business owners who just want to launch fast.",
    },
    {
      name: "Khadijah",
      text: "It clearly separates general hosting from a more specific WordPress path.",
    },
    {
      name: "Tosin",
      text: "The structure is simple now and gives enough room for a stronger redesign later.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            A more focused way to position WordPress hosting
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            For users who already know they want WordPress, this page gives them
            a more direct path into the right hosting experience.
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
