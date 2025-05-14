import SegmentedControl from "@atoms/SegmentedControl"
import React, { useRef } from "react"
import { AreaSelectorProps } from "./AreaSelector.types"

export default function AreaSelector({
  areas,
  selected,
  onChange,
}: AreaSelectorProps) {
  return (
    <SegmentedControl
      name="areas"
      segments={areas.map((it) => ({
        label: it.title,
        value: it.value,
        ref: React.createRef(),
        className: "",
      }))}
      defaultIndex={areas.findIndex((a) => a.value === selected)}
      callback={onChange}
      controlRef={useRef()}
    />
  )
}
