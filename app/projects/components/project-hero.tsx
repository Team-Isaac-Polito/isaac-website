import { FaArrowDown } from "react-icons/fa";
import { MyNavbar } from "../../components/hubjumbo/components";
import { IsaacButton } from "../../components/shared";
import { ProjectReel } from "./project-reel";

export function ProjectHero() {
  return (
    <section
      id="robot"
      className="project-hero relative isolate flex min-h-[min(48rem,100svh)] flex-col items-center justify-between overflow-hidden bg-[#1b1b3a] px-5 pb-7 pt-24 text-white sm:px-8 sm:pb-9 lg:px-16"
    >
      <ProjectReel />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#10102a]/55 via-[#1b1b3a]/50 to-[#10102a]/80" />
      <div
        aria-hidden="true"
        className="project-grid-overlay pointer-events-none absolute inset-0 -z-10"
      />
      <div className="absolute inset-x-0 top-0 z-30">
        <MyNavbar darkText />
      </div>
      <div className="project-hero-copy relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center pb-12 pt-16 text-center">
        <p className="project-hero-kicker flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/85 sm:text-sm">
          <span aria-hidden="true" className="h-px w-8 bg-[#478d8d]" />
          Robotica per il soccorso
          <span aria-hidden="true" className="h-px w-8 bg-[#478d8d]" />
        </p>
        <h1 className="project-hero-title mt-6 text-[clamp(4.5rem,15vw,12rem)] font-extrabold leading-[0.82] tracking-[-0.08em]">
          RESE<span className="text-[#70b3b0]">.Q</span>
        </h1>
        <p className="my-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          Un robot modulare per esplorare ambienti pericolosi e aiutare i
          soccorritori a capire cosa li aspetta.
        </p>
        <IsaacButton
          text="Scopri il progetto"
          href="#architettura"
          icon={<FaArrowDown />}
          className="isaac-cta--projects"
        />
      </div>
    </section>
  );
}
