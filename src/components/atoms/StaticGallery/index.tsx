import classNames from "classnames"
import React, { FC } from "react"
import StaticGalleryProps from "./index.types"

const StaticGallery: FC<StaticGalleryProps> = ({ images, className }) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-3 mx-10 laptop:mx-48 gap-10 notebook:gap-20",
        className
      )}
    >
      {images.map((e, i) => {
        return <img src={e.src} alt={e.alt} key={i} />
      })}
    </div>
  )
}

export default StaticGallery
