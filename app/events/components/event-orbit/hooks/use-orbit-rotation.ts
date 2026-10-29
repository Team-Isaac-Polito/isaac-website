"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

export function useOrbitRotation(orbitRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (motionPreference.matches) return;

    let frame = 0;
    const updateRotation = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        orbit
          .querySelectorAll<HTMLElement>("[data-orbit-ring]")
          .forEach((ring) => {
            const speed = Number(ring.dataset.rotationSpeed);
            ring.style.setProperty(
              "--scroll-rotation",
              `${window.scrollY * speed}deg`,
            );
          });
      });
    };

    updateRotation();
    window.addEventListener("scroll", updateRotation, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateRotation);
      cancelAnimationFrame(frame);
    };
  }, [orbitRef]);
}
