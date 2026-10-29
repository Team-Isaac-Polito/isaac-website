import { teamContent } from "../../data";

export type TeamArea = (typeof teamContent.areas)[number];
export type TeamMember = TeamArea["members"][number];
