import Button from "@atoms/Button"
import RotatedBorderNew from "@atoms/RotatedBorderNew"
import Title from "@atoms/Title"
import classNames from "classnames"
import React, { FC } from "react"
import TwoColumnsProps from "./index.types"
import { Trans } from "react-i18next"

const TwoColumns: FC<TwoColumnsProps> = ({
  className,
  isTextLeft,
  text,
  textKey,
  buttonText,
  title,
  children,
  palette,
  classNameBorder,
}) => {
  const textColumn = (
    <div className={className}>
      <Title className={palette}>{title}</Title>
      <div className="my-10 text-xl font-normal tablet:text-base laptop:text-2xl notebook:text-3xl desktop:text-5xl desktop:leading-tight">
        <Trans i18nKey={textKey}></Trans>
        {text}
      </div>
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
      <div className="grid grid-cols-2 gap-20">
        {isTextLeft
          ? [
              <div key="textRightColumn" className="m-auto text-left">
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
