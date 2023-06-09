import React, { useRef, useState } from "react"
import NavBar from "../../atoms/NavBar"
// import Footer from "@molecules/Footer"
import Navigation from "../../molecules/Navigation"
import { Outlet } from "react-router-dom"

const Layout = ({ children }) => {
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
      <NavBar
        toggleMenu={toggleMenu}
        setToggleMenu={disableScrollMobile}
        isRec={false}
      />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={disableScrollMobile} />
      <Outlet />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
