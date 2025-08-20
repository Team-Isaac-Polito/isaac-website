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
    <div>
      {isLoading ? (
        <p>Loading members…</p>
      ) : (
        <>
          <div className="midtablap:flex justify-between hidden p-2">
            <button
              onClick={() => onPageChange(page - 1)}
              disabled={page <= 0}
              className="text-yellow-isaac disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={() => onPageChange(page + 1)}
              disabled={page >= maxPage}
              className="text-yellow-isaac disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="midtablap:flex hidden flex-wrap justify-around gap-11 h-[270px] px-2 py-2">
            {members
              .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
              .map((m) => (
                <Card key={m.id} member={m} />
              ))}
          </div>
          <div className="text-right mr-2 mb-2 hidden midtablap:block">
            <p className="text-white text-sm ">
              {page + 1}/{maxPage + 1}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
