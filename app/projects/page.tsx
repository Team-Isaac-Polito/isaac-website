import type { Metadata } from "next";
import { Footer } from "../components/shared";
import {
  ArchitectureSection,
  ProjectCallToAction,
  ProjectHero,
  PrototypesSection,
  SystemsSection,
} from "./components";

export const metadata: Metadata = {
  title: "Progetti | Team Isaac",
  description:
    "Dentro RESE.Q: il robot modulare del Team Isaac per esplorare ambienti pericolosi e supportare le operazioni di soccorso.",
};

export default function ProjectsPage() {
  return (
    <>
      <main className="projects-page overflow-hidden bg-[#f6f5f0] text-[#1b1b3a]">
        <ProjectHero />
        <ArchitectureSection />
        <SystemsSection />
        <PrototypesSection />
        <ProjectCallToAction />
      </main>
      <Footer />
    </>
  );
}
