export interface GalleryImage {
  id: number
  Projects_id: number
  directus_files_id: string
}
type SpecItem = {
  label: string
  value: string
  upgrade?: boolean
}

export type SpecSection = {
  title?: string
  category: string
  items: SpecItem[]
}
export interface ProjectType {
  id: number
  title: string
  description_eng: string | null
  description_ita: string | null
  specs_ita: SpecSection[] | null
  specs_eng: SpecSection[] | null
  gallery: GalleryImage[]
  video?: string
}
export interface ProjectsProps {
  activeProject: string
  projects: ProjectType[]
  isActive: string
  handleActive: (title: string) => void
}
