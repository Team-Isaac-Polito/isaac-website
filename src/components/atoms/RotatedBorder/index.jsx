import React from "react"

const RotatedBorder = ({
  height, width, top, color,
}) => {
  return (
    <div  className="absolute left-0 right-0 m-auto"  style={{ top: "50%", transform: "translateY(-50%)",}}>
      <div
        className="m-auto border-2 border-white border-solid rounded-md "
        style={{
          borderColor: color,
          transform: `rotate(-3deg)`,
          height: height,
          width: width,
          top: top,
        }}>
    </div></div>
  )
}

export default RotatedBorder
