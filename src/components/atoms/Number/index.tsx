import React, { FC } from "react"
import { NumberProps } from "./index.types"

const Number: FC<NumberProps> = ({ number, label }) => {
  return (
    <div className="grid items-center grid-rows-2 font-poppins h-fit">
      <div className="m-auto text-5xl font-extrabold text-center text-white tablet:text-4xl laptop:text-5xl notebook:text-6xl desktop:text-7xl w-fit ">
        {number}
      </div>
      <h3 className="text-[28px] font-semibold uppercase text-yellow-isaac tablet:text-xl laptop:text-2xl notebook:text-3xl desktop:text-4xl w-fit m-auto text-center mt-7">
        {label}
      </h3>
    </div>
  )
}

export default Number
