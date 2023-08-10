import { Carousel } from "@mantine/carousel"
import { rem } from "@mantine/core"
import TwoColumns from "@molecules/TwoColumns"
import Autoplay from "embla-carousel-autoplay"
import React, { useRef } from "react"
import { FC } from "react"
import SlidesProps from "./index.types"
import { useTranslation } from "react-i18next"

const Slides: FC<SlidesProps> = ({ translationPath, numSlides, palette }) => {
  const { t } = useTranslation()
  const autoplay = useRef(Autoplay({ delay: 6000 }))
  const slides: Array<React.ReactNode> = []

  for (let i = 1; i <= numSlides; i++) {
    slides.push(
      <Carousel.Slide>
        <TwoColumns
          className="h-[500px]"
          isTextLeft
          palette={palette}
          title=""
          text={t(translationPath + "." + i)}
          classNameBorder={"w-[400px] h-[330px]" + " " + palette}
        >
          <div className="bg-gray-300 w-[360px] h-[293px]"></div>
        </TwoColumns>
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
            width: rem(20),
            height: rem(20),
            border: "solid 10px white",
            transition: "width 200ms ease",
            "&[data-active]": {
              width: rem(50),
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
