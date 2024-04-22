import { Carousel } from "@mantine/carousel"
import TwoColumns from "@molecules/TwoColumns"
import Autoplay from "embla-carousel-autoplay"
import React, { FC, useRef } from "react"
import { useTranslation } from "react-i18next"
import SlidesProps from "./index.types"

const Slides: FC<SlidesProps> = ({
  context,
  translationPath,
  numSlides,
  palette,
}) => {
  const autoplay = useRef(Autoplay({ delay: 6000 }))
  const slides: Array<React.ReactNode> = []
  const { t } = useTranslation(context)

  for (let i = 1; i <= numSlides; i++) {
    slides.push(
      <Carousel.Slide>
        <TwoColumns
          isTextLeft
          palette={palette}
          title=""
          text={t(translationPath + "." + i)}
          src={""}
          alt={""}
        />
      </Carousel.Slide>
    )
  }

  return (
    <div>
      <Carousel
        className="w-[65%] h-fit"
        mx="auto"
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        withControls={false}
        withIndicators
        styles={{
          indicator: {
            width: "20px",
            height: "20px",
            border: "solid 10px white",
            transition: "width 200ms ease",
            "&[data-active]": {
              width: "50px",
            },
          },
        }}
      >
        {slides}
      </Carousel>
    </div>
  )
}

export default Slides
