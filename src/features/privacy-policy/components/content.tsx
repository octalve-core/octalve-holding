export default function PrivacyPolicyContent() {
  const sections = [
    {
      title: "1. Information we may collect",
      body: [
        "We may collect information you submit directly through forms, emails, applications, project inquiries, subscriptions, or other website interactions.",
        "This may include your name, email address, phone number, project details, company information, and any other information you choose to share with us.",
      ],
    },
    {
      title: "2. How we use information",
      body: [
        "We may use the information you provide to respond to inquiries, review project requests, evaluate applications, improve our services, share updates, and support communication related to our products or work.",
        "We may also use usage-related information to understand how visitors interact with our website and improve user experience.",
      ],
    },
    {
      title: "3. Cookies and analytics",
      body: [
        "Our website may use cookies, analytics tools, or similar technologies to understand traffic patterns, page engagement, and general website performance.",
        "These tools help us improve usability, content structure, and service relevance over time.",
      ],
    },
    {
      title: "4. Data sharing",
      body: [
        "We do not sell personal information as part of our normal website operations.",
        "We may share information with carefully selected tools, service providers, or workflow systems only where necessary to operate forms, communication systems, analytics, project workflows, or internal operations.",
      ],
    },
    {
      title: "5. Data protection",
      body: [
        "We take reasonable steps to protect submitted information and to reduce misuse, unauthorized access, or loss.",
        "However, no online system can guarantee absolute security, so users should avoid sending unnecessarily sensitive information through public forms.",
      ],
    },
    {
      title: "6. Third-party links",
      body: [
        "Some pages may contain links to third-party websites, tools, dashboards, or services. Once you leave our website, your interaction may be governed by the privacy practices of those external platforms.",
        "We encourage users to review the privacy terms of any third-party service they use through linked experiences.",
      ],
    },
    {
      title: "7. Your choices",
      body: [
        "You may contact us to ask questions about the information you submitted, request corrections where appropriate, or ask for communication preferences to be updated.",
        "Where relevant, you may also choose to stop using certain parts of the site that require voluntary submission of information.",
      ],
    },
    {
      title: "8. Policy updates",
      body: [
        "This privacy policy may be updated from time to time as the website, products, services, or legal requirements evolve.",
        "Updated versions may be published on this page with revised wording or structure as the Octalve ecosystem expands.",
      ],
    },
    {
      title: "9. Contact",
      body: [
        "If you have a question about this privacy policy or how information is handled across the website, please reach out through the contact page.",
      ],
    },
  ];

  return (
    <section id="privacy-policy-content" className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[980px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="border-b border-slate-200 pb-6">
            <p className="text-sm font-medium text-slate-500">Effective date</p>
            <p className="mt-2 text-base text-slate-900">
              This is a demo privacy policy structure and can be revised with
              your final legal or operational wording later.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm leading-7 text-slate-600 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
