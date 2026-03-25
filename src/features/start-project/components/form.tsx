export default function StartProjectForm() {
  return (
    <section id="project-form" className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Project brief form
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              ----
            </p>
          </div>

          <form className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+234..."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Project type
                </label>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]">
                  <option>Website</option>
                  <option>Branding</option>
                  <option>UI/UX Design</option>
                  <option>Business Strategy</option>
                  <option>Product Setup</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Project title
                </label>
                <input
                  type="text"
                  placeholder="What are you building?"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Project description
                </label>
                <textarea
                  rows={6}
                  placeholder="Describe your project goals, audience, timeline, and anything important..."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Budget range
                </label>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]">
                  <option>Not sure yet</option>
                  <option>₦50,000 - ₦150,000</option>
                  <option>₦150,000 - ₦500,000</option>
                  <option>₦500,000 - ₦1,000,000</option>
                  <option>₦1,000,000+</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Timeline
                </label>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]">
                  <option>As soon as possible</option>
                  <option>Within 2 weeks</option>
                  <option>Within 1 month</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Submit project brief
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
