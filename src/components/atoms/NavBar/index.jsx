import React from "react"
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg"
import { NavLink } from "react-router-dom"

export default function NavBar(props) {
  return (
    <div className="grid grid-cols-3 font-Staatliches h-[130px] bg-dark-blue z-10 w-full">
      <Logo className="m-auto ml-28 h-[80px]" />
      <nav className="flex flex-row items-center m-auto text-5xl uppercase w-fit">
        <div className=" m-[20px] hover:text-yellow">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow" : "text-white"
            }
          >
            Home
          </NavLink>
        </div>
        <div className="text-white m-[20px] hover:text-yellow">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow" : "text-white"
            }
          >
            About
          </NavLink>
        </div>
        <div className="text-white m-[20px] hover:text-yellow">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-yellow" : "text-white"
            }
          >
            Progetti
          </NavLink>
        </div>
        <div className="text-white m-[20px] hover:text-yellow">
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "text-yellow" : "text-white"
            }
          >
            Eventi
          </NavLink>
        </div>
      </nav>
      <div className="absolute flex flex-row mt-8 text-4xl text-white w-fit right-28">
        {" "}
        <div className="m-20[px]">
          <a href="/">ITA</a>
        </div>{" "}
        <div className="w-[5px] bg-white mx-3" />{" "}
        <div className="m-20[px]">
          {" "}
          <a href="/">ENG</a>
        </div>{" "}
      </div>
    </div>
  )
}
