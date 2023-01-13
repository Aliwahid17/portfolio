import { content } from "$lib/content";
import { tag } from "$lib/tag";

export async function GET() {

    const pagePaths = ['','/about','/blogs','/projects','/tags']
    const pages = pagePaths.map((element) => `http://localhost:5173${element}`)

    const {posts,parseTag} = await content()
    const tags = tag(parseTag)

    return new Response(
        `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <!-- <url> elements go here -->

      ${pages.map((element) => `<url><loc>${element}</loc><lastmod>${JSON.stringify(new Date().toISOString())}</lastmod></url>`).join('')}

      ${posts.map((element) => {
        const {lastUpdated , slug} = element
        return `
        <url>
            <loc>http://localhost:5173/${slug}</loc>
            <lastmod>${new Date(lastUpdated).toISOString()}</lastmod>
        </url>
        `
      }).join('')}

      ${tags.map((element) => `<url><loc>http://localhost:5173/${element}</loc><lastmod>${JSON.stringify(new Date().toISOString())}</lastmod></url>`).join('')}


    </urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'max-age=0, s-max-age=600',
            }
        }
    );
}