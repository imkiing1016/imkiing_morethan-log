import { CONFIG } from "site.config"
import { NotionAPI } from "notion-client"
import { idToUuid } from "notion-utils"

import getAllPageIds from "src/libs/utils/notion/getAllPageIds"
import getPageProperties from "src/libs/utils/notion/getPageProperties"
import { TPosts } from "src/types"

/**
 * notion.site API는 표준 notion-client가 기대하는 것보다
 * 한 단계 더 깊게 감싼 구조로 데이터를 반환합니다.
 * 예: block[id].value.type → block[id].value.value.type
 * 이 함수로 응답을 정규화합니다.
 */
const normalizeResponse = (response: any): any => {
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

  // collection_query: { collectionId: { viewId: { ... } } }
  // notion.site에서는 collectionId 값이 { value: { value: viewMap, role } } 로 감싸질 수 있음
  // getAllPageIds가 Object.values(cq)[0] 으로 직접 접근하므로 value.value를 꺼내야 함
  for (const [key, val] of Object.entries(response.collection_query || {})) {
    const v = val as any
    if (v?.value?.value) {
      response.collection_query[key] = v.value.value
    } else if (v?.value && typeof v.value === "object" && !v.collection_group_results) {
      response.collection_query[key] = v.value
    }
  }

  return response
}

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

// TODO: react query를 사용해서 처음 불러온 뒤로는 해당데이터만 사용하도록 수정
export const getPosts = async () => {
  let id = CONFIG.notionConfig.pageId as string
  const api = new NotionAPI({
    apiBaseUrl: "https://grandiose-lift-6b1.notion.site/api/v3",
  })

  const response = normalizeResponse(await api.getPage(id))
  id = idToUuid(id)
  const collection = (Object.values(response.collection)[0] as any)?.value
  const block = response.block
  const schema = collection?.schema

  const rawMetadata = block[id].value

  // Check Type
  if (
    rawMetadata?.type !== "collection_view_page" &&
    rawMetadata?.type !== "collection_view"
  ) {
    return []
  } else {
    // Construct Data
    const pageIds = getAllPageIds(response)
    const data = []
    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i]
      const properties = (await getPageProperties(id, block, schema)) || null
      // Add fullwidth, createdtime to properties
      properties.createdTime = new Date(
        block[id].value?.created_time
      ).toString()
      properties.fullWidth =
        (block[id].value?.format as any)?.page_full_width ?? false

      data.push(properties)
    }

    // Sort by date
    data.sort((a: any, b: any) => {
      const dateA: any = new Date(a?.date?.start_date || a.createdTime)
      const dateB: any = new Date(b?.date?.start_date || b.createdTime)
      return dateB - dateA
    })

    const posts = data as TPosts
    return posts
  }
}
