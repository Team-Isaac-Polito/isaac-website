import React from "react"
import CardProps from "./index.types"

const Card: React.FC<CardProps> = ({ member }) => {
  const { name, surname, role, linkedin, picture } = member

  return (
    <div className="w-[300px] h-[130px] p-5 bg-gradient-to-br from-dark-blue-isaac via-light-blue-isaac to-black text-yellow-isaac rounded-2xl shadow-xl flex items-center ">
      <img
        src={picture || "No picture"}
        alt={`${name} ${surname}`}
        className="w-24 h-[130px] rounded-sm border-2 border-white/30 shadow-sm object-cover"
      />
      <div className="flex flex-col justify-center">
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
