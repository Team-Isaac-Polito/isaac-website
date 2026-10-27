import Image from "next/image";

const robots = [
  {
    name: "Rese.q MK1",
    image: "/robot/reseq-mk1.png",
    href: "https://teamisaac.polito.it",
  },
  {
    name: "Rese.q MK2",
    image: "/robot/reseq-mk2.jpg",
    href: "https://framer.com",
  },
];

export function Robots() {
  return (
    <section
      id="robot"
      aria-labelledby="robots-title"
      className="isaac-pattern scroll-mt-8 bg-white px-4 py-16 text-gray-900 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="robots-title"
          className="text-center text-2xl font-bold tracking-tight"
        >
          I nostri robot
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-lg leading-relaxed text-gray-700 sm:mt-7 sm:text-lg">
          Costruiamo robot per le operazioni di ricerca e soccorso. Scopri i
          nostri modelli.
        </p>

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2">
          {robots.map((robot) => (
            <a
              key={robot.name}
              href={robot.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${robot.name}, si apre in una nuova scheda`}
              className="group relative aspect-[2/1] overflow-hidden rounded-2xl bg-slate-900 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#397778]"
            >
              <Image
                src={robot.image}
                alt={robot.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"
              />
              <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#569698] text-white shadow-md transition-colors group-hover:bg-[#397778] sm:h-[54px] sm:w-[54px]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                >
                  <path
                    d="M7 17 17 7M8 7h9v9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <span className="absolute bottom-5 left-5 text-2xl font-bold text-white drop-shadow sm:bottom-7 sm:left-7 sm:text-3xl">
                {robot.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
