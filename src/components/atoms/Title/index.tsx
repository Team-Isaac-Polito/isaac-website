import classNames from "classnames"
import React, { FC } from "react"
import TitleProps from "./index.types"

const Title: FC<TitleProps> = ({ children, className }): JSX.Element => {
  return (
    <h1
      className={classNames(
        "font-extrabold text-[26px] tablet:text-2xl laptop:text-4xl notebook:text-5xl desktop:text-7xl uppercase",
        className
      )}
    >
      {children}
    </h1>
  )
}

export default Title
