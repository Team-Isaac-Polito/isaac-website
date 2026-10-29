import { FaGithub } from "react-icons/fa";
import { Socials } from "../../components/hubjumbo/components";
import { IsaacButton, ScrollReveal } from "../../components/shared";

export function ProjectCallToAction() {
  return (
    <section className="project-grid-pattern project-grid-pattern--dark bg-[#1b1b3a] px-5 py-16 text-center text-white sm:px-8 sm:py-20">
      <ScrollReveal className="flex flex-col items-center justify-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/85">
          Dal laboratorio, senza filtri
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold sm:text-5xl">
          Il prossimo test comincia con una buona domanda.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65">
          Segui il Team Isaac tra prototipi, prove e nuove idee.
        </p>
        <div className="mt-5">
          <Socials />
        </div>
        <IsaacButton
          text="Esplora il lavoro su GitHub"
          href="https://github.com/Team-Isaac-Polito"
          target="_blank"
          rel="noopener noreferrer"
          icon={<FaGithub size={20} />}
          className="isaac-cta--light"
        />
      </ScrollReveal>
    </section>
  );
}
