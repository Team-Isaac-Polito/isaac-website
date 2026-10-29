import { IsaacButton } from "../shared/IsaacButton/isaac_button";
import { Socials } from "./components";
import { MyNavbar } from "./components/navbar/navbar";

export function HubJumbo() {
  return (
    <section className="relative isolate flex  w-full items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-30">
        <MyNavbar darkText={true} />
      </div>

      <article className="relative z-20 flex w-full flex-col items-center justify-center px-4 pb-8 pt-24 text-center text-white sm:px-6 sm:pt-28">
        <h1 className="text-3xl font-extrabold tracking-tight drop-shadow-md sm:text-6xl">
          Team Isaac
        </h1>
        <p className="my-4 max-w-sm text-base font-medium drop-shadow-sm sm:text-2xl">
          Robotica di servizio mobile per operazioni di ricerca e soccorso
        </p>
        <Socials />
        <IsaacButton text="Contattaci" />
      </article>

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/60" />
      <div
        aria-hidden="true"
        className="isaac-pattern isaac-pattern-dark pointer-events-none absolute inset-0 z-[15] opacity-30"
      />

      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/reseq_mk2_makerfaire.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}