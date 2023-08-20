import React from "react"

export interface MemberItem {
  name: string
  children: React.ReactNode
  linkedinPath: string
}

export default interface AreaProps {
  desc: string
  members: MemberItem[]
  init: number
}
