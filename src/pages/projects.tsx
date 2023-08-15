import Title from "@atoms/Title"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import reseq from "../assets/ReseQ1.mp4"
import Table from "@molecules/Table"
import Slides from "@molecules/Slides"
import RotatedBorder from "@atoms/RotatedBorder"
import Gallery from "@molecules/Gallery"
import { Trans } from "react-i18next"

export default function Projects(): JSX.Element {
  return (
    <div>
      <div>
        <Title className="text-center py-7 text-dark-blue">Rese.Q Mk1</Title>

        <video width="1920" height="600" autoPlay muted loop>
          <source src={reseq} type="video/mp4" />
        </video>

        <Paragraph palette="bluePalette">
          <TwoColumns
            isTextLeft
            palette="bluePalette"
            title="chi è rese.q mk1"
            textKey="projects.paragraph1.text"
            buttonText="Learn more"
            classNameBorder="bluePalette aspect-[4/5] tablet:h-[500px] desktop:h-[736px]"
          >
            <div
              className="rounded-md bg-gray-500 aspect-[3/4] 
            desktop:h-[666px] tablet:h-[450px]"
            />
          </TwoColumns>
        </Paragraph>

        <div className="py-32 mx-48 h-fit">
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
          <Title className="mb-20 lightBluePalette">obiettivi</Title>
          <Trans i18nKey="projects.paragraph3.text"></Trans>
          <Slides
            numSlides={3}
            palette="lightBluePalette"
            translationPath="projects.paragraph3.slides"
          ></Slides>
        </Paragraph>

        <div className="py-32 h-fit">
          <RotatedBorder
            width="90%"
            height="100%"
            left="5%"
            className="border-light-blue-isaac rotate-[3deg]"
          >
            <div className="w-screen">
              <Gallery />
            </div>
          </RotatedBorder>
        </div>
      </div>
    </div>
  )
}
