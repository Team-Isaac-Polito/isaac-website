import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Card from "@atoms/Card"
import { MembersGridProps } from "./MembersGrid.types"
import React, { FC } from "react"
export const MembersGrid: FC<MembersGridProps> = ({
  members,
  isLoading,
  error,
  page,
  maxPage,
  itemsPerPage,
  onPageChange,
}) => {
  if (error) console.error(error)

  return (
    <div className="bg-gradient-to-br from-dark-blue-isaac via-dark-blue-isaac to-dark-blue-isaac rounded-2xl shadow-2xl w-full">
      {isLoading ? (
        <p>Loading members…</p>
      ) : (
        <>
          <div className="midtablap:flex justify-between hidden p-2">
            <button onClick={() => onPageChange(page - 1)} disabled={page <= 0}>
              <FaArrowLeft className="text-yellow-isaac" />
            </button>
            <button
              onClick={() => onPageChange(page + 1)}
              disabled={page >= maxPage}
            >
              <FaArrowRight className="text-yellow-isaac" />
            </button>
          </div>

          <div className="midtablap:flex hidden flex-wrap justify-around gap-11 h-[270px] px-2 py-2">
            {members
              .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
              .map((m) => (
                <Card key={m.id} member={m} />
              ))}
          </div>
        </>
      )}
    </div>
  )
}
