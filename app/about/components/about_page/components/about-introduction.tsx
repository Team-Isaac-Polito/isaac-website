import Image from "next/image";
import { data_cards } from "../../../data";

export function AboutIntroduction() {
  return (
    <section
      id="divisioni"
      aria-labelledby="about-title"
      className="isaac-pattern scroll-mt-8 px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#478d8d]">
            Su di noi
          </p>
          <h2
            id="about-title"
            className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            La robotica prende forma quando le persone lavorano insieme.
          </h2>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-[#1b1b3a]/10">
            <Image
              src="/site/about/about-us.png"
              alt="I membri del Team Isaac lavorano a un robot"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-[#4b4b5b] sm:text-lg">
          <p>
            Siamo un team studentesco del Politecnico di Torino, formato da
            studenti con percorsi e competenze diverse. Il team è seguito dal
            professor Giuseppe Quaglia.
          </p>
          <p>
            Il nostro obiettivo principale è sviluppare robot innovativi per le
            attività di ricerca e soccorso, contribuendo all’avanzamento della
            robotica SAR e alla sicurezza delle operazioni di salvataggio.
          </p>
          <ul className="space-y-2">
            <li>+ Condividere competenze e imparare facendo.</li>
            <li>+ Costruire robot utili alla società.</li>
            <li>+ Raccontare la robotica in eventi e dimostrazioni.</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 border-y border-[#1b1b3a]/15 sm:grid-cols-3">
        {data_cards.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-4 border-b border-[#1b1b3a]/15 py-6 last:border-0 sm:border-b-0 sm:border-r sm:py-8 sm:last:border-0"
          >
            <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.14em] text-[#676778]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
