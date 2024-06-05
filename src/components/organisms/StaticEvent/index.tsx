import StaticGallery from "@atoms/StaticGallery"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React, { FC } from "react"
import StaticEventProps from "./index.types"

const StaticEvent: FC<StaticEventProps> = ({
  title,
  desc,
  palette,
  images,
}) => {
  return (
    <>
      <Paragraph palette={palette} isLineTop className="my-40">
        <TwoColumns title={title} palette={palette} text={desc} isTextLeft />
      </Paragraph>
      <Gallery className="tablet:hidden" images={images} />
      <div className="hidden tablet:block">
        <StaticGallery images={images} />
      </div>
    </>
  )
}

export default StaticEvent
