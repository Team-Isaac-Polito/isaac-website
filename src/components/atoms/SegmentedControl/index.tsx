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
      className="flex justify-between gap-24 "
      ref={controlRef}
      id="services"
    >
      {segments.map((item, i) => (
        <div key={item.value} ref={item.ref}>
          <div className="">
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
              className={`p-2 block m-auto duration-400 w-full ease-in-out cursor-pointer text-xl laptop:text-3xl notebook:text-4-5xl text-left ${
                i === activeIndex
                  ? "text-yellow-isaac font-extrabold"
                  : "text-dark-blue-isaac font-normal"
              }`}
            >
              {item.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SegmentedControl
