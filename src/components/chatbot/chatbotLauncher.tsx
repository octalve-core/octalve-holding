// "use client";

// import OctalveSmartWindow from "./octalve-smart-window";
// import { useOctalveSmart } from "./octalve-smart-provider";

// export default function ChatbotLauncher() {
//   const { isOpen, openChat, closeChat } = useOctalveSmart();

//   return (
//     <>
//       <button
//         onClick={() => {
//           if (isOpen) {
//             closeChat();
//             return;
//           }

//           openChat();
//         }}
//         className="fixed bottom-5 right-5 z-[85] flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-400"
//         aria-label="Open Octalve Smart"
//       >
//         {isOpen ? "×" : "✦"}
//       </button>

//       <OctalveSmartWindow />
//     </>
//   );
// }

"use client";

import Image from "next/image";
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
        className="fixed bottom-5 right-5 z-[85] inline-flex h-[68px] w-[68px] items-center justify-center rounded-full transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:bottom-6 sm:right-6 sm:h-[74px] sm:w-[74px]"
        aria-label={isOpen ? "Close Octalve Smart" : "Open Octalve Smart"}
        title={isOpen ? "Close Octalve Smart" : "Open Octalve Smart"}
      >
        {isOpen ? (
          <span className="inline-flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#050816] text-[34px] font-light leading-none text-white shadow-[0_18px_44px_rgba(2,6,23,0.42)] sm:h-[74px] sm:w-[74px]">
            ×
          </span>
        ) : (
          <Image
            src="/smarticon/octalvesmart.png"
            alt="Open Octalve Smart"
            width={74}
            height={74}
            priority
            className="h-[68px] w-[68px] rounded-full object-contain shadow-[0_18px_44px_rgba(2,6,23,0.42)] sm:h-[74px] sm:w-[74px]"
          />
        )}
      </button>

      <OctalveSmartWindow />
    </>
  );
}
