export default function CareerApplicationForm() {
  return (
    <section id="career-application-form" className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Career application form
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              This is a clean frontend demo form for now. Later, you can connect
              it to email, a database, Notion, Airtable, a recruiter workflow,
              or your internal dashboard.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-950">
                  Who should apply
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Designers, developers, strategists, marketers, writers,
                  operators, and people who can think clearly and execute well.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-950">
                  What matters to us
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Strong thinking, practical skill, honesty, communication,
                  ownership, and the ability to build with clarity.
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
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0064E0]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0064E0]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+234..."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0064E0]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Role applying for
                </label>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0064E0]">
                  <option>Designer</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Product Manager</option>
                  <option>Brand Strategist</option>
                  <option>Marketing / Growth</option>
                  <option>Operations</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Portfolio / LinkedIn / Website
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0064E0]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Experience summary
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us briefly about your experience, strengths, and relevant work..."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0064E0]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Why do you want to work with Octalve?
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us why you are interested and what value you believe you can bring..."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0064E0]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Availability
                </label>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0064E0]">
                  <option>Immediate</option>
                  <option>Within 2 weeks</option>
                  <option>Within 1 month</option>
                  <option>Flexible</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Work preference
                </label>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0064E0]">
                  <option>Remote</option>
                  <option>Hybrid</option>
                  <option>On-site</option>
                  <option>Flexible</option>
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
