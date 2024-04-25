import Isaac from "@atoms/Isaac"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Hero from "@molecules/Hero"
import Numbers from "@molecules/Numbers"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import { useTranslation } from "react-i18next"
import img from "../assets/lightbulb.png"

export default function Home(): JSX.Element {
  const { t } = useTranslation("homepage")

  return (
    <div>
      <Hero title="Team ISAAC" subtitle={t("subtitle")} />
      <Isaac />
      <Paragraph className="laptop:my-32" palette="bluePalette">
        <TwoColumns
          isTextLeft
          palette="bluePalette"
          title={t("projects.title")}
          text={t("projects.description")}
          buttonText={t("scopri di più")}
          href="/projects"
          src={img}
          alt="immagine prova"
        />
      </Paragraph>
      <Paragraph className="laptop:my-32" palette="whitePalette">
        <TwoColumns
          palette="whitePalette"
          title={t("events.title")}
          text={t("events.description")}
          buttonText={t("scopri di più")}
          href="/events"
          src={img}
          alt="immagine prova"
        />
      </Paragraph>
      <Paragraph
        className="laptop:my-32"
        palette="lightBluePalette"
        invertSlope
      >
        <Numbers />
      </Paragraph>
      <Typography
        className="m-auto mt-20 mb-10 notebook:mb-12 desktop:mb-20 w-fit"
        variant="h1"
      >
        {t("gallery")}
      </Typography>
      <Gallery
        images={[
          {
            children: (
              <div className="w-32 m-auto bg-gray-300 tablet:w-40 laptop:w-52 notebook:w-64 aspect-square desktop:w-96 rounded-xl" />
            ),
          },
          {
            children: (
              <div className="w-32 m-auto bg-gray-300 tablet:w-40 laptop:w-52 notebook:w-64 aspect-square desktop:w-96 rounded-xl" />
            ),
          },
          {
            children: (
              <div className="w-32 m-auto bg-gray-300 tablet:w-40 laptop:w-52 notebook:w-64 aspect-square desktop:w-96 rounded-xl" />
            ),
          },
          {
            children: (
              <div className="w-32 m-auto bg-gray-300 tablet:w-40 laptop:w-52 notebook:w-64 aspect-square desktop:w-96 rounded-xl" />
            ),
          },
          {
            children: (
              <div className="w-32 m-auto bg-gray-300 tablet:w-40 laptop:w-52 notebook:w-64 aspect-square desktop:w-96 rounded-xl" />
            ),
          },
        ]}
      />
    </div>
  )
}
