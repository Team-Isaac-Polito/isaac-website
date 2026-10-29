import type { EventEdition, TeamEvent } from "../team-events";
import { EventGalleryPhoto } from "./event-gallery-photo";

interface EventEditionGalleryProps {
  edition: EventEdition;
  event: TeamEvent;
}

export function EventEditionGallery({
  edition,
  event,
}: EventEditionGalleryProps) {
  return (
    <section
      id={`edition-${edition.year}`}
      aria-labelledby={`edition-title-${edition.year}`}
      className="scroll-mt-8"
    >
      <header className="mb-6 flex items-center gap-5 sm:mb-8">
        <h3
          id={`edition-title-${edition.year}`}
          className="text-3xl font-extrabold tracking-tight sm:text-5xl"
        >
          {edition.year}
        </h3>
        <span className="h-px flex-1 bg-[#1b1b3a]/15" />
        <span className="text-sm font-medium text-[#676778]">
          {edition.photos.length} foto
        </span>
      </header>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {edition.photos.map((photo, imageIndex) => (
          <EventGalleryPhoto
            key={photo}
            eventTitle={event.title}
            editionYear={edition.year}
            photo={photo}
            imageIndex={imageIndex}
          />
        ))}
      </div>
    </section>
  );
}
