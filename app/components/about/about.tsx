"use client";

import Image from "next/image";
import { useState } from "react";
import { MyNavbar } from "../hubjumbo/components/navbar/navbar";
import { ScrollReveal } from "../shared/ScrollReveal/scroll_reveal";
import { IsaacButton } from "../shared/IsaacButton/isaac_button";
import { FaArrowDown } from "react-icons/fa";
import { TeamAreas } from "./team-areas";

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

        <ScrollReveal
          direction="left"
          className="relative z-10 mx-auto w-full max-w-7xl"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#73b9b4] sm:text-base">
            Politecnico di Torino · dal 2002
          </p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            Persone,
            <br />
            idee, robot.
          </h1>
          <p className="my-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-2xl">
            Siamo un team di studenti appassionati di robotica, uniti dalla
            voglia di progettare tecnologie che possano fare la differenza.
          </p>
          <IsaacButton
            text="Scopri il progetto"
            href="#divisioni"
            icon={<FaArrowDown />}
            className="isaac-cta--projects"
          />
        </ScrollReveal>
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
                    className={`h-3 w-3 rounded-full border-2 transition-colors sm:h-4 sm:w-4 ${isActive
                        ? "border-[#f5c64b] bg-[#f5c64b]"
                        : "border-white/60 bg-[#1b1b3a]"
                      }`}
                  />
                  <span
                    className={`text-sm font-bold transition-colors sm:text-xl ${isActive ? "text-[#f5c64b]" : "text-white/65"
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
      <TeamAreas />
    </main>
  );
}
