import Typography from "@atoms/Typography"
import { useTranslation } from "react-i18next"
import React from "react"

const Form = () => {
  const { t } = useTranslation()

  return (
    <div className="mt-40">
      <Typography variant={"h1"} className="ml-96">
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
