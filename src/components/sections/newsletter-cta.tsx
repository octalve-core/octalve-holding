"use client";

import Image, { StaticImageData } from "next/image";

import newsletterImage from "@/assets/illustrations/newsletter.png";

const CTA_COLORS = {
  sectionBg: "#F8FAFC",
  leftGradientFrom: "#0B7CFF",
  leftGradientTo: "#2E8CFF",
  rightBg: "#ECEEF2",
  textLight: "#FFFFFF",
  textSoft: "rgba(255,255,255,0.88)",
};

type NewsletterCTAProps = {
  title?: string;
  description?: string;
  image?: StaticImageData;
  imageAlt?: string;
  formSlot?: React.ReactNode;
};

export default function NewsletterCTA({
  title = "Want to stay updated on all things at Octalve",
  description = "Sign up to receive our newsletter and be the first to know about models, events, resources, products, and growth updates from the Octalve ecosystem.",
  image = newsletterImage,
  imageAlt = "Newsletter illustration",
  formSlot,
}: NewsletterCTAProps) {
  return (
    <section
      className="px-12 py-16 sm:px-6 md:py-20"
      style={{ backgroundColor: CTA_COLORS.sectionBg }}
    >
      <div className="mx-auto max-w-[1560px] overflow-hidden rounded-[32px]">
        <div className="grid min-h-[560px] lg:grid-cols-2">
          <div
            className="flex items-center px-16 py-12 sm:px-10 md:px-14 lg:px-32"
            style={{
              background: `linear-gradient(135deg, ${CTA_COLORS.leftGradientFrom} 0%, ${CTA_COLORS.leftGradientTo} 100%)`,
            }}
          >
            <div className="mx-auto w-full max-w-[540px] lg:mx-0">
              <h2
                className="max-w-[12ch] text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl"
                style={{ color: CTA_COLORS.textLight }}
              >
                {title}
              </h2>

              <p
                className="mt-8 max-w-[34rem] text-base leading-8 sm:text-lg"
                style={{ color: CTA_COLORS.textSoft }}
              >
                {description}
              </p>

              <div className="mt-10">
                {formSlot ?? (
                  <div className="rounded-[24px] bg-white/10 p-4 text-white/90 backdrop-blur-sm">
                    <p className="text-sm leading-7">
                      Add your Mailchimp, Zoho, or custom form here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full"
            style={{ backgroundColor: CTA_COLORS.rightBg }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 md:p-16">
              <div className="relative h-full min-h-[260px] w-full">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
