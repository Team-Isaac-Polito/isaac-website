import HistoryItem from "@atoms/HistoryItem"

import Typography from "@atoms/Typography"
import Timeline from "@molecules/Timeline"
import { isEn } from "@utils/utilities"
import React, { FC, useRef, useState } from "react"
import { HistoryEvent } from "./index.types"
interface indexProps {
  events: HistoryEvent[]
}

const History: FC<indexProps> = ({ events }: { events: HistoryEvent[] }) => {
  const [year, setYear] = useState(events[0].year)
  return (
    <>
      <Typography variant="h1" className="mb-10 laptop:mb-20 text-yellow-isaac">
        {isEn() ? "History" : "Storia"}
      </Typography>
      <div className="hidden tablet:block relative top-5 desktop:top-9 h-[4px] bg-white w-11/12 mx-auto" />
      <Timeline
        segments={events.map((event) => {
          return {
            value: String(event.year),
            ref: React.createRef(),
          }
        })}
        callback={(val) => setYear(val)}
        controlRef={useRef()}
        defaultIndex={3}
      />
      {events.map((item, idx) =>
        item.year === year ? (
          <HistoryItem key={idx}>
            {isEn() ? item.desc_eng : item.desc_ita}
          </HistoryItem>
        ) : null
      )}
    </>
  )
}

export default History
