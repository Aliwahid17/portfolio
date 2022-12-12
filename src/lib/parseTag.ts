import { sortContent } from "./content"

export const parseTag = async () => {
    const posts = await sortContent()
    return posts.map((value: any) => {
        return value.tags.split(',')
    })
}