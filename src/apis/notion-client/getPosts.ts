import { CONFIG } from "site.config"
import { NotionAPI } from "notion-client"
import { idToUuid } from "notion-utils"

import getAllPageIds from "src/libs/utils/notion/getAllPageIds"
import getPageProperties from "src/libs/utils/notion/getPageProperties"
import { TPosts } from "src/types"

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

// TODO: react query를 사용해서 처음 불러온 뒤로는 해당데이터만 사용하도록 수정
export const getPosts = async () => {
  let id = CONFIG.notionConfig.pageId as string
  const api = new NotionAPI({
    apiBaseUrl: "https://grandiose-lift-6b1.notion.site/api/v3",
  })

  console.log("[getPosts] pageId:", id)
  console.log("[getPosts] apiBaseUrl: https://grandiose-lift-6b1.notion.site/api/v3")

  try {
    const response = await api.getPage(id)
    console.log("[getPosts] response keys:", Object.keys(response))
    console.log("[getPosts] collection keys:", Object.keys(response.collection || {}))
    console.log("[getPosts] block keys count:", Object.keys(response.block || {}).length)

    id = idToUuid(id)
    console.log("[getPosts] uuid:", id)

    const collection = Object.values(response.collection)[0]?.value
    const block = response.block
    const schema = collection?.schema

    console.log("[getPosts] collection exists:", !!collection)
    console.log("[getPosts] schema exists:", !!schema)

    const rawMetadata = block[id]?.value
    console.log("[getPosts] rawMetadata type:", rawMetadata?.type)
    console.log("[getPosts] rawMetadata exists:", !!rawMetadata)

    // Check Type
    if (
      rawMetadata?.type !== "collection_view_page" &&
      rawMetadata?.type !== "collection_view"
    ) {
      console.log("[getPosts] Type check FAILED - returning empty array")
      console.log("[getPosts] Available block ids:", Object.keys(block).slice(0, 5))
      return []
    } else {
      // Construct Data
      const pageIds = getAllPageIds(response)
      console.log("[getPosts] pageIds count:", pageIds.length)

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
      console.log("[getPosts] posts count:", posts.length)
      return posts
    }
  } catch (error) {
    console.error("[getPosts] ERROR:", error)
    return []
  }
}
