import Button from "@atoms/Button"
import Typography from "@atoms/Typography"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import HeroProps from "./index.types"

const Hero: FC<HeroProps> = (props) => {
  const { t } = useTranslation()

  return (
    <div
      className="relative py-24 laptop:py-32 desktop:py-40 bg-center bg-no-repeat bg-cover bg-hero"
      role="img"
    >
      <div className="absolute inset-0 bg-[#1A1A1A] opacity-50" />
      <div className="relative z-10 m-auto text-center text-white w-fit">
        <Typography className="max-w-[370px] mx-auto" variant="p">
          {props.subtitle}
        </Typography>
        <Typography className="max-w-[600px] pt-4" variant="hero">
          {props.title}
        </Typography>
        <div className="mt-16">
          <Button isPrimary>{t("contact-us")}</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
