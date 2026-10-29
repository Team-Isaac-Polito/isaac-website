"use client";

import { DivisionPanel, DivisionSelector } from "./components";
import { useActiveDivision } from "./hooks";

export function Divisions() {
  const { activeDivision, activeDivisionIndex, setActiveDivisionIndex } =
    useActiveDivision();

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
          <DivisionSelector
            activeDivisionIndex={activeDivisionIndex}
            onChange={setActiveDivisionIndex}
          />
          <DivisionPanel division={activeDivision} />
        </div>
      </div>
    </section>
  );
}
