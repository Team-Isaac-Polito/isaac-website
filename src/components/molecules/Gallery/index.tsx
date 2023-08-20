import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import React, { FC, useRef } from "react"
import GalleryProps from "./index.types"

const Gallery: FC<GalleryProps> = ({ images }) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }))
  return (
    <div>
      <Carousel
        slideSize="33%"
        breakpoints={[
          { maxWidth: 1920, slideSize: "25%" },
          { maxWidth: 1080, slideSize: "35%" },
          { maxWidth: 696, slideSize: "80%" },
        ]}
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
        {images.map((e, i) => {
          return (
            <Carousel.Slide className="mx-4 my-auto laptop:mx-8" key={i}>
              {e.children}
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Gallery
