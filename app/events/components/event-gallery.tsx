import Link from "next/link";
import type { TeamEvent } from "../team-events";
import { EventEditionGallery } from "./event-edition-gallery";
import { EventGallerySummary } from "./event-gallery-summary";

export function EventGallery({ event }: { event: TeamEvent }) {
  const sortedEditions = event.editions.toSorted(
    (first, second) => Number.parseInt(second.year, 10) - Number.parseInt(first.year, 10),
  );
  const photoCount = event.editions.reduce(
    (total, edition) => total + edition.photos.length,
    0,
  );

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="isaac-pattern scroll-mt-8 px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <EventGallerySummary
          editions={sortedEditions}
          editionCount={event.editions.length}
          photoCount={photoCount}
        />
        <div className="space-y-16 sm:space-y-24">
          {sortedEditions.map((edition) => (
            <EventEditionGallery
              key={edition.year}
              edition={edition}
              event={event}
            />
          ))}
        </div>
        <footer className="mt-20 border-t border-[#1b1b3a]/15 pt-8 text-center sm:mt-28">
          <p className="text-lg text-[#676778]">
            Vuoi scoprire altri momenti del Team Isaac?
          </p>
          <Link
            href="/about#members-title"
            className="mt-4 inline-flex items-center gap-2 font-bold text-[#397778] transition-colors hover:text-[#1b1b3a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#478d8d]"
          >
            Torna a tutte le storie <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
