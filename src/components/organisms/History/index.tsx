import HistoryItem from "@atoms/HistoryItem"
import Typography from "@atoms/Typography"
import Timeline from "@molecules/Timeline"
import React, { FC, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { HistoryEvent } from "./index.types"




const History: FC = () => {
  const { t } = useTranslation("about")

  const [year, setYear] = useState("2002")

  const events = t("history.events", { returnObjects: true }) as HistoryEvent[]

  return (
    <>
      <Typography variant="h1" className="mb-20 text-yellow-isaac">
        {t("history.title")}
      </Typography>
      <div className="block relative top-9 h-[4px] bg-white w-11/12 mx-auto" />
      <Timeline
        segments={events.map((event) => {
          return {
            value: event.year,
            ref: React.createRef(),
            className: "m-auto", //TODO: Add dynamic spacing
          }
        
        })}
        callback={(val) => setYear(val)}
        controlRef={useRef()}
      />
      {(t("history.events", {returnObjects: true}) as HistoryEvent[]).map((item, idx) => {
        if (item.year === year) {
          return (
            <HistoryItem key={idx} title={item.year}>
              {item.description}
            </HistoryItem>
          );
        }
        return null;
      })}
    </>
  )
}

export default History
