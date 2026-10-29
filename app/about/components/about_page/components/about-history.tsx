"use client";

import { milestones } from "../../../data";
import { useActiveMilestone } from "../hooks";

export function AboutHistory() {
  const { activeMilestoneIndex, setActiveMilestoneIndex } =
    useActiveMilestone();

  return (
    <section
      aria-labelledby="history-title"
      className="isaac-pattern isaac-pattern-dark bg-[#1b1b3a] px-5 py-20 text-white sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
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
            Dalla ricerca sui robot umanoidi alle tecnologie per le missioni di
            soccorso: ogni tappa apre una nuova strada.
          </p>
        </header>
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
            const isActive = activeMilestoneIndex === index;

            return (
              <button
                key={milestone.year}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveMilestoneIndex(index)}
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
        <div aria-live="polite" className="mt-9 min-h-28 max-w-3xl sm:mt-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#73b9b4]">
            {milestones[activeMilestoneIndex].year}
          </p>
          <p className="text-xl leading-relaxed text-white/90 sm:text-2xl">
            {milestones[activeMilestoneIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
}
