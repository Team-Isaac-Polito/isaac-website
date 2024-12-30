import Hero from "@molecules/Hero"
import GalleryEvent from "@organisms/GalleryEvent"
import StaticEvent from "@organisms/StaticEvent"
import React from "react"
import { useTranslation } from "react-i18next"

// Mappa delle cartelle agli import glob
const folderMap = {
  AT24: import.meta.glob("../assets/events/AT24/*.{png,jpg,jpeg,svg}", {
    eager: true,
  }),
  AT23: import.meta.glob("../assets/events/at23/*.{png,jpg,jpeg,svg}", {
    eager: true,
  }),
  MK22: import.meta.glob("../assets/events/mk22/*.{png,jpg,jpeg,svg}", {
    eager: true,
  }),
  MK23: import.meta.glob("../assets/events/mk23/*.{png,jpg,jpeg,svg}", {
    eager: true,
  }),
}

// Funzione per importare tutte le immagini da una cartella
function importImages(folder: keyof typeof folderMap) {
  const context = folderMap[folder]
  return Object.values(context).map((module) => ({
    src: (module as { default: string }).default,
    alt: `${folder} event image`,
  }))
}

interface Event {
  type: string
  title: string
  desc?: string
  palette: string
  folder: keyof typeof folderMap
}

export default function Events(): JSX.Element {
  const { t } = useTranslation("events")

  return (
    <>
      <Hero title={t("title")} />
      {(t("events", { returnObjects: true }) as Event[]).map((event, index) =>
        event.type === "static" ? (
          <StaticEvent
            key={index}
            title={event.title}
            desc={event.desc}
            palette={event.palette}
            images={importImages(event.folder)}
          />
        ) : event.type === "gallery" ? (
          <GalleryEvent
            key={index}
            title={event.title}
            desc={event.desc}
            palette={event.palette}
            images={importImages(event.folder)}
          />
        ) : null
      )}
    </>
  )
}
