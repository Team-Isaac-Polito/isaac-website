import React from "react"

export interface ButtonGroupItem {
  label: string
  value: string
  ref
  className: string
}

export default interface SegmentedControlProps {
  name: string
  segments: ButtonGroupItem[]
  callback
  defaultIndex?: number
  controlRef
  setState?: React.Dispatch<React.SetStateAction<string>>
}
