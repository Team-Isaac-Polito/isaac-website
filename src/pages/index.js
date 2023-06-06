import RotatedBorder from "../components/atoms/RotatedBorder"
import Hero from "../components/molecules/hero"
import Title from "../components/atoms/title"
import lightbulb from "../assets/lightbulb.png"
import Button from "../components/atoms/button"

export default function Home() {
  return (
    <div>
      <Hero
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="w-full pt-10 bg-white laptop:pt-24 text-dark-blue h-fit">
        {/* <Diagonal isTopDown secondColor="fill-white" firstColor="fill-black" /> */}
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
      <div className="mt-5">
        <RotatedBorder
          rotateBorder="-93deg"
          borderHeight="90%"
          color="red"
          width="150px"
          height="230px"
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
      {/* <Paragraph
				title="Progetti"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
			/>
			<div className="mt-40">
				<Paragraph
					isTextLeft
					title="Progetti"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
				/>
			</div> */}
      {/* <Diagonal
				isEnd
				firstColor="fill-dark-blue"
				secondColor="fill-white"
				lineColor="stroke-dark-blue"
			/> */}
      {/*<div classname="w-full">
            <div className="grid grid-cols-2 w-full text-dark-blue py-[100px] bg-white">
                <div className=" ml-[150px] mt-0 w-fit h-fit">
                    <Title className="text-light-blue">Caratteristiche</Title>
                    <div className="my-10">Ciao</div>
                    <Button text="Learn more" />
                </div >
                <div>
                    <div className="flex flex-row rounded-lg  bg-light-blue h-fit mb-6 py-3 w-[529px] m-auto">
                        <h2 className="ml-4 font-extrabold uppercase text-white align-left">Scheda tecnica</h2>
                    </div>
                    <div className="text-2xl h-fit">
                        <table className="m-auto table-auto border-dark-blue border-[1px] border-separate border-spacing-[0px] rounded-[10px] ">
                        <tbody>
                            <tr>
                            <td className="p-3 border-dark-blue border-[1px] rounded-tl-[9px]">Dimensioni</td>
                            <td className="p-3 border-dark-blue border-[1px] rounded-tr-[9px]">L800*W150*H80 mm</td>
                            </tr>
                            <tr>
                            <td className="p-3 border-dark-blue border-[1px]">Peso</td>
                            <td className="p-3 border-dark-blue border-[1px]">35kg max/modulo</td>
                            </tr>
                            <tr>
                            <td className="p-3 border-dark-blue border-[1px]">Velocità lineare</td>
                            <td className="p-3 border-dark-blue border-[1px]">1m/s max</td>
                            </tr>
                            <tr>
                            <td className="p-3 border-dark-blue border-[1px]">Angolo di imbardata</td>
                            <td className="p-3 border-dark-blue border-[1px]">35°</td>
                            </tr>
                            <tr>
                            <td className="p-3 border-dark-blue border-[1px]">Pendenza superabile</td>
                            <td className="p-3 border-dark-blue border-[1px]">45°, scale</td>
                            </tr>
                            <tr>
                            <td className="p-3 border-dark-blue border-[1px]">Batteria</td>
                            <td className="p-3 border-dark-blue border-[1px]">12V 1.8Ah</td>
                            </tr>
                            <tr>
                            <td className="p-3 border-dark-blue border-[1px]">Connettività</td>
                            <td className="p-3 border-dark-blue border-[1px]"> WiFi, 4G</td>
                            </tr>
                            <tr>
                            <td className="p-3 border-dark-blue border-[1px] rounded-bl-[9px]">Temperatura di lavoro</td>
                            <td className="p-3 border-dark-blue border-[1px] rounded-br-[9px]">-5°C min, 40°C max</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>*/}

    </div>
  )
}
