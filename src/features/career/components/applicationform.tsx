export default function CareerApplicationForm() {
  return (
    <section id="career-application-form" className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Build what matters with Octalve.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              We are looking for thoughtful people who can solve real problems,
              communicate clearly, and help build brands, products, systems, and
              meaningful experiences that move ideas forward.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-950">
                  Who should apply
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Designers, developers, strategists, marketers, operators,
                  writers, and practical builders who care about quality,
                  clarity, and execution.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-950">
                  What matters to us
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Strong thinking, clean execution, ownership, honesty,
                  collaboration, and the ability to create work that is useful,
                  thoughtful, and effective.
                </p>
              </div>
            </div>
          </div>

          <form className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+234..."
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Role applying for
                </label>
                <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10">
                  <option className="text-black">Designer</option>
                  <option className="text-black">Frontend Developer</option>
                  <option className="text-black">Backend Developer</option>
                  <option className="text-black">Product Manager</option>
                  <option className="text-black">Brand Strategist</option>
                  <option className="text-black">Marketing / Growth</option>
                  <option className="text-black">Operations</option>
                  <option className="text-black">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Portfolio / LinkedIn / Website
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Experience summary
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us briefly about your experience, strengths, and relevant work..."
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Why do you want to work with Octalve?
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us why you are interested and what value you believe you can bring..."
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Availability
                </label>
                <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10">
                  <option className="text-black">Immediate</option>
                  <option className="text-black">Within 2 weeks</option>
                  <option className="text-black">Within 1 month</option>
                  <option className="text-black">Flexible</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Work preference
                </label>
                <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#0064E0] focus:ring-4 focus:ring-[#0064E0]/10">
                  <option className="text-black">Remote</option>
                  <option className="text-black">Hybrid</option>
                  <option className="text-black">On-site</option>
                  <option className="text-black">Flexible</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-[#0064E0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052B8]"
            >
              Submit application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
