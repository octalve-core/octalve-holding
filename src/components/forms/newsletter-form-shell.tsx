"use client";

export default function NewsletterFormShell() {
  return (
    <div className="max-w-[540px]">
      <div className="grid gap-4">
        <input
          type="email"
          placeholder="Your Email Address"
          className="h-14 w-full rounded-[12px] border border-white/30 bg-white px-4 text-base text-slate-900 outline-none placeholder:text-slate-500"
        />

        <button
          type="button"
          className="inline-flex h-12 items-center justify-center rounded-[12px] bg-[#1E7BFF] px-6 text-base font-semibold text-white transition hover:opacity-95"
        >
          Join Our Clan
        </button>
      </div>
    </div>
  );
}
