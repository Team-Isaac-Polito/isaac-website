import Form from "@atoms/Form"
import Typography from "@atoms/Typography"
import React from "react"
import { useTranslation } from "react-i18next"

export default function Contacts(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className="mt-20">
      <Typography variant={"h1"} className="mx-auto mb-6 laptop:mb-10 w-fit">
        {t("contact-us")}
      </Typography>
      <Typography
        variant="p"
        className="mx-6 text-center tablet:mx-20 laptop:mx-32 desktop:mx-52"
      >
        Ci farebbe piacere sentirti. Compila il form sottostante e ti
        risponderemo il prima possibile!
      </Typography>
      <Form />
    </div>
  )
}
