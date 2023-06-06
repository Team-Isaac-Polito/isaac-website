import Title from "../components/atoms/Title"

export default function Home() {
  return (
    <div className="mt-10 transform skew-y-3 bg-white">
      <div className="w-full pt-20 transform -skew-y-3 laptop:pt-24 text-dark-blue h-fit">
        <Title className="m-auto mb-10 text-center">About us</Title>
        <p className="mx-10 tablet:mx-[75px] laptop:mx-[100px] desktop:mx-[200px] w-fit tablet:text-center text-[18px] laptop:text-2xl desktop:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
          Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
          nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
          ac lacinia et, mollis in ante.{" "}
        </p>
        <div className="grid grid-rows-3 gap-6 tablet:gap-0 tablet:grid-rows-1 tablet:grid-cols-3 py-20 mx-20 laptop:mx-40 desktop:mx-[500px] dekstop:gap-10">
          <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] desktop:w-[262px] desktop:h-[263px] bg-gray-400 rounded-[10px] m-auto"></div>
          <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] desktop:w-[262px] desktop:h-[263px] bg-gray-400 rounded-[10px] m-auto"></div>
          <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] desktop:w-[262px] desktop:h-[263px] bg-gray-400 rounded-[10px] m-auto"></div>
        </div>
      </div>
    </div>
  )
}
