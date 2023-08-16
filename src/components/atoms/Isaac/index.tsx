import Typography from "@atoms/Typography"
import React from "react"

function Isaac() {
  return (
    <div className="w-full pt-10 bg-white laptop:pt-24 text-dark-blue-isaac h-fit">
      <Typography className="m-auto mb-10 text-center" variant="h1">
        About
      </Typography>
      <Typography
        variant="p"
        className="mx-10 tablet:mx-[75px] laptop:mx-[100px] desktop:mx-[200px] w-fit tablet:text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
        laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
        Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
        nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
        ac lacinia et, mollis in ante.{" "}
      </Typography>
      <div className="grid grid-rows-3 gap-6 tablet:gap-0 tablet:grid-rows-1 tablet:grid-cols-3 py-20 mx-20 laptop:mx-40 desktop:mx-[500px] desktop:gap-20">
        <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] notebook:w-[230px] notebook:h-[230px] desktop:w-[280px] desktop:h-[280px] bg-gray-400 rounded-[10px] m-auto"></div>
        <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] notebook:w-[230px] notebook:h-[230px] desktop:w-[280px] desktop:h-[280px] bg-gray-400 rounded-[10px] m-auto"></div>
        <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] notebook:w-[230px] notebook:h-[230px] desktop:w-[280px] desktop:h-[280px] bg-gray-400 rounded-[10px] m-auto"></div>
      </div>
    </div>
  )
}

export default Isaac
