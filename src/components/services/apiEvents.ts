const DIRECTUS_URL = "https://cms.teamisaac.it/items/Event?fields=*,gallery.*"
export async function getEvents() {
  const res = await fetch(DIRECTUS_URL)
  const json = await res.json()
  return json.data
}
