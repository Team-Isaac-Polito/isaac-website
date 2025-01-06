import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import React, { FC, useRef } from "react"
import GalleryProps from "./index.types"

const Gallery: FC<GalleryProps> = ({ images, className }) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }))

  // Duplicate images when there are less than 4
  const extendedImages = images.length < 4 ? [...images, ...images] : images

  return (
    <Carousel
      slideSize="33%"
      slideGap="xl"
      loop
      withControls={false}
      slidesToScroll={1}
      align="center"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      className="w-full mb-7"
    >
      {extendedImages.map((e, i) => {
        return (
          <Carousel.Slide className={`my-auto ${className}`} key={i}>
            <img
              src={e.src}
              alt={e.alt}
              className="desktop:w-[370px] h-fit notebook:w-[300px] laptop:w-[220px] w-[170px] m-auto rounded-xl"
            />
          </Carousel.Slide>
        )
      })}
    </Carousel>
  )
}

export default Gallery
