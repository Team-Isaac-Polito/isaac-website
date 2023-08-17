import classNames from "classnames"
import React, { FC } from "react"
import { ReactComponent as EmailButton } from "../../../assets/svg/emailButton.svg"
import { ReactComponent as InstagramButton } from "../../../assets/svg/instagramButton.svg"
import { ReactComponent as LinkedinButton } from "../../../assets/svg/linkedinButton.svg"
import SocialProps from "./index.types"

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
          className="w-[13px] tablet:w-8 laptop:w-12 notebook:w-14 desktop:w-16 text-white hover:text-yellow-isaac"
        >
          <InstagramButton />
        </a>
        <a
          href={"https://www.linkedin.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[13px] tablet:w-8 laptop:w-12 notebook:w-14 desktop:w-16 text-white hover:text-yellow-isaac"
        >
          <LinkedinButton />
        </a>
        <a
          href={"/"}
          target="_blank"
          rel="noopener noreferrer"
          className="m-auto text-white hover:text-yellow-isaac"
        >
          <EmailButton className="tablet:w-8 laptop:w-12 notebook:w-14 desktop:w-16 " />
        </a>
      </div>
    </>
  )
}

export default Social
