import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import React, { useRef } from "react"

export default function Gallery(): JSX.Element {
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
        <Carousel.Slide className="mx-4 my-auto laptop:mx-8">
          <div className="h-[200px] w-[300px] bg-gray-300 rounded-lg" />
        </Carousel.Slide>
        <Carousel.Slide className="mx-4 my-auto laptop:mx-8">
          <div className="h-[200px] w-[300px] bg-gray-300 rounded-lg" />
        </Carousel.Slide>
        <Carousel.Slide className="mx-4 my-auto laptop:mx-8">
          <div className="h-[200px] w-[300px] bg-gray-300 rounded-lg" />
        </Carousel.Slide>
        <Carousel.Slide className="mx-4 my-auto laptop:mx-8">
          <div className="h-[200px] w-[300px] bg-gray-300 rounded-lg" />
        </Carousel.Slide>
        <Carousel.Slide className="mx-4 my-auto laptop:mx-8">
          <div className="h-[200px] w-[300px] bg-gray-300 rounded-lg" />
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
