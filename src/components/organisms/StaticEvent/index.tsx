import StaticGallery from "@atoms/StaticGallery"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React, { FC } from "react"
import StaticEventProps from "./index.types"

const StaticEvent: FC<StaticEventProps> = ({
  title,
  button,
  desc,
  palette,
}) => {
  return (
    <>
      <Paragraph palette={palette} isLineTop className="my-40">
        <TwoColumns
          title={title}
          palette={palette}
          buttonText={button}
          text={desc}
          classNameBorder="tablet:w-[300px] tablet:h-[400px] desktop:w-[619px] desktop:h-[729px] bluePalette"
          isTextLeft
        >
          <div className="rounded-md bg-gray-300 desktop:w-[547px] desktop:h-[666px] tablet:w-[240px] tablet:h-[360px]" />
        </TwoColumns>
      </Paragraph>
      <StaticGallery
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
        ]}
      />
      <StaticGallery
        className="mt-40"
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
        ]}
      />
    </>
  )
}

export default StaticEvent
