import type { Metadata } from "next";
import { ContactPage } from "./components";

export const metadata: Metadata = {
  title: "Contattaci | Team Isaac",
  description:
    "Contatta il Team Isaac del Politecnico di Torino per domande, collaborazioni ed eventi.",
};

export default function ContactUs() {
  return <ContactPage />;
}
