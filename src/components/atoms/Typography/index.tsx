import classNames from "classnames"
import React, { FC } from "react"
import TypographyProps from "./index.types"

const Typography: FC<TypographyProps> = ({ variant, className, children }) => {
  switch (variant) {
    case "hero":
      return (
        <h1
          className={classNames(
            "antialiased font-extrabold text-4xl tablet:text-5xl laptop:text-6xl notebook:text-7xl desktop:text-8xl",
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
            "uppercase font-extrabold text-3xl tablet:text-3xl laptop:text-4-5xl notebook:text-5-5xl desktop:text-7xl",
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
            "text-base phone:text-lg tablet:text-lg notebook:text-2xl desktop:text-3xl desktop:leading-tight font-light",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
    case "card":
      return (
        <p
          className={classNames(
            "text-base phone:text-lg tablet:text-lg notebook:text-2xl desktop:text-3xl desktop:leading-tight font-light text-lime-50",
            className ?? ""
          )}
        >
          {children}
        </p>
      )
    case "card-phone":
      return (
        <p
          className={classNames(
            "text-base phone:text-lg tablet:text-lg notebook:text-2xl desktop:text-3xl desktop:leading-tight font-light text-dark-blue-isaac",
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
            "antialiased font-normal text-base laptop:text-xl notebook:text-2xl desktop:text-4xl",
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
            "font-normal text-xs laptop:text-sm notebook:text-base desktop:text-xl",
            className ?? ""
          )}
        >
          {children}
        </h3>
      )
  }
}

export default Typography
