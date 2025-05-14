const DIRECTUS_URL = "https://cms.teamisaac.it/items/Member"
// export async function getMembers() {
//   const response = await fetch(DIRECTUS_URL)
//   const data = await response.json()
//   console.log(data)
//   return json.data
// }
export async function getMembers() {
  const res = await fetch(DIRECTUS_URL)
  const json = await res.json()
  // console.log(json.data)
  return json.data
}
