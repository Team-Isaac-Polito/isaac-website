import { Carousel } from "@mantine/carousel"
import React, { FC, useState } from "react"
import SegmentedControlProps from "./index.types"

const SegmentedControl: FC<SegmentedControlProps> = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  controlRef,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const onInputChange = (value, index) => {
    setActiveIndex(index)
    callback(value, index)
  }

  return (
    <div
      className="!bg-transparent scroll-mt-20"
      ref={controlRef}
      id="services"
    >
      <Carousel
        slideSize="33%"
        slideGap="xl"
        loop
        withControls={false}
        slidesToScroll={1}
        align="center"
        className="w-full mb-7"
      >
        {segments.map((item, i) => (
          <Carousel.Slide className="mx-4 my-auto laptop:mx-8" key={i}>
            <div
              key={item.value}
              ref={item.ref}
              className={`flex items-center z-20 justify-center text-center rounded-xl m-auto ${
                i === activeIndex
                  ? `${item.className}`
                  : "bg-transparent w-full h-12 tablet:w-[170px] tablet:h-10 laptop:w-[230px] laptop:h-12 notebook:w-[280px] desktop:w-[400px] notebook:h-14 desktop:h-fit m-auto"
              }`}
            >
              <div className="relative flex items-center align-middle w-[274px] h-[43px] tablet:w-[165px] tablet:h-[35px] laptop:w-[224px] laptop:h-[43px] notebook:w-[274px] desktop:w-[395px] desktop:h-32 rounded-[10px] notebook:h-[48px] tablet:m-[2px] desktop:m-1">
                <input
                  type="radio"
                  className="absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
                  value={item.value}
                  id={item.label}
                  name={name}
                  onChange={() => onInputChange(item.value, i)}
                  checked={i === activeIndex}
                />
                <label
                  htmlFor={item.label}
                  className={`p-2 block m-auto duration-400 w-full ease-in-out cursor-pointer ${
                    i === activeIndex
                      ? "text-yellow-isaac scale-100 font-extrabold text-3xl tablet:text-2xl laptop:text-4-5xl notebook:text-5xl desktop:text-6xl"
                      : "text-dark-blue-isaac text-xl laptop:text-3xl notebook:text-4xl desktop:text-5xl font-bold scale-75"
                  }`}
                >
                  {item.label}
                </label>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}

export default SegmentedControl
