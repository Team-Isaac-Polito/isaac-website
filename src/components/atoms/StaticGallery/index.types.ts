export interface ImageItem {
  src: string
  alt: string
}

export default interface StaticGalleryProps {
  images: ImageItem[]
  className?: string
}
