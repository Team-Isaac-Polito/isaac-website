import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { RefObject } from "react";
import { MemberCard } from "../../member_card";
import type { TeamArea } from "../types";

interface MemberGalleryProps {
  activeArea: TeamArea;
  canScrollNext: boolean;
  canScrollPrevious: boolean;
  firstVisibleMember: number;
  galleryRef: RefObject<HTMLDivElement | null>;
  onScroll: () => void;
  scrollGallery: (direction: -1 | 1) => void;
}

export function MemberGallery({
  activeArea,
  canScrollNext,
  canScrollPrevious,
  firstVisibleMember,
  galleryRef,
  onScroll,
  scrollGallery,
}: MemberGalleryProps) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          Membri · {String(firstVisibleMember).padStart(2, "0")} /{" "}
          {String(activeArea.members.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Mostra i membri precedenti"
            disabled={!canScrollPrevious}
            onClick={() => scrollGallery(-1)}
            className="team-gallery-control"
          >
            <FaArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Mostra i membri successivi"
            disabled={!canScrollNext}
            onClick={() => scrollGallery(1)}
            className="team-gallery-control"
          >
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        ref={galleryRef}
        className="team-members-track flex gap-5 overflow-x-auto pb-5"
        role="region"
        aria-label={`Membri dell'area ${activeArea.name}`}
        tabIndex={0}
        onScroll={onScroll}
      >
        {activeArea.members.map((member, index) => (
          <MemberCard
            key={`${activeArea.id}-${member.name}`}
            member={member}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
