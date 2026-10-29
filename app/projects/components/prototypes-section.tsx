import { ScrollReveal } from "../../components/shared";
import { PrototypeCard } from "./prototype-card";

export function PrototypesSection() {
  return (
    <section className="project-grid-pattern bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <header className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#478d8d]">
                Un progetto in evoluzione
              </p>
              <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
                Dal banco prova al campo.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#4f4f60]">
              Ogni prototipo è un passaggio: si costruisce, si mette alla prova
              e si riprogetta insieme.
            </p>
          </header>
        </ScrollReveal>
        <div className="grid gap-10 md:grid-cols-2 md:gap-6">
          <ScrollReveal direction="left">
            <PrototypeCard
              image="/robot/reseq-mk1.png"
              imageAlt="Il team assembla la base cingolata del prototipo RESE.Q MK1"
              label="Primo prototipo"
              name="RESE.Q MK1"
              subtitle="La base"
              description="Il primo prototipo ha definito l’idea modulare: una piattaforma cingolata capace di esplorare e una configurazione con braccio per osservare e intervenire."
            />
          </ScrollReveal>
          <ScrollReveal direction="right" delayMs={120}>
            <PrototypeCard
              image="/robot/reseq-mk2.jpg"
              imageAlt="RESE.Q MK2 durante una prova su un terreno irregolare"
              label="Secondo prototipo"
              name="RESE.Q MK2"
              subtitle="La prossima iterazione"
              description="Una nuova versione messa alla prova tra ostacoli e terreni irregolari. Il lavoro continua con test, osservazioni e miglioramenti portati avanti dal team."
              reversed
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
