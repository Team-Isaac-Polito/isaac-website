import Typography from "@atoms/Typography"
import React from "react"
import { useTranslation } from "react-i18next"

function Isaac() {
  const { t } = useTranslation("homepage")

  return (
    <div className="mx-6 mt-20 bg-white notebook:mt-32 laptop:mt-24 text-dark-blue-isaac h-fit tablet:mx-20 laptop:mx-28 desktop:mx-52">
      <Typography className="m-auto mb-10 tablet:text-center" variant="h1">
        {t("about.title")}
      </Typography>
      <Typography variant="p" className="tablet:text-center">
        {t("about.description")}
      </Typography>
      <div className="grid grid-rows-3 gap-6 py-20 tablet:grid-rows-1 tablet:grid-cols-3 desktop:gap-20">
        <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] notebook:w-[230px] notebook:h-[230px] desktop:w-[280px] desktop:h-[280px] bg-gray-400 rounded-[10px] m-auto"></div>
        <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] notebook:w-[230px] notebook:h-[230px] desktop:w-[280px] desktop:h-[280px] bg-gray-400 rounded-[10px] m-auto"></div>
        <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] notebook:w-[230px] notebook:h-[230px] desktop:w-[280px] desktop:h-[280px] bg-gray-400 rounded-[10px] m-auto"></div>
      </div>
    </div>
  )
}

export default Isaac
