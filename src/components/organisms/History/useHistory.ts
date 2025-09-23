import { useQuery } from "@tanstack/react-query"
import { getHistory } from "../../services/apiHistory"

export function useHistory() {
  const {
    isLoading,
    data: history,
    error,
  } = useQuery({
    queryKey: ["history"],
    queryFn: getHistory,
  })

  return { isLoading, history, error }
}
