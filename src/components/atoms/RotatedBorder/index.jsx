import React from "react"

const RotatedBorder = ({
  height, width, top, classN
}) => {
  return (
    <div className={classN}>
    <div  className="absolute left-0 right-0 m-auto border-inherit"  style={{ top: "50%", transform: "translateY(-50%)",}}>
      <div
        className="m-auto border-2 border-solid rounded-md "
        style={{
          borderColor: "inherit",
          transform: `rotate(-3deg)`,
          height: height,
          width: width,
          top: top,
        }}>
    </div></div></div>
  )
}

export default RotatedBorder
