import { NotionAPI } from "notion-client"

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI({
    apiBaseUrl: "https://grandiose-lift-6b1.notion.site/api/v3",
  })
  const recordMap = await api.getPage(pageId)

  // notion.site API의 중첩 value 구조를 인라인으로 정규화
  const normalizeMap = (map: Record<string, any>) => {
    for (const [key, val] of Object.entries(map || {})) {
      if (val?.value?.value) {
        map[key] = { value: val.value.value, role: val.value.role }
      }
    }
  }

  normalizeMap(recordMap.block)
  normalizeMap(recordMap.collection)
  normalizeMap(recordMap.collection_view)

  return recordMap
}
