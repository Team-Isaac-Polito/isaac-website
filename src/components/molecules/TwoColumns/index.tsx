import Button from "@atoms/Button"
import Typography from "@atoms/Typography"
import React, { FC } from "react"
import { Trans } from "react-i18next"
import TwoColumnsProps from "./index.types"

const TwoColumns: FC<TwoColumnsProps> = ({
  isTextLeft,
  text,
  buttonText,
  title,
  palette,
  src,
  alt,
  href,
}) => {
  return (
    <div className="grid h-full gap-20 tablet:grid-cols-2 desktop:py-20 tablet:gap-5 laptop:gap-10 notebook:gap-10 desktop:gap-20">
      {isTextLeft ? (
        <>
          <div className="m-auto text-center tablet:text-left">
            <Typography className={palette} variant="h1">
              {title}
            </Typography>
            <Typography
              variant="p"
              className="my-5 text-justify laptop:my-10 tablet:text-left"
            >
              <Trans>{text}</Trans>
            </Typography>
            {buttonText === undefined || buttonText === "" ? null : (
              <Button
                className="m-auto border-yellow-isaac hover:bg-yellow-isaac tablet:ml-0"
                href={href}
              >
                {buttonText}
              </Button>
            )}
          </div>
          <img
            src={src}
            alt={alt}
            className="w-56 m-auto laptop:w-72 notebook:w-80 desktop:w-96"
            key="imgLeft"
          />
        </>
      ) : (
        <>
          <div className="m-auto text-center tablet:text-right tablet:hidden">
            <Typography className={palette} variant="h1">
              {title}
            </Typography>
            <Typography
              variant="p"
              className="my-5 text-justify laptop:my-10 tablet:text-right"
            >
              <Trans>{text}</Trans>
            </Typography>
            {buttonText === undefined || buttonText === "" ? null : (
              <Button
                className="m-auto tablet:float-right border-light-blue-isaac hover:bg-light-blue-isaac"
                href={href}
              >
                {buttonText}
              </Button>
            )}
          </div>
          <img
            src={src}
            alt={alt}
            className="w-56 m-auto laptop:w-72 notebook:w-80 desktop:w-96 tablet:hidden"
            key="imgLeft"
          />
          <img
            src={src}
            alt={alt}
            className="hidden w-56 m-auto laptop:w-72 notebook:w-80 desktop:w-96 tablet:block"
            key="imgLeft"
          />
          <div className="hidden m-auto text-right tablet:block">
            <Typography className={palette} variant="h1">
              {title}
            </Typography>
            <Typography variant="p" className="my-5 laptop:my-10">
              <Trans>{text}</Trans>
            </Typography>
            {buttonText === undefined || buttonText === "" ? null : (
              <Button
                className="float-right border-light-blue-isaac hover:bg-light-blue-isaac"
                href={href}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
export default TwoColumns
