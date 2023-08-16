import Button from "@atoms/Button"
import RotatedBorderNew from "@atoms/RotatedBorderNew"
import Typography from "@atoms/Typography"
import classNames from "classnames"
import React, { FC } from "react"
import { Trans } from "react-i18next"
import TwoColumnsProps from "./index.types"

const TwoColumns: FC<TwoColumnsProps> = ({
  className,
  isTextLeft,
  textKey,
  text,
  buttonText,
  title,
  children,
  palette,
  classNameBorder,
}) => {
  const textColumn = (
    <div className="align-middle">
      <Typography className={palette} variant="h1">
        {title}
      </Typography>
      <Typography variant="p" className="my-10">
        <Trans i18nKey={textKey} />
        {text}
      </Typography>
      {buttonText === undefined || buttonText === "" ? null : isTextLeft ? (
        <Button className={palette}>{buttonText}</Button>
      ) : (
        <Button className={classNames("float-right", palette)}>
          {buttonText}
        </Button>
      )}
    </div>
  )

  return (
    <div className={className}>
      <div className="grid h-full grid-cols-2 laptop:gap-14 desktop:gap-20">
        {isTextLeft
          ? [
              <div key="textLeftColumn" className="m-auto text-left">
                {textColumn}
              </div>,
              <RotatedBorderNew key="content" className={classNameBorder}>
                {children}
              </RotatedBorderNew>,
            ]
          : [
              <RotatedBorderNew key="content" className={classNameBorder}>
                {children}
              </RotatedBorderNew>,
              <div key="textRightColumn" className="m-auto text-right">
                {textColumn}
              </div>,
            ]}
      </div>
    </div>
  )
}
export default TwoColumns
