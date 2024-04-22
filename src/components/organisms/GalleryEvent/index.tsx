import RotatedBorder from "@atoms/RotatedBorder"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import React, { FC } from "react"
import GalleryEventProps from "./index.types"

const GalleryEvent: FC<GalleryEventProps> = ({ title, desc, palette }) => {
  return (
    <>
      <Paragraph palette={palette} className="relative my-40">
        <>
          <Typography
            variant="h1"
            className="mb-7 laptop:mb-10 desktop:mb-20 desktop:mt-10"
          >
            {title}
          </Typography>
          <Typography variant="p">{desc}</Typography>
          <div className="my-14 laptop:mt-32 laptop:mb-5 desktop:my-40">
            <RotatedBorder
              width="90%"
              height="90%"
              left="5%"
              top="5%"
              className="border-yellow-isaac rotate-[-3deg]"
            >
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
            </RotatedBorder>
          </div>
        </>
      </Paragraph>
    </>
  )
}

export default GalleryEvent
