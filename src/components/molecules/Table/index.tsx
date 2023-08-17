import React, { FC } from "react"
import TableProps from "./index.types"
import { useTranslation } from "react-i18next"

const Table: FC<TableProps> = ({ translationPath, rows, palette }) => {
  const { t } = useTranslation()

  const cells: Array<React.ReactNode> = []

  cells.push(
    <tr key={translationPath + "0"}>
      <td className="p-3  tablet:p-2 notebook:p-3 border-dark-blue-isaac border-[1px] rounded-tl-[12px]">
        {t(translationPath + ".column1.1")}
      </td>
      <td className="p-3 tablet:p-2 notebook:p-3 border-dark-blue-isaac border-[1px] rounded-tr-[12px]">
        {t(translationPath + ".column2.1")}
      </td>
    </tr>
  )

  for (let i = 2; i < rows; i++) {
    cells.push(
      <tr key={translationPath + rows + i}>
        <td className="p-3 tablet:p-2 notebook:p-3 border-dark-blue-isaac border-[1px]">
          {t(translationPath + ".column1." + i)}
        </td>
        <td className="p-3 tablet:p-2 notebook:p-3 border-dark-blue-isaac border-[1px]">
          {t(translationPath + ".column2." + i)}
        </td>
      </tr>
    )
  }

  cells.push(
    <tr key={translationPath + rows}>
      <td className="p-3 tablet:p-2 notebook:p-3 border-dark-blue-isaac border-[1px] rounded-bl-[12px]">
        {t(translationPath + ".column1." + rows)}
      </td>
      <td className="p-3 tablet:p-2 notebook:p-3 border-dark-blue-isaac border-[1px] rounded-br-[12px]">
        {t(translationPath + ".column2." + rows)}
      </td>
    </tr>
  )

  return (
    <div className={palette}>
      <div className="flex flex-row w-full py-3 m-auto mb-6 rounded-2xl bg-light-blue-isaac h-fit">
        <h2
          className="ml-4 font-extrabold text-white uppercase align-left
                    text-xl tablet:text-base laptop:text-2xl notebook:text-3xl desktop:text-5xl 
                    desktop:leading-tight"
        >
          {t(translationPath + ".title")}
        </h2>
      </div>
      <div className=" h-fit">
        <table
          className="m-auto table-auto border-dark-blue-isaac border-[1px] border-separate border-spacing-[0px] rounded-[13px] font-normal
                    text-lg tablet:text-xs laptop:text-lg notebook:text-2xl desktop:text-4xl 
                    desktop:leading-tight"
        >
          <tbody>{cells}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
