import Image from "next/image";
import type { CSSProperties } from "react";
import type { EventOrbitItem } from "../../event-orbit";

interface OrbitRingProps {
  items: EventOrbitItem[];
  radius: string;
  ringIndex: number;
  rotationSpeed: number;
}

export function OrbitRing({
  items,
  radius,
  ringIndex,
  rotationSpeed,
}: OrbitRingProps) {
  return (
    <div
      data-orbit-ring
      data-rotation-speed={rotationSpeed}
      className="absolute inset-0"
      style={{ "--orbit-radius": radius } as CSSProperties}
    >
      {items.map((item, itemIndex) => {
        const angle =
          itemIndex * (360 / items.length) +
          ringIndex * (180 / items.length);

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
}
