const packages = [
  "Day Pass",
  "Weekly Pass",
  "Monthly Membership",
  "Dedicated Desk Plan",
  "Virtual Office Package",
  "Meeting Room Booking",
  "Event Space Package",
  "Startup Residency Plan",
];

export default function NodeOverview() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              Overview
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl">
              A flexible workspace and innovation hub for modern professionals.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Octalve Node is built for freelancers, remote workers, startups,
                small teams, consultants, creators, and founders who need more
                than just a desk.
              </p>
              <p>
                It combines co-working access, private workspace, virtual office
                services, meeting room access, training and event hosting,
                community networking, and startup support into one connected
                environment.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              Access & Packages
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {packages.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
