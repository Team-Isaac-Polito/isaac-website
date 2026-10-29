import { ScrollReveal } from "../../components/shared";

export function ArchitectureSection() {
  return (
    <section
      id="architettura"
      className="project-grid-pattern scroll-mt-8 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <ScrollReveal direction="left">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#478d8d]">
            Un sistema, non un singolo pezzo
          </p>
          <h2 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Progettato per esplorare, costruito per aiutare.
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="right" delayMs={100}>
          <div className="border-l-2 border-[#478d8d] pl-6 sm:pl-8">
            <p className="text-xl leading-relaxed text-[#4f4f60] sm:text-2xl">
              RESE.Q è un robot da ricerca e soccorso pensato per ambienti
              crollati o pericolosi. La sua architettura modulare combina una
              base cingolata, sensori per osservare lo spazio e un braccio
              capace di portare l’azione oltre il punto in cui può arrivare una
              persona.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#676778]">
              Il primo prototipo, MK1, ha esplorato due configurazioni: quella
              cingolata con braccio e quella strisciante. MK2 porta avanti il
              progetto con nuove prove e integrazioni: un lavoro di squadra tra
              software, elettronica e meccanica.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
