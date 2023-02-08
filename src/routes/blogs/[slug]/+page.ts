import type { Blog } from 'src/app';
import type { PageLoad } from '../../$types';


export const load = (async  ({ params }) => {

    const { slug } = params;
    const postPromie = import(`../../../lib/content/${slug}.md`)
    const pagePromise = import(`../../../lib/content/${slug}.md`)

    const [postResult, pageResult] = await Promise.all([
        postPromie,
        pagePromise
    ])

    const { default: body, metadata } = postResult
    const { default: page } = pageResult

    if (!body) {
        return {
            status: 404,
        }
    }



    const {
        author,
        postTitle,
        focusKeyphrase,
        datePublished,
        lastUpdated,
        seoMetaDescription,
        featuredImage,
        featuredImageAlt,
        categories,
        tags,
        readingTime
    } = metadata as Blog;

    return {
        post: {
            author,
            postTitle,
            focusKeyphrase,
            datePublished,
            lastUpdated,
            seoMetaDescription,
            featuredImage,
            featuredImageAlt,
            categories,
            tags,
            readingTime
        },
        slug,
        page,
    }

}) satisfies PageLoad