import Hero from "@molecules/Hero"
import GalleryEvent from "@organisms/GalleryEvent"
import React from "react"
import { useTranslation } from "react-i18next"

import { useEvents } from "@organisms/GalleryEvent/useEvents"
import { FaSpinner } from "react-icons/fa"
import { GalleryImage, EventType } from "@organisms/GalleryEvent/events.types"
const palette = ["bluePalette", "lightBluePalette"]

export default function Events(): JSX.Element {
  const { i18n } = useTranslation("events")
  const { events, isLoading } = useEvents()
  function isEn(): boolean {
    return i18n.language === "en"
  }
  if (isLoading) return <FaSpinner />

  return (
    <>
      <Hero title={isEn() ? "Events" : "Eventi"} />
      {events.map((event: EventType, index: number) => (
        <GalleryEvent
          key={event.id}
          title={event.title}
          desc={isEn() ? event.description_eng : event.description_ita}
          palette={index % 2 ? palette[0] : palette[1]}
          images={event.gallery.map((image: GalleryImage) => ({
            src: `https://cms.teamisaac.it/assets/${image.directus_files_id}?width=1900&height=2800&quality=80`,
            alt: `${event.title}`,
          }))}
        />
      ))}
    </>
  )
}
