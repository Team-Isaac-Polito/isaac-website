import RotatedBorder from "../components/atoms/RotatedBorder"
import Hero from "../components/molecules/Hero"
import Title from "../components/atoms/Title"
import lightbulb from "../assets/lightbulb.png"

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div
        className="w-full pt-10 bg-white laptop:pt-24 text-dark-blue-isaac h-fit"
        id="about"
      >
        <Title className="m-auto mb-10 text-center">About</Title>
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
      <div className="mt-5">
        <RotatedBorder
          vertical="-93deg"
          color="red"
          width="150px"
          height="230px"
          top={0}
          left={0}
          right={0}
        >
          <div className="!overflow-visible -ml-3">
            <img
              src={lightbulb}
              className="w-[130px] relative left-[15%] top-[7px]"
              alt="lightbulb"
            />
          </div>
        </RotatedBorder>
      </div>
    </div>
  )
}
