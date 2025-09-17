import HistoryItem from "@atoms/HistoryItem"

import Typography from "@atoms/Typography"
import Timeline from "@molecules/Timeline"
import { isEn } from "@utils/utilities"
import React, { FC, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { HistoryEvent } from "./index.types"
interface indexProps {
  events: HistoryEvent[]
}

const History: FC<indexProps> = ({ events }: { events: HistoryEvent[] }) => {
  const { t } = useTranslation("about")
  const [year, setYear] = useState(history[0].year)
  console.log(history)
  return (
    <>
      <Typography variant="h1" className="mb-10 laptop:mb-20 text-yellow-isaac">
        {t("history.title")}
      </Typography>
      <div className="hidden tablet:block relative top-5 desktop:top-9 h-[4px] bg-white w-11/12 mx-auto" />
      <Timeline
        segments={events.map((event) => {
          return {
            value: event.year.toString(),
            ref: React.createRef(),
          }
        })}
        callback={(val) => setYear(val)}
        controlRef={useRef()}
        defaultIndex={3}
      />
      {events.map((item, idx) =>
        item.year === year ? (
          <HistoryItem key={idx}>{isEn() ? "kir" : item.desc_ita}</HistoryItem>
        ) : null
      )}
    </>
  )
}

export default History
