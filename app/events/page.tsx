import type { Metadata } from "next";
import { EventsPageContent } from "./components";

export const metadata: Metadata = {
  title: "Eventi | Team Isaac",
  description:
    "Scopri gli eventi, le fiere e gli incontri a cui ha partecipato il Team Isaac.",
};

export default function EventsPage() {
  return <EventsPageContent />;
}
