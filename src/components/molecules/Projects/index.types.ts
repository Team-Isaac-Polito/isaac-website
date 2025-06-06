export interface GalleryImage {
  id: number
  Projects_id: number
  directus_files_id: string
}

export interface ProjectType {
  id: number
  title: string
  description_eng: string | null
  description_ita: string | null
  features_eng: string | null
  features_ita: string | null
  gallery: GalleryImage[]
}
export interface ProjectsProps {
  activeProject: string // Prop to specify which project to display
}
