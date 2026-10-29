"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { MyNavbar } from "@/app/components/hubjumbo/components";
import { IsaacButton, ScrollReveal } from "@/app/components/shared";

export function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[42rem] items-end overflow-hidden bg-[#1b1b3a] px-5 pb-16 pt-32 text-white sm:min-h-[48rem] sm:px-10 sm:pb-24 lg:px-16">
      <Image
        src="/site/home/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#12132d]/95 via-[#12132d]/55 to-[#12132d]/10" />
      <div className="absolute inset-x-0 top-0 z-20">
        <MyNavbar darkText />
      </div>
      <ScrollReveal
        direction="left"
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#73b9b4] sm:text-base">
          Politecnico di Torino · dal 2002
        </p>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
          Persone,
          <br />
          idee, robot.
        </h1>
        <p className="my-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-2xl">
          Siamo un team di studenti appassionati di robotica, uniti dalla voglia
          di progettare tecnologie che possano fare la differenza.
        </p>
        <IsaacButton
          text="Scopri il progetto"
          href="#divisioni"
          icon={<FaArrowDown />}
          className="isaac-cta--projects"
        />
      </ScrollReveal>
    </section>
  );
}
