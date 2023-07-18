import Button from "@atoms/Button"
import React, { FC } from "react"
import HeroProps from "./index.types"

const Hero: FC<HeroProps> = (props) => {
  return (
    <div className="bg-black h-fit py-52">
      <div className="m-auto text-center text-white w-fit">
        <h3 className="w-[370px] m-auto text-3xl">{props.subtitle}</h3>
        <h1 className="text-[70px] leading-[82px] font-semibold w-[590px] pt-10">
          {props.title}
        </h1>
        <div className="m-auto mt-16 w-fit">
          <Button isPrimary>Contattaci</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
