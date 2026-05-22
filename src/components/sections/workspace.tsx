import Image from "next/image";
import Link from "next/link";

const WORKSPACE_URL = "https://workspace.octalve.com";

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

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
      </div>

      <div className="mx-auto flex min-h-[680px] w-full max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Track your Octalve project from request to delivery.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
            Built for clear communication, payment control, project approvals,
            and seamless client delivery.
          </p>

          <div className="mt-9">
            <Link
              href={WORKSPACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0064E0] px-7 py-4 text-sm font-medium text-white shadow-[0_18px_45px_rgba(0,100,224,0.35)] transition hover:-translate-y-0.5 hover:bg-[#0056c4]"
            >
              Open Workspace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
