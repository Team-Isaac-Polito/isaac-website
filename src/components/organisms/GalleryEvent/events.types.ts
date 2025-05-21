export interface GalleryImage {
  id: number
  Event_id: number
  directus_files_id: string
}

export interface EventType {
  id: number
  title: string
  description_eng: string | null
  description_ita: string | null
  gallery: GalleryImage[]
}
