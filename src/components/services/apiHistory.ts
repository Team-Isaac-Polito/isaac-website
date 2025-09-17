const DIRECTUS_URL = "https://cms.teamisaac.it/items/History"
export async function getHistory() {
  const res = await fetch(DIRECTUS_URL)
  const json = await res.json()
  return json
}
