import { NotionAPI } from "notion-client"

const normalizeResponse = (response: any) => {
  const normalizeMap = (map: Record<string, any>) => {
    for (const [key, val] of Object.entries(map || {})) {
      if (val?.value?.value) {
        map[key] = { value: val.value.value, role: val.value.role }
      }
    }
  }

  normalizeMap(response.block)
  normalizeMap(response.collection)
  normalizeMap(response.collection_view)

  return response
}

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI({
    apiBaseUrl: "https://grandiose-lift-6b1.notion.site/api/v3",
  })
  const recordMap = await api.getPage(pageId)
  return normalizeResponse(recordMap)
}
