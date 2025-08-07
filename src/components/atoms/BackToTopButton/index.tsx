import React, { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false)

  // Show button when scrolled down 300px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg
        bg-yellow-isaac text-dark-blue-isaac hover:bg-dark-blue-isaac
        hover:text-yellow-isaac transition-all duration-300
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp size={20} />
    </button>
  )
}

export default BackToTopButton
