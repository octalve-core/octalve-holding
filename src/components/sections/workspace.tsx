import Image from "next/image";
import Link from "next/link";

const WORKSPACE_URL = "https://workspace.octalve.com";

export default function Workspace() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#020814] text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/workspace.png"
          alt="Octalve Workspace project management platform"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-[74%_top]"
        />

        <div className="absolute inset-0 bg-black/44" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/58 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-black/8" />
      </div>

      <div className="mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="max-w-[760px]">
          <h2 className="text-[44px] font-medium leading-[0.98] tracking-[-0.055em] text-white sm:text-[58px] lg:text-[72px]">
            <span className="block">Control your Octalve</span>
            <span className="block">project from request</span>
            <span className="block">to final delivery.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base font-normal leading-8 text-white/78 sm:text-lg">
            Built for clear communication, payment control, project approvals,
            and seamless client delivery.
          </p>

          <div className="mt-10">
            <Link
              href={WORKSPACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0064E0] px-8 py-4 text-sm font-medium text-white shadow-[0_18px_45px_rgba(0,100,224,0.32)] transition hover:-translate-y-0.5 hover:bg-[#0056c4]"
            >
              Open Workspace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
