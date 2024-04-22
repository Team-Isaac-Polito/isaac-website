import Typography from "@atoms/Typography"
import classNames from "classnames"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg"
import { navRoutes } from "../../../routes"
import Social from "../../atoms/Social"
import FooterProps from "./index.types"

const Footer: FC<FooterProps> = ({ isNavigation, className }) => {
  const { t } = useTranslation()

  return (
    <footer
      className={classNames(
        "relative bg-dark-blue-isaac mt-20 text-white",
        className ?? ""
      )}
    >
      <div className="hidden grid-cols-5 grid-rows-3 pt-20 mx-8 tablet:grid laptop:grid-cols-12 notebook:pt-24 laptop:mx-14 notebook:mx-20 desktop:mx-28 bg-dark-blue-isaac h-fit">
        <Logo className="w-40 col-span-2 mt-0 laptop:col-span-4 laptop:w-60 notebook:w-80 desktop:w-96 h-fit" />
        {isNavigation ? (
          <></>
        ) : (
          <Social className="hidden row-start-2 m-auto mt-0 ml-0 laptop:my-auto laptop:col-span-4 tablet:flex" />
        )}
        <div className="grid w-full grid-cols-2 col-span-2 col-start-4 row-span-2 row-start-1 m-auto mt-0 laptop:col-start-8 laptop:col-span-5">
          <div>
            <div className="mb-3 text-lg font-semibold notebook:mb-5 desktop:font-bold laptop:text-xl notebook:text-2xl desktop:text-3xl desktop:mb-8 text-light-blue-isaac">
              Navigation
            </div>
            <div className="grid grid-rows-4 text-base notebook:text-xl desktop:text-2xl gap-y-2 notebook:gap-y-4">
              {navRoutes.map((route) => {
                return (
                  <li key={route.id} className="list-none">
                    <NavLink
                      to={`${route.path}`}
                      className="text-left desktop:mb-4"
                    >
                      {t(`routes.${route.title}`)}
                    </NavLink>
                  </li>
                )
              })}
            </div>
          </div>
          <div>
            <div className="mb-3 text-lg font-semibold notebook:mb-5 desktop:font-bold laptop:text-xl desktop:mb-8 notebook:text-2xl desktop:text-3xl text-light-blue-isaac">
              Privacy
            </div>
            <div className="text-base notebook:text-xl desktop:text-2xl">
              <NavLink to="/documents/privacy-policy.pdf">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Privacy Policy
                </a>
              </NavLink>
            </div>
          </div>
        </div>
        <Typography
          variant="footer"
          className="col-span-3 col-start-2 row-start-3 m-auto mb-5 laptop:col-span-4 laptop:col-start-5 w-fit"
        >
          © Team ISAAC Polito. All Rights Reserved.
        </Typography>
      </div>
      <div className="grid grid-cols-2 pt-20 pb-8 mx-6 tablet:hidden bg-dark-blue-isaac h-fit gap-x-4">
        <Typography variant="footer" className="m-auto w-fit">
          © Team ISAAC Polito. All Rights Reserved.
        </Typography>
        <NavLink
          to="/documents/privacy-policy.pdf"
          className="justify-self-end"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline"
          >
            Privacy Policy
          </a>
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer
