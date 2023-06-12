import React, { FC } from "react"
import ParagraphProps from "./index.types"
import classNames from "classnames"

const Paragraph: FC<ParagraphProps> = ({
  invertSlope,
  isStart,
  children,
  className,
  classNameDiv,
}) => {
  return invertSlope ? (
    isStart ? (
      <div className={classNames("skew-y-3 h-fit", classNameDiv)}>
        <div className={classNames("py-[10px]", className)} />
        <div className="bg-white py-[10px]" />
        <div className={className}>
          <div className="-skew-y-3 py-[50px]">{children}</div>
        </div>
      </div>
    ) : (
      <div className={classNames("skew-y-3", classNameDiv)}>
        <div className={className}>
          <div className="-skew-y-3 py-[50px]">{children}</div>
        </div>
        <div className="bg-white py-[10px]" />
        <div className={classNames("py-[10px]", className)} />
      </div>
    )
  ) : isStart ? (
    <div className={classNames("-skew-y-3 h-fit", classNameDiv)}>
      <div className={classNames("py-[10px]", className)} />
      <div className="bg-white py-[10px]" />
      <div className={className}>
        <div className="skew-y-3 py-[50px]">{children}</div>
      </div>
    </div>
  ) : (
    <div className={classNames("-skew-y-3 ", classNameDiv)}>
      <div className={className}>
        <div className="skew-y-3 py-[50px]">{children}</div>
      </div>
      <div className="bg-white py-[10px]" />
      <div className={classNames("py-[10px]", className)} />
    </div>
  )
}

export default Paragraph
