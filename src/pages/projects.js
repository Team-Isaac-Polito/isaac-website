import React from "react"
import Button from "../components/atoms/Button"
import Title from "../components/atoms/Title"

export default function Projects() {
  return (
    <div>
    <div className="m-auto text-white w-fit">Pagina Progetti</div>
    <div classname="w-full">
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
        </div>
    </div>
  )
}
