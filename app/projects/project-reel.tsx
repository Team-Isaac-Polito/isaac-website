"use client";

import { useEffect, useRef } from "react";

export function ProjectReel() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
  }, []);

  return (
    <video
      ref={videoRef}
      aria-label="RESE.Q MK2 durante una dimostrazione alla Maker Faire"
      className="project-reel-video absolute inset-0 -z-20 h-full w-full object-cover"
      src="/video/reseq_mk2_makerfaire.mp4"
      poster="/robot/reseq-mk2.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}