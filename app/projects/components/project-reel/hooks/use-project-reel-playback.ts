"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

export function useProjectReelPlayback(
  videoRef: RefObject<HTMLVideoElement | null>,
) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const syncPlayback = (reduceMotion: boolean) => {
      if (reduceMotion) {
        video.pause();
        return;
      }

      void video.play().catch(() => undefined);
    };

    syncPlayback(motionPreference.matches);
    const handleMotionPreferenceChange = (event: MediaQueryListEvent) =>
      syncPlayback(event.matches);

    motionPreference.addEventListener("change", handleMotionPreferenceChange);
    return () =>
      motionPreference.removeEventListener("change", handleMotionPreferenceChange);
  }, [videoRef]);
}
