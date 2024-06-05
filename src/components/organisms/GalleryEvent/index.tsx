import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import React, { FC } from "react"
import GalleryEventProps from "./index.types"

const GalleryEvent: FC<GalleryEventProps> = ({
  title,
  desc,
  palette,
  images,
}) => {
  return (
    <>
      <Paragraph palette={palette} className="relative my-40">
        <Typography
          variant="h1"
          className="mb-7 laptop:mb-10 desktop:mb-20 desktop:mt-10"
        >
          {title}
        </Typography>
        <Typography variant="p">{desc}</Typography>
        <div className="my-14 laptop:mt-32 laptop:mb-5 desktop:my-40">
          <Gallery images={images} />
        </div>
      </Paragraph>
    </>
  )
}

export default GalleryEvent
