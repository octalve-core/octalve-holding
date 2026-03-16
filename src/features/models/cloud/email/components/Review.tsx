export default function Review() {
  const reviews = [
    {
      name: "Amina",
      text: "Branded email makes a business feel more real and more trustworthy immediately.",
    },
    {
      name: "Ibrahim",
      text: "This structure helps people understand why business email matters beyond just sending messages.",
    },
    {
      name: "Zarah",
      text: "It is simple, clean, and easy to connect to a future account setup flow.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            A clearer way to present business email
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Many businesses overlook email branding early. This page helps
            position it as an essential part of a professional online presence.
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
