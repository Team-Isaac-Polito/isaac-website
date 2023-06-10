import React, { FC, useRef, useState } from "react"
import NavBar from "../../atoms/NavBar"
import Footer from "../../atoms/footer"
import Navigation from "../../molecules/Navigation"
import { Outlet } from "react-router-dom"
import LayoutProps from "./index.types"

const Layout: FC<LayoutProps> = ({ children }) => {
  const topRef = useRef(null)
  const [toggleMenu, setToggleMenu] = useState(false)

  const disableScrollMobile = (toggleMenu) => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden"
    } else document.body.style.overflow = "auto"
    setToggleMenu(toggleMenu)
  }

  return (
    <>
      <div ref={topRef} />
      <NavBar toggleMenu={toggleMenu} setToggleMenu={disableScrollMobile} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={disableScrollMobile} />
      <Outlet />
      {children}
      <Footer />
    </>
  )
}

export default Layout
