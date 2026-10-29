import type { EventEdition } from "./types";

export function createEventEdition(
  year: string,
  eventSlug: string,
  photoCount: number,
  photoFolder = year,
): EventEdition {
  return {
    year,
    photos: Array.from(
      { length: photoCount },
      (_, index) =>
        `/site/events/${photoFolder}/${eventSlug}/${eventSlug}-${String(index + 1).padStart(2, "0")}.jpg`,
    ),
  };
}
