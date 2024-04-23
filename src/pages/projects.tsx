import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import Slides from "@molecules/Slides"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import { useTranslation } from "react-i18next"
import reseq from "../assets/ReseQ1.mp4"
import img from "../assets/lightbulb.png"

export default function Projects(): JSX.Element {
  const { t } = useTranslation("projects")

  return (
    <div>
      <Typography className="text-center py-7 text-dark-blue" variant="h1">
        Rese.Q Mk1
      </Typography>
      <video width="1920" height="600" autoPlay muted loop>
        <source src={reseq} type="video/mp4" />
      </video>
      <Paragraph palette="bluePalette" className="my-20">
        <TwoColumns
          isTextLeft
          palette="bluePalette"
          title={t("reseq-mk1.title")}
          textKey={t("reseq-mk1.description")}
          src={img}
          alt={""}
        />
      </Paragraph>
      <Paragraph palette="whitePalette" className="my-20">
        <TwoColumns
          palette="whitePalette"
          title={t("reseq-mk1.features.title")}
          textKey="projects:reseq-mk1.features.description"
          src={img}
          alt={""}
        />
      </Paragraph>
      <Paragraph invertSlope palette="lightBluePalette">
        <Typography className="mb-10 lightBluePalette" variant="h1">
          {t("reseq-mk1.objectives.title")}
        </Typography>
        <Typography variant="p" className="tablet:max-w-[80%] m-auto">
          {t("reseq-mk1.objectives.description")}
        </Typography>
        <Slides
          context="projects"
          numSlides={3}
          translationPath="reseq-mk1.objectives.slides"
          src={img}
          alt="ciao"
        />
      </Paragraph>
      <div className="py-32 h-fit">
        <Gallery
          images={[
            {
              children: (
                <div className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl" />
              ),
            },
            {
              children: (
                <div className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl" />
              ),
            },
            {
              children: (
                <div className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl" />
              ),
            },
            {
              children: (
                <div className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl" />
              ),
            },
            {
              children: (
                <div className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl" />
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}
