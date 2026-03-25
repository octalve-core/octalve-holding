import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import QuickAccess from "@/components/sections/quick-access";
import Models from "@/components/sections/models";
import FeaturedProjects from "@/components/sections/featured-projects";
import BrandingShowcase from "@/components/sections/branding-showcase";
import Partners from "@/components/sections/partners";
import Testimonials from "@/components/sections/testimonials";
import NewsletterCTA from "@/components/sections/newsletter-cta";
import NewsletterFormShell from "@/components/forms/newsletter-form-shell";
import Footer from "@/components/layout/footer";
import HomeWelcomePopup from "@/components/home/home-welcome-popup";
import HomeCta from "@/components/sections/home-cta";

export default function Home() {
  return (
    <main>
      <HomeWelcomePopup />
      <Header />
      <Hero />
      <QuickAccess />
      <Models />
      <FeaturedProjects />
      <BrandingShowcase />
      <Partners />
      <HomeCta />
      <Testimonials />
      <NewsletterCTA formSlot={<NewsletterFormShell />} />
      <Footer />
    </main>
  );
}
