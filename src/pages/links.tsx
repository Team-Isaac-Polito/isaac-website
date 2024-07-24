import Social from "@atoms/Social"
import Typography from "@atoms/Typography"
import React from "react"
import { ReactComponent as Logo } from "../assets/svg/logo.svg"

export default function Links(): JSX.Element {
  return (
    <div className="h-screen pt-20 m-auto bg-dark-blue-isaac">
      <Logo className="h-12 mx-auto laptop:w-fit laptop:h-12 notebook:h-16 desktop:h-20" />
      <Typography variant="p" className="mx-auto my-5 text-white w-fit">
        @TeamIsaac
      </Typography>
      <div className="grid grid-rows-3 mx-7 tablet:mx-auto tablet:w-2/6 mb-7 gap-y-5">
        <a
          className="py-1 text-center bg-white px-7 rounded-2xl group hover:scale-105"
          href="/"
        >
          <Typography
            variant="p"
            className="font-semibold text-light-blue-isaac group-hover:font-bold group-hover:text-yellow-isaac"
          >
            Website
          </Typography>
        </a>
        <a
          className="py-1 text-center bg-white px-7 rounded-2xl group hover:scale-105"
          href="/contact-us"
        >
          <Typography
            variant="p"
            className="font-semibold text-light-blue-isaac group-hover:font-bold group-hover:text-yellow-isaac"
          >
            Contacts
          </Typography>
        </a>
        <a className="py-1 text-center bg-white px-7 rounded-2xl group hover:scale-105">
          <Typography
            variant="p"
            className="font-semibold text-light-blue-isaac group-hover:font-bold group-hover:text-yellow-isaac"
          >
            Join Us
          </Typography>
        </a>
      </div>
      <div className="mx-auto tablet:w-1/2">
        <Social />
      </div>
    </div>
  )
}
