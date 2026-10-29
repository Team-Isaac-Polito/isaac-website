import { createEventEdition } from "./create-event-edition";
import type { TeamEvent } from "./types";

export const researchersNight: TeamEvent = {
  slug: "notte-dei-ricercatori",
  title: "Notte dei Ricercatori",
  category: "La ricerca incontra la città",
  description:
    "La Notte dei Ricercatori porta la ricerca fuori dai laboratori e tra le persone. Presentiamo i nostri robot, raccontiamo la robotica di soccorso e condividiamo con il pubblico le sfide e le idee che guidano il nostro lavoro.",
  heroImage:
    "/site/events/2026/notte-dei-ricercatori-2026/notte-dei-ricercatori-2026-01.jpg",
  editions: [createEventEdition("2026", "notte-dei-ricercatori-2026", 5)],
};

export const technologyBiennale: TeamEvent = {
  slug: "biennale-tecnologia",
  title: "Biennale Tecnologia",
  category: "Tecnologia, società, futuro",
  description:
    "Biennale Tecnologia è un’occasione per riflettere su come la tecnologia trasformi la società. Portiamo i nostri robot e il punto di vista degli studenti in un dialogo aperto sul ruolo della robotica nel futuro.",
  heroImage:
    "/site/events/2026/biennale-tecnologia-2026/biennale-tecnologia-2026-01.jpg",
  editions: [
    createEventEdition("2024", "biennale-tecnologia-2024", 3),
    createEventEdition("2026", "biennale-tecnologia-2026", 2),
  ],
};

export const piDay: TeamEvent = {
  slug: "pi-day",
  title: "Pi Day",
  category: "Scienza da esplorare",
  description:
    "Una giornata dedicata alla matematica e alla curiosità scientifica. Con attività e dimostrazioni, raccontiamo come la robotica unisca discipline diverse e trasformi le idee in esperienze concrete.",
  heroImage: "/site/events/2024/pi-day-2024/pi-day-2024-01.jpg",
  editions: [createEventEdition("2024", "pi-day-2024", 2)],
};

export const designMasterclass: TeamEvent = {
  slug: "masterclass-design-3d-printing-task-management",
  title: "Masterclass: Design, 3D Printing & Task Management",
  category: "Formazione e progettazione",
  description:
    "Un’occasione di formazione per esplorare il design, la stampa 3D e l’organizzazione del lavoro. Dalle idee alla pianificazione, condividiamo strumenti e competenze utili per sviluppare progetti di robotica.",
  heroImage:
    "/site/events/archivio/masterclass-design-3d-printing-task-management/masterclass-design-3d-printing-task-management-01.jpg",
  editions: [
    createEventEdition(
      "Archivio",
      "masterclass-design-3d-printing-task-management",
      9,
      "archivio",
    ),
  ],
};
