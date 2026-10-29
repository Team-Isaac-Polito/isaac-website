import { Footer } from "../../components/shared";
import { ContactFormSection } from "./contact-form-section";
import { ContactHero } from "./contact-hero";

export function ContactPage() {
  return (
    <>
      <main className="overflow-hidden bg-[#f6f5f0] text-[#1b1b3a]">
        <ContactHero />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
