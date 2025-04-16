import classNames from "classnames"
import React, { FC } from "react"
import ButtonProps from "./index.types"
import { Link } from "react-router-dom"

const Button: FC<ButtonProps> = ({
  isPrimary,
  children,
  href,
  className,
}): JSX.Element => {
  return isPrimary ? (
    <Link
      to={href}
      className="flex items-center py-2 text-base font-semibold uppercase transition duration-500 ease-in-out cursor-pointer w-fit h-fit notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl hover:scale-105 hover:-translate-y-1 bg-light-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl"
    >
      {children}
    </Link>
  ) : (
    <Link
      to={href}
      className={classNames(
        "w-fit h-fit py-2 text-base font-semibold uppercase cursor-pointer notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl border-solid border-4 notebook:border-[5px] rounded-3xl tablet:rounded-xl desktop:rounded-2xl transition duration-500 ease-in-out",
        className
      )}
    >
      {children}
    </Link>
  )
}

export default Button
