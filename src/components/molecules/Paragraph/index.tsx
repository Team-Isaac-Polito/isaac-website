import React, { FC } from "react"
import Button from "../../atoms/Button"
import RotatedBorderNew from "../../atoms/RotatedBorderNew"
import Title from "../../atoms/Title"
import ParagraphProps from "./index.types"

const Paragraph: FC<ParagraphProps> = ({
  isTextLeft,
  className,
  title,
  classNameTitle,
  classNameButton,
  classN,
  text,
}) => {
  return isTextLeft ? (
    <div className="skew-y-3">
      <div className={className}>
        <div className="-skew-y-3 grid grid-cols-2 gap-24 w-full py-[200px]">
          <div className="ml-[150px] w-fit m-auto">
            <Title className={classNameTitle}>{title}</Title>
            <div className="my-10">{text}</div>
            <Button className={classNameButton} isPrimary={false}>
              Learn more
            </Button>
          </div>
          <div className="relative">
            <RotatedBorderNew
              classN={classN}
              width="619px"
              height="729px"
              top={undefined}
            />
            <div className="m-auto z-10 rounded-md bg-gray-500 h-[666px] w-[547px]" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="skew-y-3">
      <div className={className}>
        <div className="-skew-y-3 grid grid-cols-2 gap-24 w-full py-[200px] ">
          <div className="relative">
            <RotatedBorderNew
              classN={classN}
              width="619px"
              height="729px"
              top={undefined}
            />
            <div className="m-auto z-10 rounded-md bg-gray-500 h-[666px] w-[547px]" />
          </div>
          <div className="mr-[150px] w-fit text-right m-auto">
            <Title className={classNameTitle}>{title}</Title>
            <div className="my-10">{text}</div>
            <div className="w-full pr-0">
              <Button className={classNameButton} isPrimary={false}>
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paragraph
