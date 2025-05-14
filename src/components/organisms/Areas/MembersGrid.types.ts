import { Member } from "./index.types"
export interface MembersGridProps {
  members: Member[] // adjust type
  isLoading: boolean
  error?: unknown
  page: number
  maxPage: number
  itemsPerPage: number
  onPageChange: (to: number) => void
}
