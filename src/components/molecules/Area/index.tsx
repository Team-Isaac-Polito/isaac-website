import Typography from "@atoms/Typography"
import { Carousel } from "@mantine/carousel"
import React, { FC, useState } from "react"
import { ReactComponent as LogoLK } from "../../../assets/svg/linkedinButton.svg"
import AreaProps from "./index.types"

const Area: FC<AreaProps> = ({ desc, members, init }) => {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <div>
      <Typography
        variant="p"
        className="m-auto mx-20 text-center notebook:mt-10 laptop:mt-14 laptop:mx-28 w-fit"
      >
        {desc}
      </Typography>

      <Carousel
        slideSize="20%"
        breakpoints={[
          { maxWidth: 1920, slideSize: "20%" },
          { maxWidth: 1080, slideSize: "35%" },
          { maxWidth: 696, slideSize: "60%" },
        ]}
        slideGap="xl"
        withControls={false}
        slidesToScroll={1}
        align="center"
        className="w-5/6 m-auto mb-7"
        initialSlide={init}
      >
        {members.map((e, i) => {
          return (
            <Carousel.Slide
              className="p-0 my-auto mt-16 laptop:mt-24 notebook:mt-40"
              key={i}
            >
              <div
                onMouseEnter={() => setShowContacts(true)}
                onMouseLeave={() => setShowContacts(false)}
                className="m-auto w-fit"
              >
                {showContacts && (
                  <div className="absolute z-20 text-black right-3 top-3 hover:text-yellow-isaac">
                    <a
                      href={e.linkedinPath}
                      rel="external noreferrer"
                      target="_blank"
                    >
                      <LogoLK className="block mx-auto rounded-[10px] w-8" />
                    </a>
                  </div>
                )}
                {e.children}
                <Typography
                  variant="label"
                  className="m-auto mt-10 font-semibold text-center w-36 text-yellow-isaac notebook:w-44"
                >
                  {e.name}
                </Typography>
              </div>
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Area
