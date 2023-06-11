import React from "react"
import Button from "../../atoms/Button"
import RotatedBorderNew from "../../atoms/RotatedBorderNew"
import Title from "../../atoms/Title"

export default function Paragraph(props) {
  return props.isTextLeft ? (
    <div className="skew-y-3">
      <div className={props.class}>
        <div className="-skew-y-3 grid grid-cols-2 gap-24 w-full py-[200px]">
          <div className="ml-[150px] w-fit m-auto">
            <Title className={props.class}>{props.title}</Title>
            <div className="my-10">{props.text}</div>
            <Button text="Learn more" class={props.class} />
          </div>
          <div className="relative">
            <RotatedBorderNew
              classN={props.class}
              color="green"
              width="619px"
              height="729px"
            ></RotatedBorderNew>
            <div className="m-auto z-10 rounded-md bg-gray-500 h-[666px] w-[547px]" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="skew-y-3">
      <div className={props.class}>
        <div className="-skew-y-3 grid grid-cols-2 gap-24 w-full py-[200px] ">
          <div className="relative">
            <RotatedBorderNew
              classN={props.class}
              width="619px"
              height="729px"
            ></RotatedBorderNew>
            <div className="m-auto z-10 rounded-md bg-gray-500 h-[666px] w-[547px]" />
          </div>
          <div className="mr-[150px] w-fit text-right m-auto">
            <Title className={props.class}>{props.title}</Title>
            <div className="my-10">{props.text}</div>
            <div className="w-full pr-0">
              <Button text="Learn more" className={props.class} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
