import TabImage from "@assets/projects/Tab.png"
import first from "@assets/projects/carousel/IMG_2981.jpg"
import second from "@assets/projects/carousel/IMG_3016.jpg"
import third from "@assets/projects/carousel/IMG_3039.jpg"
import fourth from "@assets/projects/carousel/IMG_5162.png"
import fifth from "@assets/projects/carousel/IMG_5180.png"
import AboutImage from "@assets/projects/projects1.jpg"
import Slide1 from "@assets/projects/targets/targets_1.png"
import Slide2 from "@assets/projects/targets/targets_2.png"
import Slide3 from "@assets/projects/targets/targets_3.png"
import Slide4 from "@assets/projects/targets/targets_4.png"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import Slides from "@molecules/Slides"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import { useTranslation } from "react-i18next"
import reseq from "../assets/ReseQ1.mp4"

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
          text={t("reseq-mk1.description")}
          src={AboutImage}
          alt={"Rese Q. Mk1 image"}
        />
      </Paragraph>
      <Paragraph palette="whitePalette" className="my-20">
        <TwoColumns
          palette="whitePalette"
          title={t("reseq-mk1.features.title")}
          text={t("reseq-mk1.features.description")}
          src={TabImage}
          alt={"Robot performance scheme"}
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
          ]}
        />
      </Paragraph>
      <div className="py-32 h-fit">
        <Gallery
          images={[
            {
              children: (
                <img
                  src={first}
                  alt="Rese Q. Mk1 image"
                  className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl"
                />
              ),
            },
            {
              children: (
                <img
                  src={second}
                  alt="Rese Q. Mk1 image"
                  className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl"
                />
              ),
            },
            {
              children: (
                <img
                  src={third}
                  alt="Rese Q. Mk1 image"
                  className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl"
                />
              ),
            },
            {
              children: (
                <img
                  src={fourth}
                  alt="Rese Q. Mk1 image"
                  className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl"
                />
              ),
            },
            {
              children: (
                <img
                  src={fifth}
                  alt="Rese Q. Mk1 image"
                  className="desktop:w-[370px] desktop:h-[370px] notebook:w-[300px] notebook:h-[300px] laptop:w-[220px] laptop:h-[220px] w-[170px] h-[170px] bg-gray-300 m-auto rounded-xl"
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}
