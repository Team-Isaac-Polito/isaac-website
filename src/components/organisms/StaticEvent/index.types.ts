export interface imgItem {
  src: string
  alt: string
}

export default interface StaticEventProps {
  title: string
  desc: string
  palette: string
  images: imgItem[]
}
