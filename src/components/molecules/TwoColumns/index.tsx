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
  return isTextLeft ? (
    <div className={className}>
      <div className="grid w-full h-full grid-cols-2 gap-20">
        <div className="m-auto mx-10 w-fit">
          <Title className={classNameTitle}>{title}</Title>
          <div className="my-10 ">{text}</div>
          {buttonText === undefined || buttonText === "" ? null : (
            <Button className={classNameButton}>{buttonText}</Button>
          )}
        </div>
        <RotatedBorderNew className={classNameBorder} invertSlope={false}>
          {children}
        </RotatedBorderNew>
      </div>
    </div>
  ) : (
    <div className={className}>
      <div className="grid w-full h-full grid-cols-2 gap-20">
        <RotatedBorderNew className={classNameBorder} invertSlope={false}>
          {children}
        </RotatedBorderNew>
        <div className="m-auto mx-10 text-right w-fit">
          <Title className={classNameTitle}>{title}</Title>
          <div className="my-10">{text}</div>
          <div className="w-full pr-0">
            {buttonText === undefined || buttonText === "" ? null : (
              <Button className={classNameButton}>{buttonText}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default TwoColumns
