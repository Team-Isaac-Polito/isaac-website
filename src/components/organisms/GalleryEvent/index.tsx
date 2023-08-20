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
          <Typography variant="h1" className="mt-10 mb-20">
            {title}
          </Typography>
          <Typography variant="p">{desc}</Typography>
          <div className="my-40">
            <RotatedBorder
              width="90%"
              height="100%"
              left="5%"
              className="border-yellow-isaac rotate-[-3deg]"
            >
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
            </RotatedBorder>
          </div>
        </>
      </Paragraph>
    </>
  )
}

export default GalleryEvent
