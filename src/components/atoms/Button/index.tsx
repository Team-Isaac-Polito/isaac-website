import classNames from "classnames"
import React, { FC } from "react"
import ButtonProps from "./index.types"

const Button: FC<ButtonProps> = ({
  isPrimary,
  children,
  className,
  href,
  onClick,
}): JSX.Element => {
  return isPrimary ? (
    <a
      href={href}
      onClick={onClick}
      className="bg-light-blue-isaac cursor-pointer px-5 py-3 text-white text-base tablet:text-xl laptop:text-2xl notebook:text-3xl desktop:text-4xl flex flex-col items-center justify-center font-extrabold w-[220px] h-[45px] tablet:w-[170px] tablet:h-[35px] laptop:w-[220px] laptop:h-[55px] notebook:w-[270px] notebook:h-[55px] desktop:w-[320px] desktop:h-[72px] rounded-3xl tablet:rounded-md laptop:rounded-xl desktop:rounded-lg transition duration-500 ease-in-out uppercase m-auto hover:scale-105 hover:-translate-y-1"
    >
      <div>{children}</div>
    </a>
  ) : (
    <div>
      <a
        href={href}
        onClick={onClick}
        className={classNames(
          "cursor-pointer flex flex-col items-center justify-center text-base tablet:text-xl laptop:text-2xl notebook:text-3xl desktop:text-4xl font-semibold w-fit h-fit py-4 px-16 rounded-3xl tablet:rounded-md laptop:rounded-xl desktop:rounded-2xl transition duration-500 ease-in-out uppercase hover:scale-105 hover:-translate-y-1 border-solid border-[5px]",
          className
        )}
      >
        {children}
      </a>
    </div>
  )
}

export default Button
