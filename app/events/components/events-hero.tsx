import { MyNavbar } from "../../components/hubjumbo/components";
import { EventOrbit } from "./event-orbit";
import { heroCollage } from "../data";

export function EventsHero() {
  return (
    <section className="relative isolate flex min-h-[38rem] items-center justify-center overflow-hidden bg-white px-5 pb-14 pt-24 text-[#121212] sm:min-h-[48rem] sm:pb-18 sm:pt-28 lg:min-h-[58rem] lg:px-16 lg:pb-12 lg:pt-28">
      <div className="absolute inset-x-0 top-0 z-30">
        <MyNavbar darkText />
      </div>
      <EventOrbit items={heroCollage} />
      <div className="relative z-10 mx-auto flex w-full max-w-[36rem] flex-col items-center justify-center rounded-full bg-white/80 px-3 py-10 text-center backdrop-blur-[2px] sm:py-12 md:bg-white lg:py-14">
        <div className="event-enter px-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            COMPETIZIONI &amp; EVENTI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-snug sm:text-2xl lg:mt-6 lg:text-[1.7rem]">
            Dal 2022 il Team Isaac partecipa a fiere, competizioni e incontri,
            portando i nostri robot a contatto con studenti, famiglie e
            appassionati di tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}
