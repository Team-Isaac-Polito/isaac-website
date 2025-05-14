export default interface TypographyProps {
  variant:
    | "hero"
    | "h1"
    | "h2"
    | "p"
    | "label"
    | "footer"
    | "card"
    | "card-phone"
  className?: string
  children: React.ReactNode
}
