import Button from "@atoms/Button"
import Typography from "@atoms/Typography"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import FotoAssociazione from "../../../assets/FotoAssociazione.png"
import HeroProps from "./index.types"

const Hero: FC<HeroProps> = (props) => {
  const { t } = useTranslation()

  return (
    <div className="relative">
      <img
        alt="foto-associativa"
        src={FotoAssociazione}
        className="opacity-60 desktop:w-screen absolute object-cover w-[150%] h-full -z-20"
      />
      <div className="z-10 py-20 ml-6 text-white laptop:py-32 notebook:py-40 desktop:py-72 tablet:m-auto tablet:text-center w-fit">
        <Typography
          className="max-w-[180px] tablet:max-w-[280px] notebook:max-w-fit"
          variant="p"
        >
          {props.subtitle}
        </Typography>
        <Typography className="pt-4 notebook:pt-10" variant="hero">
          {props.title}
        </Typography>
        <div className="mt-10 tablet:mx-auto notebook:mt-16 w-fit">
          <Button isPrimary>{t("contact-us")}</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
