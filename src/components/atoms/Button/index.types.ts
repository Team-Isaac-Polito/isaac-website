import { MouseEventHandler } from "react"

export default interface ButtonProps {
  isPrimary?: boolean
  children: React.ReactNode
  className?: string
  palette?: string
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement> | null
}
