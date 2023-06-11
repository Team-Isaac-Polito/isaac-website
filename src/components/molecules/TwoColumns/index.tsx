import React, { FC } from "react"
import Button from "../../atoms/Button"
import RotatedBorderNew from "../../atoms/RotatedBorderNew"
import Title from "../../atoms/Title"
import TwoColumnsProps from "./index.types"

const TwoColumns: FC<TwoColumnsProps> = (props) => {
  return props.isTextLeft ? (
    <div className={props.heigth}>
      <div className="grid grid-cols-2 gap-20 w-full h-full">
        <div className=" w-fit m-auto">
          <Title className={props.palette}>{props.title}</Title>
          <div className="my-10 w-[700px]">{props.text}</div>
          {props.buttonText == undefined || props.buttonText == "" ? null : (
            <Button text={props.buttonText} className={props.palette} />
          )}
        </div>
        <RotatedBorderNew palette={props.palette} borderSize={props.borderSize}>
          {props.children}
        </RotatedBorderNew>
      </div>
    </div>
  ) : (
    <div className={props.heigth}>
      <div className="grid grid-cols-2 gap-20 w-full h-full">
        <RotatedBorderNew palette={props.palette} borderSize={props.borderSize}>
          {props.children}
        </RotatedBorderNew>
        <div className=" w-fit text-right m-auto">
          <Title className={props.palette}>{props.title}</Title>
          <div className="my-10 w-[700px]">{props.text}</div>

          <div className="w-full pr-0">
            {props.buttonText == undefined || props.buttonText == "" ? null : (
              <Button text={props.buttonText} className={props.palette} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default TwoColumns
