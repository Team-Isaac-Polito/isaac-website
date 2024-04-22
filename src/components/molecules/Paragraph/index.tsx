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
  const lineMargin = isLineTop ? " mb-5 desktop:mb-7 " : " mt-5 desktop:mt-7 "

  const slope = (
    <div className={palette}>
      <div
        className={classNames(
          "py-20 laptop:py-14 text-4xl text-center -skew-y-3 desktop:py-16 mx-6 tablet:mx-14 laptop:mx-32 notebook:mx-40 desktop:mx-48 h-fit",
          slopeContent
        )}
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
