import Typography from "@atoms/Typography"
import React, { FC } from "react"
import { HistoryItemProps } from "./index.types"

const HistoryItem: FC<HistoryItemProps> = ({ title, children }) => {
  return (
    <>
      <Typography
        variant="h1"
        className="mt-10 text-left laptop:mt-20 text-yellow-isaac"
      >
        {title}
      </Typography>
      <Typography variant="p" className="my-5 text-left laptop:my-10">
        {children}
      </Typography>
    </>
  )
}

export default HistoryItem
