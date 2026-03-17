"use client";

import { useState } from "react";

export default function ChatbotLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-400"
        aria-label="Open Octalve chatbot"
      >
        {open ? "×" : "✦"}
      </button>

      {open && (
        <div className="fixed right-5 bottom-24 z-50 w-[calc(100%-2.5rem)] max-w-sm rounded-[28px] border border-white/10 bg-[#08111f] p-4 shadow-2xl shadow-black/40">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Octalve Assistant
              </p>
              <h3 className="mt-1 text-base font-semibold text-white">
                Ask Octalve
              </h3>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">
              Live
            </span>
          </div>

          <div className="space-y-3">
            <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-white/6 p-3 text-sm leading-6 text-slate-200">
              Hi, I’m Octalve Assistant. I can help you find the right service
              or solution.
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            {[
              "I need a website",
              "Tell me your services",
              "Can you build a chatbot?",
              "How do I start a project?",
            ].map((text) => (
              <button
                key={text}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10"
              >
                {text}
              </button>
            ))}
          </div>

          <button className="mt-4 w-full rounded-full bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
            Continue to WhatsApp
          </button>
        </div>
      )}
    </>
  );
}
