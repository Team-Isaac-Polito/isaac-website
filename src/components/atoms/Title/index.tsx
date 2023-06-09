import React, { FC } from "react"
import TitleProps from "./index.types"

const Title: FC<TitleProps> = (props) => {
  return (
    <div className={props!.className}>
      <h1 className="text-[30px] laptop:text-4xl desktop:text-[60px] uppercase font-extrabold">
        {props.children}
      </h1>
    </div>
  )
}

export default Title
