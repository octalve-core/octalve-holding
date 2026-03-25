"use client";

import SharedFaq, { type FaqItem } from "../../components/shared-faq";

const DOMAIN_FAQS: FaqItem[] = [
  {
    question: "What is a domain name, and do I need hosting at the same time?",
    answer:
      "A domain name is your website’s public address, while hosting is the server space where your website files live. You can register a domain first and connect hosting later, but you need both before a website can fully load online.",
  },
  {
    question: "How do I choose the right domain for my business?",
    answer:
      "Start with a name that is short, easy to remember, and close to your brand. Avoid hard-to-spell words, too many hyphens, or names that look confusing on social media, invoices, and email addresses. If your audience is mostly in Nigeria, a local extension like .com.ng can help with familiarity and trust.",
  },
  {
    question: "Why is the domain I want already taken?",
    answer:
      "A domain can be unavailable because someone already registered it, it is parked for future use, or it is being resold as a premium name. In that case, the best move is to test close alternatives, add a location or keyword, or switch to another extension that still fits your brand cleanly.",
  },
  {
    question:
      "What is the difference between registering, connecting, and transferring a domain?",
    answer:
      "Registering means buying a new domain name for the first time. Connecting means pointing a domain you already own to a website or email service using DNS settings. Transferring means moving the management of that domain from one registrar to another so billing, renewals, and control happen in one place.",
  },
  {
    question: "How long does a domain transfer take?",
    answer:
      "A domain transfer can be quick or take several days depending on the registry, the current registrar, and whether the domain is unlocked and has the right authorization code. It can also be blocked by ICANN-related lock periods after a recent registration, transfer, or certain registrant contact changes.",
  },
  {
    question: "What is DNS, and why do my changes not show immediately?",
    answer:
      "DNS is the system that tells browsers and email services where your domain should point. When you change nameservers or DNS records, those updates can take time to spread because of caching and record time-to-live settings. That is why a domain can look correct in one place and still appear old somewhere else for a while.",
  },
  {
    question: "Can I use a domain I bought elsewhere with Octalve Cloud?",
    answer:
      "Yes. You can either connect the domain by updating DNS records or move the domain completely through a registrar transfer. Connecting is usually faster if you want to keep your current registrar for now, while transferring is better if you want all billing and management in one place.",
  },
  {
    question: "Do I need privacy protection on my domain?",
    answer:
      "In many cases, yes. Privacy or proxy services help keep your personal contact details from being openly published with the registration record. This reduces spam and helps protect personal information, especially for founders, creators, and small business owners using personal registration details.",
  },
  {
    question: "Do I need SSL if I only have a simple landing page?",
    answer:
      "Yes. SSL enables HTTPS, which encrypts traffic between your visitor and your site. Even for a simple landing page, it improves trust, helps avoid browser security warnings, and protects form submissions or contact details that visitors may share.",
  },
  {
    question: "What happens if I forget to renew my domain?",
    answer:
      "Your domain can expire, which may cause your website and business email to stop working. After expiration, many domains enter a grace or recovery period, but fees and rules vary. The safest option is to enable auto-renewal, keep payment details current, and make sure your registrant email address is valid so you do not miss renewal notices.",
  },
];

export default function DomainFaq() {
  return (
    <SharedFaq
      eyebrow="Domain FAQ"
      title="Domain registration FAQ"
      description="Get clear answers to the most common domain questions, from choosing the right name to transfers, DNS, privacy, SSL, and renewal."
      items={DOMAIN_FAQS}
      accentColor="#0064E0"
    />
  );
}
