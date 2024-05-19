import StaticGallery from "@atoms/StaticGallery"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React, { FC } from "react"
import StaticEventProps from "./index.types"

const StaticEvent: FC<StaticEventProps> = ({ title, desc, palette }) => {
  return (
    <>
      <Paragraph palette={palette} isLineTop className="my-40">
        <TwoColumns
          title={title}
          palette={palette}
          text={desc}
          isTextLeft
          src={""}
          alt={""}
        />
      </Paragraph>
      <Gallery
        className="tablet:hidden"
        images={[
          {
            children: (
              <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
            ),
          },
          {
            children: (
              <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
            ),
          },
          {
            children: (
              <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
            ),
          },
          {
            children: (
              <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
            ),
          },
        ]}
      />
      <div className="hidden tablet:block">
        <StaticGallery
          images={[
            {
              children: (
                <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
              ),
            },
            {
              children: (
                <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
              ),
            },
            {
              children: (
                <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
              ),
            },
          ]}
        />
        <StaticGallery
          className="mt-32 desktop:mt-40"
          images={[
            {
              children: (
                <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
              ),
            },
            {
              children: (
                <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
              ),
            },
            {
              children: (
                <div className="w-32 m-auto bg-gray-300 notebook:w-52 aspect-square desktop:w-96 rounded-xl" />
              ),
            },
          ]}
        />
      </div>
    </>
  )
}

export default StaticEvent
