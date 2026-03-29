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
      className="fixed bottom-5 left-5 z-[85] inline-flex items-center justify-center transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:bottom-6 sm:left-6"
    >
      <Image
        src="/smarticon/whatsapp.png"
        alt="WhatsApp"
        width={54}
        height={54}
        priority
        className="h-[45px] w-[45px] object-contain sm:h-[60px] sm:w-[60px]"
      />
    </a>
  );
}
