import Form from "@atoms/Form"
import Isaac from "@atoms/Isaac"
import RotatedBorder from "@atoms/RotatedBorder"
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
          buttonText="Scopri di più"
          src={img}
          alt="immagine prova"
        />
      </Paragraph>
      <Paragraph className="laptop:my-32" palette="whitePalette">
        <TwoColumns
          palette="whitePalette"
          title={t("events.title")}
          text={t("events.description")}
          buttonText="Read more"
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
      <Typography className="m-auto my-20 w-fit" variant="h1">
        {t("gallery")}
      </Typography>
      <RotatedBorder
        width="80%"
        height="80%"
        top="10"
        left="10%"
        className="border-light-blue-isaac rotate-[3deg]"
      >
        <div className="relative w-full">
          <Gallery
            images={[
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
            ]}
          />
        </div>
      </RotatedBorder>
      <Form />
    </div>
  )
}
