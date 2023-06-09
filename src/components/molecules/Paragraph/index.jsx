import React from "react"
import Button from "../../atoms/Button"
import RotatedBorder from "../../atoms/RotatedBorder"
import Title from "../../atoms/Title"

export default function Paragraph(props) {
  return props.isTextLeft ? (
    <div className="skew-y-3">
      <div class="bluePalette">
        <div className="-skew-y-3 grid grid-cols-2 gap-24 w-full py-[200px]">
          <div className="ml-[150px] w-fit m-auto">
            <Title>{props.title}</Title>
            <div className="my-10">{props.text}</div>
            <Button text="Learn more" isYellow />
          </div>
          <div className="relative">
            <RotatedBorder
              color="#ffc757"
              width="619px"
              height="729px"
            ></RotatedBorder>
            <div className="m-auto z-10 rounded-md bg-gray-500 h-[666px] w-[547px]" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="skew-y-3">
      <div class="bluePalette">
        <div className="-skew-y-3 grid grid-cols-2 gap-24 w-full py-[200px] ">
          <div className="relative">
            <RotatedBorder
              color="#ffc757"
              width="619px"
              height="729px"
            ></RotatedBorder>
            <div className="m-auto z-10 rounded-md bg-gray-500 h-[666px] w-[547px]" />
          </div>
          <div className="mr-[150px] w-fit text-right m-auto">
            <Title>{props.title}</Title>
            <div className="my-10">{props.text}</div>
            <Button text="Learn more" isYellow className="ml-10 w-fit" />
          </div>
        </div>
      </div>
    </div>
  )
}
