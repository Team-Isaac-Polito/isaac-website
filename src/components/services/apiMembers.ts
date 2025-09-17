const DIRECTUS_URL = "https://cms.teamisaac.it/items/Member"

export async function getMembers() {
  const res = await fetch(DIRECTUS_URL)
  const json = await res.json()
  return json.data
}
