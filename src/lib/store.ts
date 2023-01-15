import { derived, readable } from 'svelte/store'
import { content } from "$lib/content"
import { project } from '$lib/project'
import type { Blog, Github } from 'src/app'



export const blogs = readable({ posts: [], parseTag: [] }, (set: (arg0: { posts: Blog[], parseTag: string[][] }) => void) => {
    Promise.resolve(content()).then(value => {
        return set(value)
    })
})

export const projects = readable(undefined, (set: (arg0: Github[]) => void) => {
    Promise.resolve(project()).then((value) => {
        return typeof value !== 'undefined' && set(value)
    })
})

export const recentItems = derived([blogs, projects], ([$blogs, $projects]) => {
    const recentBlogs: Blog[] = []
    const blogsTag: string[][] = []
    const recentProjects: Github[] = []


    for (let index = 0; index < 1; index++) {
        recentBlogs.push($blogs.posts[index])
        blogsTag.push($blogs.parseTag[index])
    }

    for (let index = 0; index < 4; index++) {
        typeof $projects !== 'undefined' && recentProjects.push($projects[index])
    }

    return {  recentBlogs, recentProjects, blogsTag }

})

