import { Carousel } from "@mantine/carousel"
import '@mantine/carousel/styles.css'
import Autoplay from "embla-carousel-autoplay"
import React, { FC, useRef } from "react"
import GalleryProps from "./index.types"

const Gallery: FC<GalleryProps> = ({ images, className }) => {
  const enableCarouselFeatures = images.length > 3
  const autoplay = useRef(Autoplay({ delay: 2500 }))
  if (!enableCarouselFeatures) {
    return (
      <div className="flex gap-xl w-full mb-7 justify-center">
        {images.map((e, i) => (
          <img
            key={i}
            src={e.src}
            alt={e.alt}
            className={`desktop:w-[370px] h-fit notebook:w-[300px] laptop:w-[220px] w-[170px] m-auto rounded-xl ${className}`}
          />
        ))}
      </div>
    )
  }
  return (
    <Carousel
      orientation="horizontal"
      emblaOptions={{ loop: true, align: "center", slidesToScroll: 1, axis: "x" }}
      slideSize={{
      base: "100%",   // mobile
      sm: "100%",     // tablet (Mantine sm ≈ 640px)
      md: "50%",      // Mantine md ≈ 768px
      lg: "33.333%",  // Mantine lg ≈ 1024px
      xl: "33.333%",  // Mantine xl ≈ 1280px+
    }}
      slideGap={{
        base: "xs",
        sm: "xs",
        md: "lg",
        lg: "xl",
        xl: "xl",}}
      styles={{
        control: {
          background: "#ffffff0",
          color: "#fff",
          boxShadow: "0 2px 8px rgb(255, 255, 255)",
          border: "none",
          borderRadius: "50%",
          "&:hover": {
            background: "#2196f3",
          },
        },
        indicator: {
          background: "#ffffff",
          border: "2px solid #ffffff",
        },
      }}
      withControls
      withIndicators
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
      className="w-full mb-7"
    >
      {images.map((e, i) => {
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
