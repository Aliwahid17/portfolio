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

    const seoProps = {
        title: `Wahid Ali - ${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}`,
        metadescription: "Read the interesting and detailed research blogs about technology worlds sorted according to topics",
        slug: `tags/${params.slug}`,
        type: "website",
        image: 'home.webp',
        imageAlt: "If at first, you don't succeed you must be programmer."
    };

    if (blog.length > 0) {
        return {
            'blogs': blog,
            'blogsTag': blogsTag,
            'slug': params.slug,
            'tags' : contents.parseTag,
            'seoProps' : seoProps
        }
    }

} 