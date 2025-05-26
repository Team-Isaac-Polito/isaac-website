import Form from "@atoms/Form"
import Typography from "@atoms/Typography"
import React from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

export default function Contacts(): JSX.Element {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Team Isaac /Contact-us</title>
        <meta name="description" content="Team Isaac contact form" />
      </Helmet>
      <div className="mt-20">
        <Typography variant={"h1"} className="mx-auto mb-6 laptop:mb-10 w-fit">
          {t("contact-us")}
        </Typography>
        <Typography
          variant="p"
          className="mx-6 text-center tablet:mx-20 laptop:mx-32 desktop:mx-52"
        >
          {t(
            "Ci farebbe piacere sentirti. Compila il form sottostante e ti risponderemo il prima possibile!"
          )}
        </Typography>
        <Form />
      </div>
    </>
  )
}
