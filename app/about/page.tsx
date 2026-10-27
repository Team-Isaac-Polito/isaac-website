import type { Metadata } from "next";
import { Footer } from "../components/footer/footer";
import { AboutPage } from "../components/about/about";

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
