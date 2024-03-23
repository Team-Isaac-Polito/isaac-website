import Typography from "@atoms/Typography"
import { useTranslation } from "react-i18next"
import React from "react"

const Form = () => {
  const { t } = useTranslation()

  return (
    <div className="mt-10 sm:mt-20 md:mt-40">
      <Typography variant={"h1"} className="text-center">
        {t("contact-us")}
      </Typography>
      <div className="flex justify-center mt-4">
        <iframe
          src="https://tally.so/embed/m6jLY5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="80%" // Adjust width as needed
          height="350"
          className="border-0"
          style={{ border: "none" }} // Remove iframe border
        />
      </div>
    </div>
  )
}

export default Form
