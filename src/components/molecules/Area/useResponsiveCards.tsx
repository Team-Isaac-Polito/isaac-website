import { useEffect, useState } from "react"

export function useResponsiveCards(): number {
  const [cards, setCards] = useState(2) // default to smallest

  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth
      if (width > 1796) {
        setCards(4)
      } else if (width > 1412) {
        setCards(3)
      } else {
        setCards(2)
      }
    }

    updateCards() // run once on mount
    window.addEventListener("resize", updateCards)
    return () => window.removeEventListener("resize", updateCards)
  }, [])

  return cards
}
