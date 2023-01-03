import type { Blog } from "src/app";

export const content = async () => {
    const mdModules = import.meta.glob("./content/*.{md,svx}");
    const items = await Promise.all(
        Object.keys(mdModules).map(async (path) => {
            const slug = path.slice(10, -3);
            const { metadata } = await mdModules[path]() as Blog;
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
                postTitle,
                focusKeyphrase,
                datePublished,
                lastUpdated,
                seoMetaDescription,
                featuredImage,
                featuredImageAlt,
                categories,
                tags,
                author,
                slug,
                readingTime
            } satisfies Blog;
        })
    );

    const posts = items.sort((first, second) => Date.parse(second.datePublished) - Date.parse(first.datePublished)) satisfies Blog[]

    const parseTag = posts.map((value) => {
        return value.tags.split(',')
    })

    return { posts, parseTag };
};



