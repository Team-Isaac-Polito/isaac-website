import HistoryItem from "@atoms/HistoryItem"
import Typography from "@atoms/Typography"
import Timeline from "@molecules/Timeline"
import React, { FC, useRef, useState } from "react"
import HistoryProps from "./index.types"

const History: FC<HistoryProps> = ({ title }) => {
  const [year, setYear] = useState("2002")

  return (
    <>
      <Typography variant="h1" className="mb-10 laptop:mb-20 text-yellow-isaac">
        {title}
      </Typography>
      <div className="block relative top-5 desktop:top-9 h-[4px] bg-white w-11/12 mx-auto" />
      <Timeline
        segments={[
          {
            value: "2002",
            ref: useRef(),
            className: "m-auto",
          },
          {
            value: "2008",
            ref: useRef(),
            className: "m-auto col-start-3",
          },
          {
            value: "2010",
            ref: useRef(),
            className: "m-auto",
          },
          {
            value: "2015",
            ref: useRef(),
            className: "m-auto col-start-7",
          },
          {
            value: "2017",
            ref: useRef(),
            className: "m-auto col-start-9",
          },
          {
            value: "2021",
            ref: useRef(),
            className: "m-auto",
          },
        ]}
        callback={(val) => setYear(val)}
        controlRef={useRef()}
      />
      {year === "2002" && (
        <HistoryItem title={2002}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
          Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
          nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
          ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id
          volutpat eu.
        </HistoryItem>
      )}
      {year === "2008" && (
        <HistoryItem title={2008}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
          Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
          nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
          ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id
          volutpat eu.
        </HistoryItem>
      )}
      {year === "2010" && (
        <HistoryItem title={2010}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
          Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
          nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
          ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id
          volutpat eu.
        </HistoryItem>
      )}
      {year === "2015" && (
        <HistoryItem title={2015}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
          Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
          nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
          ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id
          volutpat eu.
        </HistoryItem>
      )}
      {year === "2017" && (
        <HistoryItem title={2017}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
          Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
          nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
          ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id
          volutpat eu.
        </HistoryItem>
      )}
      {year === "2021" && (
        <HistoryItem title={2021}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
          Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
          nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
          ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id
          volutpat eu.
        </HistoryItem>
      )}
    </>
  )
}

export default History
