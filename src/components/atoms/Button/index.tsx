import classNames from "classnames"
import React, { FC } from "react"
import ButtonProps from "./index.types"

const Button: FC<ButtonProps> = ({
  isPrimary,
  children,
  href,
  onClick,
  className,
}): JSX.Element => {
  return isPrimary ? (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center py-2 text-base font-semibold uppercase transition duration-500 ease-in-out cursor-pointer w-fit h-fit notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl hover:scale-105 hover:-translate-y-1 bg-light-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl"
    >
      {children}
    </a>
  ) : (
    <div
      className={classNames(
        "w-fit h-fit border-solid border-4 notebook:border-[5px] notebook:py-3 flex items-center py-2 px-7 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-1",
        className
      )}
    >
      <a
        href={href}
        onClick={onClick}
        className="w-full h-full m-auto text-base font-semibold uppercase cursor-pointer tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl"
      >
        {children}
      </a>
    </div>
  )
}

export default Button
