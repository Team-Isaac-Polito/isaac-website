import { TallyContactForm } from "./tally-contact-form";

const contactTopics = [
  "Collaborazioni e partnership",
  "Eventi e dimostrazioni",
  "Domande sul progetto RESE.Q",
];

export function ContactFormSection() {
  return (
    <section className="isaac-pattern relative px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#478d8d]">
            Scrivici
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Da dove vuoi iniziare?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#676778] sm:text-lg">
            Compila il modulo: il tuo messaggio arriverà al Team Isaac.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.7fr)] lg:gap-12">
          <div className="rounded-3xl border border-[#1b1b3a]/10 bg-white p-3 shadow-xl shadow-[#1b1b3a]/5 sm:p-6">
            <TallyContactForm />
          </div>

          <aside className="isaac-pattern isaac-pattern-dark relative overflow-hidden rounded-3xl bg-[#1b1b3a] p-7 text-white sm:p-9">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-12 text-9xl font-black text-white/[0.05]"
            >
              ?
            </span>
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#73b9b4]">
                Parliamo di
              </p>
              <ul className="mt-7 space-y-5">
                {contactTopics.map((topic, index) => (
                  <li key={topic} className="flex items-start gap-4">
                    <span className="font-mono text-sm text-[#73b9b4]">
                      0{index + 1}
                    </span>
                    <span className="leading-relaxed text-white/85">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 border-t border-white/15 pt-6">
                <p className="text-sm leading-relaxed text-white/60">
                  Siamo un team di studenti del Politecnico di Torino che
                  progetta robot per la ricerca e il soccorso.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
