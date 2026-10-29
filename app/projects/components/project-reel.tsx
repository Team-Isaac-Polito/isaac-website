"use client";

import { useRef } from "react";
import { useProjectReelPlayback } from "./project-reel/hooks";

export function ProjectReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useProjectReelPlayback(videoRef);

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
