import img from "@assets/about/AboutUS_1.png"
import React from "react"
import Typography from "@atoms/Typography"
import Hero from "@molecules/Hero"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import Areas from "@organisms/Areas"
import History from "@organisms/History"
import { useHistory } from "@organisms/History/useHistory"
import { Helmet } from "react-helmet-async"
import { Trans, useTranslation } from "react-i18next"
import { FaSpinner } from "react-icons/fa"
export default function About(): JSX.Element {
  const { t } = useTranslation("about")
  const { isLoading, history } = useHistory()
  if (isLoading) return <FaSpinner></FaSpinner>
  if(!isLoading) console.log(history)
  
  return (
    <>
      <Helmet>
        <title>Team Isaac /About</title>
        <meta name="description" content="Learn more about Team-Isaac" />
      </Helmet>
      <Hero title={"About"} />
      <Paragraph className="notebook:my-32" palette="whitePalette">
        <TwoColumns
          isTextLeft
          palette="whitePalette"
          title={t("title")}
          text={t("description")}
          src={img}
          alt={"immagine di esempio"}
        />
      </Paragraph>
      <Paragraph className="laptop:my-32" palette="bluePalette">
        <History events={history}/>
      </Paragraph>
      <Paragraph className="notebook:my-32" palette="whitePalette">
        <Typography variant="h1" className="mb-20 text-light-blue-isaac">
          {t("areas.title")}
        </Typography>
        <Typography variant="p">
          <Trans i18nKey={t("areas.description")} />
        </Typography>
        <div className="mt-4">
          <Areas />
        </div>
      </Paragraph>
    </>
  )
}
