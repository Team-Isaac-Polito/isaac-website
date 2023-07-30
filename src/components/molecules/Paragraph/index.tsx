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
  return invertSlope ? (
    isLineTop ? (
      <div className={classNames("skew-y-3", className)}>
        <div className={classNames("h-3 mb-7", palette)} />
        <div className={palette}>
          <div className="py-32 mx-48 text-4xl text-center -skew-y-3 desktop:py-40 h-fit">
            {children}
          </div>
        </div>
      </div>
    ) : (
      <div className={classNames("skew-y-3", className)}>
        <div className={palette}>
          <div className="py-32 mx-48 text-4xl text-center -skew-y-3 desktop:py-40 h-fit">
            {children}
          </div>
        </div>
        <div className={classNames("h-3 mt-7", palette)} />
      </div>
    )
  ) : isLineTop ? (
    <div className={classNames("-skew-y-3", className)}>
      <div className={classNames("h-3 mb-7", palette)} />
      <div className={palette}>
        <div className="py-32 mx-48 text-4xl text-center skew-y-3 desktop:py-40 h-fit">
          {children}
        </div>
      </div>
    </div>
  ) : (
    <div className={classNames("-skew-y-3", className)}>
      <div className={palette}>
        <div className="py-32 mx-48 text-4xl text-center skew-y-3 desktop:py-40 h-fit">
          {children}
        </div>
      </div>
      <div className={classNames("h-3 mt-7", palette)} />
    </div>
  )
}

export default Paragraph
