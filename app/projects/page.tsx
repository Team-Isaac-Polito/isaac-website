import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../components/footer/footer";
import { MyNavbar } from "../components/hubjumbo/components/navbar/navbar";
import { Socials } from "../components/hubjumbo/components/socials/socials";
import { ScrollReveal } from "../components/shared/ScrollReveal/scroll_reveal";
import { ProjectReel } from "./project-reel";
import { IsaacButton } from "../components/shared/IsaacButton/isaac_button";
import { FaArrowDown, FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Progetti | Team Isaac",
  description:
    "Dentro RESE.Q: il robot modulare del Team Isaac per esplorare ambienti pericolosi e supportare le operazioni di soccorso.",
};

const systems = [
  {
    number: "01",
    name: "Software",
    note: "Il livello che coordina sensori e movimento.",
    details: [
      ["Sistema operativo", "Ubuntu"],
      ["Middleware", "ROS 2"],
      ["Linguaggi", "Python · C++"],
    ],
  },
  {
    number: "02",
    name: "Elettronica",
    note: "Calcolo a bordo, controllo e comunicazioni.",
    details: [
      ["Computer di bordo", "NVIDIA Jetson Xavier"],
      ["Microcontrollore", "Raspberry Pi Pico"],
      ["Comunicazione", "CAN bus · Wi-Fi · 4G"],
      ["Sensore di profondità", "Intel RealSense D435i"],
      ["Alimentazione", "Batteria Samsung Li-ion"],
    ],
  },
  {
    number: "03",
    name: "Meccanica",
    note: "Una base cingolata e un braccio per l'ispezione.",
    details: [
      ["Trazione", "Cingoli con tensionatore dinamico"],
      ["Motori di trazione", "Pololu 25D"],
      ["Attuazione", "Dynamixel AX-12+"],
      ["Gradi di libertà", "3 tra giunto e braccio"],
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <main className="projects-page overflow-hidden bg-[#f6f5f0] text-[#1b1b3a]">
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
            <MyNavbar darkText={true} />
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
            <div className="my-7 max-w-2xl">
              <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                Un robot modulare per esplorare ambienti pericolosi e aiutare i
                soccorritori a capire cosa li aspetta.
              </p>
            </div>
            <IsaacButton
              text="Scopri il progetto"
              href="#architettura"
              icon={<FaArrowDown />}
              className="isaac-cta--projects"
            />
          </div>
        </section>

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
                  crollati o pericolosi. La sua architettura modulare combina
                  una base cingolata, sensori per osservare lo spazio e un
                  braccio capace di portare l’azione oltre il punto in cui può
                  arrivare una persona.
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#676778]">
                  Il primo prototipo, MK1, ha esplorato due configurazioni:
                  quella cingolata con braccio e quella strisciante. MK2 porta
                  avanti il progetto con nuove prove e integrazioni: un lavoro
                  di squadra tra software, elettronica e meccanica.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
        <section className="project-grid-pattern px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mb-12 max-w-3xl sm:mb-16">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#478d8d]">
                  Anatomia del prototipo
                </p>
                <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
                  Tre discipline. Un solo robot.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#676778]">
                  La scheda qui sotto raccoglie i componenti dichiarati per
                  RESE.Q MK1. È la base tecnica da cui il team sviluppa e
                  verifica le successive iterazioni.
                </p>
              </div>
            </ScrollReveal>

            <div className="border-t-2 border-[#1b1b3a]">
              {systems.map((system) => (
                <ScrollReveal key={system.number} direction="up">
                  <section className="grid gap-6 border-b border-[#1b1b3a]/20 py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-10">
                    <div className="grid grid-cols-[3rem_1fr] gap-3">
                      <span className="pt-1 font-mono text-sm text-[#478d8d]">
                        {system.number}
                      </span>
                      <div>
                        <h3 className="text-3xl font-extrabold">{system.name}</h3>
                        <p className="mt-2 text-sm text-[#676778]">
                          {system.note}
                        </p>
                      </div>
                    </div>
                    <dl className="divide-y divide-[#1b1b3a]/10">
                      {system.details.map(([label, value]) => (
                        <div
                          key={label}
                          className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 py-3 text-sm sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-4 sm:text-base"
                        >
                          <dt className="text-[#676778]">{label}</dt>
                          <dd className="font-semibold text-[#1b1b3a]">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="project-grid-pattern bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#478d8d]">
                    Un progetto in evoluzione
                  </p>
                  <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
                    Dal banco prova al campo.
                  </h2>
                </div>
                <p className="max-w-md text-base leading-relaxed text-[#4f4f60]">
                  Ogni prototipo è un passaggio: si costruisce, si mette alla
                  prova e si riprogetta insieme.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-10 md:grid-cols-2 md:gap-6">
              <ScrollReveal direction="left">
                <article className="group">
                  <div className="project-photo relative aspect-4/3 overflow-hidden bg-[#f6f5f0]">
                    <Image
                      src="/robot/reseq-mk1.png"
                      alt="Il team assembla la base cingolata del prototipo RESE.Q MK1"
                      fill
                      sizes="(min-width: 768px) 48vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 bg-[#f6f5f0] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em]">
                      Primo prototipo
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-[#1b1b3a]/25 pb-4">
                    <h3 className="text-3xl font-extrabold">RESE.Q MK1</h3>
                    <span className="text-sm font-semibold text-[#4f4f60]">La base</span>
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-[#4f4f60]">
                    Il primo prototipo ha definito l’idea modulare: una
                    piattaforma cingolata capace di esplorare e una configurazione
                    con braccio per osservare e intervenire.
                  </p>
                </article>
              </ScrollReveal>

              <ScrollReveal direction="right" delayMs={120}>
                <article className="group md:mt-16">
                  <div className="project-photo relative aspect-4/3 overflow-hidden bg-[#f6f5f0]">
                    <Image
                      src="/robot/reseq-mk2.jpg"
                      alt="RESE.Q MK2 durante una prova su un terreno irregolare"
                      fill
                      sizes="(min-width: 768px) 48vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 bg-[#478d8d] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                      Secondo prototipo
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-[#1b1b3a]/25 pb-4">
                    <h3 className="text-3xl font-extrabold">RESE.Q MK2</h3>
                    <span className="text-sm font-semibold text-[#4f4f60]">La prossima iterazione</span>
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-[#4f4f60]">
                    Una nuova versione messa alla prova tra ostacoli e terreni
                    irregolari. Il lavoro continua con test, osservazioni e
                    miglioramenti portati avanti dal team.
                  </p>
                </article>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="project-grid-pattern project-grid-pattern--dark bg-[#1b1b3a] px-5 py-16 text-center text-white sm:px-8 sm:py-20">
          <ScrollReveal className="flex flex-col justify-center items-center">
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
      </main>
      <Footer />
    </>
  );
}