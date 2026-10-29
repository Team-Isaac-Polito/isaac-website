import { MyNavbar } from "../../components/hubjumbo/components";

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1b1b3a] px-5 pb-24 pt-36 text-white sm:px-10 sm:pb-32 sm:pt-44 lg:px-16">
      <div
        aria-hidden="true"
        className="isaac-pattern isaac-pattern-dark pointer-events-none absolute inset-0 opacity-50"
      />
      <div className="absolute inset-x-0 top-0 z-20">
        <MyNavbar darkText />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full border border-white/10 sm:-right-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-20 h-[25rem] w-[25rem] rounded-full border border-white/10"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
          Mettiamoci
          <br />
          in contatto.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-2xl">
          Hai una domanda, un’idea o vuoi saperne di più sul Team Isaac?
          Raccontacelo: ci farà piacere leggerti.
        </p>
      </div>
    </section>
  );
}
