import Button from "@atoms/Button"
import Typography from "@atoms/Typography"
import React from "react"
import { Trans, useTranslation } from "react-i18next"

function Isaac() {
  const { t } = useTranslation("homepage")

  return (
    <div className="mx-6 mt-20 bg-white notebook:mt-32 laptop:mt-24 text-dark-blue-isaac h-fit tablet:mx-20 laptop:mx-28 desktop:mx-52">
      <Typography className="m-auto mb-10 tablet:text-center" variant="h1">
        {t("about.title")}
      </Typography>
      <Typography variant="p" className="tablet:text-center">
        <Trans i18nKey={t("about.description")} />
      </Typography>
      <div className="m-auto mt-10 mb-16 laptop:mb-0 laptop:mt-16 w-fit">
        <Button
          className="border-light-blue-isaac hover:bg-light-blue-isaac"
          href="/about"
        >
          {t("scopri di più")}
        </Button>
      </div>
    </div>
  )
}

export default Isaac
