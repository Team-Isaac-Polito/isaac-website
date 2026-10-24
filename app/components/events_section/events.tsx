export function EventsSection() {
  const eventImages = [
    "Immagine evento 1",
    "Immagine evento 2",
    "Immagine evento 3",
    "Immagine evento 4",
    "Immagine evento 5",
    "Immagine evento 6",
  ];

  return (
    <section
      id="eventi"
      aria-labelledby="events-title"
      className="relative isolate flex min-h-[38rem] scroll-mt-8 items-center justify-center overflow-hidden bg-white px-4 py-16 text-gray-900 sm:min-h-[44rem] sm:px-6 sm:py-24"
    >
      <div
        id="eventi-galleria"
        aria-label="Foto degli eventi del Team Isaac"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        {eventImages.map((image, index) => (
          <div
            key={image}
            role="img"
            aria-label={`Segnaposto per ${image.toLowerCase()}`}
            className={`flex h-[62%] flex-none items-center justify-center rounded-2xl border-4 border-white text-center text-xs font-medium text-gray-600 shadow-lg sm:h-[76%] sm:rounded-3xl sm:text-sm ${
              [
                "bg-[#d9e8e6]",
                "bg-[#e5e9ed]",
                "bg-[#e6e2d8]",
                "bg-[#e6e4ec]",
                "bg-[#e9e2dc]",
                "bg-[#dfe7e2]",
              ][index]
            } w-[46%] md:w-[35%] lg:w-[24%] ${
              [
                "-rotate-[7deg]",
                "rotate-[4deg]",
                "-rotate-[5deg]",
                "rotate-[5deg]",
                "-rotate-[4deg]",
                "rotate-[6deg]",
              ][index]
            } ${index > 0 ? "-ml-[16%] md:-ml-[12%] lg:-ml-[8%]" : ""} ${
              [
                "translate-y-2 sm:translate-y-4",
                "-translate-y-3 sm:-translate-y-6",
                "translate-y-3 sm:translate-y-5",
                "-translate-y-2 sm:-translate-y-4",
                "translate-y-2 sm:translate-y-6",
                "-translate-y-3 sm:-translate-y-2",
              ][index]
            } ${index === 3 ? "hidden md:flex" : ""} ${
              index >= 4 ? "hidden lg:flex" : ""
            }`}
          >
            {image}
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
        <a
          href="#eventi-galleria"
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
        </a>
      </div>
    </section>
  );
}