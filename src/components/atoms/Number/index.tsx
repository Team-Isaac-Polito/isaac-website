import Typography from "@atoms/Typography"
import React, { FC } from "react"
import { NumberProps } from "./index.types"

const Number: FC<NumberProps> = ({ number, label }) => {
  return (
    <div className="grid items-center grid-rows-2 h-fit">
      <Typography
        variant="h1"
        className="m-auto text-5xl font-extrabold text-center text-white tablet:text-4xl laptop:text-5xl notebook:text-6xl desktop:text-7xl w-fit "
      >
        {number}
      </Typography>
      <Typography
        variant="label"
        className="text-[28px] font-semibold uppercase !text-yellow-isaac w-fit m-auto text-center mt-7"
      >
        {label}
      </Typography>
    </div>
  )
}

export default Number
