import Image from "next/image";
import Link from "next/link";
import type { TeamEvent } from "../team-events";
import { MyNavbar } from "../../components/hubjumbo/components";

export function EventDetailHero({ event }: { event: TeamEvent }) {
  return (
    <section className="relative isolate flex min-h-[38rem] items-end overflow-hidden bg-[#1b1b3a] px-5 pb-14 pt-32 text-white sm:min-h-[46rem] sm:px-10 sm:pb-20 lg:px-16">
      <Image
        src={event.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#11122d] via-[#11122d]/70 to-[#11122d]/15" />
      <div
        aria-hidden="true"
        className="isaac-pattern isaac-pattern-dark pointer-events-none absolute inset-0 opacity-25"
      />
      <div className="absolute inset-x-0 top-0 z-20">
        <MyNavbar darkText />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Link
          href="/about#members-title"
          className="event-enter mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-[#f5c64b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span aria-hidden="true">←</span> Torna a About
        </Link>
        <p className="event-enter mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#73b9b4]">
          {event.category}
        </p>
        <h1
          className="event-enter max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "100ms" }}
        >
          {event.title}
        </h1>
        <p
          className="event-enter mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-2xl"
          style={{ animationDelay: "200ms" }}
        >
          {event.description}
        </p>
        <a
          href="#gallery"
          className="event-enter mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#f5c64b] px-7 py-3 font-semibold text-[#1b1b3a] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          style={{ animationDelay: "300ms" }}
        >
          Esplora le edizioni
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
