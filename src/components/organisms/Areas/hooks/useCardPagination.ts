import { useState, useMemo } from "react"

export function useCardPagination(totalItems: number, itemsPerPage: number) {
  const maxPage = useMemo(
    () => Math.max(0, Math.ceil(totalItems / itemsPerPage) - 1),
    [totalItems, itemsPerPage]
  )
  const [page, setPage] = useState(0)

  const clampedPage = page > maxPage ? maxPage : page

  const goTo = (newPage: number) =>
    setPage((p) => (newPage >= 0 && newPage <= maxPage ? newPage : p))

  return { page: clampedPage, maxPage, goTo }
}
