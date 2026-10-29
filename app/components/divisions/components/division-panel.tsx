import type { divisions } from "../divisions-data";

type Division = (typeof divisions)[number];

export function DivisionPanel({ division }: { division: Division }) {
  return (
    <div
      key={division.name}
      aria-live="polite"
      className="division-panel-enter isaac-pattern isaac-pattern-dark relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl bg-[#1b1b3a] p-7 text-white shadow-xl sm:min-h-[26rem] sm:p-10"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-16 select-none text-[12rem] font-black leading-none text-white/[0.04] sm:-right-2 sm:-top-24 sm:text-[18rem]"
      >
        {division.number}
      </span>
      <div className="relative">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#73b9b4]">
          Area {division.number} · Team Isaac
        </p>
        <h3 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {division.name}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {division.description}
        </p>
      </div>
    </div>
  );
}
