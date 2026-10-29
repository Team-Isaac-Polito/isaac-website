"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { teamContent } from "../../../data";

export function useTeamAreaGallery() {
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

  const scrollGallery = (direction: -1 | 1) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollBy({
      left: direction * gallery.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
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
      .getElementById(`team-area-tab-${teamContent.areas[nextIndex].id}`)
      ?.focus();
  };

  return {
    activeArea,
    activeAreaIndex,
    canScrollNext,
    canScrollPrevious,
    firstVisibleMember,
    galleryRef,
    handleTabKeyDown,
    setActiveAreaIndex,
    scrollGallery,
    updateGalleryControls,
  };
}
