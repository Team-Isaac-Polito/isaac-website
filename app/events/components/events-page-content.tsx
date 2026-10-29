import { Footer } from "../../components/shared";
import { EventEditionsSection } from "./event-editions-section";
import { EventsHero } from "./events-hero";

export function EventsPageContent() {
  return (
    <section id="eventi">
      <main className="overflow-hidden bg-[#f6f5f0] text-[#1b1b3a]">
        <EventsHero />
        <EventEditionsSection />
      </main>
      <Footer />
    </section>
  );
}
