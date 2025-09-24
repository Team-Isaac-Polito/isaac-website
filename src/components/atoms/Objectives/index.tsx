import Slide1 from "@assets/projects/targets/targets_1.png"
import Slide2 from "@assets/projects/targets/targets_2.png"
import Slide3 from "@assets/projects/targets/targets_3.png"
import Slide4 from "@assets/projects/targets/targets_4.png"
import Slide5 from "@assets/projects/targets/targets_5.png"

import Typography from "@atoms/Typography"

import Paragraph from "@molecules/Paragraph"

import Slides from "@molecules/Slides"

import React from "react"

import { useTranslation } from "react-i18next"
export default function Projects(): JSX.Element {
  const { t } = useTranslation("projects")
  return (
    <Paragraph invertSlope palette="lightBluePalette">
      <Typography className="mb-10 lightBluePalette" variant="h1">
        {t("reseq-mk1.objectives.title")}
      </Typography>
      <Typography variant="p" className="tablet:max-w-[80%] m-auto">
        The purpose of Rese.Q is to provide support to rescuers in emergency
        situations. Its current capabilities are:
      </Typography>
      <Slides
        slideEl={[
          {
            src: Slide1,
            alt: "prova",
            translationPath: "reseq-mk1.objectives.slides.1",
          },
          {
            src: Slide2,
            alt: "prova",
            translationPath: "reseq-mk1.objectives.slides.2",
          },
          {
            src: Slide3,
            alt: "prova",
            translationPath: "reseq-mk1.objectives.slides.3",
          },
          {
            src: Slide4,
            alt: "prova",
            translationPath: "reseq-mk1.objectives.slides.4",
          },
          {
           src: Slide5,
           alt: "prova",
           translationPath: "reseq-mk1.objectives.slides.5",
         },
        ]}
      />
    </Paragraph>
  )
}
