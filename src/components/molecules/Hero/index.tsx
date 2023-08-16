import Button from "@atoms/Button"
import Typography from "@atoms/Typography"
import React, { FC } from "react"
import HeroProps from "./index.types"

const Hero: FC<HeroProps> = (props) => {
  return (
    <div className="py-24 bg-black laptop:py-32 h-fit desktop:py-52">
      <div className="m-auto text-center text-white w-fit">
        <Typography className="w-[370px] m-auto" variant="p">
          {props.subtitle}
        </Typography>
        <Typography
          className="w-[600px] laptop:w-[700px] notebook:w-[800px] desktop:w-[900px] pt-10"
          variant="hero"
        >
          {props.title}
        </Typography>
        <div className="m-auto mt-16 w-fit">
          <Button isPrimary>Contattaci</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
