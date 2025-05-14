import { AreaItem } from "./index.types"

export type AreaSelectorProps = {
  areas: AreaItem[]
  selected: string
  onChange: (value: string) => void
}
