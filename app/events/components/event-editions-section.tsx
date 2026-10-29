import { ScrollReveal } from "../../components/shared";
import { EventEditionCard } from "./event-edition-card";
import { eventEditions } from "../data";

export function EventEditionsSection() {
  return (
    <section
      id="eventi-galleria"
      aria-labelledby="eventi-title"
      className="isaac-pattern scroll-mt-8 px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#478d8d]">
            Il Team Isaac in movimento
          </p>
          <h2
            id="eventi-title"
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Le nostre storie, anno dopo anno.
          </h2>
        </header>
        <div className="space-y-8 sm:space-y-12">
          {eventEditions.map(({ event, edition }, index) => (
            <ScrollReveal
              key={`${event.slug}-${edition.year}`}
              direction={index % 2 === 0 ? "left" : "right"}
              delayMs={(index % 4) * 90}
            >
              <EventEditionCard
                event={event}
                edition={edition}
                index={index}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
