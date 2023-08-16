import Typography from "@atoms/Typography"
import classNames from "classnames"
import React, { FC } from "react"
import { ReactComponent as Segnaposto } from "../../../assets/svg/geo-alt-fill.svg"
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg"
import Social from "../../atoms/Social"
import FooterProps from "./index.types"

const Footer: FC<FooterProps> = ({ isNavigation, className }) => {
  const scrollToElement = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <footer
      className={classNames(
        "relative bg-dark-blue-isaac mt-[70px] text-white",
        className ?? ""
      )}
    >
      <div className="grid grid-cols-12 grid-rows-3 pt-24 laptop:mx-12 bg-dark-blue-isaac h-[530px]">
        <Logo className="w-40 col-span-4 col-start-2 mt-0 laptop:w-60 notebook:w-80 desktop:w-96 h-fit" />
        {isNavigation ? (
          <></>
        ) : (
          <Social className="hidden col-span-4 col-start-2 row-start-2 m-auto mb-0 ml-0 tablet:flex" />
        )}
        <div className="flex flex-row col-span-4 col-start-2 row-start-3 m-auto ml-0 text-xl h-fit">
          <Segnaposto className="flex flex-row h-8 m-auto w-fit" />
          <div className="m-auto ml-5 w-fit h-fit">
            <Typography variant="footer" className="w-fit">
              DIMEAS, Politecnico di Torino
            </Typography>
            <Typography variant="footer" className="w-fit">
              Corso Duca degli Abruzzi, 24, 10129 Torino TO
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-4 col-span-6 col-start-6 row-span-3 row-start-1 m-auto mt-0 gap-x-5 laptop:gap-x-10 desktop:gap-x-20">
          <div>
            <div className="text-lg font-semibold laptop:text-xl notebook:text-2xl desktop:mb-10 text-light-blue-isaac">
              Home
            </div>
            <div className="grid grid-rows-5 text-base laptop:text-lg notebook:text-xl">
              <button
                onClick={() => {
                  scrollToElement("#about")
                }}
                className="text-left desktop:mb-4"
              >
                About
              </button>
              <button
                onClick={() => {
                  scrollToElement("#projects")
                }}
                className="text-left desktop:mb-4"
              >
                Progetti
              </button>
              <button
                onClick={() => {
                  scrollToElement("#events")
                }}
                className="text-left desktop:mb-4"
              >
                Eventi
              </button>
              <button
                onClick={() => {
                  scrollToElement("#numbers")
                }}
                className="text-left desktop:mb-4"
              >
                I nostri numeri
              </button>
              <button
                onClick={() => {
                  scrollToElement("#contacts")
                }}
                className="text-left desktop:mb-4"
              >
                Contattaci
              </button>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold laptop:text-xl desktop:mb-10 notebook:text-2xl text-light-blue-isaac">
              About
            </div>
            <div className="grid grid-rows-5 text-base laptop:text-lg notebook:text-xl">
              <button
                onClick={() => {
                  scrollToElement("#aboutUs")
                }}
                className="text-left desktop:mb-4"
              >
                About us
              </button>
              <button
                onClick={() => {
                  scrollToElement("#history")
                }}
                className="text-left desktop:mb-4"
              >
                La nostra storia
              </button>
              <button
                onClick={() => {
                  scrollToElement("#teamAreas")
                }}
                className="text-left desktop:mb-4"
              >
                Le aree
              </button>
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold laptop:text-xl desktop:mb-10 notebook:text-2xl text-light-blue-isaac">
              Progetti
            </div>
            <div className="grid grid-rows-5 mt-3 text-base laptop:text-lg notebook:text-xl notebook:mt-0">
              <button
                onClick={() => {
                  scrollToElement("#reseQ")
                }}
                className="text-left desktop:mb-4"
              >
                Rese.Q
              </button>
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold laptop:text-xl desktop:mb-10 notebook:text-2xl text-light-blue-isaac">
              Eventi
            </div>
            <div className="grid grid-rows-5 mt-3 text-base laptop:text-lg notebook:mt-0 notebook:text-xl">
              <button
                onClick={() => {
                  scrollToElement("#makerFaire")
                }}
                className="text-left desktop:mb-4"
              >
                Maker Faire 2022
              </button>
              <button
                onClick={() => {
                  scrollToElement("#a&t")
                }}
                className="text-left desktop:mb-4"
              >
                A&T 2023
              </button>
            </div>
          </div>
        </div>
        <Typography
          variant="footer"
          className="col-span-4 col-start-5 row-start-3 m-auto mb-5 w-fit"
        >
          © Team ISAAC Polito. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
