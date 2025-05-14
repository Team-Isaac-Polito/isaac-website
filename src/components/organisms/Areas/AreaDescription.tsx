import React, { FC } from "react"
import Typography from "@atoms/Typography"
import { AreaDescriptionProps } from "./AreaDescription.types"
export const AreaDescription: FC<AreaDescriptionProps> = ({
  description,
  onLearnMore,
  isCondensed,
}) => {
  const buttonClassName =
    " mt-3 p-3 text-base font-bold border-x-dark-blue-isaac border-solid border-4 uppercase transition duration-500 ease-in-out cursor-pointer w-fit h-fit notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl hover:scale-105 hover:-translate-y-1 bg-yellow-isaac text-dark-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl hover:outline-none hover:bg-dark-blue-isaac hover:ring hover:ring-offset-light-blue-isaac  hover:text-yellow-isaac focus:ring-offset-8 "
  return (
    <Typography variant="card-phone" className="text-center w-fit pt-6">
      {isCondensed ? (
        <>
          {description.slice(0, 200)}…<br />
          <button onClick={onLearnMore} className={buttonClassName}>
            Scopri di più
          </button>
        </>
      ) : (
        description
      )}
    </Typography>
  )
}
