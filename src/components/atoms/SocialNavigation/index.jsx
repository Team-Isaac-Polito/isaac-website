import { ReactComponent as FacebookButton } from "../../../assets/svg/facebookButton.svg"
import { ReactComponent as InstagramButton } from "../../../assets/svg/instagramButton.svg"
import { ReactComponent as LinkedinButton } from "../../../assets/svg/linkedinButton.svg"
import classNames from "classnames"

export const SocialNavigation = ({ className }) => {
  return (
    <>
      <div
        className={classNames(
          "text-white hover:text-yellow flex flex-row items-center gap-[6px] tablet:gap-3 laptop:gap-5 notebook:gap-6 desktop:gap-7",
          className ?? ""
        )}
      >
        <a
          href={"https://www.facebook.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 text-white hover:text-yellow"
        >
          <FacebookButton />
        </a>
        <a
          href={"https://www.instagram.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] text-white hover:text-yellow"
        >
          <InstagramButton />
        </a>
        <a
          href={"https://www.linkedin.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40px] text-white hover:text-yellow"
        >
          <LinkedinButton />
        </a>
      </div>
    </>
  )
}
