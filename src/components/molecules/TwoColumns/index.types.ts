export default interface TwoColumnsProps {
  props?: string
  palette: string
  isTextLeft?: boolean

  text: string
  buttonText?: string
  title: string

  children: React.ReactNode

  contentSize?: string
  borderSize?: string
  heigth?: string
}
