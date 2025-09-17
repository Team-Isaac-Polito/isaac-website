import Hero from "@molecules/Hero"
import GalleryEvent from "@organisms/GalleryEvent"
import React from "react"

import { useEvents } from "@organisms/GalleryEvent/useEvents"
import { FaSpinner } from "react-icons/fa"
import { GalleryImage, EventType } from "@organisms/GalleryEvent/events.types"
import { Helmet } from "react-helmet-async"
import { isEn } from "@utils/utilities"
const palette = ["bluePalette", "lightBluePalette"]

export default function Events(): JSX.Element {
  const { events, isLoading } = useEvents()
  
  if (isLoading) return <FaSpinner />

  return (
    <>
      <Helmet>
        <title>Team Isaac /Events</title>
        <meta
          name="description"
          content="Events attended by Team Isaac SAR robotics services"
        />
      </Helmet>
      <Hero title={isEn() ? "Events" : "Eventi"} />
      {events.map((event: EventType, index: number) => (
        <GalleryEvent
          key={event.id}
          title={event.title}
          desc={isEn() ? event.description_eng : event.description_ita}
          palette={index % 2 ? palette[0] : palette[1]}
          images={event.gallery.map((image: GalleryImage) => ({
            src: `https://cms.teamisaac.it/assets/${image.directus_files_id}?width=1600&height=1900&quality=80`,
            alt: `${event.title}`,
          }))}
        />
      ))}
    </>
  )
}
