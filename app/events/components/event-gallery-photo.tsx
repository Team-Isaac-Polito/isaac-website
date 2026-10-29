import Image from "next/image";
import { ScrollReveal } from "../../components/shared";

interface EventGalleryPhotoProps {
  eventTitle: string;
  editionYear: string;
  photo: string;
  imageIndex: number;
}

export function EventGalleryPhoto({
  eventTitle,
  editionYear,
  photo,
  imageIndex,
}: EventGalleryPhotoProps) {
  const isPortrait = imageIndex % 4 === 0;

  return (
    <ScrollReveal
      className={isPortrait ? "sm:row-span-2" : ""}
      direction={imageIndex % 2 === 0 ? "left" : "right"}
      delayMs={(imageIndex % 5) * 70}
    >
      <figure
        className={`group relative h-full overflow-hidden rounded-2xl bg-[#1b1b3a]/10 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl ${
          isPortrait ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={photo}
          alt={`${eventTitle}, edizione ${editionYear}, foto ${imageIndex + 1}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11122d]/45 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
        <figcaption className="absolute bottom-3 left-3 rounded-full bg-[#11122d]/55 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 sm:bottom-5 sm:left-5 sm:px-4 sm:py-2 sm:text-sm">
          {eventTitle} · {editionYear}
        </figcaption>
      </figure>
    </ScrollReveal>
  );
}
