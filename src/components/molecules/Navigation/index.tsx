import { SocialNavigation } from "@atoms/SocialNavigation"
import Typography from "@atoms/Typography"
import { AnimatePresence, LazyMotion, m } from "framer-motion"
import React, { FC, useState } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg"
import { navRoutes } from "../../../routes"
import NavigationProps from "./index.types"

const features = () => import("../../../features").then((res) => res.default)

const Navigation: FC<NavigationProps> = ({ toggleMenu, setToggleMenu }) => {
  const { i18n } = useTranslation()
  const onToggleLanguageClick = (lng: string) => {
    i18n.changeLanguage(lng)
    handleButtonClick()
    setToggleMenu(!toggleMenu)
  }
  const changeTo = i18n.language === "it" ? "en" : "it"

  const [isVisible, setIsVisible] = useState(false)
  const [buttonStyle, setButtonStyle] = useState("")

  const handleButtonClick = () => {
    setIsVisible(!isVisible)
    setButtonStyle(!isVisible ? "rounded-r-none" : "")
  }

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <LazyMotion features={features}>
            <m.div
              initial={{ x: "-100%" }}
              exit={{ x: "-100%" }}
              animate={{ x: toggleMenu ? 0 : "-100%" }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="fixed top-0 w-full h-full text-white z-[100]"
            >
              <div className="grid h-full px-6 bg-[#0f0f0f] grid-rows-auto">
                <div className="grid grid-cols-2 mt-3">
                  <div className="">
                    <Logo className="h-8 w-fit" />
                  </div>
                  <div
                    className="justify-self-end"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <button className="border-none outline-none cursor-pointer bg-none">
                      <span className="text-white text-2xl font-extrabold hover:text-yellow-isaac transition duration-[250ms]">
                        &#x2715;
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex h-[200px] mt-28 flex-col tablet:flex-row">
                  <nav className="flex items-center h-full">
                    <ul>
                      {navRoutes.map((route) => {
                        return (
                          <m.li key={route.id} className="list-none">
                            <button onClick={() => setToggleMenu(!toggleMenu)}>
                              <m.div
                                className="antialiased flex items-center text-[30px] tracking-normal text-white hover:text-yellow-isaac transition duration-[250ms] w-full last:mb-[2vh]"
                                whileHover={{
                                  x: 40,
                                  transition: {
                                    duration: 0.25,
                                    ease: [0.6, 0.05, -0.01, 0.9],
                                  },
                                }}
                              >
                                <NavLink
                                  to={route.path}
                                  className={({ isActive }) =>
                                    isActive ? "underline" : ""
                                  }
                                >
                                  {route.title}
                                </NavLink>
                              </m.div>
                            </button>
                          </m.li>
                        )
                      })}
                    </ul>
                  </nav>
                </div>
                <div className="relative grid w-16 grid-cols-2 mt-8 tablet:hidden">
                  <button
                    onClick={handleButtonClick}
                    className={`w-8 h-8 m-auto font-bold text-center text-black uppercase bg-white rounded-full ${buttonStyle}`}
                  >
                    {i18n.language}
                  </button>
                  {isVisible && (
                    <ul className="flex my-auto text-black">
                      <li>
                        <button
                          className="block w-8 h-8 uppercase bg-gray-100 rounded-r-full hover:bg-gray-300 hover:font-bold"
                          onClick={() => onToggleLanguageClick(changeTo)}
                        >
                          {changeTo}
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="grid grid-cols-2 mt-16">
                  <SocialNavigation />
                  <div className="text-right">
                    <Typography variant="h2" className="font-semibold">
                      Privacy
                    </Typography>
                    <NavLink to="/documents/privacy-policy.pdf">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline"
                      >
                        Privacy
                      </a>
                    </NavLink>
                  </div>
                </div>
              </div>
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
