import Title from "@atoms/Title"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import reseq from "../assets/prova.mp4"
import { useTranslation } from "react-i18next"

export default function Projects(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div>
      <div>
        <Title className="text-center py-7 text-dark-blue">
          Rese.Q Mk1
        </Title>

        <video width="1920" height="600" autoPlay muted loop>
          <source src={reseq} type="video/mp4" />
        </video>

        <Paragraph palette="bluePalette" className="my-32">
          <TwoColumns
            isTextLeft
            palette="bluePalette"
            title="chi è rese.q mk1"
            text={t("projects.paragraph1.text")}
            buttonText="Learn more"
            classNameBorder="bluePalette tablet:w-[400px] tablet:h-[500px] desktop:w-[619px] desktop:h-[729px]"
            className="desktop:h-[1100px] tablet:h-[650px]"
          >
            <div className="rounded-md bg-gray-500 desktop:w-[547px] desktop:h-[666px] tablet:w-[340px] tablet:h-[460px]" />
          </TwoColumns>
        </Paragraph>

        <TwoColumns
          className="h-[800px]"
          palette="whitePalette"
          classNameBorder="h-0 w-0"
          title="caratteristiche"
          text="Struttura modulare:
          Permette di adattare il robot a diverse scenari, con moduli specializzati
          Configurazione snake-like: Permette maggiore agilità nel movimento
          Configurazione braccio robotico: Per un sollevamento in verticale di parte del robot
          Controllo remoto:
          Tramite un telecomando e una telecamera sul robot, con possibilità future di guida autonoma e semi-autonoma"
        >
          <div className="w-fit">
            <div className="flex flex-row w-full py-3 m-auto mb-6 rounded-2xl bg-light-blue-isaac h-fit">
              <h2 className="ml-4 font-extrabold text-white uppercase align-left">
                Scheda tecnica
              </h2>
            </div>
            <div className=" h-fit">
              <table className="m-auto table-auto border-dark-blue-isaac border-[1px] border-separate border-spacing-[0px] rounded-[13px] ">
                <tbody>
                  <tr>
                    <td className="p-3 border-dark-blue-isaac border-[1px] rounded-tl-[12px]">
                      Dimensioni
                    </td>
                    <td className="p-3 border-dark-blue-isaac border-[1px] rounded-tr-[12px]">
                      L800*W150*H80 mm
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      Peso
                    </td>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      35kg max/modulo
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      Velocità lineare
                    </td>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      1m/s max
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      Angolo di imbardata
                    </td>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      35°
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      Pendenza superabile
                    </td>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      45°, scale
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      Batteria
                    </td>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      12V 1.8Ah
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      Connettività
                    </td>
                    <td className="p-3 border-dark-blue-isaac border-[1px]">
                      {" "}
                      WiFi, 4G
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-dark-blue-isaac border-[1px] rounded-bl-[12px]">
                      Temperatura di lavoro
                    </td>
                    <td className="p-3 border-dark-blue-isaac border-[1px] rounded-br-[12px]">
                      -5°C min, 40°C max
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TwoColumns>

        <Paragraph
          invertSlope
          palette="lightBluePalette"
          className="py-[100px] mb-[50px]"
        >
          <div className="m-auto mx-[200px] text-center">
            <Title className="mb-20 lightBluePalette">obiettivi</Title>
            Lo scopo di Rese.Q Mk1 è quello di fornire supporto ai soccorritori
            in situazioni emergenziali. Le sue funzionalità attuali sono:
          </div>
        </Paragraph>
      </div>
    </div>
  )
}
