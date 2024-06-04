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
          "text-white grid grid-cols-2 items-center gap-[6px] w-fit",
          className ?? ""
        )}
      >
        <a
          href={"https://www.instagram.com/team_isaac_polito/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] text-white"
        >
          <InstagramButton />
        </a>
        <a
          href={"https://www.linkedin.com/company/team-isaac-polito/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] text-white"
        >
          <LinkedinButton />
        </a>
      </div>
    </>
  )
}
