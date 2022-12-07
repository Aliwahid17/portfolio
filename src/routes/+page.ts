import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const mdModules = import.meta.glob("../content/*.{md,svx}");
    // console.log(Object.keys(mdModules))
    const posts = await Promise.all(
        Object.keys(mdModules).map(async (path) => {
            const slug = path.slice(11, -3);

            // console.log(path[2])
            // console.log(await mdModules[path])

            const { metadata }: any = await mdModules[path]();
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
                author,
                slug,
            };
        })
    );
    return { posts };
};