import React from "react"
import CardProps from "./index.types"
import { RiLinkedinBoxLine } from "react-icons/ri"
import { MdOutlineMailOutline } from "react-icons/md"

const Card: React.FC<CardProps> = ({ member }) => {
  const { name, surname, role, linkedin, picture, email } = member
  const isLarge = surname.length > 10
  // const avatar ="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
  return (
    <div className="w-[340px] h-[230px] p-5  text-yellow-isaac rounded-2xl shadow-2xl flex items-center backdrop-blur-3xl border border-slate-900 ">
      <img
        src={
          picture != null
            ? `https://cms.teamisaac.it/assets/${picture}?width=900&height=900&quality=50`
            : "favicon.svg"
        }
        alt={`${name} ${surname}`}
        className="w-44 h-52 rounded-sm border-2 border-white/30 shadow-sm object-cover"
      />
      <div className="flex flex-col justify-center ml-2 items-center">
        <h3 className="text-lg font-semibold tracking-wide">{name}</h3>
        <h3
          className={
            isLarge
              ? "text-sm font-semibold tracking-wide"
              : "text-lg font-semibold tracking-wide"
          }
        >
          {surname}
        </h3>

        <p className="text-sm text-white/80">{role || "No role listed"}</p>
        <div className="flex">
          {linkedin && (
            <a
              href={
                linkedin.includes("https")
                  ? `${linkedin}`
                  : `https://${linkedin}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 hover:text-white transition-colors"
            >
              <RiLinkedinBoxLine />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 hover:text-white transition-colors"
            >
              <MdOutlineMailOutline />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
