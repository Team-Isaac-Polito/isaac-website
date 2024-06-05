export interface imgItem {
  src: string
  alt: string
}
export default interface GalleryEventProps {
  title: string
  desc: string
  palette: string
  images: imgItem[]
}
