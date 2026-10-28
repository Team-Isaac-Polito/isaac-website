"use client";

import { useState } from "react";

const divisions = [
  {
    name: "Software",
    number: "01",
    description:
      "Diamo intelligenza ai robot: sviluppiamo il software che collega sensori, algoritmi e attuatori, trasformando i dati in decisioni e movimenti.",
  },
  {
    name: "Management",
    number: "02",
    description:
      "Coordiniamo le attività e aiutiamo le idee a diventare progetti concreti. Organizziamo il lavoro, seguiamo le collaborazioni e teniamo unito il team.",
  },
  {
    name: "Meccanica",
    number: "03",
    description:
      "Progettiamo e realizziamo la struttura dei robot. Dalla modellazione CAD alla prototipazione, scegliamo soluzioni e materiali adatti alle missioni.",
  },
  {
    name: "Elettronica",
    number: "04",
    description:
      "Progettiamo i circuiti e integriamo l’hardware del robot. Sensori, attuatori e sistemi di alimentazione lavorano insieme in modo affidabile.",
  },
  {
    name: "Comunicazione",
    number: "05",
    description:
      "Raccontiamo il team e i suoi progetti, curando la presenza online e gli incontri con il pubblico durante fiere, eventi e dimostrazioni.",
  },
];

export function Divisions() {
  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);
  const activeDivision = divisions[activeDivisionIndex];

  return (
    <section
      id="divisioni"
      aria-labelledby="divisions-title"
      className="isaac-pattern scroll-mt-8 bg-white px-4 py-16 text-gray-900 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="divisions-title"
          className="mb-3 text-center text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Le nostre divisioni
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-gray-600 sm:mb-14">
          Cinque competenze diverse, una squadra sola: scopri come ogni area
          contribuisce a costruire i nostri robot.
        </p>

        <div className="grid gap-8 md:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.5fr)] md:items-center md:gap-12">
          <div
            role="group"
            aria-label="Seleziona un'area del team"
            className="flex flex-col gap-2"
          >
            {divisions.map((division, index) => {
              const isActive = index === activeDivisionIndex;

              return (
                <button
                  key={division.name}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveDivisionIndex(index)}
                  className={`division-choice ${
                    isActive ? "division-choice-active" : ""
                  }`}
                >
                  <span className="flex items-center gap-3 text-lg font-semibold sm:text-xl">
                    <span
                      className={`text-xs font-bold tracking-widest ${
                        isActive ? "text-[#397778]" : "text-gray-400"
                      }`}
                    >
                      {division.number}
                    </span>
                    {division.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            key={activeDivision.name}
            aria-live="polite"
            className="division-panel-enter isaac-pattern isaac-pattern-dark relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl bg-[#1b1b3a] p-7 text-white shadow-xl sm:min-h-[26rem] sm:p-10"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-16 select-none text-[12rem] font-black leading-none text-white/[0.04] sm:-right-2 sm:-top-24 sm:text-[18rem]"
            >
              {activeDivision.number}
            </span>
            <div className="relative">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#73b9b4]">
                Area {activeDivision.number} · Team Isaac
              </p>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl">
                {activeDivision.name}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                {activeDivision.description}
              </p>
            </div>
            <ul
              aria-label={`Competenze dell'area ${activeDivision.name}`}
              className="relative mt-8 flex flex-wrap gap-2"
            >
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
