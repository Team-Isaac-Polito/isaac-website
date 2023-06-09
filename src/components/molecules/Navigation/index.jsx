import { AnimatePresence, LazyMotion, m } from "framer-motion"
import React from "react"
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg"
import { NavLink } from "react-router-dom"
import { navRoutes } from "../../../routes.ts"
import { SocialNavigation } from "../../atoms/SocialNavigation"

const features = () => import("../../../features").then((res) => res.default)

const Navigation = ({ toggleMenu, setToggleMenu, isRec }) => {
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
              className="fixed top-0 w-full h-full bg-black-background text-white z-[100]"
            >
              <div className="flex flex-col h-full bg-black">
                <div className="flex flex-row justify-between mt-3">
                  <div className="ml-10">{/* <Logo className="h-8" /> */}</div>
                  <div className="" onClick={() => setToggleMenu(!toggleMenu)}>
                    <button className="border-none outline-none cursor-pointer bg-none">
                      <span className="text-white text-2xl font-extrabold hover:text-green-jetop transition duration-[250ms] mr-3">
                        &#x2715;
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex h-[200px] mt-[100px] flex-col tablet:flex-row">
                  <nav className="flex items-center h-full pl-10">
                    <ul>
                      {navRoutes.map((route) => {
                        return (
                          <m.li key={route.id} className="list-none">
                            <NavLink to={route.path}>
                              <button
                                onClick={() => setToggleMenu(!toggleMenu)}
                              >
                                <m.div
                                  className="font-poppins antialiased flex items-center text-[30px] tracking-normal text-white hover:text-green-jetop transition duration-[250ms] w-full last:mb-[2vh]"
                                  whileHover={{
                                    x: 40,
                                    transition: {
                                      duration: 0.25,
                                      ease: [0.6, 0.05, -0.01, 0.9],
                                    },
                                  }}
                                >
                                  {route.title}
                                </m.div>
                              </button>
                            </NavLink>
                          </m.li>
                        )
                      })}
                    </ul>
                  </nav>
                </div>
                <div className="flex pb-3 pl-10 mt-20 bg-black-background tablet:hidden">
                  <SocialNavigation />
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
