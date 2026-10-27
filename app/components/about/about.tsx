"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { MyNavbar } from "../hubjumbo/components/navbar/navbar";
import { teamEvents } from "../../events/team-events";

const milestones = [
  {
    year: "2002",
    description:
      "Nasce il Team ISAAC! Isaac è un robot umanoide sviluppato con l’obiettivo di migliorare la comprensione dei bipedi.",
  },
  {
    year: "2004",
    description:
      "Il secondo prototipo di robot umanoide viene presentato alla RoboCup di Osaka. I primi test mettono in evidenza una solida architettura elettronica e meccanica.",
  },
  {
    year: "2017",
    description:
      "Un nuovo inizio: il Team ISAAC si trasferisce al DIMEAS, sotto la supervisione del professor Giuseppe Quaglia, e si dedica alla robotica per la ricerca e il soccorso.",
  },
  {
    year: "2021",
    description: "Nasce RESE.Q MK1, il primo robot del team dedicato alle operazioni di ricerca e soccorso.",
  },
  {
    year: "2024",
    description: "Nasce RESE.Q MK2, la nuova evoluzione dei robot del Team ISAAC.",
  },
];

export function AboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  function scrollGallery(direction: -1 | 1) {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollBy({
      left: direction * gallery.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  return (
    <main className="bg-[#f6f5f0] text-[#1b1b3a]">
      <section className="relative isolate flex min-h-[42rem] items-end overflow-hidden bg-[#1b1b3a] px-5 pb-16 pt-32 text-white sm:min-h-[48rem] sm:px-10 sm:pb-24 lg:px-16">
        <Image
          src="/site/home/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12132d]/95 via-[#12132d]/55 to-[#12132d]/10" />
        <div className="absolute inset-x-0 top-0 z-20">
          <MyNavbar />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#73b9b4] sm:text-base">
            Politecnico di Torino · dal 2002
          </p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            Persone,
            <br />
            idee, robot.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-2xl">
            Siamo un team di studenti appassionati di robotica, uniti dalla
            voglia di progettare tecnologie che possano fare la differenza.
          </p>
          <a
            href="/about"
            className="mt-9 inline-flex min-h-12 items-center rounded-full bg-[#f5c64b] px-7 py-3 font-semibold text-[#1b1b3a] transition-colors hover:bg-[#ffda72] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Scopri chi siamo
          </a>
        </div>
      </section>

      <section
        id="divisioni"
        aria-labelledby="about-title"
        className="isaac-pattern scroll-mt-8 px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#478d8d]">
              Su di noi
            </p>
            <h2
              id="about-title"
              className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            >
              La robotica prende forma quando le persone lavorano insieme.
            </h2>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-[#1b1b3a]/10">
              <Image
                src="/site/about/about-us.png"
                alt="I membri del Team Isaac lavorano a un robot"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#4b4b5b] sm:text-lg">
            <p>
              Siamo un team studentesco del Politecnico di Torino, formato da
              studenti con percorsi e competenze diverse. Il team è seguito dal
              professor Giuseppe Quaglia.
            </p>
            <p>
              Il nostro obiettivo principale è sviluppare robot innovativi per
              le attività di ricerca e soccorso, contribuendo all’avanzamento
              della robotica SAR e alla sicurezza delle operazioni di
              salvataggio.
            </p>
            <ul className="space-y-2">
              <li>+ Condividere competenze e imparare facendo.</li>
              <li>+ Costruire robot utili alla società.</li>
              <li>+ Raccontare la robotica in eventi e dimostrazioni.</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 border-y border-[#1b1b3a]/15 sm:grid-cols-3">
          {[
            { value: "2", label: "Robot" },
            { value: "+30", label: "Membri" },
            { value: "+20", label: "Anni di storia" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex gap-4 border-b items-center flex-col border-[#1b1b3a]/15 py-6 last:border-0 justify-center sm:border-b-0 sm:border-r sm:py-8 sm:last:border-0"
            >
              <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.14em] text-[#676778]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="history-title"
        className="isaac-pattern isaac-pattern-dark bg-[#1b1b3a] px-5 py-20 text-white sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#73b9b4]">
                Una storia in movimento
              </p>
              <h2
                id="history-title"
                className="text-4xl font-bold uppercase tracking-tight sm:text-6xl"
              >
                La nostra storia
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Dalla ricerca sui robot umanoidi alle tecnologie per le missioni
              di soccorso: ogni tappa apre una nuova strada.
            </p>
          </div>

          <div
            role="group"
            aria-label="Seleziona un anno della storia del team"
            className="relative grid grid-cols-5 gap-2 border-y border-white/20 py-5 sm:gap-5 sm:py-7"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-1/2 h-px bg-white/20"
            />
            {milestones.map((milestone, index) => {
              const isActive = activeMilestone === index;

              return (
                <button
                  key={milestone.year}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveMilestone(index)}
                  className="relative z-10 flex flex-col items-center gap-3 rounded-md py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c64b]"
                >
                  <span
                    aria-hidden="true"
                    className={`h-3 w-3 rounded-full border-2 transition-colors sm:h-4 sm:w-4 ${
                      isActive
                        ? "border-[#f5c64b] bg-[#f5c64b]"
                        : "border-white/60 bg-[#1b1b3a]"
                    }`}
                  />
                  <span
                    className={`text-sm font-bold transition-colors sm:text-xl ${
                      isActive ? "text-[#f5c64b]" : "text-white/65"
                    }`}
                  >
                    {milestone.year}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            aria-live="polite"
            className="mt-9 min-h-28 max-w-3xl sm:mt-12"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#73b9b4]">
              {milestones[activeMilestone].year}
            </p>
            <p className="text-xl leading-relaxed text-white/90 sm:text-2xl">
              {milestones[activeMilestone].description}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="members-title"
        className="isaac-pattern overflow-hidden py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
          <div className="mb-9 flex items-end justify-between gap-6 sm:mb-12">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#478d8d]">
                Le persone dietro i progetti
              </p>
              <h2
                id="members-title"
                className="text-4xl font-bold tracking-tight sm:text-6xl"
              >
                Il team, da vicino.
              </h2>
            </div>
            <div className="hidden gap-3 sm:flex">
              <button
                type="button"
                aria-label="Scorri le foto verso sinistra"
                onClick={() => scrollGallery(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1b1b3a]/20 transition-colors hover:bg-[#1b1b3a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#478d8d]"
              >
                <span aria-hidden="true" className="text-xl">
                  ←
                </span>
              </button>
              <button
                type="button"
                aria-label="Scorri le foto verso destra"
                onClick={() => scrollGallery(1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1b1b3a]/20 transition-colors hover:bg-[#1b1b3a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#478d8d]"
              >
                <span aria-hidden="true" className="text-xl">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={galleryRef}
          role="region"
          aria-label="Galleria fotografica dei membri del Team Isaac"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#478d8d] sm:gap-7 sm:px-10 lg:px-[max(4rem,calc((100vw-80rem)/2))]"
        >
          {teamEvents.map((event, index) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              aria-label={`Scopri ${event.title}: descrizione e foto delle edizioni`}
              className="group relative aspect-[4/5] w-[78vw] max-w-[24rem] flex-none snap-start overflow-hidden rounded-2xl bg-[#1b1b3a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#478d8d] sm:w-[42vw] lg:w-[27vw]"
            >
              <Image
                src={event.heroImage}
                alt=""
                fill
                sizes="(min-width: 1024px) 27vw, (min-width: 640px) 42vw, 78vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12132d]/95 via-[#12132d]/10 to-transparent transition-colors duration-300 group-hover:from-[#12132d] group-hover:via-[#12132d]/35" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-7">
                <span>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[#73b9b4]">
                    {event.category}
                  </span>
                  <span className="block text-xl font-semibold sm:text-2xl">
                    {event.title}
                  </span>
                  <span className="mt-2 block max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                    Scopri le edizioni e le foto
                  </span>
                </span>
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/40 text-lg transition-all duration-300 group-hover:border-[#f5c64b] group-hover:bg-[#f5c64b] group-hover:text-[#1b1b3a]">
                  <span aria-hidden="true">↗</span>
                </span>
                <span className="sr-only">
                  0{index + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
