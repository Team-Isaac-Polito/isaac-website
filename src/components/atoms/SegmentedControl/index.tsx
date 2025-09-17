import React, { FC, useState } from "react"
import SegmentedControlProps from "./index.types"

const SegmentedControl: FC<SegmentedControlProps> = ({
  name,
  segments,
  callback,
  defaultIndex,
  controlRef,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const onInputChange = (value, index) => {
    setActiveIndex(index)
    callback(value, index)
  }
  return (
    <div
      className="flex items-center justify-between flex-wrap gap-y-0"
      ref={controlRef}
      id="services"
    >
      {segments.map((item, i) => (
        <div
          key={item.value}
          ref={item.ref}
          className="flex items-center justify-center h-[60px] "
        >
          <input
            type="radio"
            className="appearance-none cursor-pointer"
            value={item.value}
            id={item.label}
            name={name}
            onChange={() => onInputChange(item.value, i)}
            checked={i === activeIndex}
          />
          <label
            htmlFor={item.label}
            className={` py-1.5 px-4 block duration-400 ease-in-out cursor-pointer text-xl laptop:text-3xl notebook:text-4-5xl text-left ${activeIndex === i ? "text-yellow-isaac" : " text-white"}   `}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default SegmentedControl
