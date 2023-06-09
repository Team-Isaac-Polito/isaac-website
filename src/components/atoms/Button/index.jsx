import React from "react"

export default function Button(props) {
  return props.isPrimary ? (
    <div>
      <button className="bg-light-blue-isaac px-5 py-3 rounded-[10px] text-white font-extrabold text-4xl uppercase m-auto">
        {props.text}
      </button>
    </div>
  ) : props.isYellow ? (
    <div>
      <button className="px-5 py-3 rounded-[20px] text-white font-semibold text-4xl uppercase m-auto border-[5px] w-[450px] h-[90px] border-yellow-isaac">
        {props.text}
      </button>
    </div>
  ) : (
    <div>
      <button className="px-5 py-3 rounded-[20px] text-dark-blue-isaac font-semibold text-4xl uppercase m-auto border-[5px] w-[450px] h-[90px] border-light-blue">
        {props.text}
      </button>
    </div>
  )
}
