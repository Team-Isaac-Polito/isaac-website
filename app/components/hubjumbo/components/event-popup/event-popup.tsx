"use client";

import { IsaacButton } from "@/app/components/shared/IsaacButton/isaac_button";
import { useEffect, useRef } from "react";

export function EventPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const hasUserCloseDialog = localStorage.getItem("hasUserCloseDialog") ?? false
    if (dialog && !dialog.open && hasUserCloseDialog == false) {
      dialog.showModal();
    }
    return () => dialog?.close();
  }, []);

  function closeDialog() {
     dialogRef.current?.close();
     localStorage.setItem("hasUserCloseDialog", "true") // localStorage supporta solo le stringhe non i booleani diretti :(
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="event-popup-title"
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl border-0 bg-white p-6 text-gray-900 shadow-2xl backdrop:bg-black/70 sm:p-8"
    >
      <button
        type="button"
        onClick={closeDialog}
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
        <p className="my-4 text-base leading-relaxed text-gray-600">
          Fiere, dimostrazioni e incontri: vieni a conoscere il Team Isaac e i
          nostri progetti di robotica per la ricerca e il soccorso.
        </p>
        <IsaacButton text="Scopri gli eventi" href="#eventi" />
      </div>
    </dialog>
  );
}
