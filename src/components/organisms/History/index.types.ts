import React from "react"

export interface HistoryItem {
  year: number
  children: React.ReactNode
}

export default interface HistoryProps {
  years: HistoryItem[]
}
