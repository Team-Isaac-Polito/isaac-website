import type { Metadata } from "next";
import { AboutPage } from ".";
import { Footer } from "../components/shared";

export const metadata: Metadata = {
  title: "About | Team Isaac",
  description:
    "Scopri il Team Isaac del Politecnico di Torino, la sua storia e le persone che costruiscono i nostri robot.",
};

export default function About() {
  return (
    <>
      <AboutPage />
      <Footer />
    </>
  );
}
