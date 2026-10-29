import type { ReactNode } from "react";
import type { TeamArea } from "../types";

interface TeamAreaPanelProps {
  activeArea: TeamArea;
  children: ReactNode;
}

export function TeamAreaPanel({ activeArea, children }: TeamAreaPanelProps) {
  return (
    <div
      id="team-area-panel"
      role="tabpanel"
      aria-labelledby={`team-area-tab-${activeArea.id}`}
      className="pt-8"
    >
      <div className="mb-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <p
          aria-live="polite"
          className="max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {activeArea.description}
        </p>
        <p className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-[#a6d9cd]">
          {String(activeArea.members.length).padStart(2, "0")} persone
        </p>
      </div>
      {children}
    </div>
  );
}
