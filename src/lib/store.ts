import { sortContent } from "$lib/content";
import { readable } from "svelte/store";

const load = async () => {
    const posts = await sortContent()

    const parseTag = posts.map((value) => {
        return value.tags.split(',')
    })

    return { posts, parseTag }
}


export const items = readable(await load())

