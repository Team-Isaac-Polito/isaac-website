import Button from "@atoms/Button"
import RotatedBorderNew from "@atoms/RotatedBorderNew"
import Title from "@atoms/Title"
import React, { FC } from "react"
import TwoColumnsProps from "./index.types"

const TwoColumns: FC<TwoColumnsProps> = ({
  className,
  isTextLeft,
  text,
  buttonText,
  title,
  children,
  classNameTitle,
  classNameButton,
  classNameBorder,
}) => {
  const textColumn = (
    <div className="m-auto w-[250px] laptop:w-[400px] notebook:w-[400px] desktop:w-[600px]  ">
      <Title className={classNameTitle}>{title}</Title>
      <div className="my-10 ">{text}</div>
      {buttonText === undefined || buttonText === "" ? null : (
        <Button className={classNameButton}>{buttonText}</Button>
      )}
    </div>
  )

  const borderColumn = (
    <RotatedBorderNew className={classNameBorder} invertSlope={false}>
      {children}
    </RotatedBorderNew>
  )

  return (
    <div className={className}>
      <div className="grid w-full h-full grid-cols-2 gap-20 text-2xl">
        {isTextLeft
          ? [textColumn, borderColumn]
          : [
              borderColumn,
              <div key="textRightColumn" className="m-auto text-right w-fit">
                {textColumn}
              </div>,
            ]}
      </div>
    </div>
  )
}
export default TwoColumns
