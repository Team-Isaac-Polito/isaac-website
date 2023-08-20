import React, { FC } from "react"
import TypographyProps from "./index.types"

const Typography: FC<TypographyProps> = ({ variant, className, children }) => {
  let textCharacteristics = ""

  switch (variant) {
    case "hero":
      textCharacteristics =
        "antialiased text-center font-extrabold text-4xl tablet:text-5xl laptop:text-6xl notebook:text-7xl desktop:text-8xl"
      break

    case "h1":
      textCharacteristics =
        "uppercase antialiased font-extrabold text-3xl tablet:text-2xl laptop:text-4-5xl notebook:text-5-5xl desktop:text-7xl"
      break

    case "h2":
      textCharacteristics =
        "font-bold text-2xl laptop:text-3xl notebook:text-4xl desktop:text-5xl"
      break

    case "p":
      textCharacteristics =
        "antialiased text-xl tablet:text-base laptop:text-2xl notebook:text-3xl desktop:text-4-5xl desktop:leading-tight font-normal"
      break

    case "label":
      textCharacteristics =
        "antialiased font-normal text-xs tablet:text-lg notebook:text-2xl desktop:text-4xl"
      break

    case "footer":
      textCharacteristics =
        "font-normal text-[9px] tablet:text-[8px] laptop:text-[10px] notebook:text-sm desktop:text-xl"
      break
  }

  return (
    <div className={textCharacteristics + " " + className ?? ""}>
      {children}
    </div>
  )
}

export default Typography
