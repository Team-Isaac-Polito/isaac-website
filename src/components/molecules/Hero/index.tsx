import Button from "@atoms/Button"
import Typography from "@atoms/Typography"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import HeroProps from "./index.types"

const Hero: FC<HeroProps> = (props) => {
  const { t } = useTranslation()

  return (
    <div className="relative py-24 bg-center bg-no-repeat bg-cover bg-hero laptop:py-32 laptop:h-[500px] notebook:h-[550px] desktop:py-52">
      <div className="bg-[#1e1e1e] w-full laptop:h-[500px] notebook:h-[550px] absolute top-0 opacity-30" />
      <div className="relative z-10 m-auto text-center text-white w-fit">
        <Typography className="w-[370px] m-auto" variant="p">
          {props.subtitle}
        </Typography>
        <Typography
          className="w-[600px] laptop:w-[700px] notebook:w-[800px] desktop:w-[900px] pt-10"
          variant="hero"
        >
          {props.title}
        </Typography>
        <div className="m-auto mt-16 w-fit">
          <Button isPrimary>{t("contact-us")}</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
