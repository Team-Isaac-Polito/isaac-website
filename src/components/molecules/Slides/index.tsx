import { Carousel } from "@mantine/carousel"
import TwoColumns from "@molecules/TwoColumns"
import Autoplay from "embla-carousel-autoplay"
import React, { useRef } from "react"
import { FC } from "react"
import SlidesProps from "./index.types"

const Slides: FC<SlidesProps> = ({ translationPath, numSlides, palette }) => {
  const autoplay = useRef(Autoplay({ delay: 6000 }))
  const slides: Array<React.ReactNode> = []

  for (let i = 1; i <= numSlides; i++) {
    slides.push(
      <Carousel.Slide>
        <TwoColumns
          className="h-[190px] tablet:h-[200px] laptop:h-[250px] notebook:h-[350px] desktop:h-[450px]"
          isTextLeft
          palette={palette}
          title=""
          textKey={translationPath + "." + i}
          classNameBorder={
            "tablet:w-[130px] laptop:w-[200px] notebook:w-[270px] desktop:w-[400px] aspect-[7/6] " +
            " " +
            palette
          }
        >
          <div className="bg-gray-300 tablet:w-[110px] laptop:w-[180px] notebook:w-[240px] desktop:w-[340px] aspect-[6/5]"></div>
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
