import EventsImage from "@assets/homepage/hp_Events_1.png"
import ProjectsImage from "@assets/homepage/hp_Projects_1.png"
import Isaac from "@atoms/Isaac"
import Hero from "@molecules/Hero"
import Numbers from "@molecules/Numbers"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import { useTranslation } from "react-i18next"

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
          src={ProjectsImage}
          alt="Rese Q. Mk1"
        />
      </Paragraph>
      <Paragraph className="laptop:my-32" palette="whitePalette">
        <TwoColumns
          palette="whitePalette"
          title={t("events.title")}
          text={t("events.description")}
          buttonText={t("scopri di più")}
          href="/events"
          src={EventsImage}
          alt="Event image"
        />
      </Paragraph>
      <Paragraph
        className="laptop:my-32"
        palette="lightBluePalette"
        invertSlope
      >
        <Numbers />
      </Paragraph>
    </div>
  )
}
