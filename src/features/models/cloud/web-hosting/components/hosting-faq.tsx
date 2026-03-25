"use client";

import SharedFaq, { type FaqItem } from "../../components/shared-faq";

const HOSTING_FAQS: FaqItem[] = [
  {
    question: "What is web hosting?",
    answer:
      "Web hosting is the service that stores your website files and makes them available online. When someone types your domain into a browser, hosting is what delivers the actual pages, images, scripts, and content behind that domain name.",
  },
  {
    question: "How do I know which hosting plan is right for me?",
    answer:
      "Choose based on what you are building, how much traffic you expect, and how much technical work you want to handle yourself. A simple company site or landing page can start small, while ecommerce, client portals, media-heavy sites, or projects expecting growth should start with stronger resources and easier upgrade paths.",
  },
  {
    question:
      "Can I host my website if I already bought a domain somewhere else?",
    answer:
      "Yes. You do not have to buy a new domain to use Octalve Cloud hosting. You can connect your existing domain by updating nameservers or DNS records so the domain points to your new hosting environment.",
  },
  {
    question: "Will hosting affect my website speed?",
    answer:
      "Yes. Hosting affects speed through server resources, storage type, caching, network setup, and how well the platform handles traffic. Slow hosting can make even a good website feel weak, while stronger infrastructure helps pages load more consistently and improves the visitor experience.",
  },
  {
    question: "Is SSL included with hosting, and why does it matter?",
    answer:
      "A good hosting setup should support SSL because it enables HTTPS and encrypts traffic between your visitors and your site. This matters for trust, login protection, forms, payments, and avoiding browser warnings that make your site look unsafe.",
  },
  {
    question: "Do I need backups if my site is small?",
    answer:
      "Yes. Small sites can still be affected by plugin issues, accidental changes, malware, or failed updates. Backups give you a recovery point, which means one mistake does not have to become a full rebuild.",
  },
  {
    question: "What does uptime mean, and why should I care?",
    answer:
      "Uptime is the percentage of time your website stays available online. If uptime is weak, your site may disappear during sales, enquiries, or campaign traffic. For a business, that means lost trust, missed leads, and avoidable support issues.",
  },
  {
    question:
      "What is the difference between shared hosting, cloud hosting, and WordPress hosting?",
    answer:
      "Shared hosting usually costs less but shares server resources with many sites. Cloud hosting is designed to be more flexible and scalable for growing workloads. WordPress hosting is optimized specifically for WordPress, which can make setup, updates, security, and performance easier if that is your platform.",
  },
  {
    question: "What is the difference between managed and unmanaged hosting?",
    answer:
      "Managed hosting means the provider handles more of the technical work such as security, caching, maintenance, and often backups. Unmanaged hosting gives you more direct control, but you are usually responsible for a lot more setup and server management yourself.",
  },
  {
    question:
      "Can you help me migrate my current website without major downtime?",
    answer:
      "Yes. A good migration process usually involves preparing the new hosting environment first, testing before final cutover, and only switching DNS when the site is ready. That reduces interruption and helps your visitors keep reaching the right website while the move happens.",
  },
];

export default function HostingFaq() {
  return (
    <SharedFaq
      eyebrow="Web Hosting FAQ"
      title="Web hosting FAQ"
      description="Learn how hosting works, what plan to choose, how speed and uptime are affected, and how to approach SSL, backups, scaling, and migration."
      items={HOSTING_FAQS}
      accentColor="#0064E0"
    />
  );
}
