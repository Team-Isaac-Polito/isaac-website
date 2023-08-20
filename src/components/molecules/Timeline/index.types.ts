import React from "react"

export interface ButtonGroupItem {
  value: string
  ref
  className: string
}

export default interface SegmentedControlProps {
  segments: ButtonGroupItem[]
  callback
  defaultIndex?: number
  controlRef
  setState?: React.Dispatch<React.SetStateAction<string>>
}
