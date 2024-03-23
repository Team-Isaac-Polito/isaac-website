export interface AreaItem {
  title: string
  value: string
  description: string
  members: Member[]
}

export interface Member {
  name: string
  role?: string
  linkedin?: string
  image?: string
}
