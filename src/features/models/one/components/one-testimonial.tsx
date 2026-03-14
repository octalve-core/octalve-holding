export default function OneTestimonial() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[900px] rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
          Testimonial
        </p>

        <blockquote className="mt-5 text-2xl font-medium leading-[1.5] tracking-[-0.02em] text-slate-950 sm:text-3xl">
          “Octalve One helped us see how our invoicing, customer management, and
          daily workflow could work together instead of feeling scattered.”
        </blockquote>

        <div className="mt-6">
          <p className="text-base font-medium text-slate-950">
            SME Operations Team
          </p>
          <p className="text-sm text-slate-500">Business Systems Review</p>
        </div>
      </div>
    </section>
  );
}
