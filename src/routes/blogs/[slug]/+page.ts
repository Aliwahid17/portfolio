import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {

    const { slug } = params;

    const postPromie = import(`../../../content/${slug}.md`)
    const pagePromise = import(`../../../content/${slug}.md`)


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
        ogImage,
        ogSquareImage,
        twitterImage,
        categories,
        tags,
    } = metadata;

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
            ogImage,
            ogSquareImage,
            twitterImage,
            categories,
            tags,
        },
        slug,
        page,
    }

}