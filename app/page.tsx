import {HubJumbo} from "./components";
import { EventsSection } from "./components/events_section/events";
import { Footer } from "./components/footer/footer";
import { EventPopup } from "./components/hubjumbo/components/event-popup/event-popup";
import { SponsorList } from "./components/sponsor_list/sponsor_list";

export default function Home() {
  return (
    <>
      <EventPopup />
      <HubJumbo />
      <EventsSection />
      <SponsorList />
      <Footer />
    </>
  );
}
