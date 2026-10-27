import {HubJumbo} from "./components";
import { Divisions } from "./components/divisions/divisions";
import { EventsSection } from "./components/events_section/events";
import { Footer } from "./components/footer/footer";
import { EventPopup } from "./components/hubjumbo/components/event-popup/event-popup";
import { Robots } from "./components/robots/robots";
import { SponsorList } from "./components/sponsor_list/sponsor_list";

export default function Home() {
  return (
    <>
      <EventPopup />
      <HubJumbo />
      <Robots />
      <Divisions />
      <EventsSection />
      <SponsorList />
      <Footer />
    </>
  );
}
