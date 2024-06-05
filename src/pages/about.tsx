import img from "@assets/about/AboutUS_1.png"
import Typography from "@atoms/Typography"
import Hero from "@molecules/Hero"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import History from "@organisms/History"
import React from "react"
import { Trans, useTranslation } from "react-i18next"

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
      <Paragraph className="laptop:my-32" palette="bluePalette">
        <History />
      </Paragraph>
      <Paragraph className="notebook:my-32" palette="whitePalette">
        <Typography variant="h1" className="mb-20 text-light-blue-isaac">
          {t("areas.title")}
        </Typography>
        <Typography variant="p">
          <Trans i18nKey={t("areas.description")} />
        </Typography>
      </Paragraph>
    </>
  )
}
