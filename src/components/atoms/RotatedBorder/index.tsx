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
    <div className="relative m-auto w-fit">
      <div
        className={classNames(
          "absolute w-full h-full border-4 border-solid rounded-2xl",
          className
        )}
        style={{
          height: height,
          width: width,
          top: top,
          left: left,
          right: right,
          zIndex: -1,
        }}
      />
      {children}
    </div>
  )
}

export default RotatedBorder
