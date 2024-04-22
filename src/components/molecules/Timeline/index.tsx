import React, { FC, useState } from "react"
import SegmentedControlProps from "./index.types"

const SegmentedControl: FC<SegmentedControlProps> = ({
  segments,
  callback,
  defaultIndex = 0,
  controlRef,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const onInputChange = (value, index) => {
    setActiveIndex(index)
    callback(value, index)
  }

  return (
    <div ref={controlRef}>
      <div className="relative z-0 grid grid-rows-3 gap-8 m-auto bg-transparent border-2 border-white tablet:border-none tablet:gap-4 notebook:gap-8 tablet:grid-cols-10 tablet:grid-rows-1 desktop:p-3">
        {segments?.map((item, i) => (
          <div
            key={item.value}
            ref={item.ref}
            className={`z-20 text-center m-auto ${item.className}`}
          >
            <div className="relative">
              <input
                type="radio"
                className="absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
                value={item.value}
                id={item.value}
                onChange={() => onInputChange(item.value, i)}
                checked={i === activeIndex}
              />
              <label
                htmlFor={item.value}
                className={`p-2 block m-auto duration-400 ease-in-out cursor-pointer ${
                  i === activeIndex
                    ? "w-8 h-8 desktop:w-12 desktop:h-12 rounded-full bg-white"
                    : "w-8 h-8 desktop:w-12 desktop:h-12 rounded-full bg-dark-blue-isaac border-4 border-white"
                }`}
              />
              <p className="block">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SegmentedControl
