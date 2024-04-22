import Number from "@atoms/Number"
import Typography from "@atoms/Typography"
import React from "react"
import { useTranslation } from "react-i18next"
import { ReactComponent as Calendar } from "../../../assets/svg/calendar.svg"
import { ReactComponent as People } from "../../../assets/svg/people.svg"
import { ReactComponent as Robot } from "../../../assets/svg/robot.svg"

const Numbers = () => {
  const { t } = useTranslation()

  return (
    <div className="m-auto laptop:mb-16 notebook:mb-20 w-fit desktop:mb-40">
      <Typography
        className="m-auto mb-16 laptop:mb-32 desktop:mb-40 w-fit lightBluePalette"
        variant="h1"
      >
        {t("numbers.title")}
      </Typography>
      <div className="grid grid-rows-3 gap-10 h-fit tablet:grid-rows-1 tablet:grid-cols-3 tablet:gap-5 laptop:gap-0 laptop:gap-x-10 desktop:gap-x-24">
        <div>
          <Calendar className="m-auto mb-2 w-14 h-14 laptop:w-20 laptop:h-20 text-dark-blue-isaac" />
          <Number number={13} label={t("numbers.years")} />
        </div>
        <div>
          <People className="m-auto mb-2 w-14 h-14 laptop:w-20 laptop:h-20 text-dark-blue-isaac" />
          <Number number={"20+"} label={t("numbers.members")} />
        </div>
        <div>
          <Robot className="m-auto mb-2 w-14 h-14 laptop:w-20 laptop:h-20 text-dark-blue-isaac" />
          <Number number={2} label={t("numbers.prototypes")} />
        </div>
      </div>
    </div>
  )
}

export default Numbers
