import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer/footer";
import { MyNavbar } from "../components/hubjumbo/components/navbar/navbar";
import { ScrollReveal } from "../components/shared/ScrollReveal/scroll_reveal";
import { EventOrbit } from "./components/event-orbit";
import { teamEvents } from "./team-events";

export const metadata: Metadata = {
  title: "Eventi | Team Isaac",
  description:
    "Scopri gli eventi, le fiere e gli incontri a cui ha partecipato il Team Isaac.",
};

const eventEditions = teamEvents
  .flatMap((event) =>
    event.editions.map((edition) => ({
      event,
      edition,
    })),
  )
  .toSorted((first, second) => {
    const firstYear = Number.parseInt(first.edition.year, 10);
    const secondYear = Number.parseInt(second.edition.year, 10);

    if (Number.isNaN(firstYear)) return 1;
    if (Number.isNaN(secondYear)) return -1;
    return secondYear - firstYear;
  });

const eventPhotos = teamEvents.flatMap((event) =>
  event.editions.flatMap((edition) =>
    edition.photos.map((image) => ({
      image,
      title: `${event.title}, ${edition.year}`,
    })),
  ),
);
const heroCollage = Array.from({ length: 24 }, (_, index) => {
  const photoIndex = Math.floor((index * eventPhotos.length) / 24);
  return eventPhotos[photoIndex];
});

export default function EventsPage() {
  return (
    <section id="eventi">
      <main className="overflow-hidden bg-[#f6f5f0] text-[#1b1b3a]">
        <section className="relative isolate flex min-h-[38rem] items-center justify-center overflow-hidden bg-white px-5 pb-14 pt-24 text-[#121212] sm:min-h-[48rem] sm:pb-18 sm:pt-28 lg:min-h-[58rem] lg:px-16 lg:pb-12 lg:pt-28">
          <div className="absolute inset-x-0 top-0 z-30">
            <MyNavbar darkText={true} />
          </div>

          <EventOrbit items={heroCollage} />

          <div className="relative z-10 mx-auto flex w-full max-w-[36rem] flex-col items-center justify-center rounded-full bg-white/80 px-3 py-10 text-center backdrop-blur-[2px] sm:py-12 md:bg-white lg:py-14">
            <div className="event-enter px-2">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
                COMPETIZIONI &amp; EVENTI
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-snug sm:text-2xl lg:mt-6 lg:text-[1.7rem]">
                Dal 2022 il Team Isaac partecipa a fiere, competizioni e
                incontri, portando i nostri robot a contatto con studenti,
                famiglie e appassionati di tecnologia.
              </p>
            </div>

          </div>
        </section>

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
              {eventEditions.map(({ event, edition }, index) => {
                const photos = edition.photos.slice(0, 3);
                const editionAnchor = `edition-${edition.year}`;

                return (
                  <ScrollReveal
                    key={`${event.slug}-${edition.year}`}
                    direction={index % 2 === 0 ? "left" : "right"}
                    delayMs={(index % 4) * 90}
                  >
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
                              photoIndex === 0 || photos.length === 2
                                ? "row-span-2"
                                : ""
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
                            href={`/events/${event.slug}#${editionAnchor}`}
                            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1b1b3a] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#397778] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#397778]"
                          >
                            Guarda le foto <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
