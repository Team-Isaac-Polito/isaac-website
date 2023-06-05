import React from "react"

const RotatedBorder = ({
  color = "black",
  children,
  vertical = "-3deg",
  height = "100%",
  width = "100%",
  top,
  left = null,
  right = null,
}) => {
  return (
    <div className="relative z-10 m-auto w-fit">
      <div
        className="absolute w-full h-full border-2 border-white border-solid rounded-md -z-10"
        style={{
          borderColor: color,
          transform: `rotate(${vertical})`,
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
