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
      className="flex notebook:flex-row flex-col justify-between gap-24 "
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
              className={`p-3 pt-1 block duration-400 ease-in-out cursor-pointer text-xl laptop:text-3xl notebook:text-4-5xl text-left ${
                i === activeIndex
                  ? "text-yellow-isaac font-extrabold bg-gradient-to-br from-dark-blue-isaac via-dark-blue-isaac to-dark-blue-isaac border-y-dark-blue-isaac rounded-full shadow-dark-blue-isaac mb-0 pb-0 w-fit"
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
