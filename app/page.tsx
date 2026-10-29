import {
  Divisions,
  EventPopup,
  EventsSection,
  Footer,
  HubJumbo,
  Robots,
  ScrollReveal,
  SponsorList,
} from "./components";

export default function Home() {
  return (
    <>
      <EventPopup />
      <HubJumbo />
      <ScrollReveal>
        <Robots />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <Divisions />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <EventsSection />
      </ScrollReveal>
      <ScrollReveal direction="zoom">
        <SponsorList />
      </ScrollReveal>
      <Footer />
    </>
  );
}
