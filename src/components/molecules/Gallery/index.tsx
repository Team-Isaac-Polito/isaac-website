import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import React, { FC, useMemo } from "react"
import { useMediaQuery } from "@mantine/hooks"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import GalleryProps from "./index.types"

const Gallery: FC<GalleryProps> = ({ images, className }) => {
  const isMobile = useMediaQuery("(max-width: 640px)")
  const autoplay = useMemo(() => Autoplay({ delay: 2500 }), [])
  const carouselLength = images.length

  if (carouselLength === 1) {
    return (
      <div className="flex gap-xl mb-7  justify-center">
        {images.map((e, i) => (
          <img
            key={i}
            src={e.src}
            alt={e.alt}
            className={`desktop:w-[870px] notebook:w-[600px] laptop:w-[420px] w-[320px] m-auto rounded-xl ${className}`}
          />
        ))}
      </div>
    )
  }

  const shouldUseCarousel =
    carouselLength > 3 || (carouselLength > 1 && carouselLength < 4 && isMobile)

  if (!shouldUseCarousel) {
    return (
      <div className="flex gap-xl w-full mb-7 justify-center">
        {images.map((e, i) => (
          <img
            key={i}
            src={e.src}
            alt={e.alt}
            className={`desktop:w-[370px] h-fit notebook:w-[300px] laptop:w-[220px] w-[250px] m-auto rounded-xl ${className}`}
          />
        ))}
      </div>
    )
  }

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%", md: "33%" }}
      slideGap="xl"
      emblaOptions={{ loop: true, slidesToScroll: 1, align: "center" }}
      controlSize={32}
      previousControlIcon={<FaChevronLeft size={16} />}
      nextControlIcon={<FaChevronRight size={16} />}
      styles={{
        control: {
          backgroundColor: "#ffffff",
          color: "#1b1d44",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          border: "none",
          borderRadius: "50%",
        },
        indicator: {
          backgroundColor: "#ffffff",
          border: "2px solid #ffffff",
        },
      }}
      withControls
      withIndicators
      plugins={[autoplay]}
      className="w-full mb-7 ml-1 tablet:ml-0"
    >
      {images.map((e, i) => (
        <Carousel.Slide className={`flex justify-center ${className}`} key={i}>
          <img
            src={e.src}
            alt={e.alt}
            className="desktop:w-[370px] h-full notebook:w-[300px] laptop:w-[220px] w-[300px] mx-auto "
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

export default Gallery
