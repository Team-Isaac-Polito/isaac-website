import Typography from "@atoms/Typography"
import Hero from "@molecules/Hero"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
// import Areas from "@organisms/Areas"
import History from "@organisms/History"
import React from "react"
import { useTranslation } from "react-i18next"
import img from "../assets/lightbulb.png"

export default function About(): JSX.Element {
  const { t } = useTranslation("about")

  return (
    <>
      <Hero title={"About"} />
      <Paragraph className="notebook:my-32" palette="whitePalette">
        <TwoColumns
          isTextLeft
          palette="whitePalette"
          title={t("title")}
          text={t("description")}
          src={img}
          alt={"immagine di esempio"}
        />
      </Paragraph>
      <Paragraph className="notebook:my-32" palette="whitePalette">
        <Typography variant="h1" className="mb-20 text-light-blue-isaac">
          {t("areas.title")}
        </Typography>
        <Typography variant="p">{t("areas.description")}</Typography>
      </Paragraph>
      <Paragraph className="laptop:my-32" palette="bluePalette">
        <History />
      </Paragraph>
      {/* <Paragraph palette={"lightBluePalette"} invertSlope>
        <Areas />
      </Paragraph>*/}
    </>
  )
}
