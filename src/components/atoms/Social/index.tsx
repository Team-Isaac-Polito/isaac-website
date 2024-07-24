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
          "text-white hover:text-yellow-isaac grid grid-cols-3 mx-auto mt-0 gap-[6px] tablet:gap-3 laptop:gap-5 notebook:gap-6 desktop:gap-7",
          className ?? ""
        )}
      >
        <a
          href={"https://www.instagram.com/team_isaac_polito/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 mx-auto text-white laptop:w-10 notebook:w-14 desktop:w-16 hover:text-yellow-isaac"
        >
          <InstagramButton />
        </a>
        <a
          href={"https://www.linkedin.com/company/team-isaac-polito/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 mx-auto text-white laptop:w-10 notebook:w-14 desktop:w-16 hover:text-yellow-isaac"
        >
          <LinkedinButton />
        </a>
        <a
          href="mailto:team.isaac.polito@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 mx-auto text-white hover:text-yellow-isaac laptop:w-10 notebook:w-14 desktop:w-16"
        >
          <EmailButton />
        </a>
      </div>
    </>
  )
}

export default Social
