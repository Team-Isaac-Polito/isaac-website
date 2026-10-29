import { ScrollReveal } from "../../components/shared";
import { systems } from "../data";
import { SystemSpecification } from "./system-specification";

export function SystemsSection() {
  return (
    <section className="project-grid-pattern px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <header className="mb-12 max-w-3xl sm:mb-16">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#478d8d]">
              Anatomia del prototipo
            </p>
            <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              Tre discipline. Un solo robot.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#676778]">
              La scheda qui sotto raccoglie i componenti dichiarati per RESE.Q
              MK1. È la base tecnica da cui il team sviluppa e verifica le
              successive iterazioni.
            </p>
          </header>
        </ScrollReveal>
        <div className="border-t-2 border-[#1b1b3a]">
          {systems.map((system) => (
            <ScrollReveal key={system.number} direction="up">
              <SystemSpecification system={system} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
