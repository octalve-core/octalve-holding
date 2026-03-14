const services = [
  {
    title: "Branding",
    text: "Identity systems, messaging, brand assets, and design direction.",
  },
  {
    title: "Website Development",
    text: "Fast, scalable websites built with modern frontend technologies.",
  },
  {
    title: "Product Design",
    text: "UI/UX systems for startups, service businesses, and digital tools.",
  },
  {
    title: "Automation & AI",
    text: "Chatbots, workflow automation, smart integrations, and assistants.",
  },
  {
    title: "Business Strategy",
    text: "Positioning, digital growth planning, and solution architecture.",
  },
  {
    title: "Support & Maintenance",
    text: "Reliable improvement, monitoring, updates, and technical support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="section-shell">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-300">
            Services
          </p>
          <h2 className="section-title">
            Services built for modern businesses
          </h2>
          <p className="section-subtitle mt-4">
            We combine business thinking, design execution, and technical
            delivery to build systems that are useful, scalable, and premium.
          </p>
        </div>

        <div className="grid-auto gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-[24px] p-6 transition hover:border-blue-400/20 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                ✦
              </div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
