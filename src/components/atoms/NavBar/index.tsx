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
    return `hover:text-yellow-isaac mt-0 h-fit text-white text-xl tablet:text-base laptop:text-3xl notebook:text-4xl desktop:text-5xl ${
      isActive ? "text-yellow-isaac" : ""
    }`
  }

  return (
    <header className="sticky top-0 z-20 grid w-full grid-cols-4 text-white h-14 tablet:h-16 laptop:h-24 font-Staatliches notebook:h-28 desktop:h-36 bg-dark-blue-isaac tablet:backdrop-blur-md">
      <Logo className="hidden h-10 m-auto tablet:w-28 laptop:w-fit laptop:ml-14 notebook:ml-20 desktop:ml-28 laptop:h-14 notebook:h-16 desktop:h-24 tablet:flex" />
      <nav className="items-center hidden col-span-2 m-auto text-5xl uppercase tablet:flex tablet:flex-row w-fit">
        <ul className="m-auto h-fit">
          {navRoutes.map((route) => {
            return (
              <li key={route.id} className="inline-block mx-5 cursor-pointer">
                <NavLink to={`${route.path}`} className={navLinkClass}>
                  {t(`routes.${route.title}`)}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="hidden m-auto text-xl text-white tablet:flex tablet:flex-row justify-self-end tablet:text-base laptop:text-2xl notebook:text-3xl desktop:text-4xl w-fit laptop:mr-28">
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
        <div className="w-[2px] laptop:w-1 h-8 mx-3 bg-white laptop:h-10" />
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
      <div className="h-6 col-start-4 mt-4 mr-4 w-fit justify-self-end tablet:hidden">
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
