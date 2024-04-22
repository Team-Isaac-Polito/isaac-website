import classNames from "classnames"
import React, { FC } from "react"
import TypographyProps from "./index.types"

const Typography: FC<TypographyProps> = ({ variant, className, children }) => {
  switch (variant) {
    case "hero":
      return (
        <h1
          className={classNames(
            "antialiased text-center font-extrabold text-4xl tablet:text-5xl laptop:text-6xl notebook:text-7xl desktop:text-8xl",
            className ?? ""
          )}
        >
          {children}
        </h1>
      )
    case "h1":
      return (
        <h1
          className={classNames(
            "uppercase antialiased font-extrabold text-3xl tablet:text-2xl laptop:text-4-5xl notebook:text-5-5xl desktop:text-7xl",
            className ?? ""
          )}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2
          className={classNames(
            "font-bold text-2xl laptop:text-3xl notebook:text-4xl desktop:text-5xl",
            className ?? ""
          )}
        >
          {children}
        </h2>
      )
    case "p":
      return (
        <p
          className={classNames(
            "antialiased text-xl tablet:text-base laptop:text-2xl notebook:text-3xl desktop:text-4-5xl desktop:leading-tight font-normal",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
    case "label":
      return (
        <p
          className={classNames(
            "antialiased font-normal text-xs tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
    case "footer":
      return (
        <h3
          className={classNames(
            "font-normal text-[9px] tablet:text-[8px] laptop:text-[10px] notebook:text-sm desktop:text-xl",
            className ?? ""
          )}
        >
          {children}
        </h3>
      )
  }
}

export default Typography
