import Image from "next/image";
import Link from "next/link";
import type { EventEdition, TeamEvent } from "../team-events";

interface EventEditionCardProps {
  event: TeamEvent;
  edition: EventEdition;
  index: number;
}

export function EventEditionCard({
  event,
  edition,
  index,
}: EventEditionCardProps) {
  const photos = edition.photos.slice(0, 3);

  return (
    <article className="grid overflow-hidden rounded-3xl border border-[#1b1b3a]/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl lg:grid-cols-2">
      <div
        className={`grid min-h-72 grid-cols-2 grid-rows-2 gap-2 bg-[#1b1b3a]/5 p-2 sm:min-h-[28rem] sm:gap-3 sm:p-3 ${
          index % 2 === 1 ? "lg:order-2" : ""
        }`}
      >
        {photos.map((photo, photoIndex) => (
          <div
            key={photo}
            className={`relative overflow-hidden rounded-2xl bg-[#1b1b3a]/10 ${
              photoIndex === 0 || photos.length === 2 ? "row-span-2" : ""
            } ${photos.length === 1 ? "col-span-2" : ""}`}
          >
            <Image
              src={photo}
              alt={`${event.title}, ${edition.year}, foto ${photoIndex + 1}`}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#478d8d]">
          {event.category}
        </p>
        <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {event.title}
        </h3>
        <p className="mt-2 text-lg font-semibold text-[#676778]">
          {edition.year}
        </p>
        <p className="mt-5 text-base leading-relaxed text-[#4f4f60] sm:text-lg">
          {event.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-sm font-medium text-[#676778]">
            {edition.photos.length} foto
          </span>
          <Link
            href={`/events/${event.slug}#edition-${edition.year}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1b1b3a] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#397778] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#397778]"
          >
            Guarda le foto <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
