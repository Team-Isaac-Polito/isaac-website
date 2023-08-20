import React from "react"

export interface ImageItem {
  children: React.ReactNode
}

export default interface GalleryProps {
  images: ImageItem[]
  className?: string
}
