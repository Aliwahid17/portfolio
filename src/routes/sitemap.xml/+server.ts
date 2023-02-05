import { content } from "$lib/content";
import { tag } from "$lib/tag";

// export const prerender = true

export async function GET() {

  const pagePaths = ['', 'about', 'blogs', 'projects', 'tags']
  const pages = pagePaths.map((element) => `https://www.wahidali.dev/${element}`)

  const { posts, parseTag } = await content()
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

      ${pages.map((element) => `
      <url>
        <loc>${element}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      `).join('')}

      ${posts.map((element) => {
      const { lastUpdated, slug, datePublished } = element
      return `
        <url>
            <loc>https://www.wahidali.dev/blogs/${slug}</loc>
            <lastmod>${new Date(!lastUpdated ? datePublished : lastUpdated).toISOString()}</lastmod>
        </url>
        `
    }).join('')}

      ${tags.map((element) => `
      <url>
        <loc>https://www.wahidali.dev/tags/${element}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`).join('')}


    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=0, s-max-age=600',
      }
    }
  );
}