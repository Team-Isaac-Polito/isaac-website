import React from "react"
import CardProps from "./index.types"
import { RiLinkedinBoxLine } from "react-icons/ri"
import { MdOutlineMailOutline } from "react-icons/md"

const Card: React.FC<CardProps> = ({ member }) => {
  const { name, surname, role, linkedin, picture, email } = member
  const isLarge = surname.length > 10
  return (
    <div className="phoneL:w-[340px] phoneL:h-[230px] p-5 w-[310px] h-[210px] text-yellow-isaac rounded-2xl shadow-2xl flex items-center backdrop-blur-3xl border border-slate-900 flex-shrink-0">
      <img
        src={
          picture != null
            ? `https://cms.teamisaac.it/assets/${picture}?width=900&height=900&quality=50`
            : "favicon.svg"
        }
        alt={`${name} ${surname}`}
        className="w-36 h-52 rounded-sm border-2 border-white/30 shadow-sm object-cover"
      />
      <div className="flex flex-col ml-2 ">
        <h3 className="text-lg font-semibold tracking-wide">{name}</h3>
        <h3
          className={
            isLarge
              ? "phoneL:text-sm text-xs font-semibold tracking-wide "
              : "phoneL:text-lg  font-semibold tracking-wide"
          }
        >
          {surname}
        </h3>

        <p className="phoneL:text-lg text-xs font-semibold tracking-wide text-white/80">
          {role || "No role listed"}
        </p>
        <div className="flex">
          {linkedin && (
            <a
              href={
                linkedin.includes("https")
                  ? `${linkedin}`
                  : `https://${linkedin}`
              }
              className="mt-1 hover:text-white transition-colors"
            >
              <RiLinkedinBoxLine className="text-2xl" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="mt-1 hover:text-white transition-colors"
            >
              <MdOutlineMailOutline className="text-2xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
