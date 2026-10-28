"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

interface EventOrbitItem {
  image: string;
  title: string;
}

interface EventOrbitProps {
  items: EventOrbitItem[];
}

const rings = [
  {
    radius: "clamp(13rem, 25vw, 24rem)",
    speed: 0.045,
  },
  {
    radius: "clamp(17rem, 40vw, 36rem)",
    speed: -0.032,
  },
  {
    radius: "clamp(21rem, 48vw, 48rem)",
    speed: 0.023,
  },
];
const itemsPerRing = 8;

export function EventOrbit({ items }: EventOrbitProps) {
  const orbitRef = useRef<HTMLDivElement>(null);

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
        orbit.querySelectorAll<HTMLElement>("[data-orbit-ring]").forEach((ring) => {
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
  }, []);

  return (
    <div
      ref={orbitRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      {rings.map((ring, ringIndex) => {
        const ringItems = items.slice(
          ringIndex * itemsPerRing,
          (ringIndex + 1) * itemsPerRing,
        );

        return (
          <div
            key={ring.radius}
            data-orbit-ring
            data-rotation-speed={ring.speed}
            className="absolute inset-0"
            style={{ "--orbit-radius": ring.radius } as CSSProperties}
          >
            {ringItems.map((item, itemIndex) => {
              const angle =
                itemIndex * (360 / ringItems.length) +
                ringIndex * (180 / ringItems.length);

              return (
                <div
                  key={`${item.image}-${ringIndex}`}
                  className="absolute left-1/2 top-1/2 h-[clamp(5rem,13vw,12rem)] w-[clamp(3.5rem,9vw,8.5rem)] overflow-hidden rounded-[1.4rem] bg-neutral-100 shadow-sm"
                  style={
                    {
                      "--orbit-angle": `${angle}deg`,
                      transform:
                        "rotate(calc(var(--orbit-angle) + var(--scroll-rotation, 0deg))) translateY(calc(-1 * var(--orbit-radius))) rotate(calc(-1 * (var(--orbit-angle) + var(--scroll-rotation, 0deg)))) translate(-50%, -50%)",
                    } as CSSProperties
                  }
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    priority={ringIndex === 0 && itemIndex < 3}
                    sizes="(min-width: 1280px) 136px, 9vw"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
