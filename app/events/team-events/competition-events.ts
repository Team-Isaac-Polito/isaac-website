import { createEventEdition } from "./create-event-edition";
import type { TeamEvent } from "./types";

export const makerFaire: TeamEvent = {
  slug: "maker-faire",
  title: "Maker Faire",
  category: "Idee che diventano cose",
  description:
    "La Maker Faire è il grande appuntamento dedicato a creatività, tecnologia e innovazione. Per il Team Isaac è l’occasione di incontrare curiosi e appassionati, mostrare i robot dal vivo e raccontare come nascono i nostri progetti.",
  heroImage: "/maker_faire/2022/maker_faire_2022.jpeg",
  editions: [
    createEventEdition("2022", "maker-faire-2022", 4),
    createEventEdition("2023", "maker-faire-2023", 5),
    createEventEdition("2024", "maker-faire-2024", 4),
    createEventEdition("2025", "maker-faire-2025", 3),
  ],
};

export const roboCupRescue: TeamEvent = {
  slug: "robocup-rescue",
  title: "RoboCup Rescue",
  category: "Robotica per il soccorso",
  description:
    "RoboCup Rescue riunisce team internazionali che sviluppano tecnologie per supportare le operazioni di soccorso. Qui mettiamo alla prova RESE.Q in scenari di ricerca, confrontandoci con altre squadre e imparando a ogni missione.",
  heroImage: "/robocup/2025/robocup_brazil.jpg",
  editions: [
    createEventEdition("2025", "robocup-rescue-2025", 9),
    createEventEdition("2026", "robocup-rescue-2026", 5),
  ],
};

export const aAndT: TeamEvent = {
  slug: "a-t",
  title: "A&T",
  category: "Automazione e tecnologie",
  description:
    "A&T è una fiera dedicata a innovazione, automazione e tecnologie industriali. La partecipazione ci permette di presentare il progetto RESE.Q a professionisti e imprese e di confrontarci con le applicazioni concrete della robotica.",
  heroImage: "/site/events/2025/a-t-2025/a-t-2025-01.jpg",
  editions: [
    createEventEdition("2023", "a-t-2023", 5),
    createEventEdition("2024", "a-t-2024", 3),
    createEventEdition("2025", "a-t-2025", 6),
  ],
};
