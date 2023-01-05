import { derived, readable } from 'svelte/store'
import { content } from "$lib/content"
import { project } from '$lib/project'
import type { Blog, Github } from 'src/app'


export const blogs = readable({ posts: [], parseTag: [] }, (set: (arg0: { posts: Blog[], parseTag: string[][] }) => void) => {
    Promise.resolve(content()).then(value => {
        return set(value)
    })
})

export const projects = readable([], (set: (arg0: Github[]) => void) => {
    Promise.resolve(project()).then((value) => {
        return typeof value !== 'undefined' && set(value)
    })
})

// export const recentItems = () => {
//     let recentPosts: Blog[] = []
//     let recentProjects: Github[] = []

//     blogs.subscribe(value => value.posts.forEach((item) => { recentPosts.length < 2 && recentPosts.push(item) }))
//     projects.subscribe(value => value.forEach((item) => { recentProjects.length < 4 && recentProjects.push(item) }))

//     // for(let index = 0 ; index < 1 ; index++){
//     //     blogs.subscribe(value => recentPosts.push(index))
//     // }

//     // return () => {
//     //     recentPosts
//     //     recentProjects
//     // }


//     // return  () => { recentProjects}

// }


