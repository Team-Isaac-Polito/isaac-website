import Button from "@atoms/Button"
import RotatedBorderNew from "@atoms/RotatedBorderNew"
import Typography from "@atoms/Typography"
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
      {buttonText === undefined || buttonText === "" ? null : (
        <div className="text-center mt-4">
          <Button className={palette}>{buttonText}</Button>
        </div>
      )}
    </div>
  )

  return (
    <div className={className}>
      <div className="grid gap-5 tablet:grid-cols-1 laptop:grid-cols-2">
        {isTextLeft ? (
          <>
            <div className="text-center tablet:text-left">{textColumn}</div>
            <RotatedBorderNew className={classNameBorder}>
              {children}
            </RotatedBorderNew>
          </>
        ) : (
          <>
            <RotatedBorderNew className={classNameBorder}>
              {children}
            </RotatedBorderNew>
            <div className="text-center tablet:text-right">{textColumn}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default TwoColumns
