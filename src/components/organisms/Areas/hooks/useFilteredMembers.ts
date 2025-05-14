import { useMembers } from "@molecules/Area/useMembers"
import { useMemo } from "react"

export function useFilteredMembers(area: string) {
  const { members = [], isLoading, error } = useMembers()
  const filtered = useMemo(
    () => members.filter((m) => m.field.includes(area)),
    [members, area]
  )
  return { filtered, isLoading, error }
}
