"use client";

import { AreaTabs, MemberGallery, TeamAreaPanel } from "./components";
import { useTeamAreaGallery } from "./hooks";

export function TeamAreas() {
  const gallery = useTeamAreaGallery();
  const { activeArea } = gallery;

  return (
    <section
      id="aree-team"
      aria-labelledby="members-title"
      className="isaac-pattern isaac-pattern-dark bg-[#1b1b3a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
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
        </header>
        <AreaTabs
          activeAreaIndex={gallery.activeAreaIndex}
          onChange={gallery.setActiveAreaIndex}
          onKeyDown={gallery.handleTabKeyDown}
        />
        <TeamAreaPanel activeArea={activeArea}>
          <MemberGallery
            activeArea={activeArea}
            canScrollNext={gallery.canScrollNext}
            canScrollPrevious={gallery.canScrollPrevious}
            firstVisibleMember={gallery.firstVisibleMember}
            galleryRef={gallery.galleryRef}
            onScroll={gallery.updateGalleryControls}
            scrollGallery={gallery.scrollGallery}
          />
        </TeamAreaPanel>
      </div>
    </section>
  );
}
