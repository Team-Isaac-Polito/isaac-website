import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../components/footer/footer";
import { MyNavbar } from "../../components/hubjumbo/components/navbar/navbar";
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

  const sortedEditions = event.editions.toSorted(
    (edition1, edition2) => parseInt(edition2.year) - parseInt(edition1.year)
  );

  const editionCount = event.editions.length;
  const photoCount = event.editions.reduce(
    (total, edition) => total + edition.photos.length,
    0,
  );

  return (
    <>
      <main className="overflow-hidden bg-[#f6f5f0] text-[#1b1b3a]">
        <section className="relative isolate flex min-h-[38rem] items-end overflow-hidden bg-[#1b1b3a] px-5 pb-14 pt-32 text-white sm:min-h-[46rem] sm:px-10 sm:pb-20 lg:px-16">
          <Image
            src={event.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11122d] via-[#11122d]/70 to-[#11122d]/15" />
          <div
            aria-hidden="true"
            className="isaac-pattern isaac-pattern-dark pointer-events-none absolute inset-0 opacity-25"
          />
          <div className="absolute inset-x-0 top-0 z-20">
            <MyNavbar />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <Link
              href="/about#members-title"
              className="event-enter mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-[#f5c64b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span aria-hidden="true">←</span> Torna a About
            </Link>
            <p className="event-enter mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#73b9b4]">
              {event.category}
            </p>
            <h1
              className="event-enter max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
              style={{ animationDelay: "100ms" }}
            >
              {event.title}
            </h1>
            <p
              className="event-enter mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-2xl"
              style={{ animationDelay: "200ms" }}
            >
              {event.description}
            </p>
            <a
              href="#gallery"
              className="event-enter mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#f5c64b] px-7 py-3 font-semibold text-[#1b1b3a] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              style={{ animationDelay: "300ms" }}
            >
              Esplora le edizioni
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          id="gallery"
          aria-labelledby="gallery-title"
          className="isaac-pattern scroll-mt-8 px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#478d8d]">
                  I ricordi, anno dopo anno
                </p>
                <h2
                  id="gallery-title"
                  className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl"
                >
                  Ogni edizione, una nuova storia.
                </h2>
              </div>
              <div className="flex gap-3">
                <div className="rounded-2xl border border-[#1b1b3a]/10 bg-white px-5 py-4 shadow-sm">
                  <span className="block text-2xl font-extrabold">
                    {editionCount}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#676778]">
                    edizioni
                  </span>
                </div>
                <div className="rounded-2xl border border-[#1b1b3a]/10 bg-white px-5 py-4 shadow-sm">
                  <span className="block text-2xl font-extrabold">
                    {photoCount}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#676778]">
                    momenti
                  </span>
                </div>
              </div>
            </div>

            <nav
              aria-label="Vai a un'edizione"
              className="mb-12 flex flex-wrap gap-3"
            >
              {sortedEditions.map((edition) => (
                <a
                  key={edition.year}
                  href={`#edition-${edition.year}`}
                  className="rounded-full border border-[#1b1b3a]/15 px-5 py-2 text-sm font-semibold transition-colors hover:border-[#478d8d] hover:bg-[#478d8d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#478d8d]"
                >
                  {edition.year}
                </a>
              ))}
            </nav>

            <div className="space-y-16 sm:space-y-24">
              {sortedEditions.map((edition) => (
                <section
                  key={edition.year}
                  id={`edition-${edition.year}`}
                  aria-labelledby={`edition-title-${edition.year}`}
                  className="scroll-mt-8"
                >
                  <div className="mb-6 flex items-center gap-5 sm:mb-8">
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
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                    {edition.photos.map((photo, imageIndex) => (
                      <figure
                        key={photo}
                        className={`event-enter group relative overflow-hidden rounded-2xl bg-[#1b1b3a]/10 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl ${
                          imageIndex % 4 === 0
                            ? "aspect-[4/5] sm:row-span-2"
                            : "aspect-[4/3]"
                        }`}
                        style={{
                          animationDelay: `${Math.min(imageIndex * 70, 350)}ms`,
                        }}
                      >
                        <Image
                          src={photo}
                          alt={`${event.title}, edizione ${edition.year}, foto ${imageIndex + 1}`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#11122d]/45 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                        <figcaption className="absolute bottom-3 left-3 rounded-full bg-[#11122d]/55 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 sm:bottom-5 sm:left-5 sm:px-4 sm:py-2 sm:text-sm">
                          {event.title} · {edition.year}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-20 border-t border-[#1b1b3a]/15 pt-8 text-center sm:mt-28">
              <p className="text-lg text-[#676778]">
                Vuoi scoprire altri momenti del Team Isaac?
              </p>
              <Link
                href="/about#members-title"
                className="mt-4 inline-flex items-center gap-2 font-bold text-[#397778] transition-colors hover:text-[#1b1b3a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#478d8d]"
              >
                Torna a tutte le storie <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
