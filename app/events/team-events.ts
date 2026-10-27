export interface EventEdition {
  year: string;
  photos: string[];
}

export interface TeamEvent {
  slug: string;
  title: string;
  category: string;
  description: string;
  heroImage: string;
  editions: EventEdition[];
}

function edition(
  year: string,
  eventSlug: string,
  photoCount: number,
  photoFolder = year,
): EventEdition {
  return {
    year,
    photos: Array.from(
      { length: photoCount },
      (_, index) =>
        `/site/events/${photoFolder}/${eventSlug}/${eventSlug}-${String(index + 1).padStart(2, "0")}.jpg`,
    ),
  };
}

export const teamEvents: TeamEvent[] = [
  {
    slug: "maker-faire",
    title: "Maker Faire",
    category: "Idee che diventano cose",
    description:
      "La Maker Faire è il grande appuntamento dedicato a creatività, tecnologia e innovazione. Per il Team Isaac è l’occasione di incontrare curiosi e appassionati, mostrare i robot dal vivo e raccontare come nascono i nostri progetti.",
    heroImage: "/maker_faire/2022/maker_faire_2022.jpeg",
    editions: [
      edition("2022", "maker-faire-2022", 4),
      edition("2023", "maker-faire-2023", 5),
      edition("2024", "maker-faire-2024", 4),
      edition("2025", "maker-faire-2025", 3),
    ],
  },
  {
    slug: "robocup-rescue",
    title: "RoboCup Rescue",
    category: "Robotica per il soccorso",
    description:
      "RoboCup Rescue riunisce team internazionali che sviluppano tecnologie per supportare le operazioni di soccorso. Qui mettiamo alla prova RESE.Q in scenari di ricerca, confrontandoci con altre squadre e imparando a ogni missione.",
    heroImage: "/robocup/2025/robocup_brazil.jpg",
    editions: [
      edition("2025", "robocup-rescue-2025", 9),
      edition("2026", "robocup-rescue-2026", 5),
    ],
  },
  {
    slug: "notte-dei-ricercatori",
    title: "Notte dei Ricercatori",
    category: "La ricerca incontra la città",
    description:
      "La Notte dei Ricercatori porta la ricerca fuori dai laboratori e tra le persone. Presentiamo i nostri robot, raccontiamo la robotica di soccorso e condividiamo con il pubblico le sfide e le idee che guidano il nostro lavoro.",
    heroImage:
      "/site/events/2026/notte-dei-ricercatori-2026/notte-dei-ricercatori-2026-01.jpg",
    editions: [edition("2026", "notte-dei-ricercatori-2026", 5)],
  },
  {
    slug: "a-t",
    title: "A&T",
    category: "Automazione e tecnologie",
    description:
      "A&T è una fiera dedicata a innovazione, automazione e tecnologie industriali. La partecipazione ci permette di presentare il progetto RESE.Q a professionisti e imprese e di confrontarci con le applicazioni concrete della robotica.",
    heroImage: "/site/events/2025/a-t-2025/a-t-2025-01.jpg",
    editions: [
      edition("2023", "a-t-2023", 5),
      edition("2024", "a-t-2024", 3),
      edition("2025", "a-t-2025", 6),
    ],
  },
  {
    slug: "biennale-tecnologia",
    title: "Biennale Tecnologia",
    category: "Tecnologia, società, futuro",
    description:
      "Biennale Tecnologia è un’occasione per riflettere su come la tecnologia trasformi la società. Portiamo i nostri robot e il punto di vista degli studenti in un dialogo aperto sul ruolo della robotica nel futuro.",
    heroImage:
      "/site/events/2026/biennale-tecnologia-2026/biennale-tecnologia-2026-01.jpg",
    editions: [
      edition("2024", "biennale-tecnologia-2024", 3),
      edition("2026", "biennale-tecnologia-2026", 2),
    ],
  },
  {
    slug: "pi-day",
    title: "Pi Day",
    category: "Scienza da esplorare",
    description:
      "Una giornata dedicata alla matematica e alla curiosità scientifica. Con attività e dimostrazioni, raccontiamo come la robotica unisca discipline diverse e trasformi le idee in esperienze concrete.",
    heroImage: "/site/events/2024/pi-day-2024/pi-day-2024-01.jpg",
    editions: [edition("2024", "pi-day-2024", 2)],
  },
  {
    slug: "masterclass-design-3d-printing-task-management",
    title: "Masterclass: Design, 3D Printing & Task Management",
    category: "Formazione e progettazione",
    description:
      "Un’occasione di formazione per esplorare il design, la stampa 3D e l’organizzazione del lavoro. Dalle idee alla pianificazione, condividiamo strumenti e competenze utili per sviluppare progetti di robotica.",
    heroImage:
      "/site/events/archivio/masterclass-design-3d-printing-task-management/masterclass-design-3d-printing-task-management-01.jpg",
    editions: [
      edition(
        "Archivio",
        "masterclass-design-3d-printing-task-management",
        9,
        "archivio",
      ),
    ],
  },
];

export function getTeamEvent(slug: string) {
  return teamEvents.find((event) => event.slug === slug);
}
