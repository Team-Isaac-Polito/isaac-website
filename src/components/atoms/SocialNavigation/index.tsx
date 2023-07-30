import classNames from "classnames"
import React, { FC } from "react"
import { ReactComponent as InstagramButton } from "../../../assets/svg/instagramButton.svg"
import { ReactComponent as LinkedinButton } from "../../../assets/svg/linkedinButton.svg"
import SocialProps from "./index.types"

export const SocialNavigation: FC<SocialProps> = ({ className }) => {
  return (
    <>
      <div
        className={classNames(
          "text-white hover:text-yellow-isaac flex flex-row items-center gap-[6px] tablet:gap-3 laptop:gap-5 notebook:gap-6 desktop:gap-7",
          className ?? ""
        )}
      >
        <a
          href={"https://www.instagram.com/team_isaac_polito/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] text-white hover:text-yellow-isaac"
        >
          <InstagramButton />
        </a>
        <a
          href={"https://www.linkedin.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] text-white hover:text-yellow-isaac"
        >
          <LinkedinButton />
        </a>
      </div>
    </>
  )
}
