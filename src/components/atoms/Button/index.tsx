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
      className="bg-light-blue-isaac cursor-pointer px-5 py-3 text-white text-base flex flex-col items-center justify-center font-extrabold w-[220px] h-[45px] tablet:text-xl tablet:w-[170px] tablet:h-[35px] laptop:text-2xl notebook:text-3xl desktop:text-4xl laptop:w-[220px] laptop:h-[55px] notebook:w-[270px] notebook:h-[55px] desktop:w-[320px] desktop:h-[72px] rounded-3xl tablet:rounded-md laptop:rounded-xl desktop:rounded-lg transition duration-500 ease-in-out uppercase m-auto hover:scale-105 hover:-translate-y-1"
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
        className="w-full h-full m-auto text-base font-semibold uppercase cursor-pointer tablet:text-base laptop:text-xl notebook:text-3xl desktop:text-4xl"
      >
        {children}
      </a>
    </div>
  )
}

export default Button
