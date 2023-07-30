import Button from "@atoms/Button"
import Title from "@atoms/Title"
import React, { FC } from "react"
import HeroProps from "./index.types"

const Hero: FC<HeroProps> = (props) => {
  return (
    <div className="bg-black h-fit py-52">
      <div className="m-auto text-center text-white w-fit">
        <h3 className="w-[370px] m-auto text-3xl">{props.subtitle}</h3>
        <Title className="w-[500px] desktop:w-[590px] pt-10">
          {props.title}
        </Title>
        <div className="m-auto mt-16 w-fit">
          <Button isPrimary>Contattaci</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
