import Typography from "@atoms/Typography"
import Hero from "@molecules/Hero"
import Paragraph from "@molecules/Paragraph"
import GalleryEvent from "@organisms/GalleryEvent"
import StaticEvent from "@organisms/StaticEvent"
import React from "react"
import { useTranslation } from "react-i18next"
import at24_1 from "../assets/events/AT24/at24_1.jpg"
import at24_2 from "../assets/events/AT24/at24_2.jpg"
import at24_3 from "../assets/events/AT24/at24_3.jpg"
import at23_1 from "../assets/events/at23/AT_1.png"
import at23_2 from "../assets/events/at23/AT_2.jpg"
import at23_3 from "../assets/events/at23/AT_3.jpg"
import at23_4 from "../assets/events/at23/AT_4.jpg"
import at23_5 from "../assets/events/at23/AT_5.jpg"
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
                alt: "Maker Faire Rome 2023",
              },
              {
                src: mk23_3,
                alt: "Maker Faire Rome 2023",
              },
              {
                src: mk23_4,
                alt: "Maker Faire Rome 2023",
              },
              {
                src: "",
                alt: "",
              },
              {
                src: mk23_5,
                alt: "Maker Faire Rome 2023",
              },
            ]}
          />
        ) : event.type === "gallery" ? (
          event.title === "MAKER FAIRE 2022" ? (
            <GalleryEvent
              key={index}
              title={event.title}
              desc={event.desc}
              palette={event.palette}
              images={[
                {
                  src: mk22_1,
                  alt: "Maker Faire Rome 2022",
                },
                {
                  src: mk22_3,
                  alt: "Maker Faire Rome 2022",
                },
                {
                  src: mk22_4,
                  alt: "Maker Faire Rome 2022",
                },
                {
                  src: mk22_2,
                  alt: "Maker Faire Rome 2022",
                },
                {
                  src: mk22_5,
                  alt: "Maker Faire Rome 2022",
                },
              ]}
            />
          ) : event.title === "A&T 2024" ? (
            <Paragraph
              palette={event.palette}
              key={`at24-${index}`}
              className="relative my-40"
            >
              <Typography
                variant="h1"
                className="mb-7 laptop:mb-10 desktop:mb-20 desktop:mt-10"
              >
                {event.title}
              </Typography>
              <div className="grid grid-cols-3">
                <img
                  src={at24_1}
                  alt="A&T 2024 Turin"
                  className="desktop:w-[370px] h-fit notebook:w-[300px] laptop:w-[220px] w-[170px] m-auto rounded-xl"
                />
                <img
                  src={at24_2}
                  alt="A&T 2024 Turin"
                  className="desktop:w-[370px] h-fit notebook:w-[300px] laptop:w-[220px] w-[170px] m-auto rounded-xl"
                />
                <img
                  src={at24_3}
                  alt="A&T 2024 Turin"
                  className="desktop:w-[370px] h-fit notebook:w-[300px] laptop:w-[220px] w-[170px] m-auto rounded-xl"
                />
              </div>
            </Paragraph>
          ) : (
            <GalleryEvent
              key={index}
              title={event.title}
              desc={event.desc}
              palette={event.palette}
              images={[
                {
                  src: at23_1,
                  alt: "A&T 2023 Turin",
                },
                {
                  src: at23_3,
                  alt: "A&T 2023 Turin",
                },
                {
                  src: at23_4,
                  alt: "A&T 2023 Turin",
                },
                {
                  src: at23_2,
                  alt: "A&T 2023 Turin",
                },
                {
                  src: at23_5,
                  alt: "A&T 2023 Turin",
                },
              ]}
            />
          )
        ) : null
      )}
    </>
  )
}
