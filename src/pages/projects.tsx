import Typography from "@atoms/Typography"
import Paragraph from "@molecules/Paragraph"
import Slides from "@molecules/Slides"
import Table from "@molecules/Table"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import { useTranslation } from "react-i18next"
import reseq from "../assets/prova.mp4"

export default function Projects(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div>
      <div>
        <Typography className="text-center py-7 text-dark-blue" variant="h1">
          Rese.Q Mk1
        </Typography>
        <video width="1920" height="600" autoPlay muted loop>
          <source src={reseq} type="video/mp4" />
        </video>
        <Paragraph palette="bluePalette" className="my-32">
          <TwoColumns
            isTextLeft
            palette="bluePalette"
            title="chi è rese.q mk1"
            text={t("projects.paragraph1.text")}
            buttonText="Learn more"
            classNameBorder="bluePalette tablet:w-[400px] tablet:h-[500px] desktop:w-[619px] desktop:h-[729px]"
            className="desktop:h-[1100px] tablet:h-[650px]"
          >
            <div className="rounded-md bg-gray-500 desktop:w-[547px] desktop:h-[666px] tablet:w-[340px] tablet:h-[460px]" />
          </TwoColumns>
        </Paragraph>
        <TwoColumns
          palette="whitePalette"
          classNameBorder="h-0 w-0"
          title="caratteristiche"
          textKey="projects.paragraph2.text"
        >
          <div className="w-fit">
            <Table
              translationPath="projects.paragraph2.datasheet"
              palette="white"
              rows={8}
            />
          </div>
        </TwoColumns>
        <Paragraph
          invertSlope
          palette="lightBluePalette"
          className="py-[100px] mb-[50px]"
        >
          <div className="m-auto mx-[200px] text-center text-5xl">
            <Typography className="mb-20 lightBluePalette" variant="h1">
              obiettivi
            </Typography>
            Lo scopo di Rese.Q Mk1 è quello di fornire supporto ai soccorritori
            in situazioni emergenziali. Le sue funzionalità attuali sono:
          </div>
          <Slides
            numSlides={3}
            palette="lightBluePalette"
            translationPath="projects.paragraph3.slides"
          />
        </Paragraph>
      </div>
    </div>
  )
}
