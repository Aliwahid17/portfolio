export const content = async () => {
    const mdModules = import.meta.glob("../content/*.{md,svx}");
    const items = await Promise.all(
        Object.keys(mdModules).map(async (path) => {
            const slug = path.slice(11, -3);
            const { metadata } : any = await mdModules[path]();
            
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

    const posts = items.sort((first, second) => Date.parse(second.datePublished) - Date.parse(first.datePublished))

    const parseTag = posts.map((value) => {
        return value.tags.split(',')
    })
     
    return { posts , parseTag };
};

// export const sortContent = async () => {
//     const { posts } = await content()
//     return posts.sort((first, second) => Date.parse(second.datePublished) - Date.parse(first.datePublished))
// }

