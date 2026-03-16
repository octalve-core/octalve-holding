"use client";

import OctalveSmartWindow from "./octalve-smart-window";
import { useOctalveSmart } from "./octalve-smart-provider";

export default function ChatbotLauncher() {
  const { isOpen, openChat, closeChat } = useOctalveSmart();

  return (
    <>
      <button
        onClick={() => {
          if (isOpen) {
            closeChat();
            return;
          }

          openChat();
        }}
        className="fixed bottom-5 right-5 z-[85] flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-400"
        aria-label="Open Octalve Smart"
      >
        {isOpen ? "×" : "✦"}
      </button>

      <OctalveSmartWindow />
    </>
  );
}
