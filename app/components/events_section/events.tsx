import Image from "next/image";
import Link from "next/link";

export function EventsSection() {
  const eventImages = [
    "/maker_faire/2022/maker_faire_2022.jpeg",
    "/robocup/2025/robocup_brazil.jpg",
    "/notte_dei_ricercatori/2026/notte_dei_ricercatori_1.jpeg",
    "/notte_dei_ricercatori/2026/notte_dei_ricercatori.jpeg",
    "/robocup/2025/robot_somewhere.jpg",
    "/maker_faire/2022/vittorio_doing_something.jpeg",
  ];

  return (
    <section
      id="eventi"
      aria-labelledby="events-title"
      className="isaac-pattern relative isolate flex min-h-[38rem] scroll-mt-8 items-center justify-center overflow-hidden bg-white px-4 py-16 text-gray-900 sm:min-h-[44rem] sm:px-6 sm:py-24"
    >
      <div
        id="eventi-galleria"
        aria-label="Foto degli eventi del Team Isaac"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        {eventImages.map((image, index) => (
          <div
            key={image}
            className={`relative flex h-[62%] flex-none overflow-hidden rounded-2xl shadow-lg sm:h-[76%] sm:rounded-3xl w-[46%] md:w-[35%] lg:w-[24%] ${
              index > 0 ? "-ml-[16%] md:-ml-[12%] lg:-ml-[8%]" : ""
            } ${
              [
                "translate-y-2 sm:translate-y-4",
                "-translate-y-3 sm:-translate-y-6",
                "translate-y-3 sm:translate-y-5",
                "-translate-y-2 sm:-translate-y-4",
                 "translate-y-3 sm:translate-y-5",
                "-translate-y-2 sm:-translate-y-4",
              ][index]
            } ${index === 3 ? "hidden md:flex" : ""} ${
              index >= 4 ? "hidden lg:flex" : ""
            }`}
          >
            <Image
              src={image}
              alt={image}
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 768px) 35vw, 46vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-white px-6 py-10 text-center shadow-xl sm:px-12 sm:py-12">
        <h2
          id="events-title"
          className="text-2xl font-bold tracking-tight"
        >
          Eventi
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-700 sm:text-xl">
          Organizziamo fiere, dimostrazioni e incontri per condividere i nostri
          progetti di robotica e incontrare chi, come noi, ama l’innovazione.
        </p>
        <Link
          href="/events"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#549697] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#397778] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#397778] sm:mt-10 sm:px-8 sm:text-xl"
        >
          Scopri gli eventi
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
          >
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}