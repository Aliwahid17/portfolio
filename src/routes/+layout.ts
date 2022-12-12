import { sortContent } from "$lib/content"
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
    const posts = await sortContent()

    const parseTag = posts.map((value: any) => {
        return value.tags.split(',')
    })

    return { posts, parseTag }
}