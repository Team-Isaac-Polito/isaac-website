import React, { FC } from "react"
import SocialProps from "./index.types"
import { ReactComponent as EmailButton } from "../../../assets/svg/emailButton.svg"
import { ReactComponent as InstagramButton } from "../../../assets/svg/instagramButton.svg"
import { ReactComponent as LinkedinButton } from "../../../assets/svg/linkedinButton.svg"
import classNames from "classnames"

const Social: FC<SocialProps> = ({ className }) => {
  return (
    <>
      <div
        className={classNames(
          "text-white hover:text-yellow-isaac flex flex-row items-center gap-[6px] tablet:gap-3 laptop:gap-5 notebook:gap-6 desktop:gap-7",
          className ?? ""
        )}
      >
        <a
          href={"https://www.instagram.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[13px] tablet:w-[30px] laptop:w-[47px] notebook:w-[63px] desktop:w-16 text-white hover:text-yellow-isaac"
        >
          <InstagramButton />
        </a>
        <a
          href={"https://www.linkedin.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[13px] tablet:w-[30px] laptop:w-[47px] notebook:w-[63px] desktop:w-16 text-white hover:text-yellow-isaac"
        >
          <LinkedinButton />
        </a>
        <a
          href={"/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[13px] tablet:w-[30px] laptop:w-[47px] notebook:w-[63px] desktop:w-fit m-auto text-white hover:text-yellow-isaac"
        >
          <EmailButton />
        </a>
      </div>
    </>
  )
}

export default Social
