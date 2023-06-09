import React from "react"

export default function Title(props) {
  return (
    <div className="text-[30px] laptop:text-4xl desktop:text-[60px] uppercase font-extrabold">
      <h1 className={props.className}>{props.children}</h1>
    </div>
  )
}
