import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import MenuIcon from "../../../assets/MenuIcon.png"
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg"
import { navRoutes } from "../../../routes"
import NavBarProps from "./index.types"

const NavBar: FC<NavBarProps> = ({ setToggleMenu, toggleMenu }) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return `hover:text-yellow-isaac mt-0 text-white text-xl tablet:text-xl laptop:text-2xl notebook:text-3xl desktop:text-5xl ${
      isActive ? "text-yellow-isaac" : ""
    }`
  }

  return (
    <header className="sticky top-0 z-20 grid w-full grid-cols-5 text-white h-14 tablet:h-16 laptop:h-20 font-Staatliches notebook:h-24 desktop:h-28 bg-dark-blue-isaac tablet:backdrop-blur-md">
      <a href="/" className="m-auto">
        <Logo className="ml-4 h-10 w-28 laptop:w-fit laptop:ml-14 notebook:ml-20 desktop:ml-28 laptop:h-12 notebook:h-16 desktop:h-20 flex" />
      </a>
      <nav className="items-center hidden w-full col-span-3 m-auto text-5xl uppercase tablet:block">
        <ul className="grid w-full grid-cols-5">
          {navRoutes.map((route) => {
            return (
              <li
                key={route.id}
                className="flex items-center mx-auto cursor-pointer"
              >
                <NavLink to={route.path} className={navLinkClass}>
                  {t(`routes.${route.title}`)}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="hidden m-auto text-xl text-white tablet:flex tablet:flex-row justify-self-end tablet:text-lg laptop:text-2xl notebook:text-3xl desktop:text-4xl w-fit laptop:mr-28">
        <button
          onClick={() => changeLanguage("it")}
          className={
            i18n.language === "it"
              ? "text-yellow-isaac m-auto h-fit underline"
              : "m-auto h-fit text-white"
          }
        >
          ITA
        </button>
        <div className="w-[2px] laptop:w-1 h-7 mx-3 bg-white laptop:h-10" />
        <button
          onClick={() => changeLanguage("en")}
          className={
            i18n.language === "en"
              ? "text-yellow-isaac m-auto h-fit underline"
              : "m-auto h-fit text-white"
          }
        >
          ENG
        </button>
      </div>
      <div className="h-6 col-start-5 mt-4 mr-4 w-fit justify-self-end tablet:hidden">
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block w-6 h-6 cursor-pointer bg-none"
        >
          <img alt="Menu" src={MenuIcon} />
        </button>
      </div>
    </header>
  )
}
export default NavBar
