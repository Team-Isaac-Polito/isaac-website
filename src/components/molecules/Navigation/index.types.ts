import React from "react"

export default interface NavigationProps {
  toggleMenu: boolean
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}
