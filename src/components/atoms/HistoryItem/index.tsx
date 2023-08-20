import Typography from "@atoms/Typography"
import React, { FC } from "react"
import { HistoryItemProps } from "./index.types"

const HistoryItem: FC<HistoryItemProps> = ({ title, children }) => {
  return (
    <>
      <Typography variant="h1" className="mt-20 text-left text-yellow-isaac">
        {title}
      </Typography>
      <Typography variant="p" className="my-10 text-left">
        {children}
      </Typography>
    </>
  )
}

export default HistoryItem
