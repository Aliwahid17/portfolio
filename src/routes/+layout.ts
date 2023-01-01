import { content } from "$lib/content"
import { project } from "$lib/project"
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
    const contents = await content()
    const projects = await project()
    // return await content()
    return { contents , projects }
}