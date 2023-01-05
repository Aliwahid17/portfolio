import { blogs, projects } from "$lib/store"
import type { Blog, Github } from "src/app"
import type { PageLoad } from "./$types"

export const load : PageLoad = () => {

    const recentBlogs : Blog[] = []
    const recentProjects : Github[] = []

    blogs.subscribe(value => value.posts.forEach((item) => { recentBlogs.length < 2 && recentBlogs.push(item) }))
    projects.subscribe(value => value.forEach((item) => { recentProjects.length < 4 && recentProjects.push(item) }))

    return {
        "recentBlogs" : recentBlogs,
        'recentProjects': recentProjects
    }

}