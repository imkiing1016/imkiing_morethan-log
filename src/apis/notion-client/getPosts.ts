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

  try {
    const response = await api.getPage(id)

    id = idToUuid(id)

    const collectionEntry = Object.values(response.collection)[0]
    console.log("[getPosts] collectionEntry keys:", Object.keys(collectionEntry || {}))
    console.log("[getPosts] collectionEntry.value keys:", Object.keys(collectionEntry?.value || {}))
    console.log("[getPosts] collectionEntry.value.schema sample:", JSON.stringify(collectionEntry?.value?.schema)?.substring(0, 200))

    const blockValue = response.block[id]?.value
    console.log("[getPosts] block[id].value keys:", Object.keys(blockValue || {}))
    console.log("[getPosts] block[id] keys:", Object.keys(response.block[id] || {}))
    console.log("[getPosts] block[id] full:", JSON.stringify(response.block[id])?.substring(0, 500))

    // Try to find the correct block with collection_view type
    const allBlockTypes = Object.entries(response.block).map(([key, val]: [string, any]) => ({
      id: key,
      type: val?.value?.type,
      hasValue: !!val?.value,
    }))
    console.log("[getPosts] all block types:", JSON.stringify(allBlockTypes.filter(b => b.type).slice(0, 10)))

    const collection = collectionEntry?.value
    const block = response.block
    const schema = collection?.schema

    const rawMetadata = block[id]?.value

    // Check Type
    if (
      rawMetadata?.type !== "collection_view_page" &&
      rawMetadata?.type !== "collection_view"
    ) {
      console.log("[getPosts] Type check FAILED")
      console.log("[getPosts] Trying to find collection_view block...")

      // Try to find any block with collection_view_page or collection_view type
      const cvBlock = Object.entries(block).find(([, val]: [string, any]) =>
        val?.value?.type === "collection_view_page" || val?.value?.type === "collection_view"
      )
      if (cvBlock) {
        console.log("[getPosts] Found collection_view block:", cvBlock[0], "type:", (cvBlock[1] as any)?.value?.type)
      }

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
