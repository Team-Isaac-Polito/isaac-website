import type { KeyboardEvent } from "react";
import { teamContent } from "../../../data";

interface AreaTabsProps {
  activeAreaIndex: number;
  onChange: (index: number) => void;
  onKeyDown: (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => void;
}

export function AreaTabs({
  activeAreaIndex,
  onChange,
  onKeyDown,
}: AreaTabsProps) {
  return (
    <div
      aria-label="Aree del Team Isaac"
      className="team-area-tabs flex gap-2 overflow-x-auto border-y border-white/15 py-4"
      role="tablist"
    >
      {teamContent.areas.map((area, index) => {
        const isActive = index === activeAreaIndex;

        return (
          <button
            key={area.id}
            id={`team-area-tab-${area.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            aria-controls="team-area-panel"
            onClick={() => onChange(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={`team-area-tab ${
              isActive ? "team-area-tab-active" : ""
            }`}
          >
            <span className="font-mono text-xs opacity-65">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{area.name}</span>
          </button>
        );
      })}
    </div>
  );
}
