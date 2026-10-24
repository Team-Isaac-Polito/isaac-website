"use client";

import { useEffect, useRef } from "react";

export function EventPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    return () => dialog?.close();
  }, []);

  function goToEvents() {
    dialogRef.current?.close();
    document.getElementById("eventi")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="event-popup-title"
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl border-0 bg-white p-6 text-gray-900 shadow-2xl backdrop:bg-black/70 sm:p-8"
    >
      <button
        type="button"
        onClick={goToEvents}
        aria-label="Chiudi e vai agli eventi"
        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#549697]"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <div className="px-2 py-4 text-center sm:px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#397778]">
          Team Isaac
        </p>
        <h2
          id="event-popup-title"
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Scopri i nostri eventi
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Fiere, dimostrazioni e incontri: vieni a conoscere il Team Isaac e i
          nostri progetti di robotica per la ricerca e il soccorso.
        </p>
        <button
          type="button"
          onClick={goToEvents}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#549697] px-6 py-3 font-semibold text-white transition hover:bg-[#397778] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#397778]"
        >
          Vai agli eventi
        </button>
      </div>
    </dialog>
  );
}
