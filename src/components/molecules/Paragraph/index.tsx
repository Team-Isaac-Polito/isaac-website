import React, { FC } from "react"
import ParagraphProps from "./index.types"

const Paragraph: FC<ParagraphProps> = (props) => {
  return props.invertSlope ? (
    props.isStart ? (
      <div className={" skew-y-3 h-fit" + props.className}>
        <div className={"py-[10px] " + props.palette} />
        <div className="bg-white py-[10px]" />
        <div className={props.palette}>
          <div className="-skew-y-3 py-[50px]">{props.children}</div>
        </div>
      </div>
    ) : (
      <div className={" skew-y-3 " + props.className}>
        <div className={props.palette}>
          <div className="-skew-y-3 py-[50px]">{props.children}</div>
        </div>
        <div className="bg-white py-[10px]" />
        <div className={"py-[10px] " + props.palette} />
      </div>
    )
  ) : props.isStart ? (
    <div className={" -skew-y-3 h-fit" + props.className}>
      <div className={"py-[10px] " + props.palette} />
      <div className="bg-white py-[10px]" />
      <div className={props.palette}>
        <div className="skew-y-3 py-[50px]">{props.children}</div>
      </div>
    </div>
  ) : (
    <div className={" -skew-y-3 " + props.className}>
      <div className={props.palette}>
        <div className="skew-y-3 py-[50px]">{props.children}</div>
      </div>
      <div className="bg-white py-[10px]" />
      <div className={"py-[10px] " + props.palette} />
    </div>
  )
}

export default Paragraph
