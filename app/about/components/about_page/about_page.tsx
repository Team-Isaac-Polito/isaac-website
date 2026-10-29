import { AboutHero, AboutHistory, AboutIntroduction } from "./components";
import { TeamAreas } from "../team_areas";

export function AboutPage() {
  return (
    <main className="bg-[#f6f5f0] text-[#1b1b3a]">
      <AboutHero />
      <AboutIntroduction />
      <AboutHistory />
      <TeamAreas />
    </main>
  );
}
