import { MouseEventHandler } from "react"

export default interface ButtonProps {
  isPrimary?: boolean
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement> | null
}
