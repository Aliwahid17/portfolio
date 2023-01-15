import type { Blog } from 'src/app';
import type { PageLoad } from './$types';
import { blogs } from "$lib/store";
import { tag } from '$lib/tag';

export const csr = false
export const load: PageLoad = async ({ params }) => {

    const blog: Blog[] = []
    const blogsTag: string[][] = []

    blogs.subscribe(value => {

        for (let index = 0; index < value.posts.length; index++) {
            if (value.posts[index].tags.includes(params.slug)) {
                blogsTag.push(value.parseTag[index]);
                blog.push(value.posts[index]);
            }

        }

    })

    if (tag(blogsTag).includes(params.slug)) {
        return {
            'blogs': blog,
            'blogsTag': blogsTag,
            'slug': params.slug
        }
    }

} 