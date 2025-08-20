import React, { FC } from "react"
import Typography from "@atoms/Typography"
import { AreaDescriptionProps } from "./AreaDescription.types"
import { useTranslation } from "react-i18next"
export const AreaDescription: FC<AreaDescriptionProps> = ({
  description,
  onLearnMore,
  isCondensed,
}) => {
  const { i18n } = useTranslation("projects")
  const isEn = (): boolean => i18n.language === "en"
  const buttonClassName = `mt-8 w-fit h-fit py-2 text-dark-blue-isaac font-semibold uppercase cursor-pointer notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl border-solid border-4 notebook:border-[5px] rounded-3xl tablet:rounded-xl desktop:rounded-2xl transition duration-500 ease-in-out m-auto border-light-blue-isaac hover:bg-light-blue-isaac tablet:ml-0`
  return (
    <Typography variant="card-phone" className="text-center w-fit pt-6">
      {isCondensed ? (
        <>
          {description.slice(0, 200)}…<br />
          <button onClick={onLearnMore} className={buttonClassName}>
            {isEn() ? "Find out more" : "Scopri di più"}
          </button>
        </>
      ) : (
        description
      )}
    </Typography>
  )
}
