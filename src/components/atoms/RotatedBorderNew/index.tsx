import classNames from "classnames"
import React, { FC } from "react"
import RotatedBorderNewProps from "./index.types"

const RotatedBorderNew: FC<RotatedBorderNewProps> = ({
  invertSlope,
  children,
  className,
}) => {
  return invertSlope ? (
    <div className="relative h-full">
      <div
        className={classNames("absolute left-0 right-0 m-auto ", className)}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <div
          className={classNames(
            "m-auto border-4 border-solid rounded-md rotate-[3deg] border-inherit",
            className
          )}
        />
      </div>
      <div
        style={{ top: "50%", transform: "translateY(-50%)" }}
        className={"absolute left-0 right-0 m-auto z-10 w-fit "}
      >
        {children}
      </div>
    </div>
  ) : (
    <div className="relative h-full">
      <div
        className={classNames("absolute left-0 right-0 m-auto ", className)}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <div
          className={classNames(
            "m-auto border-4 border-solid rounded-md -rotate-[3deg] border-inherit",
            className
          )}
        />
      </div>
      <div
        style={{ top: "50%", transform: "translateY(-50%)" }}
        className={"absolute left-0 right-0 m-auto z-10 w-fit "}
      >
        {children}
      </div>
    </div>
  )
}

export default RotatedBorderNew
