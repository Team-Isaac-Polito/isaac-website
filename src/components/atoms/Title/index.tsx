import classNames from "classnames"
import React, { FC } from "react"
import TitleProps from "./index.types"

const Title: FC<TitleProps> = ({ children, className }): JSX.Element => {
  return (
    <h1
      className={classNames(
        "text-base tablet:text-xl laptop:text-2xl notebook:text-3xl desktop:text-6xl uppercase font-extrabold",
        className
      )}
    >
      {children}
    </h1>
  )
}

export default Title
