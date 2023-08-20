import React from "react"

export interface ImageItem {
  children: React.ReactNode
}

export default interface StaticGalleryProps {
  images: ImageItem[]
  className?: string
}
