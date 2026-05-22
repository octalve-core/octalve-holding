import Image from "next/image";
import Link from "next/link";

const WORKSPACE_URL = "https://workspace.octalve.com";

const highlights = [
  "Request projects",
  "Track phases",
  "Pay deposits & balances",
  "Approve and rate delivery",
];

export default function Workspace() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020814] text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/workspace.png"
          alt="Octalve Workspace project management platform"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />

        <div className="absolute inset-0 bg-black/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      <div className="mx-auto flex min-h-[720px] w-full max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/85 backdrop-blur">
            Octalve Workspace
          </div>

          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Manage your Octalve project from request to final delivery.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
            Octalve Workspace gives clients a secure and responsive platform to
            request projects, make payments, monitor each job phase, approve
            milestones, pay balances, and rate completed work without confusion.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 text-sm font-medium text-white/88 backdrop-blur"
              >
                <span className="flex size-2.5 rounded-full bg-[#0064E0]" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={WORKSPACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0064E0] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,100,224,0.35)] transition hover:-translate-y-0.5 hover:bg-[#0056c4]"
            >
              Open Workspace
            </Link>

            <Link
              href={`${WORKSPACE_URL}/projects`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Start a Project
            </Link>
          </div>

          <p className="mt-5 text-sm text-white/55">
            Built for clear communication, payment control, project approvals,
            and seamless client delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
