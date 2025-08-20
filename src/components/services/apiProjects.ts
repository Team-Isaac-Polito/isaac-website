const DIRECTUS_URL =
  "https://cms.teamisaac.it/items/Projects?fields=*,gallery.*"
export async function getProjects() {
  const res = await fetch(DIRECTUS_URL)
  const json = await res.json()
  return json.data
}
