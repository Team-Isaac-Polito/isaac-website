import RotatedBorder from "@atoms/RotatedBorder"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import Slides from "@molecules/Slides"
import Table from "@molecules/Table"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import { useTranslation } from "react-i18next"
import reseq from "../assets/ReseQ1.mp4"

export default function Projects(): JSX.Element {
  const { t } = useTranslation("projects")

  return (
    <div>
      <div>
        <Typography className="text-center py-7 text-dark-blue" variant="h1">
          Rese.Q Mk1
        </Typography>
        <video width="1920" height="600" autoPlay muted loop>
          <source src={reseq} type="video/mp4" />
        </video>

        <Paragraph palette="bluePalette">
          <TwoColumns
            isTextLeft
            palette="bluePalette"
            title={t("reseq-mk1.title")}
            textKey={t("reseq-mk1.description")}
            buttonText=""
            classNameBorder="bluePalette aspect-[4/5]
             tablet:h-[310px] laptop:h-[450px] notebook:h-[500px] desktop:h-[736px]"
          >
            <div
              className="rounded-md bg-gray-500 aspect-[3/4] 
              tablet:h-[280px] laptop:h-[400px] notebook:h-[450px] desktop:h-[666px]"
            />
          </TwoColumns>
        </Paragraph>

        <div className="py-32 mx-48 tablet:mx-16 laptop:mx-28 notebook:mx-36 desktop:mx-48 h-fit">
          <TwoColumns
            palette="whitePalette"
            classNameBorder="h-0 w-0"
            title={t("reseq-mk1.features.title")}
            textKey="projects:reseq-mk1.features.description"
          >
            <div className="">
              <Table
                context="projects"
                translationPath="reseq-mk1.features.datasheet"
                palette="white"
                rows={8}
              />
            </div>
          </TwoColumns>
        </div>

        <Paragraph invertSlope palette="lightBluePalette">
          <Typography className="mb-10 lightBluePalette" variant="h1">
            {t("reseq-mk1.objectives.title")}
          </Typography>
          {t("reseq-mk1.objectives.description")}
          <Slides
            context="projects"
            numSlides={3}
            palette="lightBluePalette"
            translationPath="reseq-mk1.objectives.slides"
          />
        </Paragraph>

        <div className="py-32 h-fit">
          <RotatedBorder
            width="90%"
            height="100%"
            left="5%"
            className="border-light-blue-isaac rotate-[3deg]"
          >
            <div>
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
        </div>
      </div>
    </div>
  )
}
