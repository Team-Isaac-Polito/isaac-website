import Hero from "@molecules/Hero"
import GalleryEvent from "@organisms/GalleryEvent"
import StaticEvent from "@organisms/StaticEvent"
import React from "react"
import { useTranslation } from "react-i18next"
import mk22_1 from "../assets/events/mk22/mf22_1.jpg"
import mk22_2 from "../assets/events/mk22/mk22_2.jpg"
import mk22_3 from "../assets/events/mk22/mk22_3.jpg"
import mk22_4 from "../assets/events/mk22/mk22_4.jpg"
import mk22_5 from "../assets/events/mk22/mk22_5.jpg"
import mk23_1 from "../assets/events/mk23/mk23_1.jpg"
import mk23_3 from "../assets/events/mk23/mk23_3.jpg"
import mk23_4 from "../assets/events/mk23/mk23_4.jpg"
import mk23_5 from "../assets/events/mk23/mk23_5.jpg"

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
      {(t("events", { returnObjects: true }) as Event[]).map((event, index) =>
        event.type === "static" ? (
          <StaticEvent
            key={index}
            title={event.title}
            desc={event.desc}
            palette={event.palette}
            images={[
              {
                src: "",
                alt: "",
              },
              {
                src: mk23_1,
                alt: "",
              },
              {
                src: mk23_3,
                alt: "",
              },
              {
                src: mk23_4,
                alt: "",
              },
              {
                src: "",
                alt: "",
              },
              {
                src: mk23_5,
                alt: "",
              },
            ]}
          />
        ) : event.type === "gallery" ? (
          <GalleryEvent
            key={index}
            title={event.title}
            desc={event.desc}
            palette={event.palette}
            images={[
              {
                src: mk22_1,
                alt: "",
              },
              {
                src: mk22_3,
                alt: "",
              },
              {
                src: mk22_4,
                alt: "",
              },
              {
                src: mk22_2,
                alt: "",
              },
              {
                src: mk22_5,
                alt: "",
              },
            ]}
          />
        ) : null
      )}
    </>
  )
}
