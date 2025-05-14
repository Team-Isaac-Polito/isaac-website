export interface AreaItem {
  title: string
  value: string
  description: string
  members: Member[]
}
export type AreasProps = {
  isLoading: boolean
  members: Member[]
}
export interface Member {
  id: number
  user_updated: string
  is_former: boolean
  name: string
  surname: string
  role: string | null
  area: string[]
  start_activities: string // you can use `Date` if you're converting it
  is_active: boolean | null
  end_activities: string | null
  linkedin: string | null
  email: string
  picture: string | null
  field: string | null
}
