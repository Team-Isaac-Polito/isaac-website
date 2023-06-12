import React, { FC } from "react"
import { ReactComponent as Segnaposto } from "../../../assets/svg/geo-alt-fill.svg"
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg"
import FooterProps from "./index.types"
import Social from "../../atoms/Social"
import classNames from "classnames"

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
      <div className="grid grid-cols-12 grid-rows-3 pt-24 mx-12 bg-dark-blue-isaac h-[530px]">
        <Logo className="col-span-4 col-start-2 mt-0 w-96 h-fit" />
        {isNavigation ? (
          <></>
        ) : (
          <Social className="hidden col-span-4 col-start-2 row-start-2 m-auto mb-0 ml-0 tablet:flex" />
        )}
        <div className="flex flex-row col-span-4 col-start-2 row-start-3 m-auto ml-0 text-xl h-fit">
          <Segnaposto className="flex flex-row h-8 m-auto w-fit" />
          <div className="m-auto ml-5 w-fit h-fit">
            <p className="w-fit">DIMEAS, Politecnico di Torino</p>
            <p className="w-fit">
              Corso Duca degli Abruzzi, 24, 10129 Torino TO
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 col-span-6 col-start-6 row-span-3 row-start-1 m-auto mt-0 gap-x-20">
          <div>
            <div className="mb-10 text-2xl font-semibold text-light-blue-isaac">
              Home
            </div>
            <div className="grid grid-rows-5 text-xl">
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#about")
                }}
                className="mb-4 w-fit"
              >
                About
              </button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#projects")
                }}
                className="mb-4 w-fit"
              >
                Progetti
              </button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#events")
                }}
                className="mb-4 w-fit"
              >
                Eventi
              </button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#numbers")
                }}
                className="mb-4 w-fit"
              >
                I nostri numeri
              </button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#contacts")
                }}
                className="mb-4 w-fit"
              >
                Contattaci
              </button>
            </div>
          </div>

          <div>
            <div className="mb-10 text-2xl font-semibold text-light-blue-isaac">
              About
            </div>
            <div className="grid grid-rows-5 text-xl">
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#aboutUs")
                }}
                className="mb-4 w-fit"
              >
                About us
              </button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#history")
                }}
                className="mb-4 w-fit"
              >
                La nostra storia
              </button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#teamAreas")
                }}
                className="mb-4 w-fit"
              >
                Le aree
              </button>
            </div>
          </div>
          <div>
            <div className="mb-10 text-2xl font-semibold text-light-blue-isaac">
              Progetti
            </div>
            <div className="grid grid-rows-5 text-xl">
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#reseQ")
                }}
                className="mb-4 w-fit"
              >
                Rese.Q
              </button>
            </div>
          </div>
          <div>
            <div className="mb-10 text-2xl font-semibold text-light-blue-isaac">
              Eventi
            </div>
            <div className="grid grid-rows-5 text-xl">
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#makerFaire")
                }}
                className="mb-4 w-fit"
              >
                Maker Faire 2022
              </button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToElement("#a&t")
                }}
                className="mb-4 w-fit"
              >
                A&T 2023
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4 col-start-5 row-start-3 m-auto mb-5 w-fit">
          © Team ISAAC Polito. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
