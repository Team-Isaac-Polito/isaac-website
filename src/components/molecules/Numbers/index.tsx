import Number from "@atoms/Number"
import Typography from "@atoms/Typography"
import React from "react"
import { useTranslation } from "react-i18next"
import { ReactComponent as Calendar } from "../../../assets/svg/calendar.svg"
import { ReactComponent as People } from "../../../assets/svg/people.svg"
import { ReactComponent as Robot } from "../../../assets/svg/robot.svg"

const Numbers = () => {
  const { t } = useTranslation("homepage")

  return (
    <div className="w-3/4 m-auto laptop:my-8 notebook:my-16 desktop:my-32">
      <Typography
        className="m-auto mb-16 laptop:mb-32 desktop:mb-40 w-fit lightBluePalette"
        variant="h1"
      >
        {t("numbers.title")}
      </Typography>
      <div className="grid grid-rows-3 gap-10 h-fit tablet:grid-rows-1 tablet:grid-cols-3 tablet:gap-5 laptop:gap-0 laptop:gap-x-10 desktop:gap-x-24">
        <div>
          <Calendar className="m-auto mb-2 w-14 h-14 laptop:w-20 laptop:h-20 text-dark-blue-isaac" />
          <Number
            number={t("numbers.first.value")}
            label={t("numbers.first.title")}
          />
        </div>
        <div>
          <People className="m-auto mb-2 w-14 h-14 laptop:w-20 laptop:h-20 text-dark-blue-isaac" />
          <Number
            number={t("numbers.second.value")}
            label={t("numbers.second.title")}
          />
        </div>
        <div>
          <Robot className="m-auto mb-2 w-14 h-14 laptop:w-20 laptop:h-20 text-dark-blue-isaac" />
          <Number
            number={t("numbers.third.value")}
            label={t("numbers.third.title")}
          />
        </div>
      </div>
    </div>
  )
}

export default Numbers
