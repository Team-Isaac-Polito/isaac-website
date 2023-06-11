import React, { FC } from "react"
import RotatedBorderNewProps from "./index.types"

const RotatedBorderNew: FC<RotatedBorderNewProps> = (props) => {
  return props.invertSlope ? (
    <div className="relative h-full">
      <div
        className={"absolute left-0 right-0 m-auto " + props.palette}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <div
          className={
            "m-auto border-2 border-solid rounded-md rotate-[3deg] border-inherit" +
            props.borderSize
          }
        ></div>
      </div>
      <div
        style={{ top: "50%", transform: "translateY(-50%)" }}
        className={"absolute left-0 right-0 m-auto z-10 w-fit "}
      >
        {props.children}
      </div>
    </div>
  ) : (
    <div className="relative h-full">
      <div
        className={"absolute left-0 right-0 m-auto " + props.palette}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <div
          className={
            "m-auto border-2 border-solid rounded-md -rotate-[3deg] border-inherit" +
            props.borderSize
          }
        ></div>
      </div>
      <div
        style={{ top: "50%", transform: "translateY(-50%)" }}
        className={"absolute left-0 right-0 m-auto z-10 w-fit "}
      >
        {props.children}
      </div>
    </div>
  )
}

export default RotatedBorderNew
