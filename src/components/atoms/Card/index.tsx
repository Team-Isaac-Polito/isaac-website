import React from "react"
import CardProps from "./index.types"

const Card: React.FC<CardProps> = ({ member }) => {
  const { name, surname, role, linkedin, picture } = member

  return (
    <div className="w-[340px] h-[230px] p-5 bg-gradient-to-br from-dark-blue-isaac via-light-blue-isaac to-black text-yellow-isaac rounded-2xl shadow-xl flex items-center ">
      <img
        src={
          picture != null
            ? `https://cms.teamisaac.it/assets/${picture}?width=900&height=900&quality=50`
            : "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
        }
        alt={`${name} ${surname}`}
        className="w-44 h-52 rounded-sm border-2 border-white/30 shadow-sm object-cover"
      />
      <div className="flex flex-col justify-center ml-2">
        <h3 className="text-lg font-semibold tracking-wide">
          {name} {surname}
        </h3>
        <p className="text-sm text-white/80">{role || "No role listed"}</p>
        {linkedin && (
          <a
            href={`https://${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-blue-300 hover:text-white text-sm transition-colors"
          >
            LinkedIn Profile
          </a>
        )}
      </div>
    </div>
  )
}

export default Card
