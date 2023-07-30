import classNames from "classnames"
import React, { FC } from "react"
import RotatedBorderProps from "./index.types"

const RotatedBorder: FC<RotatedBorderProps> = ({
  children,
  height = "100%",
  width = "100%",
  top,
  left = null,
  right = null,
  className,
}) => {
  return (
    <div className="relative z-10 m-auto w-fit">
      <div
        className={classNames(
          "absolute w-full h-full border-4 border-solid rounded-2xl -z-10",
          className
        )}
        style={{
          height: height,
          width: width,
          top: top,
          left: left,
          right: right,
        }}
      />
      {children}
    </div>
  )
}

export default RotatedBorder
