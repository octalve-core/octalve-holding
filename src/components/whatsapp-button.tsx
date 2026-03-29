"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const phone = "2348073459090";
  const text =
    "Hello Octalve, I want to discuss how you can help me grow my business, brand, or NGO.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Octalve on WhatsApp"
      title="Chat with Octalve on WhatsApp"
      className="group fixed bottom-5 left-5 z-[84] inline-flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_18px_44px_rgba(37,211,102,0.32)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#1ebe5d] active:scale-[0.98] sm:bottom-6 sm:left-6 sm:h-[74px] sm:w-[74px]"
    >
      <Image
        src="/smarticon/whatsapp.png"
        alt="WhatsApp"
        width={60}
        height={60}
        priority
        className="h-13 w-12 object-contain sm:h-15 sm:w-14"
      />
    </a>
  );
}
