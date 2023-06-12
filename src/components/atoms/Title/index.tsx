import React, { forwardRef } from "react"
import TitleProps from "./index.types"
import classNames from "classnames"

const Title = forwardRef<HTMLAnchorElement, TitleProps>(
  ({ children, className, palette }): JSX.Element => {
    return (
      <div className="text-[30px] laptop:text-4xl desktop:text-[60px] uppercase font-extrabold">
        <h1
          className={
            "text-base tablet:text-xl laptop:text-2xl notebook:text-3xl font-extrabold " +
            className +
            " " +
            palette
          }
        >
          {children}
        </h1>
      </div>
    )
  }
)

export default Title
