"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import teamContent from "./team-content.json";

type TeamArea = (typeof teamContent.areas)[number];
type TeamMember = TeamArea["members"][number];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function MemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <article className="team-member-card group">
      <div className="team-member-photo relative aspect-[4/5] overflow-hidden bg-[#262647]">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Ritratto di ${member.name}`}
            fill
            sizes="(min-width: 1280px) 352px, (min-width: 768px) 40vw, 84vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-label={`Foto non disponibile: ${member.name}`}
            role="img"
            className="isaac-pattern isaac-pattern-dark flex h-full items-center justify-center text-7xl font-black tracking-tight text-white/70"
          >
            {initials(member.name)}
          </div>
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#10102a]/90 via-transparent to-[#10102a]/15"
        />
        <span className="absolute left-5 top-5 font-mono text-sm text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute inset-x-5 bottom-5">
          <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-white">
            {member.name}
          </h3>
          <p className="mt-2 text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#a6d9cd]">
            {member.role}
          </p>
        </div>
      </div>
      <div className="flex min-h-16 items-center justify-between border border-t-0 border-white/15 bg-white/[0.04] px-5 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          Team Isaac
        </span>
        <div className="flex items-center gap-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profilo LinkedIn di ${member.name}`}
              className="team-member-contact"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Scrivi a ${member.name}`}
              className="team-member-contact"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function TeamAreas() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const [firstVisibleMember, setFirstVisibleMember] = useState(1);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const activeArea = teamContent.areas[activeAreaIndex];

  const updateGalleryControls = useCallback(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const firstCard = gallery.firstElementChild;
    const cardStep = firstCard
      ? firstCard.getBoundingClientRect().width + 20
      : gallery.clientWidth;

    setCanScrollPrevious(gallery.scrollLeft > 8);
    setCanScrollNext(
      gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth - 8,
    );
    setFirstVisibleMember(
      Math.min(
        activeArea.members.length,
        Math.floor(gallery.scrollLeft / cardStep) + 1,
      ),
    );
  }, [activeArea.members.length]);

  useEffect(() => {
    galleryRef.current?.scrollTo({ left: 0 });
    updateGalleryControls();
  }, [activeAreaIndex, updateGalleryControls]);

  function scrollGallery(direction: -1 | 1) {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollBy({
      left: direction * gallery.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="aree-team"
      aria-labelledby="members-title"
      className="isaac-pattern isaac-pattern-dark bg-[#1b1b3a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#73b9b4]">
              Una squadra, tante competenze
            </p>
            <h2
              id="members-title"
              className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
            >
              Le aree del team
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Dalla progettazione del robot a tutto ciò che serve per far
            funzionare un team: scegli un’area e incontra chi la porta avanti.
          </p>
        </div>

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
                onClick={() => setActiveAreaIndex(index)}
                onKeyDown={(event) => {
                  const lastIndex = teamContent.areas.length - 1;
                  let nextIndex = index;

                  if (event.key === "ArrowRight") {
                    nextIndex = index === lastIndex ? 0 : index + 1;
                  } else if (event.key === "ArrowLeft") {
                    nextIndex = index === 0 ? lastIndex : index - 1;
                  } else if (event.key === "Home") {
                    nextIndex = 0;
                  } else if (event.key === "End") {
                    nextIndex = lastIndex;
                  } else {
                    return;
                  }

                  event.preventDefault();
                  setActiveAreaIndex(nextIndex);
                  document
                    .getElementById(
                      `team-area-tab-${teamContent.areas[nextIndex].id}`,
                    )
                    ?.focus();
                }}
                className={`team-area-tab shrink-0 ${
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
            onScroll={updateGalleryControls}
          >
            {activeArea.members.map((member, index) => (
              <MemberCard
                key={`${activeArea.id}-${member.name}`}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
