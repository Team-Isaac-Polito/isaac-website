import Typography from "@atoms/Typography"
import React from "react"
import { useTranslation } from "react-i18next"

const Form = () => {
  const { t } = useTranslation()

  return (
    <div className="mt-40">
      <Typography variant={"h1"} className="mx-auto mb-6 laptop:mb-10 w-fit">
        {t("contact-us")}
      </Typography>
      <iframe
        src="https://tally.so/embed/m6jLY5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="60%"
        height="350"
        frameBorder={0}
        className="m-auto"
      />
    </div>
  )
}

export default Form
