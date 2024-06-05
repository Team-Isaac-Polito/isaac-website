import HistoryItem from "@atoms/HistoryItem"
import Typography from "@atoms/Typography"
import Timeline from "@molecules/Timeline"
import React, { FC, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { HistoryEvent } from "./index.types"

const History: FC = () => {
  const { t } = useTranslation("about")
  const [year, setYear] = useState("2017")
  const events = t("history.events", { returnObjects: true }) as HistoryEvent[]

  return (
    <>
      <Typography variant="h1" className="mb-10 laptop:mb-20 text-yellow-isaac">
        {t("history.title")}
      </Typography>
      <div className="hidden tablet:block relative top-5 desktop:top-9 h-[4px] bg-white w-11/12 mx-auto" />
      <Timeline
        segments={events.map((event) => {
          return {
            value: event.year,
            ref: React.createRef(),
          }
        })}
        callback={(val) => setYear(val)}
        controlRef={useRef()}
        defaultIndex={2}
      />
      {(t("history.events", { returnObjects: true }) as HistoryEvent[]).map(
        (item, idx) =>
          item.year === year ? (
            <HistoryItem key={idx}>{item.description}</HistoryItem>
          ) : null
      )}
    </>
  )
}

export default History
