import { divisions } from "../divisions-data";

interface DivisionSelectorProps {
  activeDivisionIndex: number;
  onChange: (index: number) => void;
}

export function DivisionSelector({
  activeDivisionIndex,
  onChange,
}: DivisionSelectorProps) {
  return (
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
            onClick={() => onChange(index)}
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
  );
}
