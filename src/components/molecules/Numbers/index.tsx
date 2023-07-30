import Number from "@atoms/Number"
import Title from "@atoms/Title"
import React, { FC } from "react"
import { ReactComponent as Calendar } from "../../../assets/svg/calendar.svg"
import { ReactComponent as People } from "../../../assets/svg/people.svg"
import { ReactComponent as Robot } from "../../../assets/svg/robot.svg"
import NumbersProps from "./index.types"

const Numbers: FC<NumbersProps> = () => {
  return (
    <div className="m-auto mb-20 w-fit notebook:mb-40">
      <Title className="m-auto mb-20 notebook:mb-40 w-fit lightBluePalette">
        I nostri numeri
      </Title>
      <div className="grid grid-rows-3 gap-10 h-fit tablet:grid-rows-1 tablet:grid-cols-3 tablet:gap-0 laptop:gap-x-10 desktop:gap-x-24">
        <div>
          <Calendar className="w-20 h-20 m-auto mb-2 text-dark-blue-isaac" />
          <Number number={13} label={"Anni di storia"} />
        </div>
        <div>
          <People className="w-20 h-20 m-auto mb-2 text-dark-blue-isaac" />
          <Number number={"20+"} label={"Membri"} />
        </div>
        <div>
          <Robot className="w-20 h-20 m-auto mb-2 text-dark-blue-isaac" />
          <Number number={2} label={"Prototipi"} />
        </div>
      </div>
    </div>
  )
}

export default Numbers
