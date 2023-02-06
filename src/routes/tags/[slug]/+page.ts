import type { Blog } from 'src/app';
import type { PageLoad } from './$types';
import { content } from '$lib/content';

export const load: PageLoad = async ({ params }) => {

    const contents = await content()
    const blog: Blog[] = []
    const blogsTag: string[][] = []


    for (let index = 0; index < contents.posts.length; index++) {
        if (contents.posts[index].tags.includes(params.slug)) {
            blogsTag.push(contents.parseTag[index]);
            blog.push(contents.posts[index]);
        }


    }

    if (blog.length > 0) {
        return {
            'blogs': blog,
            'blogsTag': blogsTag,
            'slug': params.slug
        }
    }

} 