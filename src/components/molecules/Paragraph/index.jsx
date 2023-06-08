import React from "react"
import Button from "../../atoms/Button"
import RotatedBorder from "../../atoms/RotatedBorder"
import Title from "../../atoms/Title"

export default function Paragraph(props) {
  return props.isTextLeft ? (
    <div className="w-full">
      <div className="grid grid-cols-2 w-full text-white py-[100px] bg-dark-blue h-fit">
        <div className=" ml-[150px] mt-0 w-fit h-fit">
          <Title className="text-yellow">{props.title}</Title>
          <div className="my-10">{props.text}</div>
          <Button text="Learn more" isYellow />
        </div>
        <div className="w-full pl-24 m-auto h-fit">
          <div className="z-0 bg-gray-500 h-[666px] w-[547px] rounded-md ml-[55px]"></div>
          {/*<Frame color="stroke-yellow" className="-mt-[715px]" />*/}
        </div>
      </div>
    </div>
  ) : (
    <div class="bluePalette">
      <div className="grid grid-cols-2 gap-24 w-full py-[100px] ">
        <div className="relative">
          <RotatedBorder
            color="yellow"
            width="619px"
            height="729px">
          </RotatedBorder>
          <div className="m-auto z-10 rounded-md bg-gray-500 h-[666px] w-[547px]"  />
        </div>
        <div className="mr-[150px] w-fit text-right m-auto">
          <Title className="text-yellow">{props.title}</Title>
          <div className="my-10">{props.text}</div>
          <Button text="Learn more" isYellow className="ml-10 w-fit" />
        </div>
      </div>
    </div>
  )
}
