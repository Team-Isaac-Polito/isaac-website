import Hero from "@molecules/Hero"
import GalleryEvent from "@organisms/GalleryEvent"
import StaticEvent from "@organisms/StaticEvent"
import { useTranslation } from "react-i18next"
import React from "react"

interface Event {
  type: string
  title: string
  desc: string
  palette: string

}

export default function Events(): JSX.Element {
  const { t } = useTranslation("events")

  return (
    <>
      <Hero title={t("title")} />
      {(t('events', { returnObjects: true }) as Event[]).map((event, index) => {
        if (event.type === 'static') {
          return (
            <StaticEvent
              key={index}
              title={event.title}
              desc={event.desc}
              palette={event.palette}
              button=" learn more"
            />
          )
        } else if (event.type === 'gallery') {
          return (
            <GalleryEvent
              key={index}
              title={event.title}
              desc={event.desc}
              palette={event.palette}
            />
          )
        }
      })}
    </>
  )
}
