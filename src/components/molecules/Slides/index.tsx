import Typography from "@atoms/Typography"
import { Carousel } from "@mantine/carousel"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import SlidesProps from "./index.types"

const Slides: FC<SlidesProps> = ({
  context,
  translationPath,
  numSlides,
  src,
  alt,
}) => {
  const slides: Array<React.ReactNode> = []
  const { t } = useTranslation(context)

  for (let i = 1; i <= numSlides; i++) {
    slides.push(
      <Carousel.Slide>
        <div className="grid grid-cols-2 mt-8 h-80">
          <Typography variant="p" className="my-auto text-left">
            {t(translationPath + "." + i)}
          </Typography>
          <img
            src={src}
            alt={alt}
            className="h-40 m-auto tablet:h-60 notebook:h-80"
          />
        </div>
      </Carousel.Slide>
    )
  }

  return (
    <Carousel
      className="tablet:w-[65%]"
      mx="auto"
      loop
      height={400}
      withControls={false}
      initialSlide={1}
      withIndicators
      styles={{
        indicator: {
          width: "20px",
          height: "20px",
          backgroundColor: "white !important",
          transition: "width 200ms ease",
          "&[data-active]": {
            width: "50px",
          },
        },
      }}
    >
      {slides}
    </Carousel>
  )
}

export default Slides
