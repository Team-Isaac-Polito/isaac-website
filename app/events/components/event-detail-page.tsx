import { Footer } from "../../components/shared";
import type { TeamEvent } from "../team-events";
import { EventDetailHero } from "./event-detail-hero";
import { EventGallery } from "./event-gallery";

export function EventDetailPage({ event }: { event: TeamEvent }) {
  return (
    <>
      <main className="overflow-hidden bg-[#f6f5f0] text-[#1b1b3a]">
        <EventDetailHero event={event} />
        <EventGallery event={event} />
      </main>
      <Footer />
    </>
  );
}
