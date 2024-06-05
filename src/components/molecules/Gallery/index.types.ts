export interface ImageItem {
  src: string
  alt: string
}

export default interface GalleryProps {
  images: ImageItem[]
  className?: string
}
