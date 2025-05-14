import { useState, useEffect, useMemo } from "react"

export function useCardPagination(totalItems: number, itemsPerPage: number) {
  const maxPage = useMemo(
    () => Math.max(0, Math.ceil(totalItems / itemsPerPage) - 1),
    [totalItems, itemsPerPage]
  )
  const [page, setPage] = useState(0)

  // clamp page if totalItems or itemsPerPage changes
  useEffect(() => {
    setPage((p) => (p > maxPage ? maxPage : p))
  }, [maxPage])

  const goTo = (newPage: number) =>
    setPage((p) => (newPage >= 0 && newPage <= maxPage ? newPage : p))

  return { page, maxPage, goTo }
}
