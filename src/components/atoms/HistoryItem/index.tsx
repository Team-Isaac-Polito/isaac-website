import Typography from "@atoms/Typography"
import React, { FC } from "react"
import { HistoryItemProps } from "./index.types"

const HistoryItem: FC<HistoryItemProps> = ({ children }) => {
  return (
    <Typography variant="p" className="my-8 text-center laptop:my-10">
      {children}
    </Typography>
  )
}

export default HistoryItem
