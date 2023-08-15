import classNames from "classnames"
import React, { FC } from "react"
import ParagraphProps from "./index.types"

const Paragraph: FC<ParagraphProps> = ({
  invertSlope,
  isLineTop,
  children,
  className,
  palette,
}) => {
  const slopeParagraph = invertSlope ? "skew-y-3" : "-skew-y-3"
  const slopeContent = invertSlope ? "-skew-y-3" : "skew-y-3"
  const lineMargin = isLineTop ? " mb-7 " : " mt-7 "

  const slope = (
    <div className={palette}>
      <div
        className={
          "py-32 mx-48 text-4xl text-center desktop:py-40 h-fit " + slopeContent
        }
      >
        {children}
      </div>
    </div>
  )

  const line = <div className={"h-3 " + palette + lineMargin} />

  return isLineTop ? (
    <div className={classNames(slopeParagraph, className)}>
      {line}
      {slope}
    </div>
  ) : (
    <div className={classNames(slopeParagraph, className)}>
      {slope}
      {line}
    </div>
  )
}

export default Paragraph
