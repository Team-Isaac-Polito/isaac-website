import React, { FC } from "react"
import styles from "./AreaModal.module.css"
import PortalModal from "@molecules/Area/PortalModal"
import Typography from "@atoms/Typography"
import Card from "@atoms/Card"
import { Member } from "./index.types"

interface Props {
  description: string
  members: Member[]
  onClose: () => void
}
export const AreaModal: FC<Props> = ({ description, members, onClose }) => {
  return (
    <PortalModal onClose={onClose}>
      <div className={styles.modalContent}>
        <Typography variant="card" className="text-center mb-4">
          {description}
        </Typography>
        <div className="flex flex-wrap justify-center gap-4">
          {members.map((m) => (
            <Card key={m.id} member={m} />
          ))}
        </div>
      </div>
    </PortalModal>
  )
}
