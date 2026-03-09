import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Typography from "@atoms/Typography"

interface SponsorInterface {
  id: number
  name: string
  url: string
  logo: string
}

const Sponsors = () => {
  const { t } = useTranslation("homepage")
  const [sponsors, setSponsors] = React.useState<SponsorInterface[]>([])

  useEffect(() => {
    async function getSponsors() {
      const data = await fetch("https://cms.teamisaac.it/items/sponsor")
      const sponsorsData = await data.json()
      setSponsors(sponsorsData.data)
    }
    getSponsors()
  }, [sponsors])

  return (
    <div className="mx-6 mt-20 bg-white notebook:mt-32 laptop:mt-24 text-dark-blue-isaac h-fit tablet:mx-20 laptop:mx-28 desktop:mx-52">
      <Typography className="m-auto mb-10 text-center" variant="h1">
        {t("sponsors")}
      </Typography>
      <div className="flex flex-wrap justify-center gap-4">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center justify-center w-full h-full max-w-xs max-h-64 tablet:max-w-[300px] tablet:max-h-[200px]">
              <img
                src={"https://cms.teamisaac.it/assets/" + sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full justify-center"
              />
            </div>
            <span className="mt-2 text-center">{sponsor.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Sponsors
