"use client";

import { useRef } from "react";
import { OrbitRing } from "./event-orbit/components";
import { useOrbitRotation } from "./event-orbit/hooks";

export interface EventOrbitItem {
  image: string;
  title: string;
}

interface EventOrbitProps {
  items: EventOrbitItem[];
}

const rings = [
  { radius: "clamp(13rem, 25vw, 24rem)", speed: 0.045 },
  { radius: "clamp(17rem, 40vw, 36rem)", speed: -0.032 },
  { radius: "clamp(21rem, 48vw, 48rem)", speed: 0.023 },
];
const itemsPerRing = 8;

export function EventOrbit({ items }: EventOrbitProps) {
  const orbitRef = useRef<HTMLDivElement>(null);
  useOrbitRotation(orbitRef);

  return (
    <div
      ref={orbitRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      {rings.map((ring, ringIndex) => (
        <OrbitRing
          key={ring.radius}
          radius={ring.radius}
          rotationSpeed={ring.speed}
          ringIndex={ringIndex}
          items={items.slice(
            ringIndex * itemsPerRing,
            (ringIndex + 1) * itemsPerRing,
          )}
        />
      ))}
    </div>
  );
}
