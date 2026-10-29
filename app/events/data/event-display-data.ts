import { teamEvents } from "../team-events";

export const eventEditions = teamEvents
  .flatMap((event) =>
    event.editions.map((edition) => ({
      event,
      edition,
    })),
  )
  .toSorted((first, second) => {
    const firstYear = Number.parseInt(first.edition.year, 10);
    const secondYear = Number.parseInt(second.edition.year, 10);

    if (Number.isNaN(firstYear)) return 1;
    if (Number.isNaN(secondYear)) return -1;
    return secondYear - firstYear;
  });

const eventPhotos = teamEvents.flatMap((event) =>
  event.editions.flatMap((edition) =>
    edition.photos.map((image) => ({
      image,
      title: `${event.title}, ${edition.year}`,
    })),
  ),
);

export const heroCollage = Array.from({ length: 24 }, (_, index) => {
  const photoIndex = Math.floor((index * eventPhotos.length) / 24);
  return eventPhotos[photoIndex];
});
