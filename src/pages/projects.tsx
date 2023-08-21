import RotatedBorder from "@atoms/RotatedBorder"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import Slides from "@molecules/Slides"
import Table from "@molecules/Table"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import { Trans } from "react-i18next"
import reseq from "../assets/ReseQ1.mp4"

export default function Projects(): JSX.Element {
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
            title="chi è rese.q mk1"
            textKey="projects.paragraph1.text"
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
            title="caratteristiche"
            textKey="projects.paragraph2.text"
          >
            <div className="">
              <Table
                translationPath="projects.paragraph2.datasheet"
                palette="white"
                rows={8}
              />
            </div>
          </TwoColumns>
        </div>

        <Paragraph invertSlope palette="lightBluePalette">
          <Typography className="mb-10 lightBluePalette" variant="h1">
            obiettivi
          </Typography>
          <Trans i18nKey="projects.paragraph3.text"></Trans>
          <Slides
            numSlides={3}
            palette="lightBluePalette"
            translationPath="projects.paragraph3.slides"
          />
        </Paragraph>

        <div className="py-32 h-fit">
          <RotatedBorder
            width="90%"
            height="90%"
            left="5%"
            top="5%"
            className="border-light-blue-isaac rotate-[3deg]"
          >
            <div className="w-screen">
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
          </RotatedBorder>
        </div>
      </div>
    </div>
  )
}
