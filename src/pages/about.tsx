import Typography from "@atoms/Typography"
import Hero from "@molecules/Hero"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import Areas from "@organisms/Areas"
import History from "@organisms/History"
import React from "react"
import { useTranslation } from "react-i18next"

export default function About(): JSX.Element {
  const { t } = useTranslation("about")

  return (
    <>
      <Hero title={"About"} />
      <Paragraph className="notebook:my-32" palette="whitePalette">
        <TwoColumns
          isTextLeft
          palette="whitePalette"
          title="su di noi"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
          src={""}
          alt={""}
        />
      </Paragraph>
      <Paragraph className="laptop:my-32" palette="bluePalette">
        <>
          <History />
        </>
      </Paragraph>
      <Paragraph className="notebook:my-32" palette="whitePalette">
        <>
          <Typography variant="h1" className="mb-20 text-light-blue-isaac">
            {t("areas.title")}
          </Typography>
          <Typography variant="p">{t("areas.description")}</Typography>
        </>
      </Paragraph>
      <Paragraph palette={"lightBluePalette"} invertSlope>
        <Areas />
      </Paragraph>
    </>
  )
}
