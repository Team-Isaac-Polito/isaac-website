import RotatedBorder from "@atoms/RotatedBorder"
import classNames from "classnames"
import React, { FC } from "react"
import StaticGalleryProps from "./index.types"

const StaticGallery: FC<StaticGalleryProps> = ({ images, className }) => {
  return (
    <RotatedBorder
      width="85%"
      top="15%"
      height="70%"
      left="7.5%"
      className="border-dark-blue-isaac rotate-[-3deg]"
    >
      <div
        className={classNames(
          "grid grid-cols-3 mx-10 laptop:mx-48 gap-10 notebook:gap-20",
          className
        )}
      >
        {images.map((e, i) => {
          return <div key={i}>{e.children}</div>
        })}
      </div>
    </RotatedBorder>
  )
}

export default StaticGallery
