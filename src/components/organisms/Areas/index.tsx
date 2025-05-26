import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useFilteredMembers } from "./hooks/useFilteredMembers"
import { useResponsiveCards } from "@molecules/Area/useResponsiveCards"
import { useCardPagination } from "./hooks/useCardPagination"
import type { AreaItem } from "./index.types"
import AreaSelector from "./AreaSelector"
import { MembersGrid } from "./MembersGrid"
import { AreaDescription } from "./AreaDescription"
import { AreaModal } from "./AreaModal"

export default function Areas() {
  const { t } = useTranslation("about")
  const areas = t("areas.items", { returnObjects: true }) as AreaItem[]

  const [area, setArea] = useState(areas[2].value)
  const [showModal, setShowModal] = useState(false)

  const itemsPerPage = useResponsiveCards()
  const { filtered, isLoading } = useFilteredMembers(area)
  const { page, maxPage, goTo } = useCardPagination(
    filtered.length,
    itemsPerPage
  )

  const currentArea = areas.find((a) => a.value === area)!

  return (
    <div className="flex flex-col items-center">
      <AreaSelector
        areas={areas}
        selected={area}
        onChange={(val) => {
          setArea(val)
          setShowModal(false)
          goTo(0)
        }}
      />

      <MembersGrid
        members={filtered}
        isLoading={isLoading}
        page={page}
        maxPage={maxPage}
        itemsPerPage={itemsPerPage}
        onPageChange={goTo}
      />

      <AreaDescription
        description={currentArea.description}
        isCondensed={itemsPerPage > 1}
        onLearnMore={() => setShowModal(true)}
      />

      {showModal && (
        <AreaModal
          description={currentArea.description}
          members={filtered}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
