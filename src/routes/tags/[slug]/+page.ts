import { content } from '$lib/content';
import type { Blog } from 'src/app';
import type { PageLoad } from './$types';


export const load: PageLoad = async ({ params }) => {

    const contents = await content();

    const blogs: Blog[] = []
    const blogsTag = []

    for (let index = 0; index < contents.posts.length; index++) {
        if (contents.posts[index].tags.includes(params.slug)) {
            blogsTag.push(contents.parseTag[index]);
            blogs.push(contents.posts[index]);
        }
    }

    if (blogs.length > 0) {

        return {
            "blogs": blogs,
            'blogsTag': blogsTag,
            'slug': params.slug
        }

    }
} 