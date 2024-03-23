import React from "react"

export interface HistoryItem {
  year: number
  children: React.ReactNode
}

export interface HistoryEvent {
  year: string
  description: string
}
