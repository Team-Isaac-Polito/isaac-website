import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetailPage } from "../components";
import { getTeamEvent, teamEvents } from "../team-events";

export function generateStaticParams() {
  return teamEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = getTeamEvent(slug);

  if (!event) return {};

  return {
    title: `${event.title} | Team Isaac`,
    description: event.description,
  };
}

export default async function EventPage({
  params,
}: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = getTeamEvent(slug);

  if (!event) notFound();

  return <EventDetailPage event={event} />;
}
