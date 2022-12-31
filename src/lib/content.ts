export const content = async () => {
    const mdModules = import.meta.glob("./content/*.{md,svx}");
    const items = await Promise.all(
        Object.keys(mdModules).map(async (path) => {
            // const slug = path.slice(11, -3);
            const slug = path.slice(10, -3);
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
                categories,
                tags,
                readingTime
            } = metadata;

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
            };
        })
    );

    const posts = items.sort((first, second) => Date.parse(second.datePublished) - Date.parse(first.datePublished))

    const parseTag = posts.map((value) => {
        return value.tags.split(',')
    })
     
    return { posts , parseTag };
};



