import type { Metadata } from "next";
import ContactPageFeature from "@/features/contact/page";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contact Us | Octalve",
  description:
    "Reach out to Octalve for inquiries, support, collaborations, and project discussions.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageFeature />
      </main>
      <Footer />
    </>
  );
}
