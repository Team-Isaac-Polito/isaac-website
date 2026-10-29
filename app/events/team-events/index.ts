import {
  aAndT,
  makerFaire,
  roboCupRescue,
} from "./competition-events";
import {
  designMasterclass,
  piDay,
  researchersNight,
  technologyBiennale,
} from "./community-events";

export type { EventEdition, TeamEvent } from "./types";
export { createEventEdition } from "./create-event-edition";
export { aAndT, designMasterclass, makerFaire, piDay, roboCupRescue };
export { researchersNight, technologyBiennale };

export const teamEvents = [
  makerFaire,
  roboCupRescue,
  researchersNight,
  aAndT,
  technologyBiennale,
  piDay,
  designMasterclass,
];

export function getTeamEvent(slug: string) {
  return teamEvents.find((event) => event.slug === slug);
}
